# Design QA

## Evidence

- Source visual truth: the user-provided language-tab reference and the existing `reference-option-1.png` portfolio direction.
- Source tab reference dimensions: 1380 × 680 px.
- Intended implementation viewports: 1440 px desktop and 440 px mobile, device scale factor 1.
- Implementation URL: local Vite preview on port 4173.
- Implementation screenshot: unavailable.
- State: hero code panel with TypeScript selected; Go, Kotlin, and Dart / Flutter available as interactive tabs.

## Findings

- [P0] Browser-rendered evidence is unavailable.
  - Location: hero code language switcher and responsive portfolio layout.
  - Evidence: the in-app browser reported no available browser surfaces, so the local implementation could not be opened or captured.
  - Impact: tab spacing, code overflow, responsive behavior, focus states, and visual integration cannot be compared from rendered evidence.
  - Fix: reconnect the in-app browser, capture desktop and mobile views, exercise every language tab, and resolve any visible P0/P1/P2 differences.

## Required Fidelity Surfaces

- Fonts and typography: the switcher reuses DM Mono and the portfolio's established reading scale; browser rendering was not captured.
- Spacing and layout rhythm: tabs sit directly above the existing code panel, blank rows now use the normal line height, and indentation is preserved with preformatted whitespace; browser rendering was not captured.
- Colors and visual tokens: tabs reuse the existing cobalt, ink, muted, line, and green syntax tokens; browser rendering was not captured.
- Image quality and asset fidelity: no raster artwork or custom icons are required for this component.
- Copy and content: TypeScript is the default tab and every snippet uses `// engineer. builder. problem solver.` with conventionally formatted code.

## Interaction Checks

- Mouse selection, selected state, and keyboard navigation for Arrow Left, Arrow Right, Home, and End are implemented.
- Type checking, linting, production build, and Sites worker tests pass.
- Browser interaction testing and console inspection are blocked because the in-app browser is unavailable.

## Full-view Comparison Evidence

Blocked. The references are available, but no browser-rendered implementation screenshot could be produced.

## Focused Region Comparison Evidence

Blocked. The language tabs and code panel could not be captured in the same comparison input as the source reference.

## Comparison History

- Initial implementation: replaced the single static Go sample with an accessible four-language tab switcher while preserving the existing visual system.
- Feedback pass: made TypeScript the first/default tab, standardized every opening comment, restored full-height blank rows, preserved indentation, and reformatted each snippet.
- Dart spacing pass: reduced only the Dart / Flutter code panel's top padding by 8px to move its longer snippet slightly upward without shifting the shared tabs or other languages.
- Code validation: strict TypeScript, ESLint, production build, and all four Sites worker tests passed.
- Visual comparison: blocked by the unavailable in-app browser surface.

## Implementation Checklist

- Reconnect the in-app browser.
- Capture the hero at 1440 px and 440 px.
- Select each language and test keyboard navigation.
- Check horizontal overflow and the browser console.
- Fix any visible P0/P1/P2 differences and repeat the comparison.

## Follow-up Polish

- Confirm the longest `Dart / Flutter` label remains comfortable at narrow mobile widths.

final result: blocked
