# Momus PRD Review: ecom-express
**Date:** 2026-05-06
**Artifacts reviewed:** PRD: `/home/vladi/projects/GitHub/Ecom-Express/.sisyphus/prds/checkout-flow-prd.md`

## Summary
**Gate Decision:** WARNING
**Blocker count:** 5 total (0 critical, 4 major, 1 minor)

### Top 3 Risks
1. **Order history scope drift** — the PRD is framed as a focused checkout-flow MVP, but Story 6 introduces navigation/history surface area outside the core purchase path.
2. **Country-based postal validation is underspecified** — the requirement implies per-country validation rules/data that are not bounded, which can expand implementation effort quickly.
3. **Verification coverage is incomplete** — the test checklist does not fully verify the hardest parts of the spec, especially country-specific postal validation and simulated email confirmation.

## Detailed Findings
### A. Logical Contradictions
A-1: MAJOR Order history is both deferred and required
- Location: Story 6 acceptance; Verification Steps
- Evidence: `"My Orders" link in navigation (when implemented).` and `Navigate to order history → see placed order`
- Conflict: The story treats navigation/history UI as something deferred, but the verification checklist requires it to exist now.
- Fix: Decide explicitly: either (a) include an order-history route/link in this PRD, or (b) move Story 6 to follow-up scope and remove the verification step.

### B. Scope Creep
B-1: MAJOR Order history extends beyond the stated checkout MVP
- Location: Solution Overview; Story 6; Out of Scope / Hardening Checklist
- Evidence: `Implement a complete checkout flow:` followed by `Order history: Store orders in localStorage` and `MVP-first scope — This IS the MVP (6 stories, frontend-only)`
- Hidden dependency: A new route/page and navigation entry are needed to make order history user-visible, which expands work beyond fixing the checkout dead end.
- Fix: Re-scope order history as a follow-up PRD, or explicitly redefine this PRD as `checkout + order history` and add the required route/navigation work to the solution overview.

B-2: MAJOR Country-specific postal validation hides non-trivial rules/data
- Location: Story 3 acceptance
- Evidence: `Postal code validates based on country selection.`
- Hidden dependency: This requires either a supported-country matrix, country-specific regex/rule set, or a narrowed country list. None is defined.
- Fix: Bound MVP scope by either limiting supported countries explicitly or replacing this with a simpler, deterministic validation rule for MVP.

### C. Missing Verification
C-1: MAJOR Postal-code-by-country requirement is not objectively verified
- Location: Story 3 acceptance; Verification Steps
- Evidence: `Postal code validates based on country selection.` and the checklist only includes `Submit shipping form with invalid email → validation error`
- Problem: The most complex validation rule in the PRD has no matching verification step, so completion cannot be objectively confirmed.
- Fix: Add explicit cases such as `select supported country + invalid postal code → error` and `select supported country + valid postal code → form proceeds`.

C-2: MINOR Simulated email confirmation lacks a verification step
- Location: Story 5 acceptance; Verification Steps
- Evidence: `Email confirmation message (simulated — console.log).`
- Problem: The checklist never verifies the simulated confirmation side effect, so that acceptance criterion can be skipped without detection.
- Fix: Add a concrete verification step such as `Confirm order → console shows simulated confirmation payload once`.

## v2.1 Hardening Checklist Audit
- **Shared packages first:** PASS — `N/A (single frontend app)` is reasonable here.
- **No inline API calls:** PASS — `N/A (no API calls in this PRD)` is consistent with the frontend-only design.
- **Mid-build checkpoint:** PASS — present as `After shipping form + summary UI, verify end-to-end flow before confirmation page`.
- **MVP-first scope:** WARNING — Story 6 order history and country-based postal validation both push beyond a tightly bounded checkout MVP.

## Fix Recommendations (Priority Order)
1. **MAJOR** Resolve Story 6 ambiguity — either make order history first-class in scope with route/nav requirements, or defer it entirely — Effort: small
2. **MAJOR** Bound postal-code validation — define supported countries/rules or simplify MVP validation — Effort: small
3. **MAJOR** Expand verification steps for postal validation and order-history behavior — Effort: trivial
4. **MINOR** Add a verification step for simulated email confirmation — Effort: trivial

## Gate JSON
```json
{
  "decision": "WARNING",
  "artifact_path": "/home/vladi/projects/GitHub/Ecom-Express/.sisyphus/prds/checkout-flow-prd.md",
  "summary": "Frontend-only checkout MVP is mostly sound, but order-history scope and country-specific postal validation are under-bounded and under-verified.",
  "blockers": [
    {
      "id": "A-1",
      "severity": "MAJOR",
      "category": "Logical Contradiction",
      "title": "Order history is both deferred and required",
      "fix": "Either include order-history route/link in this PRD or defer Story 6 and remove its verification step."
    },
    {
      "id": "B-1",
      "severity": "MAJOR",
      "category": "Scope Creep",
      "title": "Order history extends beyond the stated checkout MVP",
      "fix": "Move order history to follow-up scope or explicitly redefine this PRD as checkout plus order history and add route/navigation requirements."
    },
    {
      "id": "B-2",
      "severity": "MAJOR",
      "category": "Scope Creep",
      "title": "Country-specific postal validation hides non-trivial rules/data",
      "fix": "Limit supported countries explicitly or replace with a simpler deterministic MVP validation rule."
    },
    {
      "id": "C-1",
      "severity": "MAJOR",
      "category": "Missing Verification",
      "title": "Postal-code-by-country requirement is not objectively verified",
      "fix": "Add explicit valid/invalid postal-code test cases tied to country selection."
    },
    {
      "id": "C-2",
      "severity": "MINOR",
      "category": "Missing Verification",
      "title": "Simulated email confirmation lacks a verification step",
      "fix": "Add a checklist step that verifies the simulated confirmation event in the console."
    }
  ],
  "next_action": "user_decision"
}
```