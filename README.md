# Renaldi Portfolio

Personal portfolio for Renaldi, a senior backend engineer working across banking,
payments, fintech, and education technology.

## Local development

```bash
npm install
npm run dev
```

## Production builds

```bash
# Existing Sites-ready build
npm run build

# GitHub Pages build for https://renaldire.github.io/portofolio/
npm run build:pages
```

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the site
after every push to `master`. In the GitHub repository, open **Settings → Pages**
and set **Source** to **GitHub Actions** once. The published site will be available
at `https://renaldire.github.io/portofolio/` after the workflow succeeds.
