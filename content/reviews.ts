// TODO(owner): paste the current Google rating, review count and two real Google reviews.
// Nothing here is shown on the site until it's filled in — no made-up reviews.

export type Review = { quote: string; author: string; source: "Google" | "Facebook" };

export const googleRating: { rating: number; count: number } | null = null;

export const reviews: Review[] = [];

// Public follower counts, read from the café's pages on 12 Oct 2026. TODO(owner): refresh occasionally.
export const socialProof = [
  { value: "34K", label: "Facebook followers" },
  { value: "16K", label: "check-ins on Facebook" },
  { value: "11K", label: "on Instagram" },
];
