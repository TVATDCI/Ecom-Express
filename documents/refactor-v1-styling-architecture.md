This document is the final instruction set for the **V1 Styling Architecture & Cleanup**. It is designed to be saved as `refactor-v1-styling-architecture.md` and fed directly to a CLI-based coding agent.

---

- First of all, please also double check @src/components/About/ and @src/components/Footer/ They have not been refactored!

# CLI Agent Prompt: V4 Styling Architecture & Final Migration

## 1. Project Context & Mission

The project is an e-commerce platform using **React 19**, **Vite 7**, and **Tailwind CSS 4.2.1**.
**Objective:** Transition to a "CSS-First" architecture. We must move styling logic out of JSX to improve scalability, finish the removal of `styled-components` (specifically in `Footer.jsx`), and ensure strict mobile-first responsiveness across all viewport sizes (Mobile → Tablet → Desktop).

---

## 2. Directory & Entry Point Reorganization

1. **Relocate:** Move `src/index.css` to `src/styles/index.css`.
2. **Update Entry:** In `src/main.jsx`, update the import to: `import './styles/index.css';`.
3. **Layering (Tailwind 4.2):** Refactor `src/styles/index.css` to serve as a manifest file using `@import` for the following layers:

- `@import "tailwindcss";`
- `@import "./theme.css";` (Design tokens & @theme variables)
- `@import "./components.css";` (Reusable component classes using @apply)
- `@import "./utilities.css";` (Custom one-off functional utilities)

---

## 3. The "Big Block" Extraction (Clean JSX)

Identify JSX components with large strings of Tailwind utility classes (e.g., `Header.jsx`, `HeroSection.jsx`, `ProductCard.jsx`).

1. **Rule:** If an element has more than 5 utility classes, extract them into `src/styles/components.css`.
2. **Implementation:** Use the `@apply` directive to create semantic class names.

- **Example:** Transform `<div className="flex flex-col md:flex-row items-center justify-between p-6 bg-glass shadow-xl">` into `<div className="header-inner-wrapper">`.

1. **Responsiveness:** Ensure every extracted class includes the mobile-to-desktop progression:

- Base classes for Mobile.
- `md:` prefix for Tablet.
- `lg:` or `xl:` for Desktop.

---

## 4. Final Component Migration: `Footer.jsx`

The `Footer.jsx` component is the last file still using `styled-components`.

1. **Convert:** Replace all `styled` elements (e.g., `FooterContainer`, `LinkGroup`, `SocialIcon`) with semantic HTML tags (`footer`, `div`, `a`).
2. **Styling:** Define the styles for these elements in `src/styles/components.css` using the `@apply` pattern.
3. **Responsive Footer:** Ensure the footer layout stacks vertically on mobile and spreads into columns/rows on desktop.
4. **Cleanup:** Remove `import styled from 'styled-components'` and verify `styled-components` can be uninstalled from `package.json`.

---

## 5. Theme Hardening (`theme.css`)

Ensure all brand-specific values are centralized in the `@theme` block in `src/styles/theme.css`:

- **Colors:** Map specific brand colors (like the header's burgundy `rgb(131, 5, 26)`) to Tailwind variables.
- **Glassmorphism:** Standardize `--color-glass-bg` and `--blur-intensity` to maintain the HUD aesthetic across the entire team project.
- **Z-Index:** Define a standard z-index scale (e.g., `--z-nav: 50;`, `--z-modal: 100;`) to prevent stacking issues.

---

## 6. Verification & Guardrails

- **Mobile-First Priority:** Do not use `max-width` media queries. Always start with mobile styles and scale up using `md:` and `lg:`.
- **Zero Inline Styles:** All styling must originate from the CSS files in `src/styles/`.
- **Build Check:** Run `npm run build` to ensure the Tailwind 4.2 engine correctly processes the nested `@import` and `@apply` directives.

---

### Summary of New Structure

- **src/styles/index.css**: The orchestrator.
- **src/styles/theme.css**: The "Source of Truth" for variables.
- **src/styles/components.css**: The "Cleaner" for the JSX.
- **src/styles/utilities.css**: The "Exceptions" and custom logic.
