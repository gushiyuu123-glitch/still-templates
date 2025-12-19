// generate-templates.js
// 自動テンプレ JSON 生成スクリプト

import fs from "fs";
import path from "path";

// ================
// 設定
// ================
const PREVIEW_DIR = "./public/previews";       // スキャン対象
const OUTPUT_FILE = "./src/data/templates.json"; // 出力先 JSON

// ================
// デフォルトテンプレ値
// ================
function createDefaultTemplate(slug, title) {
  return {
    slug,
    title: title || slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
    tagline: "Minimal HTML Template",
    price: 19,
    tier: "standard",
    status: "coming",
    gumroadUrl: null,
    thumb: `/previews/${slug}/hero.png`,
    highlights: [
      "Responsive layout",
      "SEO & OGP ready",
      "Clean HTML / CSS"
    ],
    includedPages: ["Home"],
    requirements: ["Basic HTML/CSS knowledge"]
  };
}

// ================
// スキャン開始
// ================
function scanTemplates() {
  const folders = fs.readdirSync(PREVIEW_DIR)
    .filter((name) => fs.lstatSync(path.join(PREVIEW_DIR, name)).isDirectory());

  const templates = folders.map((folderName) => {
    const slug = folderName;
    const previewFolder = path.join(PREVIEW_DIR, folderName);

    // hero.png が存在するかチェック（なかったら警告）
    const heroPath = path.join(previewFolder, "hero.png");
    const hasHero = fs.existsSync(heroPath);

    const template = createDefaultTemplate(slug);

    if (!hasHero) {
      console.log(`⚠ Warning: ${slug} に hero.png がありません`);
    }

    return template;
  });

  // JSON 保存
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(templates, null, 2), "utf-8");

  console.log("🎉 templates.json を自動生成しました");
  console.log(`📁 保存先: ${OUTPUT_FILE}`);
  console.log(`📦 テンプレ数: ${templates.length}`);
}

scanTemplates();
