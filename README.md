# Café 10/23 — website

Single-page site for Café 10/23, Imus, Cavite. Next.js 16 (App Router), Tailwind CSS v4, deployed on Vercel.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (run before deploying)
npm run check:hours  # self-check for the open/closed badge logic
```

## Updating the site (no component code needed)

| What | Where |
| --- | --- |
| Menu items, prices, tags, category photos | `content/menu.ts` |
| Hours, address, links, amenities, event info, press | `content/site.ts` |
| Google rating, review quotes, follower counts | `content/reviews.ts` |
| Photos | `public/photos/` (keep the same filename to replace one) |
| Logo | `public/brand/logo.jpg` |
| Social share image | `app/opengraph-image.jpg` and `app/twitter-image.jpg` (1200×630) |

- **Prices:** set `price: null` to show "Ask us". Use `priceMax` for a range (₱175–190).
- **Hours:** `site.hours` is Sunday→Saturday, in minutes after midnight (`10 * 60` = 10 AM). The "Open now" badge, the hours table and Google's structured data all read from it.
- **Reviews:** nothing is shown until you fill in `googleRating` and `reviews`. Please use real ones only.
- **Amenities:** parking, Wi-Fi and pets stay hidden while they're `"TODO"`.

## Event inquiries

The form validates the inquiry on the server. To get it **by email**, add these environment variables in Vercel:

- `RESEND_API_KEY` — from resend.com
- `INQUIRY_TO_EMAIL` — where inquiries go
- `INQUIRY_FROM_EMAIL` — optional, a sender on your verified Resend domain

Without them, guests get a one-tap "Send on Messenger" button with their details already filled in, so no inquiry is lost.

## Analytics

Vercel Web Analytics tracks clicks on Directions, Menu, Messenger, Instagram and Facebook as custom events. Enable Analytics in the Vercel project dashboard.

## Owner TODOs

Search the project for `TODO(owner)`:

1. `content/menu.ts` — confirm every price (current prices are from Jan 2024 press coverage), and add prices for Butterfly Pea Lemonade, Yuzu Soda, Imus Longganisa, Ube Leche Flan Danish, Butter Croissant and Gelato 10/23.
2. `content/reviews.ts` — the Google rating and review count, two real Google reviews, and refreshed follower counts.
3. `content/site.ts` — parking, Wi-Fi, pet policy, event capacity and packages, a menu PDF link, and a custom domain if you get one.
4. `components/gallery.tsx` — swap in your own favourite Instagram shots.
5. **Photos:** the current photos come from press coverage (Metro.Style / ABS-CBN, Art+, Garage). Replace them with your own photos, or get permission from those outlets. There's no photo of the jeepney or lola's chair yet. Please add some.
6. **Logo:** `public/brand/logo.jpg` is the Facebook profile image. An SVG version would be sharper.
