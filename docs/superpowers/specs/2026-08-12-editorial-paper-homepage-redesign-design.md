# Editorial Paper Homepage Redesign

## Goal

Refine the homepage into a compact, professional academic profile with the visual clarity of the Wwstarry reference site while preserving Linhao Wu's existing information, sidebar identity, and Main Work publication cards. The page should feel like a single research profile printed on a bounded sheet rather than a collection of unrelated cards.

## Reference Findings

The reference homepage uses a two-font system rather than a hosted web font:

- Long-form content: `Georgia, "Times New Roman", Times, serif`
- Navigation and interface labels: `"Arial Rounded MT Bold", Verdana, Arial, sans-serif`

Its primary text color is `#222`, strong headings and publication titles approach `#111`, and navigation or section accents use a restrained dark blue. Its Publications section is divided with semantic `<details>` and `<summary>` elements, which provide native collapse behavior and keyboard support.

This redesign adopts those typography and interaction principles while retaining the current site's content organization and publication assets.

## Page Architecture

### Outer Canvas

- Use a very light cool gray outer canvas: `#f3f4f3`.
- Center one white page sheet with a maximum width of approximately `1280px`.
- Give the sheet a `1px` cool-gray border, approximately `12px` corner radius, and a very light neutral shadow.
- The sheet must have visible left and right boundaries on desktop without resembling a large elevated application card.
- Align the inner masthead navigation width with the sheet boundaries.

### Desktop Grid

- Place the sidebar and main content inside the same sheet.
- Use a sidebar width between `230px` and `245px`.
- Use an inter-column gap of approximately `40px`.
- Limit the readable main column to approximately `900px`.
- Keep the sidebar sticky below the masthead.
- Preserve the sidebar's current information grouping and subtle surface treatment.

### Responsive Layout

- Collapse the grid into a single column on smaller screens.
- Convert the sidebar into a compact profile header above the main content.
- Remove or substantially reduce the sheet shadow, border radius, and side gutters on narrow mobile screens so content uses the available width.
- Do not allow long titles, author lists, venue labels, or the email address to create horizontal scrolling.

## Typography and Color

### Font System

- Use `Georgia, "Times New Roman", Times, serif` for body copy, publication content, news, education, honors, internships, and activities.
- Use `"Arial Rounded MT Bold", Verdana, Arial, sans-serif` for navigation, sidebar interface text, compact labels, badges, and controls.
- Remove the homepage dependency on Manrope and Source Sans 3 so the page does not mix unrelated font identities.
- Retain system fallbacks so layout remains stable on devices without Arial Rounded MT Bold.

### Text Hierarchy

- Primary body text: `#222`.
- Strong headings and publication titles: `#111`.
- Secondary content such as dates, venues, and supporting labels: no lighter than the `#555` to `#666` range.
- Section headings and links: restrained dark blue, centered around `#173f8f`.
- Body size: approximately `16px` to `17px`, with line-height near `1.58`.
- Publication title size: approximately `17px` to `18px`, with compact line-height.
- Constrain long prose to a readable line length and use balanced or pretty wrapping where supported.

### Tags and Links

- Preserve CCF-A as a pale red tag.
- Render venue and preprint tags in low-saturation blue-gray surfaces with readable dark text.
- Use the same dark blue for links; hover and focus may darken the color and add an underline.
- Avoid low-contrast mist-gray body text.

## Publications

### Collapsible Groups

Replace the current static Main Work and Other Work subsection headings with two semantic `<details>` groups:

1. `Main Work`, with a visible count of `5`, open by default.
2. `Other Work`, with a visible count of `7`, closed by default.

Each `<summary>` should include:

- a small category icon;
- the category title;
- a compact count marker;
- a right-aligned chevron that rotates when open;
- a thin dark-blue left border;
- a very pale warm-white-to-transparent horizontal background;
- a subtle hover state without elevation or a strong shadow.

The native details interaction must remain usable with keyboard navigation and when JavaScript is disabled.

### Main Work

- Preserve exactly five Main Work entries.
- Preserve each image, complete title, complete author list, venue, year, PDF/Code links, and existing CCF-A/preprint tags.
- Preserve bold styling for Linhao Wu.
- Preserve the equal-contribution statement and both co-first-author superscript stars for the three applicable publications.
- Retain the existing publication-card structure and subtle card surface because this is an approved part of the current design.
- Adapt typography, spacing, borders, and link styling to the editorial font system.
- Do not restore the removed three-item publication descriptions.

### Other Work

- Preserve exactly seven Other Work entries and their complete titles.
- Keep entries image-free and omit author lists.
- Keep venue/status tags directly after the paper title.
- Keep the paper link right-aligned on desktop and stacked cleanly on mobile.
- Preserve year grouping and existing PDF/Paper targets.
- Keep the TransLibEval CCF-A label and do not add unsupported classifications.

## Remaining Sections

### About

- Preserve all current research interests, collaborations, mentors, institutions, venue summary, and internship availability information.
- Use strong text weight to establish emphasis rather than additional cards.
- Limit paragraph width for comfortable reading.

### News

- Use a compact two-column date-and-description list.
- Render dates in dark blue.
- Separate rows with fine rules and maintain clear mobile stacking.

### Education

- Keep a timeline/list presentation instead of cards.
- Emphasize institution names and preserve all degree information.

### Honors and Awards

- Use two columns on desktop and one column on mobile.
- Present entries as restrained numbered or bullet records without large surfaces.

### Internship Experience

- Use two aligned information records with a clear role/time rail and descriptive body.
- Do not surround each record with a large card.

### Academic Activities and Visitors

- Keep activities as compact editorial entries.
- Keep the existing ClustrMaps embed intact.
- Place visitor information in a quiet footer-like area after the main academic content.

## Motion and Interaction

- Keep the details chevron rotation.
- Use short color transitions for links and category headers.
- Allow only a very small publication-card hover response.
- Remove the scroll-reveal behavior that initially hides page sections; all content must be visible immediately after layout and during full-page capture.
- Preserve active navigation state and correct anchor targets.
- Preserve visible `:focus-visible` treatments.
- Under `prefers-reduced-motion: reduce`, disable smooth scrolling, transforms, and nonessential transitions.

## Implementation Boundaries

- Continue using the existing Jekyll/SCSS/vanilla-JavaScript stack.
- Scope homepage styles under the existing homepage body/wrapper classes to avoid changing redirect or archive pages.
- Prefer semantic HTML changes in `_pages/about.md` and focused homepage SCSS changes in `_sass/_homepage.scss`.
- Remove obsolete homepage font-face declarations and reveal styles only after confirming they have no remaining consumers.
- Do not rewrite unrelated theme files or change publication facts and links.

## Failure and Fallback Behavior

- Without JavaScript, all non-collapsible page content must remain visible and native details elements must remain usable.
- If Arial Rounded MT Bold is unavailable, Verdana or Arial must preserve navigation and label layout.
- If an image fails, semantic alternative text must identify the corresponding publication.
- Long content must wrap rather than overflow.
- The third-party visitor embed may fail independently without affecting page layout or other scripts.

## Verification

### Content Regression

- Confirm all navigation targets correspond to section IDs.
- Confirm counts: five Main Work entries and seven Other Work entries.
- Confirm all Main Work images exist and load.
- Confirm five bold self-author occurrences, the required equal-contribution stars, and correct CCF-A tag counts.
- Confirm all existing biography, News, Education, Honors, Internship Experience, Academic Activities, and visitor information remains present.

### Visual and Responsive Checks

Check at approximately `1440px`, `1024px`, `768px`, and `375px`:

- centered bounded sheet on desktop;
- one-column mobile layout;
- no horizontal overflow;
- sufficiently dark body and heading text;
- readable typography and stable fallbacks;
- correct Main Work and Other Work summary bars;
- correct default open/closed states;
- compact publication cards and Other Work rows.

### Interaction and Accessibility

- Test mouse and keyboard toggling for both publication groups.
- Test anchor navigation, browser hash changes, and active navigation state.
- Test visible keyboard focus.
- Test with JavaScript disabled.
- Test `prefers-reduced-motion`.
- Verify the page no longer presents large blank areas because reveal content has not intersected the viewport.

### Source Checks

- Compile the full Sass bundle.
- Check homepage JavaScript syntax.
- Run `git diff --check`.
- Keep test screenshots and dependency caches out of the commit.
