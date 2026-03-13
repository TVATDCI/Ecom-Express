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
- **Glassmorphism Design:** A unified, futuristic "HUD" aesthetic implemented via Tailwind 4 utility variables and CSS-in-JS.
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
  - **Styled Components:** For modular, scoped component styling.
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
│   ├── About/          # Mission and info
│   ├── Cart/           # Cart management (React 19 'use')
│   ├── Footer/         # Site-wide footer
│   ├── Header/         # Glassmorphism navigation
│   ├── Herosection/    # Promotions and hero banners
│   ├── Login/          # Unified auth logic
│   ├── Product_gallery/# Optimized image fetchers and sliders
│   ├── Products/       # Product listings and details
│   └── Trending/       # Best-sellers section
├── context/            # Global state (ProductContext)
├── App.jsx             # Main application entry and routing
├── index.css           # Global styles and Tailwind 4 theme
└── main.jsx            # React 19 root mounting
```

## Components Overview

- **Cart:** Displays items with dynamic quantity adjustment using optimized state reducers.
- **Product_gallery:** Uses `react-slick` and optimized fetching logic from `dummyjson.com` and `fakestoreapi.com`.
- **Products:** Features a modern filtering system and lazy-loaded product cards.
- **Header:** Features a responsive burger menu and persistent Glassmorphism styling.
- **ProductContext:** Centralized hub for product and cart state, optimized for React 19.

## Team Members
1. Tabassum Alim Khan
2. Ashwini
3. Nikolas Wolf
4. Tuanthong Vaidyanond
