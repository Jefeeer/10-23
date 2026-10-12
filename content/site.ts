// Everything the owners might want to change lives here.
// Search for "TODO" to find values that still need owner input.

export type DayHours = { open: number; close: number }; // minutes after midnight, Manila time

export const site = {
  name: "Café 10/23",
  tagline: "Rooted in love. Rooted in legacy.",
  // Canonical URL used for SEO, sitemap and JSON-LD. Change if you add a custom domain.
  url: "https://ten-twentythree.vercel.app",
  address: {
    street: "Imus Blvd., Malagasang II-C",
    city: "Imus",
    province: "Cavite",
    country: "PH",
  },
  geo: { lat: 14.3679517, lng: 120.9195866 },
  // Index 0 = Sunday … 6 = Saturday
  hours: [
    { open: 7 * 60, close: 23 * 60 },
    { open: 10 * 60, close: 23 * 60 },
    { open: 10 * 60, close: 23 * 60 },
    { open: 10 * 60, close: 23 * 60 },
    { open: 10 * 60, close: 23 * 60 },
    { open: 10 * 60, close: 23 * 60 },
    { open: 7 * 60, close: 23 * 60 },
  ] satisfies DayHours[],
  links: {
    facebook: "https://www.facebook.com/1023.cafe/",
    instagram: "https://www.instagram.com/ten.twentythree/",
    messenger: "https://m.me/1023.cafe",
    directions: "https://www.google.com/maps/dir/?api=1&destination=14.3679517%2C120.9195866",
    maps: "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%2010%2F23%2C%20Imus%20Blvd%2C%20Imus%2C%20Cavite",
    mapEmbed: "https://www.google.com/maps?q=14.3679517,120.9195866&z=17&output=embed",
    // TODO(owner): link a PDF of the current menu here (e.g. "/menu.pdf"); the in-page menu is used until then.
    menuPdf: "",
  },
  beans: "Deuces Coffee, Makati",
  seats: 300,
  weekendGuests: "1,000+",
  // TODO(owner): confirm each of these before launch.
  amenities: {
    parking: "TODO",
    wifi: "TODO",
    pets: "TODO",
  },
  // TODO(owner): confirm event capacity and packages.
  events: {
    capacity: "TODO",
    packages: "TODO",
  },
};

export const press = [
  {
    outlet: "GMA News",
    headline: "This homegrown café in Imus is a love letter to all Caviteños",
    url: "https://www.gmanetwork.com/news/lifestyle/food/893871/this-homegrown-caf-eacute-in-imus-is-a-love-letter-to-all-cavitenos/story",
  },
  {
    outlet: "Metro.Style",
    headline: "A cutesy café in Imus that's totally worth the drive",
    url: "https://www.abs-cbn.com/food/restaurants/cafe-10-23-is-worth-the-drive-to-imus-cavite/39166",
  },
  {
    outlet: "Art+",
    headline: "This hidden café in Cavite is an Instagrammable hot spot",
    url: "https://artplus.ph/features/this-hidden-caf-in-cavite-is-an-instagrammable-hot-spot",
  },
  {
    outlet: "Garage",
    headline: "Café 10/23 marks first anniversary with style",
    url: "https://garage.com.ph/2024/10/25/cafe-10-23-marks-first-anniversary-with-style-unveils-secret-fresh-collaboration/",
  },
];
