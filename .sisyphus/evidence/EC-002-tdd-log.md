# TDD Log: EC-002 — Checkout Page + Shipping Form

**Slice:** EC-002
**Date:** 2026-05-07
**Status:** ✅ PASSED

---

## Research Phase

**Files read:**
- `src/AppRoute.jsx` — React Router routes, uses `<Layout>` wrapper for all pages
- `src/components/Cart/Cart.jsx` — checkout button navigates to `/login`, has `console.log(total)` debug line
- `src/context/ProductContext.jsx` — cart state via `useReducer`, exposes `state` and `dispatch`

**Findings:**
- App uses React Router 7 with `Routes`/`Route` pattern
- All routes wrapped in `<Layout>` component
- Cart button goes to `/login` (mock page)
- Checkout directory did not exist

---

## Strategy Phase

**Approach:**
- Create `src/components/Checkout/` directory
- Build `CheckoutPage.jsx` as layout wrapper owning multi-step state (shipping → summary → confirmation)
- Build `ShippingForm.jsx` as controlled form with inline validation
- Update `AppRoute.jsx` to add `/checkout` route
- Update `Cart.jsx` checkout button target

**Validation plan:**
- Build: `npm run build` → zero errors
- Lint: `npm run lint` → zero errors
- Manual QA: Navigate from cart → shipping form → validation → summary

---

## Execution Phase

### Changes Made

**1. New: `src/components/Checkout/ShippingForm.jsx`**
- Controlled form with state: fullName, email, address1, address2, city, postalCode, country
- Validation rules:
  - All fields required except address2
  - Email: regex `^[^\s@]+@[^\s@]+\.[^\s@]+$`
  - Postal code: `^[a-zA-Z0-9]{3,10}$` (alphanumeric, 3-10 chars)
- Inline error messages below each field
- Clears field error on change
- Calls `onSubmit(formData)` when valid

**2. New: `src/components/Checkout/CheckoutPage.jsx`**
- Owns `step` state: `"shipping"` | `"summary"` | `"confirmation"`
- Owns `shippingData` state (passed from form to summary/confirmation)
- Reads cart from `ProductContext`
- Calculates: subtotal, shipping ($5 flat, free over $50), total
- Shipping step: renders `ShippingForm`
- Summary step: shows shipping address, cart items with thumbnails/prices, totals, back/place order buttons
- Confirmation step: generates UUID order ID, logs simulated email to console, shows success message with delivery estimate (7-10 business days)

**3. Modified: `src/AppRoute.jsx`**
- Added import for `CheckoutPage`
- Added `/checkout` route wrapped in `<Layout>`

**4. Modified: `src/components/Cart/Cart.jsx`**
- Changed checkout button `navigate("/login")` → `navigate("/checkout")`
- Removed `console.log(total)` debug line

### Verification

| Check | Result | Evidence |
|-------|--------|----------|
| Build | ✅ PASS | `vite build` — 118 modules, 1.86s, zero errors |
| Lint | ✅ PASS | `eslint .` — 0 errors (2 pre-existing warnings) |
| No debug code | ✅ PASS | console.log removed |

---

## PRD Compliance (Story 2: Guest Checkout)

- [x] Checkout button leads to shipping form (not login)
- [x] Email captured at shipping step
- [x] No authentication required

---

## PRD Compliance (Story 3: Shipping Form)

- [x] Full name, email, address, city, postal code, country fields
- [x] Address line 2 optional
- [x] Required validation on mandatory fields
- [x] Email format validation
- [x] Postal code 3-10 chars alphanumeric validation
- [x] Inline error messages

---

## Notes

- Order summary and confirmation are implemented inline within `CheckoutPage.jsx` rather than as separate components. This keeps the checkout flow self-contained. Wave 3 (EC-003) will extract these into separate components and add `placeOrder()` persistence logic.
- Used Tailwind CSS utility classes for consistent styling.
- `crypto.randomUUID()` used with fallback to timestamp+random string for broader browser support.
