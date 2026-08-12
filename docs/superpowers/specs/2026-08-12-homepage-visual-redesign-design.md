# Homepage visual redesign

## Goal

Upgrade the existing Jekyll academic homepage into a restrained, light-toned research archive. The redesign must improve typography, layout, publication hierarchy, motion, and mobile usability while preserving the site's existing information and GitHub Pages workflow.

## Approved direction

The visual direction combines:

- the structure and information density of **B: Mist-sage research archive**;
- the airy spacing, mist-blue accents, and soft publication surfaces of **A: Clear academic blue**.

The page should feel calm, credible, contemporary, and easy to scan. It must not use saturated gradients, excessive cards, particles, parallax, or continuous decorative animation.

## Implementation approach

Use a targeted upgrade of the current Jekyll theme.

- Preserve `_config.yml`, the existing layouts, includes, GitHub Pages deployment, and Google Scholar statistics integration.
- Refactor `_pages/about.md` into semantic, class-based content blocks without moving the site to another framework.
- Add homepage-specific SCSS within the existing stylesheet pipeline.
- Add only a small progressive-enhancement JavaScript module for section reveals and active navigation.
- Keep the no-JavaScript page complete and readable.
- Do not replace the homepage with a standalone static `index.html`.

## Visual system

### Color tokens

- Canvas: `#F3F7F5`
- Primary surface: `#FBFDFC`
- Primary ink: `#22312E`
- Muted text: `#667772`
- Mist sage accent: `#6F9487`
- Mist blue accent: `#6F97B2`
- Soft border: `#DCE8E3`
- CCF-A background: `#FBE8E8`
- CCF-A text: `#A54F4F`

Mist sage is the main accent. Mist blue is secondary and should appear in selected publication surfaces, links, and subtle state changes. Red is reserved for low-saturation `CCF-A` labels.

### Typography

- Self-host `Manrope` in WOFF2 for display headings, navigation, labels, and compact metadata.
- Self-host `Source Sans 3` in WOFF2 for body text and publication descriptions.
- Use `font-display: swap` and robust system-font fallbacks.
- Keep paragraph measures readable and use tighter tracking only on large headings.

### Shape and depth

- Use medium rounded corners for major surfaces and smaller corners for labels.
- Prefer tinted borders and subtle sage-tinted shadows over generic black shadows.
- Avoid wrapping every section in a card. Use cards only where they communicate a distinct record, such as a publication or research experience.

## Page structure

### Navigation and profile

- Keep the sticky top navigation and the stable explicit anchors already present in the repository.
- Keep a sticky profile sidebar on desktop.
- Convert the sidebar into a compact profile header on mobile.
- Preserve the avatar, name, university, location, email, and Google Scholar link.
- Expose configured GitHub and ORCID links when values are available.
- Remove the global `<base target="_blank">`. Internal navigation stays in the current tab; external links receive explicit `target="_blank"` and `rel="noopener noreferrer"`.

### About Me

- Present a concise research thesis at the top of the main column.
- Preserve the current research interests, mentors, collaborating organizations, Peking University study information, publication summary, and internship-seeking notice.
- Use compact topic tags for program repair, code translation, and program understanding.

### News

- Preserve the existing news entries.
- Display them in a shallow, light-toned panel with restrained date emphasis.
- Keep all entries available; scrolling is acceptable when the list grows.

### Education

- Preserve Peking University and Shandong University entries, including the dual-degree information.
- Present them as a simple chronological timeline.

### Publications

Split the section into `Main Work` and `Other Work`.

#### Main Work

Keep the current five works with images, complete author lists, descriptions, publication information, and available PDF/code links:

1. CausalRepair — ISSTA 2026 — `CCF-A`
2. Automated Commit Message Generation With Large Language Models — TSE 2024 — `CCF-A`
3. ClassEval-T — ISSTA 2025 — `CCF-A`
4. DebugRepair — arXiv preprint 2026
5. Exploring and Lifting the Robustness of LLM-powered Automated Program Repair with Metamorphic Testing — arXiv preprint 2024

Each main-work record uses a responsive image-and-text layout. Venue labels are translucent. `CCF-A` appears as a separate pale-red label only for qualifying venues.

#### Other Work

Group entries by year in a compact research archive. Every record must show:

- the complete official paper title, never only an abbreviation;
- a translucent publication-status label;
- a separate pale-red `CCF-A` label when applicable;
- a PDF or paper link;
- no thumbnail, full author list, or long description.

The approved deduplicated list, based on the public Google Scholar profile and Crossref metadata checked on 2026-08-12, is:

##### 2026

1. **TransLibEval: Demystify Large Language Models’ Capability in Third-Party Library-Targeted Code Translation**
   Status: FSE 2026; `CCF-A`
   Link: <https://arxiv.org/pdf/2509.12087>
2. **Toward Executable Repository-Level Code Generation via Environment Alignment**
   Status: Preprint
   Link: <https://arxiv.org/pdf/2604.03622>
3. **Persistent Cross-Attempt State Optimization for Repository-Level Code Generation**
   Status: Preprint
   Link: <https://arxiv.org/pdf/2604.03632>
4. **Fixturize: Bridging the Fixture Gap in Test Generation**
   Status: Preprint
   Link: <https://arxiv.org/pdf/2601.06615>
5. **Porting Declarative UI to HarmonyOS: A Heuristic-guided LLM Approach**
   Status: Preprint
   Link: <https://arxiv.org/pdf/2606.07085>
6. **Rescue plan intelligent generation for natural disasters: an integrated approach based on Large Language Models**
   Status: npj Natural Hazards, 2026
   Link: <https://doi.org/10.1038/s44304-026-00232-5>

##### 2025

1. **DISTINCT: A Description-Guided Branch-Consistency Analysis Framework for Non-Regressive Test Case Generation**
   Status: Preprint
   Link: <https://arxiv.org/pdf/2506.07486>

The older Scholar entry titled “A Framework for Creating Non-Regressive Test Cases via Branch Consistency Analysis Driven by Descriptions” shares arXiv identifier `2506.07486` with DISTINCT and must not appear as a duplicate.

### Honors and Awards

- Preserve every existing award and year.
- Use year labels with a two-column list on larger screens and one column on mobile.

### Internship Experience

- Preserve both Shandong University research-center entries, roles, and project descriptions.
- Present them as two low-contrast information cards.

### Academic Activities

- Preserve the oral-presentation and poster-presentation records.
- Use a compact activity list rather than large cards.

### Visitor visualization

- Preserve ClustrMaps.
- Move it into a quiet footer-area block so it does not compete with research content.

## Motion and interaction

- Use smooth in-page anchor scrolling.
- Reveal sections with a subtle opacity and small vertical transform as they enter the viewport.
- Raise publication cards by no more than `2px` on hover and tint their border.
- Highlight the current navigation item while scrolling and expose the state with `aria-current`.
- Use transitions around 200–300 ms.
- Respect `prefers-reduced-motion: reduce` by disabling non-essential movement and reveal animation.
- Do not animate layout properties such as width, height, top, or left.

## Responsive behavior

- Desktop: sticky top navigation, sticky profile sidebar, spacious main column.
- Tablet: retain two columns where practical and reduce gaps and image widths.
- Mobile: stack the profile above content, keep navigation usable through the existing responsive menu, stack Main Work images above text, and stack Other Work title/status/link fields vertically.
- Long publication titles must wrap without overflow.
- External link and status controls must remain easy to tap.

## Accessibility and resilience

- Use semantic headings and section landmarks.
- Preserve visible keyboard focus styles.
- Add meaningful alt text to every publication image.
- Keep body text and status-label contrast readable on the light palette.
- Keep all content visible before JavaScript runs.
- Use `IntersectionObserver` only as progressive enhancement and provide a safe fallback.
- Avoid dead links and validate all public PDF, paper, code, and profile URLs.

## Verification

1. Confirm the Jekyll source remains compatible with GitHub Pages and no framework migration occurred.
2. Confirm all navigation URLs match explicit anchors.
3. Confirm all original About, News, Education, Main Work, Honors, Internship Experience, Academic Activities, and ClustrMaps content remains present.
4. Confirm Main Work contains exactly five image-backed records.
5. Confirm Other Work contains exactly seven unique records with complete titles, status labels, and links.
6. Confirm TSE, FSE, and ISSTA records receive `CCF-A` labels and preprints/non-CCF venues do not.
7. Confirm self-hosted fonts load with fallbacks and do not depend on a font CDN.
8. Confirm keyboard focus, reduced-motion behavior, no-JavaScript readability, and responsive layouts.
9. Run source-level checks and any available build checks. If Ruby/Jekyll remains unavailable locally, document that limitation.
10. After an authorized push, verify the GitHub Pages build and the deployed desktop/mobile page independently.

## Out of scope

- Migrating away from Jekyll or GitHub Pages
- Adding a dark theme
- Adding a CMS or database
- Rewriting publication claims or inventing new biographical content
- Automatically scraping Other Work on each page load
- Removing existing academic information for visual simplicity
