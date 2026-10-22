# Portfolio

Bilingual (EN/PT) portfolio. React, TypeScript and Vite.

All copy lives in `src/data/content.ts`; every text has an `en` and `pt` version. Components only render that data.

## Develop

```
npm install
npm run dev
npm test
npm run build
```

## Deploy

`.github/workflows/deploy.yml` runs the tests, builds and publishes `dist` to GitHub Pages on every push to `main`. In the repo settings, set Pages source to "GitHub Actions". The site is served from `/portfolio/`, set as `base` in `vite.config.ts`; change it if the repo is renamed or a custom domain is used.
