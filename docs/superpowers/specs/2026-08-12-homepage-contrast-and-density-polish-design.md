# Homepage Contrast and Density Polish

## Objective

Improve the compact academic homepage by increasing text clarity, using a pure-white page canvas, updating the academic identity, and removing unnecessary publication-card detail.

The existing compact information flow, left profile card, Main Work card surfaces, navigation, anchors, and responsive behavior remain in place.

## Visual direction

- Change the global page canvas to pure white (`#FFFFFF`).
- Preserve the current pale mist-sage surfaces inside the left profile card and Main Work publication cards.
- Change primary text to a near-black, subtly green-tinted ink.
- Darken secondary text so it remains clearly subordinate without appearing washed out.
- Increase common body, navigation, metadata, author, and archive-title sizes by approximately one CSS pixel where appropriate.
- Preserve the existing Manrope and Source Sans 3 self-hosted font pairing.
- Do not reintroduce large whitespace, a hero, decorative cards, or oversized headings.

## Identity and biography

- Change the sidebar institution from `Shandong University` to `Peking University`.
- Replace the first biography sentence with: `I am an incoming M.S. student in Computer Science and Technology at Peking University.`
- Continue the same paragraph with the existing research-interest description covering LLMs and software engineering, code translation, automated program repair, and automated program understanding.
- Preserve all other biography facts, mentors, institutions, links, publication summary, and internship availability.

## Main Work

- Preserve all five Main Work cards, images, titles, complete author lists, bold `Linhao Wu`, equal-contribution superscripts and note, venue/CCF-A tags, venue text, PDF links, Code links, card surface, and hover behavior.
- Remove every `publication-highlights` list from the five cards.
- Remove the now-unused `publication-highlights` styling.
- Allow cards to shrink naturally after the descriptions are removed; do not impose fixed heights.

## Other Work

- Preserve all seven works, complete official titles, year groups, publication/preprint labels, the FSE CCF-A label, and PDF/Paper links.
- Reorder each archive record so the title is the first visual item.
- Place the publication/preprint label and optional CCF-A label immediately after the title in the reading flow.
- Keep PDF/Paper links aligned at the far right on desktop.
- Ensure every title begins at the same left boundary, independent of status-label width.
- On narrow screens, allow the title and labels to wrap naturally, with the PDF/Paper link moving below when needed.

## Typography and contrast

- Primary headings and emphasized names use the near-black ink token.
- Body copy, news text, education details, authors, venue text, honors, experience descriptions, and activity text use a darker secondary token than the current `#5F706B`.
- Small labels may remain lighter but must retain WCAG AA contrast for their size where applicable.
- Increase small text carefully without changing the compact page rhythm or making navigation overflow.
- Maintain tabular date alignment and existing typographic hierarchy.

## Responsive and accessibility requirements

- No horizontal overflow at 375, 768, 1024, or 1440 px.
- The sidebar stacks above content on mobile and retains safe email wrapping.
- Other Work titles remain left-aligned at every width.
- Status labels remain understandable without relying on color alone.
- Preserve visible focus styles, reduced-motion behavior, semantic headings, external-link safety, image alternatives, and JavaScript-failure content visibility.

## Acceptance criteria

1. The page canvas is pure white while the approved sidebar and Main Work card surfaces remain tinted.
2. The sidebar reads `Peking University`.
3. The biography begins with the exact approved incoming-M.S. sentence.
4. All five Main Work highlight lists are removed; the remaining publication metadata is unchanged.
5. All seven Other Work titles appear before their status labels and share one left edge.
6. Primary and secondary text are visibly darker and common small text is slightly larger.
7. Publication counts, complete titles, author formatting, equal-contribution markers, CCF-A labels, links, and preserved profile information remain correct.
8. SCSS compilation, JavaScript syntax, anchor checks, source checks, and browser tests at the four target widths pass.
