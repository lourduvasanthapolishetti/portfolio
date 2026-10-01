# SEO & Ranking Guide

Everything in this repo is on-page and technical SEO. On-page work is necessary but
**not sufficient** to rank #1 for a personal name — see "What you must do off-site"
below, which is where the remaining points come from.

## What was fixed

| Issue | Fix | File |
|---|---|---|
| `canonical` pointed at **LinkedIn**, telling Google to credit LinkedIn instead of this site | Canonical now points at this site | `index.html` |
| Empty `<div id="root">` — zero crawlable text without JS | Full static fallback: `<h1>`, section headings, skills, projects, experience, education | `index.html` |
| No structured data | JSON-LD `Person` + `WebSite` + `WebPage` + `ProfilePage` + `ItemList` + `FAQPage` | `index.html` |
| No `robots.txt` / `sitemap.xml` | Generated at build with the correct absolute origin | `vite.config.ts` |
| No OG/Twitter images, incomplete OG tags | 1200x630 `og-image.png` + full OG/Twitter/geo/profile tags | `index.html`, `public/og-image.png` |
| No favicon or web manifest | `favicon.svg` + `site.webmanifest` | `public/` |
| 924 kB single JS bundle blocked first paint | three.js lazy-loaded; entry chunk now 148 kB (32 kB gzip) | `HeroSection.tsx`, `vite.config.ts` |
| Name appeared in one form only | `alternateName` covers *Vasantha Polishetti*, *Polishetti Lourdu Vasantha*, *Lourdu Vasantha*, *L. V. Polishetti* | `index.html`, `src/data/faqData.ts` |

## Single source of truth: `SITE_URL`

Canonical, Open Graph, JSON-LD `@id`s, `sitemap.xml` and `robots.txt` all derive from
one variable, set in `vite.config.ts`:

```ts
const DEFAULT_SITE_URL = 'https://lourduvasanthapolishetti.github.io/portfolio/';
```

The path segment **must match the repository name** — GitHub Pages serves a project
site from `/<repo>/`. The repo is `portfolio`, so the deployed URL is
`https://lourduvasanthapolishetti.github.io/portfolio/`. The same value drives
`base` in `vite.config.ts`, so the two can never disagree; if `base` is wrong,
every image, font and JS chunk 404s in production.

Override it when you own a domain — this is the single highest-value change you can make:

```bash
SITE_URL=https://yourdomain.com/ npm run build
```

In GitHub Actions, set a repository **Settings → Environments/variables → `SITE_URL`**
variable and the workflow picks it up automatically.

> **Buy a custom domain.** `lourduvasanthapolishetti.github.io/...` is a third-party
> subdomain. A personal domain (`lourduvasanthapolishetti.com`, `.in`, `.dev`) carries
> more trust, is shorter, and is fully under your control. Once bought, add a
> `public/CNAME` file containing just the domain, point the domain's DNS at GitHub
> Pages, and set the `SITE_URL` variable.

## Content that must stay in sync

The site is a client-rendered SPA, so there are two copies of some content. Update
**both** together or they become inconsistent structured data:

- FAQ — `src/data/faqData.ts` (rendered) **and** the `FAQPage` JSON-LD in `index.html`
- Static fallback — the `.seo-static` block in `index.html`

## What you must do off-site (this decides #1)

On-page SEO cannot outrank a stronger signal. For a personal-name query Google weighs
authority and corroboration far more heavily than keywords. In priority order:

1. **Get indexed.** Register the deployed URL in
   [Google Search Console](https://search.google.com/search-console) → *Sitemaps* → submit
   `sitemap.xml`. Then paste the verification code into the commented
   `google-site-verification` meta in `index.html`. Do the same in Bing Webmaster Tools.
2. **Make every profile point to this site.** Use the identical name string
   *"Lourdu Vasantha Polishetti"* everywhere — LinkedIn headline and About, GitHub bio,
   Tableau Public, NASSCOM/ExcelR profiles, and any directory or freelancing profile.
   Consistent naming across profiles is what lets Google merge them into one entity.
3. **Make LinkedIn link here.** Add this portfolio URL to your LinkedIn *Featured* and
   *Contact/Website*, and to GitHub's profile website field. These are the strongest
   inbound links you control, and the `sameAs` in the JSON-LD only pays off if the
   relationship is bidirectional.
4. **Get backlinks.** Publish the dashboard projects as write-ups on a site you control
   (Medium, Hashnode, Dev.to, a GitHub Pages blog). Each one links back here and is
   indexable content mentioning your name.
5. **Be patient.** A brand-new domain typically takes 3–8 weeks to appear and longer to
   climb. Check Search Console's *Performance → Queries* weekly — that report is the
   only honest measure of whether this work is paying off.

## Verify your work

Paste your live URL into:

- [Rich Results Test](https://search.google.com/test/rich-results) — must show the Person
  and FAQPage entities as valid.
- [PageSpeed Insights](https://pagespeed.web.dev/) — aim for 90+ on mobile.

## Regenerating the OG image

```powershell
powershell.exe -ExecutionPolicy Bypass -File .\scripts\generate-og-image.ps1
```

Only needed if the name, role, or stack line changes.