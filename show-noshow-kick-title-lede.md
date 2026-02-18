# Show/Hide Kicker, Title, Lede (Keep Code Intact)

Use this pattern when you want text hidden now but easy to restore later.

## Rule

Wrap the element in:

`{false && <element>}`

When ready to show it again, change `false` to `true`.

## What Is What

- Kicker: usually a small `<p>` above the `<h1>`
- Title: the `<h1>...</h1>`
- Lede: the paragraph under the title

## Example Pattern

```astro
{false && <p class="...">Kicker text</p>}
{true && <h1 class="...">Page title</h1>}
{false && <p class="...">Lede text</p>}
```

## Notes

- This is cleaner than deleting/commenting markup.
- The code stays in place, so restoring is a one-word toggle.
- If a section should always show, leave it as normal markup (no wrapper).
