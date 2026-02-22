import fs from "fs";
import path from "path";
import matter from "gray-matter";

const outputDir = "./src/data";

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// --- Casinos (from ./casinos/*.md) ---
const casinosDir = "./casinos";
const casinos = [];

if (fs.existsSync(casinosDir)) {
  const files = fs.readdirSync(casinosDir).filter((file) => file.endsWith(".md"));
  files.forEach((file) => {
    const filePath = path.join(casinosDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data, content: markdownContent } = matter(content);
    casinos.push({
      title: data.title,
      logoObject: data.logoObject,
      rating: data.rating,
      bonusAmount: data.bonusAmount,
      freeSpins: data.freeSpins,
      excerpt: data.excerpt,
      positive1: data.positive1,
      positive2: data.positive2,
      turnoverBonus: data.turnoverBonus,
      turnoverFreeSpins: data.turnoverFreeSpins,
      perks: data.perks,
      badges: data.badges,
      newCasino: data.newCasino,
      faq: data.faq,
      affiliateLink: data.affiliateLink,
      reviewLink: data.reviewLink,
      metaDescription: data.metaDescription,
      content: markdownContent,
    });
  });
}

fs.writeFileSync(
  path.join(outputDir, "casinos.json"),
  JSON.stringify(casinos, null, 2)
);
console.log(`Casinos: converted ${casinos.length} files to ${outputDir}/casinos.json`);

// --- Categories (from ./categories/<slug>/<slug>.md) ---
const categoriesDir = "./categories";
const categories = [];

if (fs.existsSync(categoriesDir)) {
  const subdirs = fs
    .readdirSync(categoriesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory());
  subdirs.forEach((dir) => {
    const slug = dir.name;
    const mdPath = path.join(categoriesDir, slug, `${slug}.md`);
    if (!fs.existsSync(mdPath)) return;
    const fileContent = fs.readFileSync(mdPath, "utf-8");
    const { data, content: markdownContent } = matter(fileContent);
    categories.push({
      slug,
      title: data.title || "No Title",
      faq: data.faq ?? undefined,
      metaDescription: data.metaDescription || "No Description",
      content: markdownContent,
    });
  });
}

fs.writeFileSync(
  path.join(outputDir, "categories.json"),
  JSON.stringify(categories, null, 2)
);
console.log(`Categories: converted ${categories.length} to ${outputDir}/categories.json`);

// --- Hotels (from ./hotels/*.md, same shape as casinos) ---
const hotelsDir = "./hotels";
const hotels = [];

if (fs.existsSync(hotelsDir)) {
  const files = fs.readdirSync(hotelsDir).filter((file) => file.endsWith(".md"));
  files.forEach((file) => {
    const filePath = path.join(hotelsDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data, content: markdownContent } = matter(content);
    hotels.push({
      title: data.title,
      logoObject: data.logoObject,
      rating: data.rating,
      bonusAmount: data.bonusAmount,
      freeSpins: data.freeSpins,
      excerpt: data.excerpt,
      positive1: data.positive1,
      positive2: data.positive2,
      turnoverBonus: data.turnoverBonus,
      turnoverFreeSpins: data.turnoverFreeSpins,
      perks: data.perks,
      badges: data.badges,
      newCasino: data.newCasino,
      faq: data.faq,
      affiliateLink: data.affiliateLink,
      reviewLink: data.reviewLink,
      metaDescription: data.metaDescription,
      content: markdownContent,
    });
  });
}

if (fs.existsSync(hotelsDir)) {
  fs.writeFileSync(
    path.join(outputDir, "hotels.json"),
    JSON.stringify(hotels, null, 2)
  );
  console.log(`Hotels: converted ${hotels.length} files to ${outputDir}/hotels.json`);
}
