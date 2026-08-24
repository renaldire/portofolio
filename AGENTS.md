# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Current Portfolio Direction

- Selected visual source: `reference-option-1.png` (clean editorial portfolio, white canvas, cobalt accent, sans + monospace typography).
- Use real career content from `Renaldi - Resume.pdf`.
- Current role: Senior Backend Engineer at DKatalis, developing and maintaining the Bank Jago Business user application.
- Preserve claims from the resume; do not invent new performance metrics.
- Refer to the Tunaiku role as `Backend Developer`, without junior-level wording.
- Keep supporting text comfortably readable; avoid 10–11px body copy.
- Keep all selected-work details collapsed until the visitor chooses one.
- GitHub profile: `https://github.com/renaldire`.
- Prefer a generous reading scale: supporting copy should generally sit at 14–16px.
- Keep the portfolio voice precise and grounded. Attribute metrics to specific work, avoid implying ownership of entire platforms, and prefer concrete contribution language over broad claims.
- Include React, Kotlin, Spring Boot, and Flutter in the technology list.
