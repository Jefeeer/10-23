// Prices are from press coverage (Jan 2024). TODO(owner): confirm every price.
// Use null for "price not set yet" — it shows as "Ask us" on the site.

export type MenuItem = {
  name: string;
  price: number | null;
  priceMax?: number;
  note: string;
  tag?: "Bestseller" | "Local pride" | "New";
};

export type MenuCategory = {
  id: string;
  label: string;
  photo: string;
  photoAlt: string;
  featured: boolean; // shown as a tab on the landing page
  items: MenuItem[];
};

export const pricesAsOf = "January 2024";

export const menu: MenuCategory[] = [
  {
    id: "coffee",
    label: "Coffee",
    photo: "/photos/layered-latte.jpg",
    photoAlt: "A layered iced latte held up against the garden view",
    featured: true,
    items: [
      { name: "Sea Salt Spanish Latte", price: 195, note: "Our most-talked-about latte. Sweet, creamy, a pinch of salt.", tag: "Bestseller" },
      { name: "Tiramisu Latte", price: 185, note: "Dessert in a cup, pulled on Deuces beans." },
      { name: "White Chocolate Mocha", price: 175, priceMax: 180, note: "Smooth white choco and espresso." },
    ],
  },
  {
    id: "non-coffee",
    label: "Non-coffee",
    photo: "/photos/sodas.jpg",
    photoAlt: "Two iced sodas on a terrazzo table",
    featured: true,
    items: [
      { name: "Matcha Latte", price: 175, priceMax: 190, note: "Matcha sourced from Uji, Kyoto.", tag: "Bestseller" },
      { name: "Ube Latte", price: 185, note: "Purple, nutty, very Pinoy." },
      { name: "Butterfly Pea Lemonade", price: null, note: "Blue-to-violet, bright and tart." },
      { name: "Yuzu Soda", price: null, note: "Citrusy and fizzy, for hot Imus afternoons." },
    ],
  },
  {
    id: "food",
    label: "All-day food",
    photo: "/photos/food-spread.jpg",
    photoAlt: "A table spread of pasta, nachos and fried chicken with iced drinks",
    featured: true,
    items: [
      { name: "Family Recipe Beef Tapa", price: 255, note: "The family recipe, with garlic rice and egg.", tag: "Bestseller" },
      { name: "Imus Longganisa", price: null, note: "Hometown longganisa, done right.", tag: "Local pride" },
      { name: "Truffle Cream Pasta", price: 305, note: "Rich, creamy, generous." },
      { name: "Creamy Bistek Tagalog", price: 295, note: "A classic, made extra comforting." },
      { name: "Pork Belly Bowl", price: 265, note: "Crisp pork belly over rice." },
      { name: "Classic Fried Chicken", price: 265, note: "Crunchy outside, juicy inside." },
    ],
  },
  {
    id: "pastries",
    label: "Pastries",
    photo: "/photos/pastry-counter.jpg",
    photoAlt: "The pastry counter with a display case of baked goods",
    featured: true,
    items: [
      { name: "Ube Leche Flan Danish", price: null, note: "Two Filipino classics in one flaky pastry.", tag: "Bestseller" },
      { name: "Butter Croissant", price: null, note: "Buttery and flaky." },
      { name: "Gelato 10/23", price: null, note: "Our own gelato line.", tag: "New" },
    ],
  },
  {
    id: "blended",
    label: "Blended",
    photo: "/photos/sodas.jpg",
    photoAlt: "Iced drinks on a terrazzo table",
    featured: false,
    items: [
      { name: "Cookies & Cream", price: 210, note: "Blended, cold, crunchy bits." },
      { name: "Chocolate Fudge", price: 210, note: "For the chocolate people." },
      { name: "Strawberry", price: 215, note: "Pink, creamy, fruity." },
    ],
  },
];

export function formatPrice(item: MenuItem) {
  if (item.price === null) return "Ask us";
  return item.priceMax ? `₱${item.price}–${item.priceMax}` : `₱${item.price}`;
}
