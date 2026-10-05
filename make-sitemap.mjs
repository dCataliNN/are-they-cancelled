// Usage: node make-sitemap.mjs  (run after editing data.js; uses the canonical URL in index.html)
import { readFileSync, writeFileSync } from "node:fs";
globalThis.window = {};
new Function(readFileSync("data.js", "utf8"))();
const base = readFileSync("index.html", "utf8").match(/rel="canonical" href="([^"]+?)\/?"/)[1];
const slug = s => s.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim().replace(/ /g, "-");
const today = new Date().toISOString().slice(0, 10);
const urls = [["/", "1.0"], ["/privacy.html", "0.3"], ["/terms.html", "0.3"], ...window.CASE_FILES.map(p => ["/" + slug(p.name), "0.7"])];
writeFileSync("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([u, pr]) => `  <url><loc>${base}${u}</loc><lastmod>${today}</lastmod><priority>${pr}</priority></url>`).join("\n")}
</urlset>
`);
console.log(`sitemap.xml: ${urls.length} URLs`);
