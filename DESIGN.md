---
name: Soon Jan Jan CV
description: A curriculum vitae typeset as an economist's results table.
colors:
  paper: "#f4f5f2"
  paper-2: "#e9ebe6"
  ink: "#15181e"
  ink-2: "#474d5a"
  ink-3: "#737a87"
  hair: "#c8ccd2"
  series: "#1e4a3d"
  on-series: "#f4f5f2"
  proof: "#1d4ed8"
  proof-wash: "#dfe7fb"
  danger: "#a3261b"
  fit: "#1e4a3d"
  paper-dark: "#111418"
  paper-2-dark: "#191d22"
  ink-dark: "#e7e8e4"
  ink-2-dark: "#aab0ba"
  ink-3-dark: "#7d8591"
  hair-dark: "#2f353d"
  series-dark: "#173a30"
  proof-dark: "#93b2ff"
  proof-wash-dark: "#1c2744"
  danger-dark: "#ff9a8f"
  fit-dark: "#7cc4a8"
  print-paper: "#ffffff"
  print-ink: "#000000"
  print-ink-2: "#333333"
  print-ink-3: "#666666"
  print-hair: "#bbbbbb"
typography:
  display:
    fontFamily: "CMU Serif, Latin Modern Roman, Computer Modern, Georgia, serif"
    fontSize: "clamp(3rem, 8.4vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  display-print:
    fontFamily: "CMU Serif, Latin Modern Roman, Computer Modern, Georgia, serif"
    fontSize: "3.25rem"
    fontWeight: 700
    lineHeight: 0.98
  headline:
    fontFamily: "CMU Serif, Latin Modern Roman, Computer Modern, Georgia, serif"
    fontSize: "clamp(1.45rem, 2.4vw, 1.9rem)"
    fontWeight: 400
    lineHeight: 1.2
  title:
    fontFamily: "CMU Serif, Latin Modern Roman, Computer Modern, Georgia, serif"
    fontSize: "clamp(1.2rem, 2vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "CMU Serif, Latin Modern Roman, Computer Modern, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"lnum\", \"tnum\""
  abstract:
    fontFamily: "CMU Serif, Latin Modern Roman, Computer Modern, Georgia, serif"
    fontSize: "clamp(1.15rem, 1.6vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.62
  print-root:
    fontFamily: "CMU Serif, Latin Modern Roman, Computer Modern, Georgia, serif"
    fontSize: "12px"
  notes:
    fontFamily: "CMU Serif, Latin Modern Roman, Computer Modern, Georgia, serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  margin-head:
    fontFamily: "CMU Serif, Latin Modern Roman, Computer Modern, Georgia, serif"
    fontSize: "1.05rem"
    fontWeight: 700
    letterSpacing: "0.06em"
rounded:
  none: "0px"
  sm: "2px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(56px, 7vw, 96px)"
  cell-y: "0.62em"
  cell-x: "1.25em"
  column-gap: "clamp(16px, 3vw, 40px)"
components:
  button-primary:
    backgroundColor: "{colors.series}"
    textColor: "{colors.on-series}"
    rounded: "{rounded.sm}"
    padding: "0 22px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 22px"
    height: "46px"
  button-secondary-hover:
    backgroundColor: "{colors.paper-2}"
  input:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px"
    height: "46px"
  input-focus:
    backgroundColor: "{colors.proof-wash}"
  running-head:
    backgroundColor: "{colors.series}"
    textColor: "{colors.on-series}"
    height: "56px"
  open-entry:
    backgroundColor: "{colors.proof-wash}"
    textColor: "{colors.proof}"
    rounded: "{rounded.sm}"
---

# Design System: Soon Jan Jan CV

## Overview

**Creative North Star: "The Results Table"**

The page is set the way an economist's paper sets its evidence: Computer Modern on offset paper, booktabs rules, numbered tables and figures, and notes under each table. Academic peers read that grammar every day, so they recognise the page's discipline before they read a word. The CV is a record, and the system presents it as one, with no marketing chrome.

The tone is exact, quiet and honest. Hierarchy comes from the typography of a well-set journal page: a large bold name, captions such as "Table 2." in bold, and italic column heads and labels. Colour is used sparingly and always for a job. The series green marks the working-paper band, and the proofreader's blue marks every link and every entry still waiting for the author. Missing facts are never hidden or invented. They appear as proof marks, which is also the system's most distinctive device.

There is one authored moment of motion. On arrival, Figure 1's least-squares line draws itself through illustrative data while Table 1's rules draw in beside it. Everything else stays still.

**Key Characteristics:**
- One typeface, Computer Modern Serif (CMU), self-hosted, with tabular lining figures.
- Booktabs tables: a heavy top rule, a light rule under the head, a heavy bottom rule, and hairline row dividers.
- Numbered apparatus: Table 1–5, Figure 1, "Notes:" lines and lettered footnotes.
- A series-green band for the running head and footer; proofreader's blue for links and open entries.
- A flat page with no shadows, no cards, and corners of 2px or less.
- Light and dark themes from the same tokens; the page prints as the CV.

## Colors

The palette is offset paper and blue-black ink, plus two working colours.

### Primary
- **Series Green** (`#1e4a3d`; dark `#173a30`): the working-paper series band. It owns the running head, the footer band and the primary button, and through `--fit` (`#1e4a3d`; dark `#7cc4a8`) the fitted line in Figure 1.

### Secondary
- **Proofreader's Blue** (`#1d4ed8`; dark `#93b2ff`) on **Proof Wash** (`#dfe7fb`; dark `#1c2744`): links, focus rings, the text caret, text selection, and entries still to be supplied.

### Neutral
- **Offset Paper** (`#f4f5f2`; dark `#111418`): the page ground, neutral and slightly cool, never cream.
- **Stripe Paper** (`#e9ebe6`; dark `#191d22`): row hover, form-field ground and button hover.
- **Ink** (`#15181e`; dark `#e7e8e4`): text and every structural rule.
- **Ink 2** (`#474d5a`; dark `#aab0ba`): secondary text, italic labels, notes and captions (7.9:1 on paper).
- **Ink 3** (`#737a87`; dark `#7d8591`): non-text marks only, such as residuals and dashed inactive rules.
- **Hairline** (`#c8ccd2`; dark `#2f353d`): row dividers inside tables.
- **Error Red** (`#a3261b`; dark `#ff9a8f`): form errors only.
- **Print palette** (`#ffffff` paper; `#000000`, `#333333` and `#666666` inks; `#bbbbbb` hairline): replaces every token on paper, so the CV prints as black ink on white.

### Named Rules
**The Proof-Blue Rule.** Blue means "act here" or "still to be written". Use it for links, focus and open entries, never for decoration or emphasis.

**The Series Band Rule.** Series green appears only on the running head, the footer band, the primary action and the fitted line. A second accent colour is never added.

**The Ink-3 Rule.** Ink 3 is for marks, not words. Text never drops below Ink 2.

## Typography

**Face:** CMU Serif (Computer Modern Unicode, OFL), served from `fonts/`: Roman 400, Italic 400 and Bold 700. Figures are lining and tabular everywhere (`font-variant-numeric: lining-nums tabular-nums`).

**Character:** this is the typeface of LaTeX papers. Its hairline contrast and steady texture are the subject's own lettering, not a nostalgic choice.

### Hierarchy
- **Display** (700, `clamp(3rem, 8.4vw, 6rem)`, line-height 0.98, tracking -0.025em): the name, once per page. On paper it is set at 3.25rem on the 12px print root (`display-print`).
- **Headline** (400, `clamp(1.45rem, 2.4vw, 1.9rem)`, line-height 1.2): table titles. The number is set bold, as in "**Table 2.** Appointments and education".
- **Title** (400, `clamp(1.2rem, 2vw, 1.45rem)`, line-height 1.45, Ink 2, max 34ch): the one-sentence standfirst under the name.
- **Body** (400, 1.125rem, line-height 1.6; 1.0625rem under 640px): table cells and running text. The Abstract runs at `clamp(1.15rem, 1.6vw, 1.3rem)` within 66ch, with paragraph indents instead of gaps (`abstract`).
- **Labels** (italic 400, body size, Ink 2): column heads, row labels in Table 1, field labels and keyword terms.
- **Notes** (400, 0.95rem, Ink 2): "*Notes:*" lines, footnotes, captions and counts.
- **Margin head** (700, 1.05rem, tracking 0.06em, uppercase): only the Abstract heading, set in the left margin column.

### Named Rules
**The One Face Rule.** Every element uses Computer Modern Serif. Hierarchy comes from size, weight and italic. Never add a sans, a mono or a second serif.

**The Apparatus Rule.** Tables and figures are numbered in reading order and captioned with a bold number. Explanations go below as "*Notes:*" or lettered footnotes, never in tooltips or cards.

## Layout

- **Container:** max 1180px, side gutter `clamp(16px, 4vw, 40px)`.
- **Grid:** 12 columns with a `clamp(16px, 3vw, 40px)` gap on the title page, the Abstract and Correspondence. The title page splits 7 + 5 (name and Table 1, then Figure 1). The Abstract puts a 3-column margin head beside a 9-column text block. Correspondence splits 5 + 6 with one empty column between.
- **Tables** span the full container. Cells pad `0.62em 1.25em 0.62em 0`, with no outer padding, so text aligns to the rules' edge.
- **Rhythm:** sections open with `clamp(56px, 7vw, 96px)` of space above. A heading has more space above than below (0.8em).
- **Breakpoints:** 1080px trims the running head, 900px collapses the sections menu and stacks every split, and 640px stacks multi-column tables into labelled rows. In a stacked row the label hangs in a 6.5em column, and the content flows as running text.
- **Print:** the page is the CV. On paper the running head, actions, form and filters are hidden, the type scale drops to a 12px root, and every colour prints as black ink on white.

## Elevation & Depth

Flat by design. Depth comes from rules and spacing, as on a printed page, never from shadows. Hierarchy between regions comes from rule weight (1.5px for structure, 0.75px for subdivisions, hairlines inside) and from the series band at top and bottom.

### Named Rules
**The Booktabs Rule.** Tables get exactly three structural rules: a heavy top, a light rule under the head, and a heavy bottom. Rows are separated by hairlines. Never use vertical rules, boxed cells or zebra striping at rest.

**The No-Shadow Rule.** Nothing on the page casts a shadow, and nothing floats above the paper.

## Shapes

- Corners are 2px or less (`rounded.sm`) on buttons and open entries, and 0 on fields.
- Rules carry the form language. A solid heavy rule means chosen or current. A dashed rule means available or hovered.
- Icons are drawn as 24×24 SVGs with a 1.6 stroke and round caps and joins. There are three: theme (a half-filled circle), menu (three lines that become an ×), and back-to-top (an arrow).

### Named Rules
**The Solid-Means-Chosen Rule.** An active filter column or current nav section gets a solid 1.5px rule beneath it. Inactive and hovered states use a dashed 0.75px rule.

## Components

### Buttons
- **Primary** (series green, paper text, 46px tall, 0 22px padding, 2px corners): one per region. "Write to me" and "Open in my email app" are primary. On hover it turns to Ink with paper text; when pressed it moves down 1px.
- **Secondary** (transparent, 0.75px Ink border, Ink text): "Save as PDF". On hover it fills with Stripe Paper.
- **Text link button** (`.link`, proof blue, underlined): small inline actions such as "Replay".

### Inputs / Fields
- **Text field:** a Stripe Paper ground, a 0.75px Ink bottom rule, no box and no radius, at least 46px tall, with an italic Ink 2 label above. On focus the bottom rule becomes a 2px proof-blue rule and the ground turns Proof Wash. In error the rule is 2px Error Red, with the message directly under the field.

### Navigation
- **Running head:** a 56px series-green band, sticky, with the name in bold and *Curriculum vitae* in italic. Section links sit at 78% opacity; the current section is full strength with a solid rule beneath. Below 900px the links fold into a menu panel in the same green.

### Booktabs table (signature)
`.bt-wrap` draws the heavy top and bottom rules. `.bt` cells are left-aligned on the baseline, column heads are italic Ink 2 above a 0.75px Ink rule, and rows are divided by hairlines and tinted Stripe Paper on hover. Below 640px, `.bt--stack` turns each row into a labelled block, with labels taken from `data-label`.

### Open entry (signature)
`.tbd` marks a detail the author has not yet supplied: proof blue, italic, on Proof Wash, with a 1px dashed proof-blue underline. It explains itself through the Table 1 note: "Entries set like this are details still to be supplied."

### Column specification (signature)
Table 4's filter is set like a regression table's numbered columns, "(1) All · (2) Journal · (3) Conference". These are toggle buttons with `aria-pressed`, and the chosen column takes the solid rule. Filtering updates a live count ("Showing 2 of 3 entries.") and shows "No entries of this type yet." when empty.

### Figure 1 (signature)
A Lottie animation (`assets/figure-1.json`, played by self-hosted lottie-web) showing 16 illustrative points, their true OLS line and dashed residuals, with italic *x* and *y* labels. It plays once when scrolled into view and can be replayed; under reduced motion it shows the final frame. Layer classes (`lot-pts`, `lot-fit`, `lot-res`, `lot-axis`) take colours from page tokens, so it follows the theme. It is always captioned "*Illustrative data.*"

## Do's and Don'ts

### Do:
- **Do** set every new record as a numbered booktabs table with a bold "Table N." title and notes underneath.
- **Do** mark every unknown fact as an open entry (`.tbd`) until the author supplies it.
- **Do** label any demonstration data "*Illustrative data*" in the caption.
- **Do** keep figures tabular and lining, and align text to the rules' left edge.
- **Do** keep the one authored motion moment, and keep everything else still.
- **Do** check new text against Ink 2 or stronger in both themes, and print-preview new sections.

### Don't:
- **Don't** use cards, shadows, rounded containers, or corners over 2px.
- **Don't** add stat counters, percentage skill bars, progress rings or big-number "metrics". They are claims the record does not make.
- **Don't** put a kicker or eyebrow label above a heading.
- **Don't** use significance stars, standard errors or coefficients on anything that is not an estimate.
- **Don't** add a second accent colour, a gradient, a sans-serif or a monospace face.
- **Don't** use emoji or Unicode glyphs as icons; draw them as SVG in the 1.6-stroke family.
- **Don't** invent publications, dates, titles or links to fill a table.
