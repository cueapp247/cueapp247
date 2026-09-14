# Hero Device Layout — Cue Landing Page

This document captures the exact layout, sizing, and proportions of the two device mockups (iPhone, Apple Watch) used in the hero section. Reference this whenever recreating, adjusting, or porting the hero device group to a new context.

> **Note:** There is no iPad image in the Cue hero. The iPhone is the anchor device. The Apple Watch overlaps its bottom-left corner.

---

## Source Images & Native Dimensions

| Device       | File                            | Orientation |
|--------------|---------------------------------|-------------|
| iPhone       | `assets/images/cue iphone image.png` | Portrait    |
| Apple Watch  | `assets/images/cue watch image.png`  | Portrait    |

Both images have transparent/cut-out backgrounds — no `box-shadow` is applied directly on the images.

---

## HTML Structure

```html
<div class="hero-mockup" aria-label="Cue app preview">
  <!-- Anchor layer: iPhone (portrait, fills container) -->
  <img src="assets/images/cue iphone image.png"
       alt="Cue shopping list on iPhone"
       class="hero-iphone">

  <!-- Overlay layer: Apple Watch (portrait, anchored bottom-left) -->
  <img src="assets/images/cue watch image.png"
       alt="Cue on Apple Watch"
       class="hero-watch">
</div>
```

**Stacking order (z-index):** iPhone (1) → Watch (2)

---

## CSS Layout — All Breakpoints

The `.hero-mockup` container is `position: relative` with `display: inline-block`. The iPhone is the **document-flow anchor** (`display: block`, no positioning). The Watch is `position: absolute`, aligned to `bottom: 0` so its base sits flush with the iPhone base.

A `padding-left: 14%` on the container provides room for the Watch bleed past the left edge.

### Mobile (default)

```css
.hero-mockup {
  position: relative;
  display: inline-block;
  width: 260px;
  flex-shrink: 0;
  filter: drop-shadow(var(--shadow));
  padding-left: 14%;   /* room for watch bleed */
}

.hero-iphone {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 28px;
  position: relative;
  z-index: 1;
}

.hero-watch {
  position: absolute;
  width: 44%;          /* ~44% of .hero-mockup width */
  height: auto;
  bottom: 0;
  left: -14%;          /* bleeds 14% beyond left edge */
  z-index: 2;
  border-radius: 18px;
}
```

### Tablet (min-width: 768px)

```css
.hero-mockup { width: 300px; }
```

### Desktop (min-width: 1024px)

```css
.hero-mockup { width: 340px; }
```

---

## Layout Logic Summary

1. **iPhone is the anchor.** Its rendered width determines the proportional grid. The container grows with breakpoints; the Watch scales proportionally as a percentage.
2. **Watch overlaps the bottom-left.** A negative `left` value (-14%) lets it bleed past the iPhone, creating depth and a paired-device composition.
3. **Both devices align on `bottom: 0`.** Their bases are flush for a stable, grounded composition.
4. **Watch width is ~44% of the iPhone width.** This keeps the Watch visually balanced — present but clearly secondary.
5. **Container padding-left matches the bleed.** `padding-left: 14%` prevents the Watch from being clipped by the container's left edge.

---

## Proportional Reference (Desktop, container = 340px)

| Device  | Width          | Left offset       | Bottom |
|---------|----------------|-------------------|--------|
| iPhone  | 100% container | —                 | —      |
| Watch   | 44% container  | -14% container    | 0      |

The Watch's right edge roughly aligns with 30% of the iPhone's width from the left, creating a natural cluster in the bottom-left corner.

---

## Hero Section Context

At tablet+ the hero switches to a row layout:

```css
/* Tablet+ */
.hero {
  flex-direction: row;
  align-items: center;
}

.hero-copy {
  flex: 1;          /* text column */
}

.hero-mockup {
  flex: 0 0 auto;   /* device group, sized by width property */
}
```

The `flex-shrink: 0` on `.hero-mockup` prevents the device group from being squeezed by the text column.

---

## Float Animation

A gentle vertical float is applied to the whole mockup group (reduced-motion respecting):

```css
@media (prefers-reduced-motion: no-preference) {
  .hero-mockup {
    animation: lift 5s ease-in-out infinite;
  }
}

@keyframes lift {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}
```
