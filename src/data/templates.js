// src/data/templates.js

export const templates = [
  {
    slug: "cafe",
    title: "Cafe Template",
    tagline: "Minimal HTML template for cafés",
    price: 19,
    tier: "standard",                // "standard" | "premium"
    status: "coming",                // "live" | "coming"
    gumroadUrl: null,                // coming soon → null
    thumb: "/thumbs/previews/cafe/hero.png", // 必ず追加（一覧の統一性のため）
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
      "Basic HTML/CSS knowledge",
      "Image replacement (optional)"
    ]
  },

  {
    slug: "black-orietta",
    title: "Black Orietta",
    tagline: "Premium HTML Template for Quiet Luxury Brands",
    price: 69,
    tier: "premium",
    status: "live",
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
      Built for brands that communicate through silence, mood, and restrained atmosphere.
    `
  }
];
