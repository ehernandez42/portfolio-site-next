---
name: Eleazar Hernandez — Systems Atlas
description: A project-first software portfolio built as an airy technical field index.
colors:
  paper: "#f2efe7"
  ink: "#15384e"
  ink-soft: "#476375"
  coral: "#e96c4d"
  mint: "#b8d9cb"
  sand: "#e4d6bc"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(3.8rem, 8.3vw, 7.7rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.075em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  none: "0"
spacing:
  page-gutter: "24px"
  section: "110px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "14px 19px"
  project-active:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
---

# Design System: Eleazar Hernandez — Systems Atlas

## Overview

**Creative North Star: "The Systems Atlas"**

This portfolio treats software work as territory to inspect rather than content to skim. It borrows the spatial logic of an engineering diagram and the quiet tactility of a field notebook: warm drafting paper, marine ink, thin construction lines, and colored evidence fields make a technical practice feel authored rather than templated.

The experience is project-first and subtly layered. Large names, fixed index markers, and expanding field notes establish a showcase rhythm; coral is a directional signal, never a generic primary button color.

**Key Characteristics:**
- Airy paper-like base instead of dark-interface chrome.
- Project entries expand into evidence on hover or keyboard focus.
- Fine rules and overlapping imagery create structure without card stacks.
- Soft offset shadows appear only on the portrait artifact.

## Colors

A warm paper ground carries calm authority; deep marine ink does the reading work while mint, sand, and coral make the system legible.

### Primary
- **Marine Ink:** used for type, rules, controls, and precise navigation.
- **Coral Signal:** used for the active display word, small directional cues, and focus emphasis.

### Secondary
- **Field Mint:** fills the active Weekly Friends List project state.
- **System Coral Wash:** fills the active Rotate Translation project state.

### Neutral
- **Drafting Paper:** the site-wide ground.
- **Soft Ink:** secondary explanatory copy and placeholders.
- **Sand Backing:** the portrait's physical mounting surface.

### Named Rules
**The Signal-Not-Theme Rule.** Coral directs attention; it never becomes a page-wide background or a substitute for hierarchy.

## Typography

**Display Font:** Poppins (with sans-serif fallback)
**Body Font:** Inter (with sans-serif fallback)

**Character:** Tight, low-tracked Poppins headings act as large typographic landmarks. Inter handles technical explanation, labels, and form fields with quiet clarity.

### Hierarchy
- **Display** (700, clamp 3.8rem–7.7rem, 0.88 line-height): hero and major section statements.
- **Project title** (700, clamp 1.65rem–3.6rem, 1 line-height): project-index entries.
- **Body** (400, 1rem, 1.65 line-height): explanatory copy, kept to approximately 52ch in the hero.
- **Label** (700, 0.68rem, 0.14em tracking, uppercase): orientation and metadata only.

### Named Rules
**The Landmark Rule.** A large heading should carry the section without a decorative eyebrow competing above it.

## Layout

The home route uses a wide 1380px shell with 24px gutters. The hero is a two-column composition: an oversized statement and action on the left, an angled portrait artifact on the right. Project work switches to an index with fixed number, title, route, and expand-on-inspection detail. Background, services, and contact use asymmetric two-column spreads; at 760px they stack into a single clear reading path.

## Elevation & Depth

The system is subtly layered, not glossy. Most surfaces remain flat and are separated by fine ink rules. The portrait alone sits on a sand backing with a soft, offset ambient shadow (`15px 22px 38px rgba(21,56,78,.17)`), making it feel pinned into the atlas rather than floating as interface decoration.

### Named Rules
**The Artifact Rule.** Depth belongs to physical evidence, not every container.

## Shapes

Forms are square and deliberate: controls, project rows, rules, and buttons use zero radius. The only soft geometry is the oversized circular construction line behind the hero, which acts as a diagrammatic guide rather than decoration.

## Components

### Buttons
- **Shape:** square, no radius.
- **Primary:** marine ink on drafting paper, with compact padding.
- **Hover / Focus:** hover raises with an offset ambient shadow; keyboard focus uses a coral outline.

### Inputs / Fields
- **Style:** transparent ground, a single bottom rule, no enclosing card.
- **Focus:** the bottom rule shifts to coral.

### Navigation
- **Style:** compact, high-contrast text navigation on a single top rule.
- **States:** ordinary links reveal a coral underline; the résumé link inverts to marine ink on hover; mobile navigation opens as a paper panel.

### Project Index
- **Style:** numbered rows separated by fine rules, with role, title, route arrow, and hidden field notes.
- **State:** hover and focus fill the selected row with mint or coral wash, shift the title, rotate the arrow, and reveal system metadata.

## Do's and Don'ts

### Do:
- **Do** lead with real work and let a project title carry visual scale.
- **Do** use fine rules, restrained metadata, and warm negative space to organize information.
- **Do** reserve the colored field fills for active project inspection.
- **Do** retain visible keyboard focus in coral.

### Don't:
- **Don't** return to a dark ground with neon accents.
- **Don't** rebuild the page as a grid of equal cards.
- **Don't** add rounded pills, glass effects, or generic dashboard chrome.
- **Don't** use coral as a substitute for content hierarchy.
