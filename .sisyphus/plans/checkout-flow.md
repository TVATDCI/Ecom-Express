# Plan: Checkout Flow with Cart Persistence

> **Plan ID:** checkout-flow
> **Created:** 2026-05-06
> **PRD:** `.sisyphus/prds/checkout-flow-prd.md`
> **Issues:** EC-001, EC-002, EC-003
> **Momus PRD Review:** WARNING (4 major, 1 minor) → fixed → PASS

---

## TL;DR

Implement a complete checkout flow for Ecom-Express, turning the existing product catalog into an actual e-commerce experience. Add cart persistence, guest checkout, shipping form, order summary, and confirmation.

**Deliverables:**
1. Cart persistence via localStorage
2. Checkout page with shipping form
3. Order summary with pricing
4. Order confirmation page
5. Order storage in localStorage

**Effort estimate:** Short (1–2 days)

---

## Prerequisites

- [x] PRD approved: `.sisyphus/prds/checkout-flow-prd.md`
- [x] Momus PRD review: PASS (after fixes)
- [x] Issues created: EC-001, EC-002, EC-003
- [x] Reference check passed

---

## Waves

### Wave 1: Cart Persistence (Foundation)

**Goal:** Make cart survive page refresh.

**Slice 1.1 — EC-001: Cart Persistence**
- **Task:** Add localStorage serialization to cart context
- **What it does:**
  - On every cart change: save to localStorage as JSON
  - On app load: read from localStorage, parse, validate shape
  - Guard all localStorage access with `typeof window !== 'undefined'`
  - If localStorage unavailable or parse fails: start with empty cart
- **Dependencies:** None
- **Verification:**
  - [ ] Add items → refresh → cart restores
  - [ ] Clear localStorage → reload → cart empty (no errors)
  - [ ] Build passes, lint passes
- **Output:** Modified `src/context/ProductContext.jsx`

---

### Wave 2: Checkout Page + Shipping Form (Blocked by Wave 1)

**Goal:** Create the checkout UI where users enter shipping details.

**Slice 2.1 — EC-002: Checkout Page + Shipping Form**
- **Task:** Create checkout route, page, and shipping form
- **What it does:**
  - Add `/checkout` route to React Router in `AppRoute.jsx`
  - Update `Cart.jsx` checkout button: navigate to `/checkout` instead of `/login`
  - Create `CheckoutPage.jsx`: layout wrapper for checkout flow. Owns shipping form state and order draft. Passes shipping data to OrderSummary and OrderConfirmation.
  - Create `ShippingForm.jsx`:
    - Fields: full name, email, address line 1, line 2 (optional), city, postal code, country
    - Required validation on all except line 2
    - Email format validation
    - Postal code: 3-10 chars, alphanumeric
    - Inline error messages
    - Submit proceeds to order summary
- **Dependencies:** EC-001 (cart persistence)
- **Verification:**
  - [ ] Click checkout → see shipping form (not login)
  - [ ] Submit empty form → validation errors shown
  - [ ] Submit invalid email → email error shown
  - [ ] Submit invalid postal code → postal code error shown
  - [ ] Submit valid form → proceed to summary
  - [ ] Build passes, lint passes
- **Output:**
  - Modified `src/AppRoute.jsx`
  - Modified `src/components/Cart/Cart.jsx`
  - New `src/components/Checkout/CheckoutPage.jsx`
  - New `src/components/Checkout/ShippingForm.jsx`

---

## Checkpoint: Mid-Build Verification (After Wave 2)

- [ ] **Verify end-to-end flow before confirmation page:**
  - [ ] Add items to cart → checkout → fill shipping form → see order summary
  - [ ] Verify shipping data correctly passed from form to summary
  - [ ] Verify totals calculate correctly (subtotal + shipping)
  - [ ] Build passes, no console errors

---

### Wave 3: Order Summary + Confirmation (Blocked by Wave 2)

**Goal:** Display order review and confirmation success.

**Slice 3.1 — EC-003: Order Summary + Confirmation**
- **Task:** Create order summary, confirmation page, and order storage
- **What it does:**
  - Create `OrderSummary.jsx`:
    - Display cart items with images, names, quantities, prices
    - Show subtotal, shipping ($5 flat, free over $50), total
    - Allow removing items or adjusting quantities
    - "Place Order" button
  - Create `OrderConfirmation.jsx`:
    - Success page with order ID (UUID), summary, delivery estimate (7-10 business days)
    - Log simulated email confirmation to console
  - Update `ProductContext.jsx`:
    - `placeOrder()` function: generate UUID, save order to localStorage, clear cart
- **Dependencies:** EC-002 (shipping form)
- **Verification:**
  - [ ] Summary shows correct items, quantities, prices
  - [ ] Shipping $5 (or $0 if over $50)
  - [ ] Confirm order → success page with order ID
  - [ ] Console shows simulated email confirmation
  - [ ] Cart is empty after confirmation
  - [ ] Order saved to localStorage
  - [ ] Build passes, lint passes
- **Output:**
  - New `src/components/Checkout/OrderSummary.jsx`
  - New `src/components/Checkout/OrderConfirmation.jsx`
  - Modified `src/context/ProductContext.jsx`

---

## Integration + Final Verification

- [ ] **Integration Verification:**
  - [ ] All PRD acceptance criteria met (Stories 1-5)
  - [ ] Full user journey works: add to cart → checkout → shipping → summary → confirm → success
  - [ ] `npm run build` passes with zero errors
  - [ ] `npm run lint` passes
  - [ ] No debug code or TODO markers left
  - [ ] Momus PRD review findings addressed:
    - [x] Order history deferred to follow-up (Story 6 removed)
    - [x] Postal validation simplified (length-based, not country-specific)

---

## Resource Assumptions

- localStorage available in target browsers (universally supported)
- UUID generation via `crypto.randomUUID()` or fallback to manual UUID
- React Router 7 supports nested route definitions
- Tailwind CSS 4 classes available for form styling

## Risk Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| localStorage quota exceeded | Low | Low | Cart + orders unlikely to exceed 5MB for MVP |
| Hydration mismatch | Medium | Low | Guard localStorage access with window check |
| React Router route conflicts | Low | Low | Verify no existing `/checkout` route |

---

## Notepad

- Decisions log: `.sisyphus/notepads/checkout-flow/decisions.md`
- Problems log: `.sisyphus/notepads/checkout-flow/problems.md`
- Learnings log: `.sisyphus/notepads/checkout-flow/learnings.md`

---

## Handoff Contract

**Next phase:** `wave-executor`
**Trigger phrase:** "start execution" or "begin work"
**Entry criteria:**
- This plan is approved by user
- All prerequisites checked off

**Wave 1 ready queue:**
1. EC-001 — Cart Persistence

**Wave 2 ready queue (blocked until Wave 1 complete):**
1. EC-002 — Checkout Page + Shipping Form

**Wave 3 ready queue (blocked until Wave 2 complete):**
1. EC-003 — Order Summary + Confirmation

**Integration gate:** EC-FINAL runs only after all waves complete.
