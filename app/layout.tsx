import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/content/site";
import "./globals.css";

const brico = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-brico",
  axes: ["opsz", "wdth"],
});

const description =
  "Family-run jeepney café on Imus Blvd., Imus, Cavite. Sea Salt Spanish Latte, family-recipe beef tapa, Uji matcha and 300 seats in a garden. Open daily until 11 PM.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Café 10/23 — Coffee & Comfort Food in Imus, Cavite",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: site.name,
    title: "Café 10/23 — Coffee & Comfort Food in Imus, Cavite",
    description,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#fbefe3" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-PH" className={`${brico.variable} antialiased`}>
      <body className="font-sans text-[16px] leading-relaxed">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
