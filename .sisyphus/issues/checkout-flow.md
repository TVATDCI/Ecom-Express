# Issues: Checkout Flow

**Project:** Ecom-Express
**Feature:** Checkout Flow with Cart Persistence
**Date:** 2026-05-06

---

## Slice 1: Cart Persistence Foundation

**ID:** EC-001
**Status:** ✅ COMPLETED
**Type:** AFK

**Description:**
Add localStorage persistence to the cart so items survive page refresh. This is the foundation for the entire checkout flow.

**Acceptance Criteria:**
- [ ] Cart items saved to localStorage on every add/remove/quantity change
- [ ] Cart restores from localStorage on app load
- [ ] If localStorage unavailable, cart starts empty (no errors)
- [ ] Hydration-safe: guard localStorage access with `typeof window !== 'undefined'`
- [ ] Build passes with zero errors
- [ ] Lint passes

**Files to Modify:**
- `src/context/ProductContext.jsx` (add localStorage serialization)

**Blockers:** None

---

## Slice 2: Checkout Page + Shipping Form

**ID:** EC-002
**Status:** ✅ COMPLETED
**Type:** AFK

**Description:**
Create the checkout page with shipping form. Update the cart checkout button to route here instead of login.

**Acceptance Criteria:**
- [ ] New route `/checkout` added to React Router
- [ ] Cart "Checkout" button navigates to `/checkout` (not `/login`)
- [ ] Shipping form with fields: full name, email, address line 1, address line 2 (optional), city, postal code, country
- [ ] All fields except line 2 are required
- [ ] Email validates format (contains @ and domain)
- [ ] Postal code validates (3-10 chars, alphanumeric)
- [ ] Form shows validation errors inline
- [ ] Submitting valid form proceeds to order summary

**Files to Modify:**
- `src/AppRoute.jsx` (add `/checkout` route)
- `src/components/Cart/Cart.jsx` (update checkout button link)
- `src/components/Checkout/CheckoutPage.jsx` (new)
- `src/components/Checkout/ShippingForm.jsx` (new)

**Blockers:** EC-001 (cart persistence must work for summary to display items)

---

## Slice 3: Order Summary + Confirmation

**ID:** EC-003
**Status:** ✅ COMPLETED
**Type:** AFK

**Description:**
Create order summary page and confirmation flow. Display cart items with pricing, allow final adjustments, generate order ID on confirmation.

**Acceptance Criteria:**
- [ ] Order summary displays all cart items with images, names, quantities, prices
- [ ] Shows subtotal, shipping cost ($5 flat, free over $50), total
- [ ] Allows removing items or adjusting quantities
- [ ] "Place Order" button generates UUID order ID
- [ ] Success page shows: order ID, order summary, estimated delivery (7-10 business days)
- [ ] Simulated email confirmation logged to console
- [ ] Cart clears after successful order
- [ ] Orders saved to localStorage

**Files to Modify:**
- `src/components/Checkout/OrderSummary.jsx` (new)
- `src/components/Checkout/OrderConfirmation.jsx` (new)
- `src/context/ProductContext.jsx` (add order storage, clear cart)

**Blockers:** EC-002 (shipping form must exist to reach summary)

---

## Integration + Final Verification

**ID:** EC-FINAL
**Status:** Open

**Verification:**
- [ ] All PRD acceptance criteria met (Stories 1-5)
- [ ] `npm run build` passes with zero errors
- [ ] `npm run lint` passes
- [ ] Manual QA: Add items → refresh → cart persists → checkout → fill form → review summary → confirm → see success page → cart empty
- [ ] No debug code or TODO markers left

**Blockers:** EC-001, EC-002, EC-003
