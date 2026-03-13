# Ecom-Express

Ecom Express is a modern, high-performance e-commerce platform refactored to the latest 2026 industry standards. Built with **React 19** and **Vite 7**, it features a sleek **Glassmorphism** design system powered by **Tailwind CSS 4**.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components Overview](#components-overview)
- [Team Members](#team-members)

## Features

- **Modern Stack (2026):** Powered by React 19, Vite 7, and Tailwind CSS 4.
- **Glassmorphism Design:** A unified, futuristic "HUD" aesthetic implemented via Tailwind 4 CSS-First architecture with layered design tokens.
- **CSS-First Architecture:** All styling centralized in `src/styles/` with semantic class names and @apply patterns for maintainability.
- **React 19 "use" Hook:** Modern context consumption for cleaner and more efficient state management in the Cart and Product galleries.
- **Optimized Performance:**
  - Image lazy-loading and async decoding for faster page speeds.
  - Vite 7 optimized HMR and build pipelines.
- **Responsive Carousels:** Mobile-first, touch-friendly product sliders using `react-slick` with React 19 Ref patterns.
- **Clean Architecture:** Standardized arrow function component syntax across the entire codebase.
- **Robust Routing:** Powered by React Router 7 for seamless navigation.

## Technologies Used

- **Frontend Core:**
  - **React 19:** Utilizing the latest hooks and metadata patterns.
  - **Vite 7:** Next-generation frontend tooling.
  - **React Router 7:** Unified routing and data loading.
- **Styling & UI:**
  - **Tailwind CSS 4:** Multi-engine rewrite with CSS-first configuration.
  - **Layered CSS Architecture:** Centralized styling in `src/styles/` (theme.css, components.css, utilities.css).
  - **Glassmorphism 2.0:** 2026 design trends with dark glass panels and gold accents.
  - **React Icons:** Comprehensive iconography.
- **State Management:**
  - **Context API:** Lightweight global state with React 19 `use()` optimizations.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/ecom-express.git
   ```

2. **Install dependencies:**

   ```bash
    npm install
   ```

3. **Run the Project:**

   ```bash
   npm run dev
   ```

   This will start the project locally (typically on `http://localhost:5173`).

## Usage

Once the project is running:

- Visit the local URL to access the application.
- Use the navigation menu to explore products, manage your cart, and experience the modern Glassmorphism UI.
- Filter products by category (Furniture, Fragrances, Groceries, etc.) in the Products view.

## Project Structure

```bash
src/
├── assets/             # Images and static assets
├── components/         # Modular React components
│   ├── About/          # Mission and info (Glassmorphism)
│   ├── Cart/           # Cart management (React 19 'use')
│   ├── Footer/         # Site-wide footer (Glassmorphism)
│   ├── Header/         # Glassmorphism navigation
│   ├── Herosection/    # Promotions and hero banners
│   ├── Login/          # Unified auth logic
│   ├── Product_gallery/# Optimized image fetchers and sliders
│   ├── Products/       # Product listings and details
│   └── Trending/       # Best-sellers section
├── context/            # Global state (ProductContext)
├── styles/             # CSS-First Architecture
│   ├── index.css       # Orchestrator with @import layers
│   ├── theme.css       # Design tokens & Glassmorphism variables
│   ├── components.css  # Component classes using @apply
│   └── utilities.css   # Custom utility classes
├── App.jsx             # Main application entry and routing
└── main.jsx            # React 19 root mounting
```

## CSS Architecture

This project follows a **CSS-First Architecture** with Tailwind CSS 4:

### Layered Structure

```
src/styles/
├── index.css      # Orchestrator - imports all layers
├── theme.css      # Design tokens, colors, z-index scale
├── components.css # Component classes using @apply
└── utilities.css  # Custom utility classes
```

### Key Principles

- **Big Block Extraction:** Components with >5 classes use semantic class names
- **Mobile-First:** All styles use base → `md:` → `lg:` breakpoints
- **Zero Inline Styles:** All styling originates from CSS files
- **Theme Variables:** Centralized in `theme.css` for consistency

### Design Tokens

- **Colors:** Gold accents (`#d4af37`), Burgundy (`rgb(131,5,26)`), Glass backgrounds
- **Z-Index Scale:** z-nav (50), z-modal (90), z-toast (120)
- **Glassmorphism:** Backdrop blur, semi-transparent overlays

## Components Overview

- **Cart:** Displays items with glassmorphism cards, dynamic quantity adjustment using optimized state reducers.
- **Product_gallery:** Uses `react-slick` with glassmorphism styling and optimized fetching logic from `dummyjson.com`.
- **Products:** Features a modern filtering system with glassmorphism navigation and lazy-loaded product cards.
- **SingleProduct:** Full product details with glass panels, reviews section, and "Add to Cart" functionality.
- **Header:** Responsive burger menu with glassmorphism styling, extracted semantic classes.
- **About:** Company information with glassmorphism sections and animated profile cards.
- **Footer:** Site-wide footer with glassmorphism design, social icons with hover effects.
- **Trending:** Best-sellers section with 2026 Glassmorphism cards and hover animations.
- **ProductContext:** Centralized hub for product and cart state, optimized for React 19.

- **Cart:** Displays items with glassmorphism cards, dynamic quantity adjustment using optimized state reducers.
- **Product_gallery:** Uses `react-slick` with glassmorphism styling and optimized fetching logic from `dummyjson.com`.
- **Products:** Features a modern filtering system with glassmorphism navigation and lazy-loaded product cards.
- **SingleProduct:** Full product details with glass panels, reviews section, and "Add to Cart" functionality.
- **Header:** Responsive burger menu with glassmorphism styling, extracted semantic classes.
- **About:** Company information with glassmorphism sections and animated profile cards.
- **Footer:** Site-wide footer with glassmorphism design, social icons with hover effects.
- **Trending:** Best-sellers section with 2026 Glassmorphism cards and hover animations.
- **ProductContext:** Centralized hub for product and cart state, optimized for React 19.

## Documentation

- **[Architecture Document](documents/refactor-v1-styling-architecture.md):** Complete guide to the CSS-First architecture, design system, and refactoring process.

## Team Members

1. Tabassum Alim Khan
2. Ashwini
3. Nikolas Wolf
4. Tuanthong Vaidyanond
