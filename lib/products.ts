export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  compareAt?: number;
  image: string;
  description: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "obsidian-chrono",
    name: "Chronograph Automatique",
    category: "Timepieces",
    price: 18900,
    compareAt: 23900,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF1rL7ndKuoi7jOlrBGWjSky-HQ4sue-REjRUIu1nTHH2AtJW8cuypEYQ_a3kLY1KHTbMVQ8540l45L7cfpA0C4HpbroVbFCahBlHRG4no3bGBxjFk0D1PZ90tmEIpquQ8DHL1-a9laCnNpNEgC1doLn7lmn_0TxVNbOMFqHIetRp8QmBHyQp4LAuTil67wOiFM6aRUt0YfRJY2H8jHb8GZA6qD2AZ4vVqsZsYQ2Bi7zzHemsQsGoN",
    description: "A precision automatic movement, brushed steel case and hand-finished Horween leather strap. Made to become part of your story.",
    badge: "Atelier bestseller",
  },
  {
    id: "tuscan-wallet",
    name: "Tuscan Bifold Wallet",
    category: "Leather goods",
    price: 5200,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJVNSr2lXte0-U-XLvA_FWuORZWlwawB1eOU4dHxxANo1OEddEI1mP0b8W_TiVukDQhyLUZbFpXhGSAY3wpw5xHsqM_eAjx6IYAoUUWpHf-I28PUMei9KrTXDkffaxoVR7rDyWiXy366bjAHceJUvhrAQ1sDLas7R_WSmOVhGgqoPe3PI6fLeiDtOxeieUuKI7pM1CHYZtMSqKW7X0ak5H_TBkN2J18KYDQX-PfB3rRsbVgESKlqhk",
    description: "A slim, hand-stitched bifold cut from full-grain Italian leather that softens and deepens with use.",
    badge: "Full-grain leather",
  },
  {
    id: "cognac-belt",
    name: "Cognac Reversible Belt",
    category: "Leather goods",
    price: 6800,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFdoMlSv_DaTnCxuP8D2d54Uiq2_MO7CCA3s-GUIfiPwrQKJXQaq2lpeoZv6WDEnlXy-jvYV3jRD9TJU3c5rM3aJ9jzkR2CJgf8srv0NcFS-Q4a9rwwZLFHYJowjd-5BISBH28Jz-OCROgHsv4adxVCK3Wv2QeQgItXv1rGgYmjpqBa8r3Aw_GA2eKm4gbALk_zzG2bcwkVA6vnaQt89rcURunfQqHkB8JdCeGeNMvQbkNf2MEkbZU",
    description: "Two considered finishes in one belt: supple cognac and espresso full-grain leather with a brushed brass buckle.",
  },
  {
    id: "aviator-sunglasses",
    name: "Aureate Aviator Sunglasses",
    category: "Accessories",
    price: 7400,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwaD74ibk_wUCj7TBRxxm0HhPZNAYtynu-Gu8SCFWgypp9AUQy_sFAxg1VdX3KyLRZYIg2WzHXZwLYmgOKjpQnvyx5uQO9LuQ3Uz9Ux05qa7UEkprxzDaFLk1hqEInj24iqT4gFVgJmOWDUoObKPLC-HR4LQWeaTxGJEtJ1mFsZLJtXg3-SrVE6V2xTrKq7ILoduDgPHTz4IXKZQJRQ63ozFWRh1z7GWXxtU-8EeQXSysLHEqkBJLv",
    description: "Polarized forest-green lenses meet a light, brushed-gold frame for a timeless travel companion.",
  },
  {
    id: "pilot-gmt",
    name: "Vintage Pilot GMT",
    category: "Timepieces",
    price: 22400,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWgykTk57Z5nKbgQv6wXNzYteXRst9_9k4g1bg6TSMP6-rk0XGmKvw5Rn7ogTg1w0vGY5GOKtQOuc1sh6eQjygeU0l7pg7R46O8H6Fs0_bpTj3jRKvoueOTnqnqw3KXQ3P1-wJjGlZTMcXB6tGaG-9IBSgexG6a1jWbnfbQ4fDwiU8TXXXL-Xdd5hIkaIOd-fTAUgBpTKdg1A_i2WG1ourpVxWY9j5bdp4PUTM66gaTTTGr-0fhqWR",
    description: "An easy-travelling GMT with a weathered bronze bezel, vintage ecru numerals and a rugged leather strap.",
    badge: "Limited run",
  },
  {
    id: "skeleton-automatic",
    name: "Skeleton Automatic",
    category: "Timepieces",
    price: 31500,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG__X_XH7XKplKIrtp5IHpXvPGwomUtGVVeGPf0mubdUtm8TWGc5bXxrtXI0NsgRE4wFqf7XdPqjWfIEmshwAXsNk-hl1I5RfJTD0KhJUn4Wi0hU8LmJvYG5p1kFaJbc3MNR7G1mJzgggS6hn3WTU6RmffcuKD4Lt20bsg4d-0qcMXqpIygIi68jSrWPsaCkUzo6cGj-HL4iyTUIi5fR2huQnXtfyhLuexYN-A43_7Ur5G6ttM-M1U",
    description: "A mechanical movement revealed: titanium architecture, warm gold gearwork and a sapphire exhibition crystal.",
    badge: "Crafted in small batches",
  },
];

export const formatPrice = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
