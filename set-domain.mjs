// Usage: node set-domain.mjs https://your-real-domain.com
// Replaces the YOUR-DOMAIN.com placeholder in canonical/OG tags, robots.txt, sitemap and legal pages.
import { readFileSync, writeFileSync } from "node:fs";
const url = process.argv[2]?.replace(/\/$/, "");
if (!url?.startsWith("https://")) { console.error("Pass a full https:// URL"); process.exit(1); }
const host = new URL(url).host;
for (const f of ["index.html", "privacy.html", "terms.html", "robots.txt", "sitemap.xml"]) {
  const s = readFileSync(f, "utf8");
  writeFileSync(f, s.replaceAll("https://YOUR-DOMAIN.com", url).replaceAll("YOUR-DOMAIN.com", host));
  console.log("updated", f);
}
