Task Name: Refactoring a team project.

---

## 1. Dependency Update Recommendations

Beyond React 19, your `package.json` has several "2024" dependencies that will need to be upgraded to 2026-standard refactor.

### Core Stack Upgrades

- **Vite:** Move from `5.4.10` to **`6.0.0`** (or `7.x` if you're feeling adventurous). Vite 6 is optimized for the React 19 metadata and provides faster Hot Module Replacement (HMR).
- **Tailwind CSS:** Move from `3.4.14` to **`4.0`**. Tailwind v4 is a multi-engine rewrite that is significantly faster and moves configuration into CSS, which fits your "Modern HUD" and "Clean Code" goals.
- **React Router Dom:** Upgrade from `6.28.0` to **`7.0`**. Version 7 unified React Router and Remix, giving you powerful data-loading patterns that are much more "innovative" than standard fetching.

### The "Hidden" Conflicts

- **Types:** You updated React to `19.2.4` but kept `@types/react` at `18.3.12`. This will cause a "silent war" in your IDE. You need to bump these to `^19.0.0` immediately.
- **Reactstrap & Styled-Components:** Ensure these are on their latest versions (`reactstrap` v9.2.3 is okay, but `styled-components` should be at least `v6.1.13` for React 19 compatibility).

---

## 2. Refactor Prompts

Copy and save this as `ecom-refactor-instructions.md`. It is designed to guide an agent (like Aider or Cursor) through the specific mess of a student e-commerce project.

### Phase 1: Tech Stack & Architecture Alignment

> **Role:** You are a Senior Frontend Architect.
> **Context:** Refactoring a team e-commerce project "Ecom-Express".
> **Task 1: Modernization**
>
> - Update `vite` to `^6.0.0` and `@vitejs/plugin-react` to the latest version.
> - Upgrade `tailwindcss` to `v4.0` and migrate the `tailwind.config.js` logic into `index.css` per the new standard.
> - Update `@types/react` and `@types/react-dom` to `^19.0.0` to match the React 19 core.
>
> **Task 2: File Structure & Standards**
>
> - Rename all `.js` files in `src/` to `.jsx` where they contain components (e.g., `App.js` -> `App.jsx`).
> - Ensure all components use `const ComponentName = () => {}` arrow function syntax for consistency across the team's disparate styles.

### Phase 2: E-Commerce Logic Cleanup

> **Task 3: State & Context Refactor**
>
> - Audit `src/components/Context/GlobalContext.js`.
> - Refactor the `Cart` management to use the React 19 `use` hook where possible for cleaner context consumption.
> - Standardize the `Login` validation logic to remove redundant checks.
>
> **Task 4: Component Consolidation**
>
> - The project currently has modular components like `Header`, `HeroSection`, and `Layout`. Ensure they all share a unified "Glassmorphism" design system using the Tailwind 4 utility variables.
> - Remove any dead code or "Placeholder" comments left by team members.

### Phase 3: Performance & UX

> **Task 5: Image Optimization**
>
> - Replace standard `<img>` tags in the `Products` component with optimized loading patterns.
> - Ensure `react-slick` carousels are responsive and use the new React 19 `Ref` patterns.

---

## 3. The "Team Project" Audit

Looking at your team list (Tabassum, Ashwini, Nikolas, Tuanthong), this likely has four different ways of handling buttons and margins.

**My Advice:** Don't just refactor the code—refactor the **Layout**. Student projects often have "Prop Drilling" where the `Cart` state is passed through five layers. Since i am using the **Context API**, pay attention to:

> "Identify any components receiving `cart` props that aren't using them, and replace them with a direct `useContext(GlobalContext)` call within the child component."

**Next step: dive deeper into a specific component, like the `GlobalContext.js` or the `Products.jsx` logic, to see how we can apply some React 19 "magic" there?**

**My Advice:** Don't just refactor the code—refactor the **Layout**. Student projects often have "Prop Drilling" where the `Cart` state is passed through five layers. Since i am using the **Context API**, pay attention to:

> "Identify any components receiving `cart` props that aren't using them, and replace them with a direct `useContext(GlobalContext)` call within the child component."

**Next step: dive deeper into a specific component, like the `GlobalContext.js` or the `Products.jsx` logic, to see how we can apply some React 19 "magic" there?**
