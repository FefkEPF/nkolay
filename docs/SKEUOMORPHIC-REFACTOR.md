# Skeuomorphic UI Refactor Plan

## Project Overview

**Repository:** NKolay Medya — React + Vite + Express corporate marketing site  
**Current Design:** Modern flat/minimal with Tailwind CSS, subtle shadows, clean typography  
**Target Design:** Skeuomorphic — realistic materials, tactile surfaces, depth through layered shadows and textures  
**Constraint:** All core functionality must remain intact. This is a visual/UX refactor only.

---

## 1. Design Token System

Skeuomorphism relies on consistent material properties. Introduce a single source of truth in `src/index.css`.

### 1.1 Surface Materials

```css
:root {
  /* Flat baseline */
  --surface-bg: #f8f9fa;
  --surface-card: #ffffff;
  --surface-elevated: #ffffff;
  --surface-texture: none;
  --surface-noise: 0%;
  --border-radius-base: 0.75rem;
  --border-radius-pill: 9999px;

  /* Material shadows */
  --shadow-resting:
    0 1px 2px rgba(0,0,0,0.04),
    0 4px 12px rgba(0,0,0,0.06);
  --shadow-raised:
    0 2px 4px rgba(0,0,0,0.06),
    0 8px 24px rgba(0,0,0,0.10);
  --shadow-float:
    0 4px 8px rgba(0,0,0,0.08),
    0 16px 48px rgba(0,0,0,0.14);
  --shadow-inset:
    inset 0 1px 0 rgba(255,255,255,0.7),
    inset 0 2px 4px rgba(0,0,0,0.06);
}
```

### 1.2 Toggle Mechanism

Add a development-only toggle via URL parameter or a fixed dev control:

- `?design=skeuomorphic` — enables skeuomorphic tokens
- `?design=flat` — baseline
- Default: flat

Implementation: set `data-theme="skeuomorphic"` on `<html>` when active. All component styles react to this attribute.

---

## 2. Global CSS Changes

### 2.1 Background Texture

Replace flat `#FAFAFA` with a subtle paper-like texture:

```css
body {
  background-color: var(--surface-bg);
  background-image:
    radial-gradient(1200px 600px at 10% -20%, rgba(196,30,42,0.04), transparent 60%),
    radial-gradient(800px 400px at 110% 0%, rgba(0,0,0,0.03), transparent 60%);
}

[data-theme="skeuomorphic"] body {
  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E"),
    radial-gradient(1200px 600px at 10% -20%, rgba(196,30,42,0.05), transparent 60%);
}
```

### 2.2 Typography

Keep `Inter` for body, but add depth via text-shadow on headings:

```css
[data-theme="skeuomorphic"] h1,
[data-theme="skeuomorphic"] h2,
[data-theme="skeuomorphic"] h3 {
  text-shadow: 0 1px 1px rgba(0,0,0,0.06);
}
```

### 2.3 Focus & Accessibility

Preserve all existing WCAG focus rings. Skeuomorphism must not break keyboard navigation or contrast.

---

## 3. Component-by-Component Refactor

### 3.1 Navbar (`src/components/Navbar.tsx`)

Current: glass-morphism pill (`backdrop-blur-xl`, `bg-white/95`)  
Skeuomorphic target: solid frosted panel with inset highlight and deeper shadow.

**Changes:**
- Remove `backdrop-blur-*` classes
- Add `bg-white border border-gray-300`
- Replace `shadow-[var(--shadow-elevated)]` with `shadow-float`
- Add inner top highlight: `box-shadow: var(--shadow-inset), var(--shadow-resting)`
- Mega menu: raise depth to `shadow-float`, add `border border-gray-300/80`
- Mobile menu: same treatment, ensure touch targets remain ≥44px

### 3.2 Hero (`src/components/Hero.tsx`)

Current: clean white field, flat CTAs, subtle right-side glow  
Skeuomorphic target: layered paper surface, tactile buttons, embossed badge.

**Changes:**
- Badge: remove `backdrop-blur`, add `bg-white border border-gray-300 shadow-resting`, rounded corners `border-radius-base`
- Heading: add `text-shadow` via global CSS
- Description: keep readable, remove blur
- CTAs:
  - Primary: `bg-primary border-b-4 border-primary-dark` for press effect, `shadow-raised`, active state `border-b-0 translate-y-0.5`
  - Secondary: `bg-white border border-gray-300 shadow-resting`, hover `shadow-raised`
- Stats cards: `bg-white border border-gray-300 shadow-resting`, hover `shadow-raised`, inner highlight on top edge
- Right column N mark: keep image, wrap in embossed container with `shadow-inset` border

### 3.3 Services (`src/components/Services.tsx`)

Current: `rounded-3xl`, `shadow-sm`, `border-gray-200/60`  
Skeuomorphic target: material cards with depth and texture.

**Changes:**
- Section header badge: `bg-white border border-gray-300 shadow-resting rounded-full`
- Cards:
  - `bg-white border border-gray-300 rounded-[var(--border-radius-base)]`
  - `shadow-resting` default, `hover:shadow-raised`
  - Add `transition-shadow duration-200`
  - Icon container: `bg-gray-50 border border-gray-200`, add subtle inner shadow
  - Hover: slight lift (`-translate-y-1`) + shadow increase
- Remove any `backdrop-blur` usage

### 3.4 Service Detail (`src/components/ServiceDetail.tsx`)

- Header CTA buttons: press effect with `border-b-4`, active state removes bottom border and shifts down
- Content cards: `bg-white border border-gray-300 shadow-resting`
- Metric highlights: embossed badge style

### 3.5 References (`src/components/References.tsx`)

Current: mixed dark spotlight + light cards  
Skeuomorphic target: unified material system.

**Changes:**
- Spotlight card:
  - Option A (light): `bg-white border border-gray-300 shadow-float`
  - Option B (dark skeuomorphic): `bg-gray-900 border border-gray-700` with inner glow `box-shadow: inset 0 1px 0 rgba(255,255,255,0.1)`
- Testimonial cards: `bg-white border border-gray-300 shadow-resting rounded-[var(--border-radius-base)]`
- Avatars: `border-2 border-white shadow-resting` to lift off card
- Bottom CTA: raised panel with `shadow-float`

### 3.6 Contact Form (`src/components/ContactForm.tsx`)

- Form container: `bg-white border border-gray-300 shadow-resting`
- Inputs:
  - `bg-gray-50 border border-gray-300`
  - Focus: `bg-white border-primary shadow-[0_0_0_3px_rgba(196,30,42,0.1)]`
  - Remove `backdrop-blur`
- Buttons: same press effect as Hero CTAs
- Info cards: `bg-white border border-gray-300 shadow-resting`

### 3.7 AI Consultant (`src/components/AiConsultant.tsx`)

- Form card: `bg-white border border-gray-300 shadow-resting`
- Result cards:
  - Diagnosis/tone: `bg-white border border-gray-300 shadow-resting`
  - Geo hook: `bg-primary-light border border-primary/20`
  - Calendar cards: `bg-white border border-gray-300 shadow-resting`
  - CTA card: `bg-primary border-b-4 border-primary-dark shadow-float`

### 3.8 Footer (`src/components/Footer.tsx`)

- Keep dark theme for contrast, but add texture:
  - `bg-dark-surface` with subtle noise overlay
  - Links: remove hover color shift, add underline emboss effect
  - Logo container: `bg-white/10 border border-white/20 backdrop-blur-none`
- Remove glass-morphism

### 3.9 Logo (`src/components/Logo.tsx`)

- White pill container: replace `filter: brightness(0) invert(1)` with a dedicated white-background wrapper
- Add `shadow-resting` to logo container for tactile feel

### 3.10 404 Page (`src/components/NotFound.tsx`)

- Background: keep geometric, but add paper texture overlay
- Buttons: same press-effect CTAs

### 3.11 Ticker (`src/components/ReferencesTicker.tsx`)

- Fade edges: keep gradient, but use solid white panels with subtle border instead of transparent gradients

---

## 4. Asset Strategy

### 4.1 Shadows

All shadows must use the token system. Never hardcode `rgba` values in components.

**Mapping:**
| Current | Skeuomorphic |
|---------|-------------|
| `shadow-sm` | `shadow-resting` |
| `shadow-md` | `shadow-raised` |
| `shadow-lg` | `shadow-float` |
| `shadow-[var(--shadow-elevated)]` | `shadow-float` |
| `backdrop-blur-*` | remove, use solid surfaces |

### 4.2 Gradients

- Keep brand gradient for headings/accents
- Add subtle radial ambient light to `body` background
- Remove heavy blur blobs; replace with soft, large radial gradients at low opacity

### 4.3 Textures

- **Noise:** SVG data URI for paper grain (see 2.1)
- **Emboss:** `box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), inset 0 2px 4px rgba(0,0,0,0.06)`
- **Engrave:** `box-shadow: inset 0 2px 4px rgba(0,0,0,0.12)`

### 4.4 Borders

- Replace `border-gray-200/60` with `border-gray-300`
- Add `border-white` inner highlights on raised elements
- Consistent width: `1px` for cards, `2px` for active/focused states

---

## 5. Layout & Spacing

- Keep existing grid layouts and responsive breakpoints
- Increase card padding slightly: `p-6 md:p-8` → `p-8 md:p-10`
- Increase section vertical rhythm: `py-20 md:py-28` → `py-24 md:py-32`
- Maintain WCAG touch target sizes (≥44px)

---

## 6. Implementation Order

1. **Phase 0 — Baseline commit** (ensure clean git state)
2. **Phase 1 — CSS tokens** (`src/index.css`): add variables, global texture, toggle logic
3. **Phase 2 — DevToggle**: URL-based or fixed control to switch modes instantly
4. **Phase 3 — Core shell**: Navbar, Footer, Hero (highest visual impact)
5. **Phase 4 — Content cards**: Services, References, ServiceDetail
6. **Phase 5 — Forms**: ContactForm, AiConsultant inputs/buttons
7. **Phase 6 — Polish**: 404, ticker, legal page, animations
8. **Phase 7 — Accessibility audit**: contrast, focus, motion preferences
9. **Phase 8 — Revert test**: switch to flat, confirm no broken state

---

## 7. Revert Strategy

Because all changes are additive and token-driven:

1. Remove `[data-theme="skeuomorphic"]` blocks from `index.css`
2. Remove `DevDesignToggle` component and its mount
3. Replace token classes with original flat values if desired
4. No component logic is destroyed; all refactors are class-level

---

## 8. Non-Negotiables

- Preserve all routing (`react-router-dom`)
- Preserve all data fetching and form submission logic
- Preserve SEO hooks (`useSeo`)
- Preserve lazy loading and suspense boundaries
- Maintain `prefers-reduced-motion` support
- Maintain WCAG 2.1 AA contrast ratios

---

## 9. Recommended Skeuomorphic Palette (Optional)

If you want to go beyond flat-to-skeuomorphic and add material colors:

```css
[data-theme="skeuomorphic"] {
  --surface-bg: #f3f4f6;
  --surface-card: #ffffff;
  --surface-elevated: #f9fafb;
  --accent-warm: #fef3c7;
  --accent-cool: #e0f2fe;
}
```

Use sparingly. The brand red (`#C41E2A`) should remain the dominant accent.

---

## 10. File Checklist

| File | Action |
|------|--------|
| `src/index.css` | Add tokens, textures, toggle |
| `src/components/DevDesignToggle.tsx` | Create dev toggle |
| `src/main.tsx` | Mount toggle |
| `src/components/Navbar.tsx` | Refactor nav + mega menu |
| `src/components/Hero.tsx` | Refactor hero + stats |
| `src/components/Services.tsx` | Refactor service cards |
| `src/components/ServiceDetail.tsx` | Refactor detail CTAs + cards |
| `src/components/References.tsx` | Refactor testimonial cards + spotlight |
| `src/components/ContactForm.tsx` | Refactor form inputs + buttons |
| `src/components/AiConsultant.tsx` | Refactor AI result cards |
| `src/components/Footer.tsx` | Refactor footer links + logo |
| `src/components/Logo.tsx` | Adjust logo container shadow |
| `src/components/NotFound.tsx` | Refactor 404 buttons |
| `src/components/ReferencesTicker.tsx` | Refactor fade edges |

---

*This plan is reversible and non-destructive. Every change can be undone by reverting CSS tokens and class names.*
