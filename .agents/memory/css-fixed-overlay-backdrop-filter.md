---
name: Fixed overlays + backdrop-filter containing-block trap
description: Why a position:fixed mobile-menu overlay only showed at the top of the page once scrolled, and the fix.
---

# Symptom
A full-screen `position: fixed; inset-0` mobile-menu overlay (in GUSI's `Header`) only showed its items when the page was scrolled to the very top. Scrolled down + open menu = blank/items off-screen.

# Cause
The overlay was rendered **inside** the `<header>`. The header adds `backdrop-blur-md` (i.e. `backdrop-filter`) once `isScrolled` is true. An element with `backdrop-filter` (also `transform`, `filter`, `perspective`, `will-change: transform`, `contain: paint`) establishes a **containing block for `position: fixed` descendants**. So the "fixed" overlay anchored to the header's box (near the top of the document) instead of the viewport. At the very top `isScrolled` is false → no backdrop-filter → fixed worked, which is why it only appeared there.

**Why:** CSS spec — a transformed/filtered/backdrop-filtered ancestor becomes the containing block for fixed-position descendants.

# Fix
Render the overlay via `createPortal(..., document.body)` so it escapes the header subtree and anchors to the viewport again. (Framer-motion `AnimatePresence` works fine inside the portal.)

**How to apply:** Any time a `position: fixed` modal/overlay/drawer misbehaves on scroll, check its ancestors for `transform`, `filter`, `backdrop-filter`, `perspective`, `will-change`, or `contain`. Portal the overlay to `body` rather than trying to remove the ancestor's effect.
