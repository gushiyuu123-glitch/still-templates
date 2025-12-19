/**
 * Quiet Templates Auto Generator
 * public/previews/*/
 
import fs from "fs";
import path from "path";

const PREVIEWS_DIR = "./public/previews";
const OUTPUT_JSON = "./src/data/templates.json";

function loadTemplateInfo(templateDir) {
  const infoPath = path.join(templateDir, "info.json");

  if (!fs.existsSync(infoPath)) {
    console.warn(`⚠ info.json not found in: ${templateDir}`);
    return null;
  }

  const json = JSON.parse(fs.readFileSync(infoPath, "utf8"));
  return json;
}

function generateTemplatesJSON() {
  const folders = fs.readdirSync(PREVIEWS_DIR);

  const templates = folders
    .map((folder) => {
      const folderPath = path.join(PREVIEWS_DIR, folder);
      if (!fs.statSync(folderPath).isDirectory()) return null;

      const info = loadTemplateInfo(folderPath);
      if (!info) return null;

      return {
        slug: folder,
        title: info.title,
        tagline: info.tagline,
        price: info.price,
        tier: info.tier,
        status: info.status,
        gumroadUrl: info.gumroadUrl,
        categories: info.categories || [],
        tags: info.tags || [],
        highlights: info.highlights || [],
        includedPages: info.includedPages || [],
        requirements: info.requirements || [],
        thumb: `/previews/${folder}/hero.png`
      };
    })
    .filter(Boolean);

  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(templates, null, 2), "utf8");

  console.log("✅ templates.json が自動生成されました！");
}

generateTemplatesJSON();
