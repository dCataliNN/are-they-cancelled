# Are They Cancelled?

Type a celebrity's name to see what they did and whether you can still buy their stuff. Inspired by Claire Dederer's *Monsters: A Fan's Dilemma*.

Static site: no build step. Open `index.html` or serve the folder.

- `data.js`: the case files. Add a person with `add(name, known, verdict, record)`.
- `styles.css`: theme tokens use shadcn/tweakcn names, so you can paste a tweakcn export to re-skin.
- `node set-domain.mjs https://your-domain.com`: sets the canonical/OG/sitemap URLs.

Deployed on Vercel; pushes to `main` deploy automatically.
