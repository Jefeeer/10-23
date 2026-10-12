"use client";

import { useActionState } from "react";
import { sendInquiry, type InquiryState } from "@/app/actions/inquiry";
import { TrackedLink } from "./tracked-link";

const field =
  "h-12 w-full rounded-xl border-2 border-cream/20 bg-leaf-soft/60 px-4 text-cream placeholder:text-cream/45 transition-colors focus:border-mustard focus:outline-none aria-[invalid=true]:border-[#ff9b7a]";

export function EventsForm() {
  const [state, action, pending] = useActionState<InquiryState, FormData>(sendInquiry, { status: "idle" });

  if (state.status === "sent" || state.status === "messenger") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-3xl bg-cream p-6 text-espresso sm:p-8">
        <span className="grid size-12 place-items-center rounded-full bg-mustard text-xl" aria-hidden="true">
          ✓
        </span>
        {state.status === "sent" ? (
          <>
            <h3 className="text-xl font-semibold">Salamat! We got your inquiry.</h3>
            <p className="text-espresso-soft">We&apos;ll text you with packages within the day.</p>
          </>
        ) : (
          <>
            <h3 className="text-xl font-semibold">One more tap and you&apos;re set.</h3>
            <p className="text-espresso-soft">Your details are ready — send them to us on Messenger and we&apos;ll reply with packages.</p>
            <TrackedLink event="Messenger" href={state.url} className="inline-flex min-h-12 items-center rounded-full bg-terracotta px-6 font-semibold text-paper">
              Send on Messenger →
            </TrackedLink>
          </>
        )}
      </div>
    );
  }

  const errors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values : {};
  const err = (k: keyof typeof errors) =>
    errors[k]?.[0] && (
      <span id={`err-${k}`} className="text-[13px] font-medium text-[#ffb59c]">
        {errors[k]![0]}
      </span>
    );
  const a11y = (k: keyof typeof errors) => ({
    "aria-invalid": Boolean(errors[k]),
    "aria-describedby": errors[k] ? `err-${k}` : undefined,
  });

  return (
    <form action={action} noValidate className="grid grid-cols-2 gap-4" aria-label="Private event inquiry">
      <label className="col-span-2 flex flex-col gap-1.5 text-sm font-medium">
        Your name
        <input name="name" autoComplete="name" defaultValue={values.name} required className={field} {...a11y("name")} />
        {err("name")}
      </label>
      <label className="col-span-2 flex flex-col gap-1.5 text-sm font-medium sm:col-span-1">
        Event date
        <input name="date" type="date" defaultValue={values.date} required className={`${field} [color-scheme:dark]`} {...a11y("date")} />
        {err("date")}
      </label>
      <label className="col-span-2 flex flex-col gap-1.5 text-sm font-medium sm:col-span-1">
        Guests
        <input name="guests" type="number" inputMode="numeric" min={5} max={300} defaultValue={values.guests} required placeholder="e.g. 30" className={field} {...a11y("guests")} />
        {err("guests")}
      </label>
      <label className="col-span-2 flex flex-col gap-1.5 text-sm font-medium">
        Mobile number
        <input name="mobile" type="tel" autoComplete="tel" defaultValue={values.mobile} required placeholder="0917 123 4567" className={field} {...a11y("mobile")} />
        {err("mobile")}
      </label>
      <label className="col-span-2 flex flex-col gap-1.5 text-sm font-medium">
        Notes <span className="font-normal text-cream/60">(optional — occasion, budget, food preferences)</span>
        <textarea name="notes" rows={3} defaultValue={values.notes} className={`${field} h-auto py-3`} {...a11y("notes")} />
        {err("notes")}
      </label>
      <button
        type="submit"
        disabled={pending}
        className="col-span-2 min-h-13 rounded-full bg-mustard font-semibold text-espresso transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
