# Copy vs Style Guidelines (Submenus + Home Mirrors)

This guide tells you exactly where to change **copy only** vs **style only** without breaking separation.

## Scope and non-goals
- Scope: top-nav submenu pages (`/services`, `/gallery`, `/testimonials`, `/contact`, `/customer-login`, `/blog`) and their long-scroll home mirrors in `src/pages/index.astro`.
- Non-goal: **do not edit the hero banner** (`src/pages/index.astro:12`).

## Quick answer: do all submenus use the same outline structure?
- No. They share a similar “kicker + title + supporting copy” pattern, but each page has different section layouts and data sources.
- Some content is shared via data files (updates appear in both places), and some is duplicated inline (must be changed in two files).

## Live vs dedicated (clarified)
- **Dedicated section**: a standalone submenu page (example: `src/pages/services.astro`).
- **Home mirror section**: similar content inside long-scroll homepage `src/pages/index.astro`.
- They do **not** all auto-update each other today.

## Sync matrix (what auto-updates vs duplicates)
- `Services cards`: shared data source, auto-sync via `src/data/services.ts:1`.
- `Testimonials cards`: shared data source, auto-sync via `src/data/testimonials.ts:1`.
- `Gallery images`: shared data source, auto-sync via `src/data/site.ts:8`.
- `Blog post cards`: shared data source, auto-sync via `src/data/blog.ts:17`.
- `Services/Gallery/Testimonials/Contact section headings and intros`: duplicated inline between dedicated page and home mirror.
- `Contact form labels/placeholders`: duplicated inline between dedicated page and home mirror.

## Stable section IDs (glossary)
Use these IDs in prompts so requests are unambiguous.

| Section ID | What it means | Primary location |
|---|---|---|
| `ServicesPage.Kicker` | Top small “Services” label | `src/pages/services.astro:13` |
| `ServicesPage.Title` | Main Services H1 | `src/pages/services.astro:14` |
| `ServicesPage.Lede` | Paragraph under title | `src/pages/services.astro:15` |
| `ServicesCards.Data` | 3 card title/description/highlights copy | `src/data/services.ts:1` |
| `ServicesCards.Style` | Card class styling | `src/pages/services.astro:22` |
| `Home.Services.Kicker` | Home services kicker | `src/pages/index.astro:59` |
| `Home.Services.Title` | Home services section title | `src/pages/index.astro:60` |
| `Home.Services.Subcopy` | Home services right-side subcopy | `src/pages/index.astro:62` |
| `GalleryPage.Kicker` | Gallery kicker | `src/pages/gallery.astro:13` |
| `GalleryPage.Title` | Gallery H1 | `src/pages/gallery.astro:14` |
| `GalleryPage.Lede` | Gallery paragraph below image grid | `src/pages/gallery.astro:28` |
| `Home.Gallery.Kicker` | Home gallery kicker | `src/pages/index.astro:164` |
| `Home.Gallery.Title` | Home gallery title | `src/pages/index.astro:165` |
| `Home.Gallery.CTA` | Home gallery CTA text | `src/pages/index.astro:168` |
| `TestimonialsPage.Kicker` | Testimonials kicker | `src/pages/testimonials.astro:13` |
| `TestimonialsPage.Title` | Testimonials H1 | `src/pages/testimonials.astro:14` |
| `TestimonialsCards.Data` | Testimonial quote/name/location copy | `src/data/testimonials.ts:1` |
| `TestimonialsCards.Style` | Testimonial card styling | `src/pages/testimonials.astro:19` |
| `Home.Testimonials.Kicker` | Home testimonials kicker | `src/pages/index.astro:141` |
| `Home.Testimonials.Title` | Home testimonials title | `src/pages/index.astro:142` |
| `ContactPage.Kicker` | Contact kicker | `src/pages/contact.astro:13` |
| `ContactPage.Title` | Contact H1 | `src/pages/contact.astro:14` |
| `ContactPage.Lede` | Contact intro paragraph | `src/pages/contact.astro:15` |
| `ContactPage.FormCopy` | Contact form labels/placeholders/button text | `src/pages/contact.astro:33` |
| `Home.Contact.Kicker` | Home contact kicker | `src/pages/index.astro:216` |
| `Home.Contact.Title` | Home contact section title | `src/pages/index.astro:217` |
| `Home.Contact.Lede` | Home contact intro paragraph | `src/pages/index.astro:218` |
| `Home.Contact.FormCopy` | Home contact form labels/placeholders/button text | `src/pages/index.astro:236` |
| `CustomerLogin.Kicker` | Customer login kicker | `src/pages/customer-login.astro:12` |
| `CustomerLogin.Title` | Customer login H1 | `src/pages/customer-login.astro:13` |
| `CustomerLogin.Lede` | Customer login intro paragraph | `src/pages/customer-login.astro:14` |
| `CustomerLogin.FormCopy` | Login labels/placeholder/button text | `src/pages/customer-login.astro:20` |
| `BlogPage.Kicker` | Blog landing kicker | `src/pages/blog/index.astro:16` |
| `BlogPage.Title` | Blog landing H1 | `src/pages/blog/index.astro:17` |
| `BlogCards.Data` | Blog post card titles/excerpts | `src/data/blog.ts:17` |
| `Home.Blog.Kicker` | Home blog/resource kicker | `src/pages/index.astro:188` |
| `Home.Blog.Title` | Home blog/resource title | `src/pages/index.astro:189` |
| `Home.Blog.Lede` | Home blog/resource paragraph | `src/pages/index.astro:190` |
| `Home.Blog.CTA` | Home blog CTA text | `src/pages/index.astro:194` |
| `Nav.Main.Labels` | Header nav labels | `src/layouts/Base.astro:55` |
| `Nav.Mobile.Labels` | Mobile menu labels | `src/layouts/Base.astro:77` |

## Per-submenu edit map (copy-only vs style-only)

### Services submenu
- Copy only:
  - Top heading “Services”: `src/pages/services.astro:13`
  - Main title “Tailored pool care…”: `src/pages/services.astro:14`
  - Paragraph “Weekly cleanings…”: `src/pages/services.astro:15`
  - 3 cards text (“Weekly Pool Cleaning”, etc.): `src/data/services.ts:3`
- Style only:
  - Heading block layout/alignment: `src/pages/services.astro:12`
  - Kicker/title/paragraph classes: `src/pages/services.astro:13`, `src/pages/services.astro:14`, `src/pages/services.astro:15`
  - Cards grid and card class styles: `src/pages/services.astro:20`, `src/pages/services.astro:22`
- Home mirror equivalents:
  - Copy: `src/pages/index.astro:59`, `src/pages/index.astro:60`, `src/pages/index.astro:62`
  - Style: `src/pages/index.astro:57`, `src/pages/index.astro:59`, `src/pages/index.astro:60`, `src/pages/index.astro:62`
  - Cards are shared from `src/data/services.ts:1`

### Gallery submenu
- Copy only:
  - Dedicated page header copy: `src/pages/gallery.astro:13`, `src/pages/gallery.astro:14`, `src/pages/gallery.astro:28`
  - Home mirror copy: `src/pages/index.astro:164`, `src/pages/index.astro:165`, `src/pages/index.astro:168`
- Style only:
  - Dedicated page header/grid style: `src/pages/gallery.astro:12`, `src/pages/gallery.astro:16`, `src/pages/gallery.astro:18`
  - Home mirror style: `src/pages/index.astro:162`, `src/pages/index.astro:167`, `src/pages/index.astro:171`, `src/pages/index.astro:173`
- Shared data:
  - Image list: `src/data/site.ts:8`

### Testimonials submenu
- Copy only:
  - Dedicated page header copy: `src/pages/testimonials.astro:13`, `src/pages/testimonials.astro:14`
  - Testimonials card text: `src/data/testimonials.ts:3`
  - Home mirror header copy: `src/pages/index.astro:141`, `src/pages/index.astro:142`
- Style only:
  - Dedicated page heading/card styles: `src/pages/testimonials.astro:12`, `src/pages/testimonials.astro:19`
  - Home mirror heading/card styles: `src/pages/index.astro:142`, `src/pages/index.astro:146`

### Contact submenu
- Copy only:
  - Dedicated page intro copy: `src/pages/contact.astro:13`, `src/pages/contact.astro:14`, `src/pages/contact.astro:15`
  - Dedicated form copy: `src/pages/contact.astro:33`, `src/pages/contact.astro:34`, `src/pages/contact.astro:43`, `src/pages/contact.astro:53`, `src/pages/contact.astro:62`, `src/pages/contact.astro:74`
  - Home mirror intro copy: `src/pages/index.astro:216`, `src/pages/index.astro:217`, `src/pages/index.astro:218`
  - Home mirror form copy: `src/pages/index.astro:236`, `src/pages/index.astro:237`, `src/pages/index.astro:246`, `src/pages/index.astro:256`, `src/pages/index.astro:265`, `src/pages/index.astro:277`
- Style only:
  - Dedicated page layout/classes: `src/pages/contact.astro:11`, `src/pages/contact.astro:12`, `src/pages/contact.astro:31`
  - Home mirror layout/classes: `src/pages/index.astro:214`, `src/pages/index.astro:234`

### Customer Login submenu
- Copy only:
  - Header copy: `src/pages/customer-login.astro:12`, `src/pages/customer-login.astro:13`, `src/pages/customer-login.astro:14`
  - Form/UI copy: `src/pages/customer-login.astro:20`, `src/pages/customer-login.astro:29`, `src/pages/customer-login.astro:43`, `src/pages/customer-login.astro:52`, `src/pages/customer-login.astro:58`, `src/pages/customer-login.astro:62`
- Style only:
  - Header block styles: `src/pages/customer-login.astro:11`, `src/pages/customer-login.astro:13`
  - Form container/button styles: `src/pages/customer-login.astro:18`, `src/pages/customer-login.astro:50`, `src/pages/customer-login.astro:56`

### Blog submenu
- Copy only:
  - Blog page header copy: `src/pages/blog/index.astro:16`, `src/pages/blog/index.astro:17`
  - Blog post cards copy source: `src/data/blog.ts:17`
  - Home mirror copy: `src/pages/index.astro:188`, `src/pages/index.astro:189`, `src/pages/index.astro:190`, `src/pages/index.astro:194`
- Style only:
  - Blog page header/card classes: `src/pages/blog/index.astro:15`, `src/pages/blog/index.astro:17`, `src/pages/blog/index.astro:24`
  - Home mirror classes: `src/pages/index.astro:186`, `src/pages/index.astro:193`, `src/pages/index.astro:199`

## Exact prompt language templates (copy-safe and style-safe)

### Copy-only template
Use this when text should change and classes/layout must not change.

```md
Copy-only change request:
- Target section IDs: <SECTION_ID_1>, <SECTION_ID_2>
- Files to edit: <path:line>, <path:line>
- Change requested: <exact new text>
- Constraints:
  1) Do not modify any `class` attributes.
  2) Do not change layout structure, wrappers, or spacing utilities.
  3) Do not edit hero banner content.
  4) Return only copy edits.
```

Example:

```md
Copy-only change request:
- Target section IDs: ServicesPage.Kicker, ServicesPage.Title, ServicesPage.Lede
- Files to edit: src/pages/services.astro:13, src/pages/services.astro:14, src/pages/services.astro:15
- Change requested:
  - Kicker: "Pool Services"
  - Title: "Reliable pool care for Exeter and the Seacoast."
  - Lede: "Weekly cleaning, repairs, and seasonal support from a local team."
- Constraints:
  1) Do not modify any class attributes.
  2) Do not change layout structure.
  3) Do not edit hero banner content.
  4) Return only copy edits.
```

### Style-only template
Use this when look/spacing/typography should change and text must remain exactly the same.

```md
Style-only change request:
- Target section IDs: <SECTION_ID_1>, <SECTION_ID_2>
- Files to edit: <path:line>, <path:line>
- Style goal: <alignment/size/weight/spacing/color>
- Constraints:
  1) Do not change text content.
  2) Do not add/remove cards or fields.
  3) Do not edit hero banner.
  4) Limit edits to classes (and design tokens only if specified).
```

Example:

```md
Style-only change request:
- Target section IDs: ServicesPage.Title
- Files to edit: src/pages/services.astro:14
- Style goal: center title, set larger responsive scale, keep body copy unchanged
- Constraints:
  1) Do not change text content.
  2) Do not alter card copy/data.
  3) Do not edit hero banner.
  4) Change only class attributes.
```

### Shared-data template (update both dedicated + home automatically)
```md
Copy-only change request using shared data:
- Target section ID: ServicesCards.Data
- File to edit: src/data/services.ts:1
- Change requested: <new service titles/descriptions/highlights>
- Constraints:
  1) Do not edit page component classes.
  2) Keep object shape and keys unchanged.
  3) Do not edit hero banner.
```

## Recommended next step: centralize plain-text copy (future)
To enforce a stronger copy/style firewall, move inline page copy to dedicated copy files and import it.

- Suggested files:
  - `src/data/copy/services.ts`
  - `src/data/copy/gallery.ts`
  - `src/data/copy/testimonials-page.ts`
  - `src/data/copy/contact.ts`
  - `src/data/copy/customer-login.ts`
  - `src/data/copy/blog-page.ts`
  - `src/data/copy/home.ts`
- Then keep components mostly for structure and classes only.
