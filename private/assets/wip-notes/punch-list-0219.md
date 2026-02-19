# Punch List 02/19

## Open Fixes
- [ ] Quote workflow is still a stub: connect `/api/quote` to real email/provider + persistence (`functions/api/quote.ts`).
- [ ] Support multi-select `quoteType` values server-side with `formData.getAll()` and structured handling (`functions/api/quote.ts`).
- [ ] Customer login page is still a UI stub; add real auth or hide from nav until ready (`src/pages/customer-login.astro`).
- [ ] Check OG image dimensions/crop quality for `cusoon-logo-square-mobile-old.png`; replace with 1200x630 if social previews crop poorly.
- [ ] Consider replacing homepage quote form with a mailing-list signup form.

## Deferred Refactor Candidates
- [ ] Centralize editable copy into `src/data/copy/*` to enforce copy/style separation.
- [ ] Keep home and submenu quote UX fully unified via shared component + shared message constants.
- [ ] Productionize quote endpoint with validation, anti-spam, rate limiting, and provider wiring.
- [ ] Consolidate legacy assets and enforce one canonical asset directory strategy.
- [ ] Continue heading semantics cleanup and audit one clear `h1` per page.

## Notes
- Route rename complete: `/contact` -> `/get-quotes`.
- Reminder: everything under `/public/**` is publicly served.
