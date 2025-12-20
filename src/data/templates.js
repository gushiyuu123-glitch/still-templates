// =========================================================
// Templates Data (MASTER)
// Silent UI — Product Data Model v1.2
// =========================================================

export const templates = [
  {
    // ---------------------------
    // Black Orietta（Premium）
    // ---------------------------
    slug: "black-orietta",
    title: "Black Orietta",
    tagline: "Premium HTML Template for Quiet Luxury Brands",
    price: 69,
    tier: "premium",                 // premium | standard
    status: "live",                  // live | coming
    gumroadUrl: "https://gushikendesign.gumroad.com/l/istan",

    thumb: "/previews/black-orietta/hero.png",

    highlights: [
      "Reference-grade brand experience",
      "Typography-first, minimal layout",
      "Luxury narrative & copy structure",
      "SEO-ready HTML"
    ],

    includedPages: [
      "Home",
      "Concept",
      "Collection",
      "About",
      "Contact"
    ],

    requirements: [
      "Basic HTML/CSS knowledge"
    ],

    premiumNote: `
      Designed as a reference-grade system.
      Built for brands that communicate through silence,
      restrained atmosphere, and minimal tension.
    `,
  },

  {
    // ---------------------------
    // Cafe Template（Standard）
    // ---------------------------
    slug: "cafe",
    title: "Cafe Template",
    tagline: "Minimal HTML template for cafés",
    price: 19,
    tier: "standard",
    status: "coming",
    gumroadUrl: null,

    thumb: "/previews/cafe/hero.png",

    highlights: [
      "Responsive layout",
      "SEO & OGP ready",
      "Clean HTML / CSS"
    ],

    includedPages: [
      "Home",
      "Menu",
      "About",
      "Gallery",
      "Location / Contact"
    ],

    requirements: [
      "Basic HTML/CSS knowledge"
    ],
  },
];
