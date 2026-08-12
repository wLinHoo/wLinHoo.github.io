# Compact Academic Homepage Redesign

## Objective

Replace the current presentation-style homepage with a compact, continuous academic profile inspired by the information density and hierarchy of `Wwstarry.github.io`.

The redesign must preserve the two parts the user already approves:

1. the left author sidebar;
2. the visual design and internal composition of the five Main Work publication cards.

Everything else should become more compact, less fragmented, and less dependent on bordered cards.

## Visual direction

- Keep the current mist-sage palette, Manrope display type, Source Sans 3 body type, and restrained blue/red publication accents.
- Remove the large name hero, decorative circles, research-topic pills, and oversized introductory whitespace.
- Treat the right column as one continuous academic document rather than a sequence of landing-page components.
- Use section headings, thin rules, aligned dates, typographic hierarchy, and short list rows as the primary organizational devices.
- Use a surface or border only where grouping materially improves comprehension.
- Keep animations quiet: small opacity/vertical reveals only, around 200–280 ms, and fully disabled for reduced-motion users.

## Page frame

### Navigation

- Preserve the current sticky top navigation and anchor destinations.
- Retain active-section highlighting and keyboard focus styles.
- Reduce any excess navigation height or visual weight if needed to suit the tighter page rhythm.

### Left sidebar

- Preserve the current sidebar structure, visual treatment, portrait, identity information, email, GitHub, Google Scholar, and ORCID links.
- Keep it sticky on desktop and naturally stacked above the content on smaller screens.
- Do not redesign its approved card treatment except for minor spacing adjustments needed to align it with the new content start.

### Main content alignment

- The right column begins directly with `About Me`.
- The first section heading should align approximately with the upper portion of the sidebar rather than appearing below a hero.
- Desktop content remains constrained to a readable width; the existing two-column page frame is retained.
- Section-to-section spacing should generally be 44–56 px, with smaller optical adjustments where content density requires them.

## Section design

### About Me

- Remove the hero entirely, including the large `Linhao Wu` heading, hero kicker, lead sentence, topic pills, decorative background, and hero shadow.
- Start with a compact `About Me` heading and a thin horizontal rule.
- Preserve all existing biography facts, institutional collaborations, mentors, research interests, publication summary, and external links.
- Keep paragraphs readable but reduce their line length and vertical gaps compared with the current version.
- Render internship availability as a single compact emphasis row with a subtle sage left rule or marker, not a rounded notification card.

### News

- Render the four existing news records as compact rows.
- Each row contains a fixed-width or tabular date followed by the update text.
- Use a thin separator or a restrained vertical guide; do not wrap each news item in a card.

### Education

- Render Peking University and Shandong University as two resume-style rows.
- Each row contains the time period, institution, and degree.
- Use typographic alignment and separators instead of card surfaces, shadows, or large rounded corners.

### Publications

#### Main Work

- Preserve the current five publication cards and their internal layout, images, tags, authors, links, descriptions, hover treatment, and mobile image-first behavior.
- Preserve the full author lists, bold `Linhao Wu`, the equal-contribution note, and the six author superscript stars across the three co-first papers.
- Preserve the three Main Work CCF-A labels.
- Only reduce outer spacing around the Main Work subsection so it fits the tighter page rhythm.

#### Other Work

- Preserve all seven works, their complete official titles, status/venue tags, PDF or paper links, year grouping, and the FSE CCF-A label.
- Keep the current compact archive-row concept rather than introducing images or author lists.
- Reduce unnecessary gaps while maintaining line wrapping and tap targets on mobile.

### Honors and Awards

- Replace the six bordered honor cards with compact resume-style records.
- Each record contains a tabular year and the complete honor title; ranking information remains visible as quiet secondary text.
- Desktop may use a balanced two-column list if it remains visually continuous; mobile must use one column.
- No individual card borders, shadows, or filled surfaces.

### Internship & Research Experience

- Replace the two cards with a compact timeline or separated experience list.
- Each record contains role, organization, and complete project description.
- Use a subtle left rule, dot, or horizontal divider to express sequence; do not use elevated cards.

### Academic Activities

- Render the oral and poster presentations as two compact rows with activity type and full event name.
- Do not use separate cards.

### Visitor map

- Keep the existing ClustrMaps script and identifier.
- Place it in a quiet footer-like block after the academic activities.
- Avoid a large enclosing card; use a top rule, small caption, and centered or right-aligned globe as space permits.

## Responsive behavior

- Desktop: approved sticky sidebar plus a compact continuous right column.
- Tablet: preserve readable two-column publication cards where space permits; all other resume-style records adapt without horizontal overflow.
- Mobile: sidebar stacks first, then continuous content; dates and record bodies may stack vertically; Main Work cards remain image-first; Other Work status, title, and link stack when needed.
- No horizontal overflow at 375, 768, 1024, or 1440 px.
- Long titles, organization names, and the email address must wrap safely.

## Accessibility and interaction

- Maintain one meaningful page heading hierarchy and semantic sections.
- Keep the skip link, visible focus states, semantic image alternatives, explicit external-link behavior, and active navigation state.
- Content remains visible when JavaScript or IntersectionObserver is unavailable.
- `prefers-reduced-motion: reduce` disables reveal movement, smooth scrolling, and hover lift.
- Do not reduce text contrast below WCAG AA for normal text.

## Network and local testing policy

- For terminal commands that require internet access, explicitly set or pass `http://127.0.0.1:7890` as both HTTP and HTTPS proxy when supported.
- If Windows sandboxing causes Schannel credential isolation, retry the same narrowly scoped command with the required escalation instead of treating it as a network outage.
- Allow a longer timeout for large browser or dependency downloads.
- Prefer the installed system Chrome for Playwright visual tests when downloading a separate Playwright browser is unnecessary.

## Acceptance criteria

1. No large name hero or research-topic pill group remains.
2. The page begins directly with a compact About Me section aligned with the approved sidebar.
3. The approved sidebar is visually preserved.
4. The five Main Work cards and their internal design are visually preserved.
5. News, Education, Honors, Experience, and Activities are primarily rows or list records, not collections of cards.
6. Main Work and Other Work content, author formatting, labels, titles, links, and counts remain exact.
7. Existing biography, news, education, honors, experience, academic activities, and visitor-map information remains present.
8. The page is visibly denser and more continuous than commit `89f346d`, without becoming cramped.
9. Source checks, SCSS compilation, JavaScript syntax checks, anchor checks, and browser tests at the four target widths pass.
10. The implementation introduces no unrelated content or framework migration.
