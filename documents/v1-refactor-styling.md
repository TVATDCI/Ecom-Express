This document is a comprehensive instruction set designed to be saved as `v1-refactor-styling.md`.It is focus on execute the migration from `styled-components` to a centralized Tailwind 4 theme while fixing responsiveness.

---

# CLI Agent Prompt: Ecom-Express Phase 3 Refactor

## **Project Context**

You are refactoring "Ecom-Express," a team e-commerce project recently upgraded to **React 19, Vite 7, and Tailwind CSS 4.2.1**.
**The Goal:** Eliminate `styled-components` entirely to remove the CSS-in-JS overhead, centralize all styles into a Tailwind 4 design system, and ensure mobile-first responsiveness across all components.

---

## **Step 1: Establish the Tailwind 4 Design System**

1. **Create Theme File:** Create `src/styles/theme.css`.
2. **Define @theme Directive:** Move the Glassmorphism variables from `index.css` into this file using the Tailwind 4 `@theme` block.

- Define `--color-glass-bg`, `--color-glass-border`, `--color-accent`, and `--color-glow`.

1. **Define @utility Classes:** Create a global `.glass-panel` utility:

```css
@utility glass-panel {
  background: var(--color-glass-bg);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--color-glass-border);
  @apply rounded-xl shadow-lg;
}
```

1. **Connect Styles:** Import `src/styles/theme.css` into `src/main.jsx`.

---

## **Step 2: Component Migration & "The Purge"**

Iterate through all components in `src/components/`. For each component:

1. **Remove Styled-Components:** Delete all `const StyledX = styled.div...` blocks.
2. **Convert to Utility Classes:** Replace styled components with standard HTML elements using Tailwind utility classes.
3. **Implement Responsiveness:** Use mobile-first breakpoints (`sm:`, `md:`, `lg:`) for all layouts.

- **Header:** Ensure the navigation is a hidden-on-mobile burger menu that becomes a flex-row on desktop.
- **HeroSection:** Stack content vertically on mobile; use `flex-row` on `lg` screens.
- **Products/Trending:** Use `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` for product listings.

1. **Cleanup Imports:** Remove `import styled from 'styled-components'` from all `.jsx` files.

---

## **Step 3: Component-Specific Fixes**

- **`ImgSlider.jsx`:** Ensure the `react-slick` container is constrained to `max-w-full` to prevent mobile horizontal scrolling.
- **`Cart.jsx`:** Refactor the cart table/list to be a vertical stack on mobile to improve readability.
- **`LoginSignup.jsx`:** Apply the `.glass-panel` utility to the main container and ensure the form width is `w-[90%]` on mobile and `max-w-md` on desktop.

---

## **Step 4: Dependency & Final Audit**

1. **Uninstall:** Run `npm uninstall styled-components`.
2. **Lint Check:** Run `npm run lint` to ensure no unused variable errors remain from the removed styled-components.
3. **Build Verification:** Run `npm run build` to confirm the Tailwind 4 JIT engine correctly compiles the new theme and utilities.

---

### **Strategic Rules for the Agent:**

- **No Inline Styles:** Use Tailwind classes or the centralized `@theme` variables only.
- **Preserve Logic:** Do not change the `use(Context)` data-fetching or cart logic.
- **Mobile First:** Write the base classes for mobile (e.g., `p-4`) and add desktop overrides (e.g., `md:p-8`).

---
