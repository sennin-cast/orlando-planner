---
name: Orlando Dispatch
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#424750'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#727782'
  outline-variant: '#c2c6d2'
  surface-tint: '#2060a3'
  primary: '#004b89'
  on-primary: '#ffffff'
  primary-container: '#2563a6'
  on-primary-container: '#ccdfff'
  inverse-primary: '#a4c9ff'
  secondary: '#7d5700'
  on-secondary: '#ffffff'
  secondary-container: '#ffc65e'
  on-secondary-container: '#755100'
  tertiary: '#005535'
  on-tertiary: '#ffffff'
  tertiary-container: '#007047'
  on-tertiary-container: '#95f0bd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#ffdeaa'
  secondary-fixed-dim: '#f5bd57'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5f4100'
  tertiary-fixed: '#9af5c2'
  tertiary-fixed-dim: '#7ed9a7'
  on-tertiary-fixed: '#002112'
  on-tertiary-fixed-variant: '#005233'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-title:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.012em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.008em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-md-medium:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-xs-mono:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

This design system delivers a highly utilitarian, calm, and trustworthy workspace for complex theme park travel logistics. Rather than leaning into cartoonish tropes or oversaturated amusement park clichés, the system draws inspiration from high-performance scheduling tools, airline dispatch software, and modern calendar applications. 

The aesthetic is grounded, precise, and human-designed. It balances dense, time-critical itinerary data with clear typographic hierarchy and generous structure. White surface panels rest cleanly over a light gray canvas, bounded by crisp borders rather than dramatic drop shadows. The resulting emotional tone conveys quiet competence, order, and relief—replacing the stress of multi-park scheduling with analytical clarity and effortless execution.

## Colors

The color system operates with strict utilitarian logic, reserving strong chroma solely for actionable workflows, status indicators, and crowd-level metrics:

- **Canvas & Surfaces:**
  - Base canvas: `#F8F9FA`
  - Elevated surfaces, cards, and docked panels: `#FFFFFF`
  - Subtle structural hover/active backgrounds: `#F1F4F7`
  - Borders, hair-lines, and table dividers: `#E4E8EC`

- **Primary Interactive:**
  - Default: `#2563A6`
  - Hover: `#1E4F85`
  - Subdued / Tint: `#EAF2FA`

- **Data & Semantic Crowd States:**
  - **Low Crowd:** Text/Icon `#27865B`, background tint `#EBF6F1`, border tint `#C2E6D5`
  - **Medium Crowd:** Text/Icon `#B97820`, background tint `#FEF7ED`, border tint `#F7DFB7`
  - **High / Peak Crowd:** Text/Icon `#C44B4B`, background tint `#FDF2F2`, border tint `#F5C7C7`
  - **Rest / Buffer Day:** Text/Icon `#64748B`, background tint `#F1F5F9`, border tint `#CBD5E1`

- **Fixed Commitments & Bookings:**
  - Locked Dining & Genie+/Lightning Lane events: `#C89532` (deep amber gold), tint `#FDF8EE`, border `#EED9B2`

- **Typography & Neutrals:**
  - Headings & primary labels: `#1E293B`
  - Body & data values: `#334155`
  - Secondary metadata & captions: `#64748B`
  - Disabled / placeholder states: `#94A3B8`

## Typography

Typography prioritizes tabular legibility, rapid scannability, and structural composure. The system uses **Inter** across all major hierarchy levels, supplemented by **JetBrains Mono** strictly for numeric timestamps, wait-time counts, and reservation confirmation numbers.

- Headings are tight and restrained, never ballooning into marketing display sizes.
- Tabular figures (`font-variant-numeric: tabular-nums`) must be applied globally across all time blocks, pricing tables, wait times, and walk-distance trackers.
- Avoid uppercase tracking on labels except for `label-xs-mono` when representing status codes or category flags.

## Layout & Spacing

The layout is built on a rigid 8px system (with 4px sub-divisions for micro-alignments like badges and time-axis ticks). 

- **Structure:** Desktop interfaces use a split-pane layout: a persistent left navigation/calendar overview (280px–340px width) coupled with a multi-column or timeline-driven day inspector canvas.
- **Data Density:** Layouts prefer clean inline dividers over heavy gap spacing, maintaining a density similar to professional calendaring tools.
- **Breakpoints:**
  - **Desktop (1200px+):** Multi-column multi-day itinerary view or synchronized map + schedule view.
  - **Tablet (768px - 1199px):** Collapsible sidebar, single-day multi-track view.
  - **Mobile (< 768px):** Single-column vertical stream view with a fixed top sticky day-switcher rail. Canvas margins compress to `margin-mobile` (16px), gutters to 12px.

## Elevation & Depth

This design system uses a flat, outline-driven architectural depth approach:

- **No Heavy Shadows:** Depth is defined by borders (`1px solid #E4E8EC`) on white panels placed over the `#F8F9FA` canvas.
- **Subtle Layering:**
  - Base: Canvas `#F8F9FA`
  - Layer 1 (Surface Panels, Time Columns, Card Containers): `#FFFFFF` bounded by `1px solid #E4E8EC`.
  - Layer 2 (Hover States, Inactive Cards, Toolbar Strips): `#F1F4F7` without border.
  - Overlays & Popovers (Drop-downs, Tooltips, Time Slot Inspectors): `#FFFFFF`, border `1px solid #E4E8EC`, with a faint structural drop shadow: `0 4px 12px rgba(15, 23, 42, 0.08)`.
- No glassmorphic blur filters, gradients, or heavy multi-stop drop shadows are permitted.

## Shapes

The geometric identity is calibrated to feel functional, engineered, and crisp:

- Default component corners (buttons, input fields, cards, calendar cells) are set between 6px and 8px (`rounded-base` to `rounded-md`).
- Badges, status chips, and crowd tags use small structural radiuses (4px to 6px) rather than fully rounded pills, preserving the technical data-sheet aesthetic.
- Avatars, step bullets, and lock-pin anchors are circular (`rounded-full`).

## Components

### Buttons
- **Primary:** Filled `#2563A6`, white label, 8px corner radius, height 36px (compact) or 40px (standard). Hover: `#1E4F85`. Focus ring: 2px solid `#2563A6` with 2px offset.
- **Secondary:** Surface `#FFFFFF`, border `1px solid #E4E8EC`, label `#1E293B`. Hover: `#F8F9FA` with border `#CBD5E1`.
- **Ghost/Tertiary:** No border, transparent background, label `#334155`. Hover: `#F1F4F7`.
- **Destructive:** Background `#FDF2F2`, border `1px solid #F5C7C7`, label `#C44B4B`. Hover: `#C44B4B`, label `#FFFFFF`.

### Inputs & Selectors
- Background `#FFFFFF`, border `1px solid #E4E8EC`, corner radius 6px, height 36px.
- Focus: Border color `#2563A6`, box-shadow `0 0 0 1px #2563A6`.
- Typography: `body-md` (14px). Placeholders in `#94A3B8`.

### Timeline & Itinerary Cards
- Surface `#FFFFFF`, border `1px solid #E4E8EC`, padding 12px 16px.
- Left edge accents: 3px solid color line corresponding to the event nature (e.g., `#2563A6` for transport/park hop, `#27865B` for lightning lane, `#C89532` for dining/locked events).
- Fixed/Locked status: Displays a precise inline lock icon (14px) and tag in `#C89532` against `#FDF8EE`.

### Crowd Indicator Chips
- Height 22px, padding 2px 8px, border radius 4px, font `label-sm` (12px, weight 500).
- **Low:** Background `#EBF6F1`, text `#27865B`, border `1px solid #C2E6D5`.
- **Moderate:** Background `#FEF7ED`, text `#B97820`, border `1px solid #F7DFB7`.
- **Peak:** Background `#FDF2F2`, text `#C44B4B`, border `1px solid #F5C7C7`.
- **Rest:** Background `#F1F5F9`, text `#64748B`, border `1px solid #CBD5E1`.

### Data Tables & Lists
- Table rows: Minimum height 44px, alternating hover row `#F8F9FA`. Dividers: `1px solid #E4E8EC`.
- Numerical metrics (wait times, walking durations): Right-aligned using `JetBrains Mono` or tabular `Inter`.