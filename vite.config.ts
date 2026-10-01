import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';
import {writeFileSync, existsSync} from 'node:fs';
import {resolve} from 'node:path';

/**
 * Canonical origin of the deployed site, always with a trailing slash.
 *
 * This single value drives canonical tags, Open Graph URLs, JSON-LD @ids,
 * the sitemap and robots.txt. Without it every one of those would drift.
 *
 * The path segment MUST match the repository name, because GitHub Pages
 * serves a project site from /<repo>/. The repo is `portfolio`, so the
 * deployed origin is .../portfolio/ — not .../Portfolio-Data-Analyst/.
 * The deploy workflow also passes SITE_URL explicitly, so a repo rename
 * only needs DEPLOY_BASE + the SITE_URL variable updated.
 *
 * Override it with the SITE_URL env var once you own a custom domain, e.g.
 * SITE_URL=https://lourduvasanthapolishetti.com/ npm run build
 */
const DEFAULT_SITE_URL = 'https://lourduvasanthapolishetti.github.io/portfolio/';

const siteUrl = (): string => {
  const raw = process.env.SITE_URL?.trim() || DEFAULT_SITE_URL;
  // Collapse any duplicate slashes (http://x// -> http://x/) and force a trailing slash.
  return raw.replace(/\/+$/, '') + '/';
};

/**
 * Replaces the %SITE_URL% token in index.html with the resolved origin.
 * Runs in both dev and build so the served HTML is never left with the
 * raw token in a canonical/og:url.
 */
function seoSiteUrl(): Plugin {
  return {
    name: 'seo-site-url',
    transformIndexHtml(html) {
      return html.replaceAll('%SITE_URL%', siteUrl());
    },
  };
}

/**
 * Emits robots.txt and sitemap.xml into the build output.
 *
 * These are deliberately generated rather than committed as static files in
 * /public: both need the absolute origin, which changes when a custom domain
 * is added, and a sitemap with a stale host is worse than no sitemap at all.
 */
function seoFiles(): Plugin {
  return {
    name: 'seo-files',
    apply: 'build',
    closeBundle() {
      const dist = resolve(__dirname, 'dist');
      if (!existsSync(dist)) return;

      const origin = siteUrl();
      const lastmod = new Date().toISOString().slice(0, 10);

      writeFileSync(
        resolve(dist, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${origin}index.html</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
        'utf8'
      );

      writeFileSync(
        resolve(dist, 'robots.txt'),
        `User-agent: *
Allow: /

Sitemap: ${origin}sitemap.xml
`,
        'utf8'
      );

      this.info?.(`SEO: wrote sitemap.xml and robots.txt for ${origin}`);
    },
  };
}

export default defineConfig(({ command }) => {
  return {
    /**
     * GitHub Pages project sites are served from a sub-path
     * (e.g. https://<user>.github.io/<repo>/), so every emitted asset URL
     * needs that prefix. The dev server keeps '/' so local work is unaffected.
     *
     * This must match the repository name (`portfolio`) or every image,
     * font and JS chunk 404s in production. The deploy workflow overrides it
     * with the same value derived from the repo name at build time.
     */
    base:
      command === 'build'
        ? process.env.DEPLOY_BASE || '/portfolio/'
        : '/',
    plugins: [react(), tailwindcss(), seoSiteUrl(), seoFiles()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      // Split the three.js hero out of the entry chunk. It is ~600 kB of the
      // bundle and renders purely decorative, so keeping it out of the critical
      // path materially improves LCP — which Google uses as a ranking signal.
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/three')) return 'three';
            if (id.includes('node_modules/motion')) return 'motion';
            if (id.includes('node_modules')) return 'vendor';
            return undefined;
          },
        },
      },
    },
  };
});
