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

## Quality checks

```bash
npm run typecheck
npm run lint
npm run check
```

The frontend uses strict TypeScript, focused React components, typed portfolio
content, accessible interactive controls, and a small reusable clipboard hook.

## Architecture

```text
src/
├── components/   Focused UI sections and shared presentation components
├── data/         Typed portfolio content and profile metadata
├── hooks/        Reusable browser interaction logic
├── App.tsx       Page composition
├── main.tsx      Runtime entry point and root invariant
└── styles.css    Design tokens, layout, states, and responsive rules
```

The repository intentionally avoids unnecessary state libraries and routing for
a single-page portfolio. Project expansion and navigation state stay local to
the components that own them, while content is kept independent from rendering.
CI checks TypeScript, ESLint, the production build, and the hosting worker tests.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the site
after every push to `master`. In the GitHub repository, open **Settings → Pages**
and set **Source** to **GitHub Actions** once. The published site will be available
at `https://renaldire.github.io/portofolio/` after the workflow succeeds.
