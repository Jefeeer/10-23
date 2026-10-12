"use server";

import { z } from "zod";
import { site } from "@/content/site";

const Inquiry = z.object({
  name: z.string().trim().min(2, "Please tell us your name.").max(80),
  date: z.iso.date("Pick a date for your event."),
  guests: z.coerce.number().int("Whole numbers only.").min(5, "Events start at 5 guests.").max(300, "We seat about 300 — message us for bigger groups."),
  mobile: z
    .string()
    .trim()
    .regex(/^(\+?63|0)9\d{2}[\s-]?\d{3}[\s-]?\d{4}$/, "Use a PH mobile number, e.g. 0917 123 4567."),
  notes: z.string().trim().max(800).optional(),
});

export type InquiryState =
  | { status: "idle" }
  | { status: "error"; errors: Partial<Record<keyof z.infer<typeof Inquiry>, string[]>>; values: Record<string, string> }
  | { status: "sent" }
  | { status: "messenger"; url: string };

export async function sendInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  const raw = Object.fromEntries(formData) as Record<string, string>;
  const parsed = Inquiry.safeParse(raw);
  if (!parsed.success) {
    return { status: "error", errors: z.flattenError(parsed.error).fieldErrors, values: raw };
  }
  if (new Date(parsed.data.date) < new Date(new Date().toDateString())) {
    return { status: "error", errors: { date: ["That date has passed — pick an upcoming one."] }, values: raw };
  }

  const { name, date, guests, mobile, notes } = parsed.data;
  const text = [
    `Event inquiry from ${name}`,
    `Date: ${date}`,
    `Guests: ${guests}`,
    `Mobile: ${mobile}`,
    notes ? `Notes: ${notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const key = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  if (key && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.INQUIRY_FROM_EMAIL ?? "Café 10/23 website <onboarding@resend.dev>",
        to,
        subject: `Event inquiry · ${date} · ${guests} guests`,
        text,
      }),
    });
    if (res.ok) return { status: "sent" };
    console.error("Resend failed", res.status, await res.text());
  }

  // No email backend (or it failed): hand the guest a prefilled Messenger link instead of losing the inquiry.
  return { status: "messenger", url: `${site.links.messenger}?text=${encodeURIComponent(text)}` };
}
