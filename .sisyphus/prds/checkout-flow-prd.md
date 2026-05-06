# PRD: Checkout Flow with Cart Persistence

## Problem Statement

Ecom-Express currently has a functional product catalog and cart UI, but the purchase journey is broken. The "Checkout" button redirects to a mock login page that uses `setTimeout` simulation. Cart state is lost on page refresh. There is no shipping form, payment processing, or order confirmation. This makes the e-commerce experience incomplete — users can browse and add items, but cannot complete a purchase.

## Solution Overview

Implement a complete checkout flow:
1. **Cart persistence:** Save cart to `localStorage` so items survive page refresh
2. **Guest checkout:** Allow purchase without account (with email capture)
3. **Shipping form:** Collect address with validation
4. **Order summary:** Display cart items, totals, shipping cost before confirmation
5. **Order confirmation:** Show success page with order ID and summary

Out of scope for this PRD: payment processing (Stripe integration), user authentication backend, admin dashboard.

## User Stories

### Story 1: Cart Persistence
- As a shopper, I want my cart to survive page refresh, so I don't lose my selections.
- Acceptance: Cart items are saved to localStorage on every change. Cart restores from localStorage on app load. If localStorage is unavailable, cart starts empty.

### Story 2: Guest Checkout
- As a shopper, I want to complete my purchase without creating an account, so I can buy quickly.
- Acceptance: Checkout button leads to shipping form (not login). Email is captured at shipping step. No authentication required.

### Story 3: Shipping Form
- As a shopper, I want to enter my shipping address with validation, so my order ships to the correct location.
- Acceptance: Form fields: full name, email, address line 1, address line 2 (optional), city, postal code, country. All fields except line 2 are required. Email validates format. Postal code validates (minimum 3 characters, maximum 10 characters, alphanumeric).

### Story 4: Order Summary
- As a shopper, I want to review my order before confirming, so I know exactly what I'm paying for.
- Acceptance: Displays all cart items with images, names, quantities, prices. Shows subtotal, shipping cost (flat $5 or free over $50), total. Allows removing items or adjusting quantities.

### Story 5: Order Confirmation
- As a shopper, I want confirmation that my order was placed, so I know the purchase succeeded.
- Acceptance: Success page shows order ID (generated UUID), order summary, estimated delivery (7-10 business days). Email confirmation message (simulated — console.log). Clear cart after successful order.

## Implementation Decisions

### Module Boundaries

| Module | Interface | Hides |
|--------|-----------|-------|
| `useCart` hook (updated) | `{ cart, addToCart, removeFromCart, updateQuantity, clearCart }` | localStorage serialization, hydration mismatch prevention |
| `CheckoutPage` | Props: none (reads cart from context) | Shipping form state, validation logic, order creation |
| `ShippingForm` | Props: `onSubmit(data)`, `defaultValues` | Validation rules, country/postal code mapping |
| `OrderSummary` | Props: `items`, `shippingCost`, `onUpdateQuantity`, `onRemove` | Price calculations, display formatting |
| `OrderConfirmation` | Props: `order` | UUID generation, date formatting, delivery estimate |

### Decision Log

**Decision 1: localStorage for cart and orders (not backend)**
- Choice: Use localStorage for cart persistence and order storage
- Rejected: Immediate backend integration — out of scope, requires API design, database, auth
- Rationale: Keeps this PRD frontend-only. Backend integration can be a follow-up PRD.

**Decision 2: Guest checkout (no auth required)**
- Choice: Allow purchase without login
- Rejected: Mandatory account creation — adds friction, requires auth backend
- Rationale: Maximizes conversion. Email captured at shipping can be used for future account creation.

**Decision 3: Flat shipping rate ($5, free over $50)**
- Choice: Simple shipping calculation
- Rejected: Real-time shipping quotes — requires integration with shipping APIs
- Rationale: Good enough for MVP. Complex shipping can be future work.

## Testing Decisions

### Verification Steps
- [ ] Add items to cart → refresh page → cart restores correctly
- [ ] Clear localStorage → reload app → cart is empty (no errors)
- [ ] Click checkout → see shipping form (not login page)
- [ ] Submit shipping form with invalid email → validation error
- [ ] Submit valid form → see order summary with correct totals
- [ ] Confirm order → see success page with order ID
- [ ] Check localStorage → order saved with correct data
- [ ] Confirm order → console shows simulated email confirmation payload
- [ ] Submit shipping form with invalid postal code (too short) → validation error
- [ ] Submit shipping form with valid postal code → form proceeds
- [ ] `npm run build` passes with zero errors
- [ ] `npm run lint` passes

## Out of Scope
- Payment processing (Stripe/PayPal integration)
- User authentication backend
- Inventory management
- Email service integration (send real emails)
- Admin dashboard
- Real-time shipping quotes
- Product reviews/ratings

## Open Questions / Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| localStorage size limit (~5MB) | Low | Cart + orders unlikely to exceed limit for MVP |
| Hydration mismatch with SSR | Medium | Guard localStorage access with `typeof window !== 'undefined'` |
| No payment = no real revenue | Low | This is a portfolio/learning project, not production |

## PRD Hardening Checklist

- [x] Content Boundaries — N/A (no dynamic content truncation)
- [x] Score/Metric Normalization — N/A
- [x] Fixture/Test Data Provenance — localStorage only
- [x] Latency/Performance Contracts — localStorage is synchronous
- [x] Token/Rate Limits — N/A (no API calls)
- [x] Error Boundaries — Guard localStorage, validate shipping form
- [x] State/Persistence Contract — localStorage, cleared on order completion
- [x] Shared packages first — N/A (single frontend app)
- [x] No inline API calls — N/A (no API calls in this PRD)
- [x] Mid-build checkpoint — After shipping form + summary UI, verify end-to-end flow before confirmation page
- [x] MVP-first scope — This IS the MVP (5 stories, frontend-only)
