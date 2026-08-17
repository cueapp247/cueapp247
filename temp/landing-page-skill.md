# Skill: Build a Landing Page

Use this skill whenever asked to create a landing page for any app or product. It defines the structure, code patterns, file layout, and conventions to follow. All content (copy, features, pricing, branding) must come from what the user tells you about their specific app — never reuse content from another project.

---

## Project Structure

```
project-root/
├── index.html
├── assets/
│   ├── styles.css
│   └── site.js
└── Docs/
    ├── Support.html
    └── Privacy.html
```

---

## File Conventions

- Pure HTML, CSS, and vanilla JS — no frameworks, no build tools, no dependencies.
- One shared `styles.css` and `site.js` used by all pages.
- Docs pages reference assets with `../assets/` relative paths.
- All i18n strings live in `site.js` — no strings hardcoded in HTML, always use `data-i18n` attributes.

---

## index.html — Page Structure

Build the page in this exact section order. All sections are required.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="[APP_DESCRIPTION]">
  <title>[APP_NAME] | [APP_TAGLINE]</title>
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <!-- 1. HEADER / NAV -->
  <header class="site-header"> ... </header>

  <main id="main">
    <!-- 2. HERO -->
    <section class="hero" aria-labelledby="hero-title"> ... </section>

    <!-- 3. FEATURES GRID -->
    <section class="section" id="features" aria-labelledby="features-title"> ... </section>

    <!-- 4. DEVICES / PLATFORM BAND -->
    <section class="section" id="devices" aria-labelledby="devices-title"> ... </section>

    <!-- 5. HOW IT WORKS (TIMELINE) -->
    <section class="section" aria-labelledby="workflow-title"> ... </section>

    <!-- 6. PRIVACY / TRUST STRIP -->
    <section class="section" id="privacy" aria-labelledby="privacy-title"> ... </section>

    <!-- 7. DOWNLOAD / FINAL CTA -->
    <section class="section" id="download" aria-labelledby="download-title"> ... </section>
  </main>

  <!-- 8. FOOTER -->
  <footer class="site-footer"> ... </footer>

  <script src="assets/site.js"></script>
</body>
</html>
```

### 1. Header / Nav

- Sticky, blur-backdrop header.
- Brand mark: small square with gradient background + icon (SVG), bold app name.
- Nav links: anchor to `#features`, `#devices`, `#privacy`, link to `Docs/Support.html`.
- Nav actions: language toggle button (`data-lang-toggle`), theme toggle icon button (`data-theme-toggle`).
- All nav link text uses `data-i18n` attributes.

```html
<header class="site-header">
  <nav class="nav" aria-label="Primary navigation">
    <a class="brand" href="index.html" aria-label="[APP_NAME] home">
      <span class="brand-mark" aria-hidden="true">
        <!-- SVG icon relevant to the app -->
      </span>
      <span>[APP_NAME]</span>
    </a>
    <div class="nav-links">
      <a href="#features" data-i18n="navFeatures">Features</a>
      <a href="#devices" data-i18n="navDevices">Devices</a>
      <a href="#privacy" data-i18n="navPrivacy">Privacy</a>
      <a href="Docs/Support.html" data-i18n="navSupport">Support</a>
    </div>
    <div class="nav-actions">
      <button class="language-toggle" type="button" data-lang-toggle data-i18n="langLabel">ภาษาไทย</button>
      <button class="icon-button" type="button" data-theme-toggle data-i18n-aria="themeLabel" aria-label="Toggle theme">
        <!-- moon SVG icon (JS swaps to sun in dark mode) -->
      </button>
    </div>
  </nav>
</header>
```

### 2. Hero

- Two-column layout on desktop (copy left, mockup right), single column on mobile.
- `hero-copy`: h1, body paragraph, two CTA buttons (`.button.primary` and `.button.secondary`), price/offer line, and 3 proof stats.
- `hero-mockup`: product screenshots/mockups. Use `data-img-en` and `data-img-th` attributes on `<img>` tags so JS can swap images on language change.
- Proof items use a 3-column grid with a top border, bold value, muted label.
- Mockup has a subtle float animation (`lift` keyframe) when `prefers-reduced-motion: no-preference`.

```html
<section class="hero" aria-labelledby="hero-title">
  <div class="hero-copy">
    <h1 id="hero-title" data-i18n="heroTitle">[APP_NAME]</h1>
    <p data-i18n="heroBody">[ONE-SENTENCE DESCRIPTION]</p>
    <div class="hero-actions">
      <a class="button primary" href="#download" data-i18n="heroCta">Get [APP_NAME]</a>
      <a class="button secondary" href="#features" data-i18n="heroSecondary">See features</a>
    </div>
    <div class="price-line" data-i18n="priceLine">[PRICING LINE]</div>
    <div class="hero-proof" aria-label="Product highlights">
      <div class="proof-item">
        <strong data-i18n="proofOneValue">[VALUE]</strong>
        <span data-i18n="proofOneLabel">[LABEL]</span>
      </div>
      <div class="proof-item">
        <strong data-i18n="proofTwoValue">[VALUE]</strong>
        <span data-i18n="proofTwoLabel">[LABEL]</span>
      </div>
      <div class="proof-item">
        <strong data-i18n="proofThreeValue">[VALUE]</strong>
        <span data-i18n="proofThreeLabel">[LABEL]</span>
      </div>
    </div>
  </div>
  <div class="hero-mockup" aria-label="[APP_NAME] app preview">
    <!-- Add <img> tags with data-img-en and data-img-th attributes -->
    <!-- Use loading="eager" decoding="async" on hero images -->
  </div>
</section>
```

### 3. Features Grid

- Section header: h2 + short paragraph.
- 6 feature cards in a 3-column grid (`feature-grid`), each as `<article class="feature-card">`.
- Each card: SVG icon (stroke, accent color), h3 title, short paragraph.
- Use descriptive SVG icons from the 24×24 viewBox set — choose icons relevant to each feature.

```html
<section class="section" id="features" aria-labelledby="features-title">
  <div class="section-header">
    <h2 id="features-title" data-i18n="featuresTitle">[FEATURES HEADLINE]</h2>
    <p data-i18n="featuresBody">[FEATURES SUBHEADING]</p>
  </div>
  <div class="feature-grid">
    <article class="feature-card">
      <!-- SVG icon -->
      <h3 data-i18n="featureOneTitle">[TITLE]</h3>
      <p data-i18n="featureOneBody">[DESCRIPTION]</p>
    </article>
    <!-- Repeat for featureTwo through featureSix -->
  </div>
</section>
```

### 4. Devices / Platform Band

- Two-column band: section header on the left, a visual UI demo on the right.
- The UI demo is a CSS-only widget mockup — adapt it to what the app runs on (e.g. watch + widget for Apple apps, phone + desktop for cross-platform apps). Build it with plain HTML/CSS, no images needed.
- Wrap the whole thing in `.device-band`.

```html
<section class="section" id="devices" aria-labelledby="devices-title">
  <div class="device-band">
    <div class="section-header">
      <h2 id="devices-title" data-i18n="devicesTitle">[PLATFORMS HEADLINE]</h2>
      <p data-i18n="devicesBody">[PLATFORMS DESCRIPTION]</p>
    </div>
    <div class="[WIDGET_COMPONENT]" aria-hidden="true">
      <!-- CSS-only UI mockup relevant to the app's platforms -->
    </div>
  </div>
</section>
```

### 5. How It Works (Timeline)

- Section header + 4-step horizontal timeline.
- Each step is an `<article class="timeline-item">` with a numbered circle, h3, and short paragraph.
- Steps should describe the user's actual workflow with this app.

```html
<section class="section" aria-labelledby="workflow-title">
  <div class="section-header">
    <h2 id="workflow-title" data-i18n="workflowTitle">[WORKFLOW HEADLINE]</h2>
    <p data-i18n="workflowBody">[WORKFLOW DESCRIPTION]</p>
  </div>
  <div class="timeline">
    <article class="timeline-item">
      <span class="number">1</span>
      <h3 data-i18n="stepOneTitle">[STEP 1]</h3>
      <p data-i18n="stepOneBody">[DESCRIPTION]</p>
    </article>
    <!-- Repeat for steps 2–4 -->
  </div>
</section>
```

### 6. Privacy / Trust Strip

- Section header + 4 privacy/trust items in a horizontal grid (`.privacy-strip`).
- Each item is `<article class="privacy-item">` with h3 + short paragraph.
- Adapt the trust points to the app — could be privacy, security, ownership, or any trust signal relevant to this product.

```html
<section class="section" id="privacy" aria-labelledby="privacy-title">
  <div class="section-header">
    <h2 id="privacy-title" data-i18n="privacyTitle">[TRUST HEADLINE]</h2>
    <p data-i18n="privacyBody">[TRUST DESCRIPTION]</p>
  </div>
  <div class="privacy-strip">
    <article class="privacy-item">
      <h3 data-i18n="privacyOneTitle">[TITLE]</h3>
      <p data-i18n="privacyOneBody">[DESCRIPTION]</p>
    </article>
    <!-- Repeat for items 2–4 -->
  </div>
</section>
```

### 7. Download / Final CTA

- Dark-background band (`.download-band`), two columns: headline + body left, buttons right.
- Primary CTA links to the app store or download. Secondary links to Support.

```html
<section class="section" id="download" aria-labelledby="download-title">
  <div class="download-band">
    <div>
      <h2 id="download-title" data-i18n="finalTitle">[CLOSING HEADLINE]</h2>
      <p data-i18n="finalBody">[CLOSING BODY]</p>
    </div>
    <div class="hero-actions">
      <a class="button primary" href="#" data-i18n="finalCta">[CTA LABEL]</a>
      <a class="button secondary" href="Docs/Support.html" data-i18n="finalSupport">Read support</a>
    </div>
  </div>
</section>
```

### 8. Footer

- Full-width border-top footer.
- Left: app tagline. Right: footer links (Support, Privacy Policy).

```html
<footer class="site-footer">
  <div class="footer-inner">
    <span data-i18n="footerTagline">[APP TAGLINE]</span>
    <div class="footer-links">
      <a href="Docs/Support.html" data-i18n="navSupport">Support</a>
      <a href="Docs/Privacy.html" data-i18n="navDocsPrivacy">Privacy Policy</a>
    </div>
  </div>
</footer>
```

---

## styles.css — Design System

### CSS Custom Properties

Define all tokens in `:root`. Always provide both light and dark variants using `[data-theme="dark"]`.

```css
:root {
  color-scheme: light;

  /* Backgrounds */
  --bg: [LIGHT_BG];           /* page background */
  --bg-strong: [LIGHT_BG_STRONG]; /* top gradient bg */
  --surface: [LIGHT_SURFACE];
  --surface-soft: [LIGHT_SURFACE_SOFT];
  --surface-elevated: rgba(255, 255, 255, 0.86);

  /* Text */
  --text: [DARK_COLOR];
  --muted: [MUTED_COLOR];
  --border: rgba([R],[G],[B], 0.12);

  /* Accent — choose ONE primary accent color for the app */
  --accent: [HEX];
  --accent-strong: [DARKER_HEX];

  /* Semantic colors (keep consistent across projects) */
  --orange: #ff9500;
  --green: #34c759;
  --blue: #007aff;
  --purple: #af52de;
  --amber: #f59e0b;
  --red: #ef4444;

  /* Elevation */
  --shadow: 0 22px 60px rgba([R],[G],[B], 0.14);
  --shadow-soft: 0 10px 30px rgba([R],[G],[B], 0.09);

  /* Shared */
  --radius: 8px;
  --max: 1160px; /* max content width */
}

:root[data-theme="dark"] {
  color-scheme: dark;
  /* Override all --bg, --surface, --text, --muted, --border, --accent, --shadow vars */
}
```

**Accent color guidance:**
- Pick an accent that fits the app's personality and platform.
- For Apple ecosystem apps: lime-green (`#84cc16`) reads as iOS/native.
- The body gradient and brand-mark gradient should use the accent.
- The `--accent-strong` is used for SVG icon color in feature cards.

### Body Background

Always use a radial gradient spot of the accent color at the top-left, bleeding into a linear gradient toward the plain background:

```css
body {
  background:
    radial-gradient(circle at 12% 12%, color-mix(in srgb, var(--accent) 24%, transparent), transparent 28rem),
    linear-gradient(180deg, var(--bg-strong), var(--bg) 28rem);
}
```

Docs pages use a simpler linear gradient via `body.docs-page`.

### Key Layout Classes

| Class | Purpose |
|---|---|
| `.site-header` | Sticky, backdrop-blur nav bar |
| `.nav` | Flex row, max-width constrained, `--max` |
| `.hero` | Min-height viewport, flex column → row on ≥768px |
| `.hero-copy` | Left column of hero |
| `.hero-mockup` | Right column, contains app screenshots |
| `.section` | Standard content section, max-width + padding |
| `.section-header` | Max-width 680px header block for sections |
| `.feature-grid` | 3-col grid of feature cards |
| `.feature-card` | Bordered, elevated card with icon + h3 + p |
| `.device-band` | 2-col grid band for platform section |
| `.timeline` | 4-col grid of numbered steps |
| `.privacy-strip` | 4-col grid of trust items |
| `.download-band` | Dark CTA band, 2-col |
| `.docs-shell` | Content container for Docs pages |
| `.docs-grid` | Single-column grid for doc cards |
| `.support-card` | Bordered card for Docs pages |

### Responsive Breakpoints

```
≥768px  → hero becomes 2-column row
≤900px  → nav wraps, grids collapse to 2 cols, bands go 1 col
≤620px  → grids go 1 col, reduced horizontal padding
```

### Buttons

Three variants — all share base styles (min-height 40px, border, border-radius, flex, transition):

- `.button.primary` — gradient fill (accent → green), dark text, accent glow shadow.
- `.button.secondary` — transparent background, border.
- `.icon-button` — 40×40px square, icon only.
- `.language-toggle` — same as button but for the language switcher.

All buttons lift `-1px` on hover with a subtle border-color transition.

### Animations

```css
/* Float animation for hero mockup */
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

---

## site.js — JavaScript Patterns

### i18n Object

All user-visible strings live in a single `i18n` object with `en` and `th` keys. Every string used in HTML via `data-i18n` must have a corresponding entry in both languages.

```js
const i18n = {
  en: {
    // nav
    navFeatures: "Features",
    navDevices:  "Devices",       // adapt label to what the app runs on
    navPrivacy:  "Privacy",
    navSupport:  "Support",
    navDocsPrivacy: "Privacy Policy",
    themeLabel:  "Toggle theme",
    langLabel:   "ภาษาไทย",       // label shown when current lang is EN

    // hero
    heroTitle:      "[APP_NAME]",
    heroBody:       "[ONE-SENTENCE DESCRIPTION]",
    heroCta:        "Get [APP_NAME]",
    heroSecondary:  "See features",
    priceLine:      "[PRICING LINE]",
    proofOneValue:  "[VALUE]",  proofOneLabel: "[LABEL]",
    proofTwoValue:  "[VALUE]",  proofTwoLabel: "[LABEL]",
    proofThreeValue:"[VALUE]",  proofThreeLabel:"[LABEL]",

    // features section
    featuresTitle: "[HEADLINE]",
    featuresBody:  "[SUBHEADING]",
    featureOneTitle: "[TITLE]",   featureOneBody: "[BODY]",
    featureTwoTitle: "[TITLE]",   featureTwoBody: "[BODY]",
    featureThreeTitle:"[TITLE]",  featureThreeBody:"[BODY]",
    featureFourTitle: "[TITLE]",  featureFourBody: "[BODY]",
    featureFiveTitle: "[TITLE]",  featureFiveBody: "[BODY]",
    featureSixTitle:  "[TITLE]",  featureSixBody:  "[BODY]",

    // devices section
    devicesTitle: "[HEADLINE]",
    devicesBody:  "[DESCRIPTION]",
    // add widget/mockup copy keys as needed

    // workflow / timeline
    workflowTitle: "[HEADLINE]",
    workflowBody:  "[DESCRIPTION]",
    stepOneTitle:  "[STEP]",  stepOneBody:  "[BODY]",
    stepTwoTitle:  "[STEP]",  stepTwoBody:  "[BODY]",
    stepThreeTitle:"[STEP]",  stepThreeBody:"[BODY]",
    stepFourTitle: "[STEP]",  stepFourBody: "[BODY]",

    // privacy / trust section
    privacyTitle:    "[HEADLINE]",
    privacyBody:     "[DESCRIPTION]",
    privacyOneTitle: "[TITLE]",  privacyOneBody: "[BODY]",
    privacyTwoTitle: "[TITLE]",  privacyTwoBody: "[BODY]",
    privacyThreeTitle:"[TITLE]", privacyThreeBody:"[BODY]",
    privacyFourTitle: "[TITLE]", privacyFourBody: "[BODY]",

    // final CTA
    finalTitle:   "[CLOSING HEADLINE]",
    finalBody:    "[CLOSING BODY]",
    finalCta:     "[CTA LABEL]",
    finalSupport: "Read support",

    // footer
    footerTagline: "[APP TAGLINE]",

    // docs — Support page
    supportTitle:        "[APP_NAME] Support",
    supportLead:         "[SUPPORT PAGE INTRO]",
    supportUpdated:      "Last updated: [DATE]",
    supportContactTitle: "Contact",
    supportContactBody:  "[CONTACT INSTRUCTIONS]",
    supportFaqTitle:     "Common Help Topics",
    supportFaqOne:       "[FAQ ITEM 1]",
    supportFaqTwo:       "[FAQ ITEM 2]",
    supportFaqThree:     "[FAQ ITEM 3]",
    supportFaqFour:      "[FAQ ITEM 4]",
    // add or remove FAQ items and any disclaimer sections as needed

    // docs — Privacy page
    privacyDocTitle:      "[APP_NAME] Privacy Policy",
    privacyDocLead:       "[PRIVACY INTRO]",
    privacyDocUpdated:    "Last updated: [DATE]",
    privacyCollectTitle:  "[SECTION TITLE]",  privacyCollectBody:  "[BODY]",
    privacyStorageTitle:  "[SECTION TITLE]",  privacyStorageBody:  "[BODY]",
    privacyNoAdsTitle:    "[SECTION TITLE]",  privacyNoAdsBody:    "[BODY]",
    privacyControlsTitle: "[SECTION TITLE]",  privacyControlsBody: "[BODY]",
    privacyContactTitle:  "Contact",          privacyContactBody:  "[CONTACT]",
    // add more sections as appropriate for the app
  },
  th: {
    // Mirror all keys above with Thai translations
    langLabel: "English", // label shown when current lang is TH
    // ... all other keys in Thai
  }
};
```

### Theme Initialization

Run synchronously before DOMContentLoaded to avoid flash of wrong theme:

```js
const root = document.documentElement;
const savedTheme = localStorage.getItem("[APP_ID]-theme");
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = savedTheme || (preferredDark ? "dark" : "light");
```

Replace `[APP_ID]` with a short lowercase identifier for the app (e.g. `myapp`). Use this same prefix for all `localStorage` keys.

### Language Initialization

```js
const savedLang = localStorage.getItem("[APP_ID]-lang");
let activeLang = savedLang || (navigator.language.toLowerCase().startsWith("th") ? "th" : "en");
```

Auto-detects Thai for users with Thai browser language. Falls back to English.

### `applyLang(lang)` Function

Updates all translatable elements:
1. Sets `document.documentElement.lang`.
2. Iterates `[data-i18n]` → sets `textContent` from `i18n[lang][key]`.
3. Iterates `[data-i18n-aria]` → sets `aria-label` from `i18n[lang][key]`.
4. Iterates `img[data-img-en][data-img-th]` → swaps `src` to the correct language image.
5. Persists to `localStorage`.

```js
function applyLang(lang) {
  activeLang = lang;
  localStorage.setItem("[APP_ID]-lang", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (i18n[lang][key]) node.textContent = i18n[lang][key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.dataset.i18nAria;
    if (i18n[lang][key]) node.setAttribute("aria-label", i18n[lang][key]);
  });
  document.querySelectorAll("img[data-img-en][data-img-th]").forEach((img) => {
    const next = img.dataset[lang === "th" ? "imgTh" : "imgEn"];
    if (next && img.getAttribute("src") !== next) img.setAttribute("src", next);
  });
}
```

### `applyThemeIcon()` Function

Swaps the theme toggle button's SVG between sun (dark mode) and moon (light mode).

```js
function applyThemeIcon() {
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;
  button.innerHTML = root.dataset.theme === "dark" ? icon("sun") : icon("moon");
}
```

### Event Wiring (DOMContentLoaded)

```js
document.addEventListener("DOMContentLoaded", () => {
  applyLang(activeLang);
  applyThemeIcon();

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => applyLang(activeLang === "en" ? "th" : "en"));
  });

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("[APP_ID]-theme", root.dataset.theme);
      applyThemeIcon();
    });
  });
});
```

---

## Docs Pages — Support.html and Privacy.html

Both docs pages share the same header and footer as `index.html`, with these differences:

- `<body class="docs-page">` for the simplified background gradient.
- Asset paths use `../assets/` (one level up).
- Nav links point back to `../index.html#section`.
- Content lives inside `<main id="main" class="docs-shell">`.
- A `<span class="doc-meta" data-i18n="[updatedKey]">` shows the last updated date above the h1.
- Content cards use `<section class="support-card">`.
- The docs grid container uses `<div class="docs-grid">`.

### Support.html structure

Required cards (adapt content to the app):
1. **Contact** — how to reach support (email, form, etc.).
2. **Common Help Topics** — 3–5 FAQ items as a `<ul>`.
3. **[App-specific disclaimer]** — e.g. medical disclaimer for health apps, financial disclaimer for finance apps. Skip if not applicable.

### Privacy.html structure

Required sections (adapt to what data the app actually handles):
1. Information the app handles
2. Storage and sync
3. Ads / analytics policy
4. User controls
5. Contact

Add or remove sections based on what the app actually does. Only include sections that are truthful and relevant.

---

## Accessibility Checklist

- Skip link (`<a class="skip-link" href="#main">`) at the top of every page.
- All `<nav>` elements have `aria-label`.
- All sections have `aria-labelledby` pointing to their heading id.
- Device mockup containers use `aria-hidden="true"` (decorative).
- Hero mockup container uses `aria-label="[APP_NAME] app preview"`.
- `<img>` tags have descriptive `alt` text.
- Icon-only buttons have `aria-label` (via `data-i18n-aria`).
- Color contrast: text on backgrounds should meet WCAG AA (4.5:1 for body text, 3:1 for large text).
- Smooth scroll: `html { scroll-behavior: smooth; }`.
- Reduced motion: float animation wrapped in `@media (prefers-reduced-motion: no-preference)`.

---

## Checklist Before Delivering

- [ ] All `data-i18n` keys in HTML have matching entries in both `en` and `th` in `i18n` object.
- [ ] `localStorage` keys use the app's own prefix, not another app's.
- [ ] No copy, wording, or content from any other project carried over.
- [ ] Accent color and brand-mark gradient match the new app's identity.
- [ ] Dark mode token overrides all `--bg`, `--surface`, `--text`, `--muted`, `--border`, `--accent`, `--shadow` variables.
- [ ] All sections present: Hero, Features, Devices, Timeline, Privacy, CTA, Footer.
- [ ] Both `Docs/Support.html` and `Docs/Privacy.html` created.
- [ ] Docs pages use `../assets/` paths.
- [ ] Hero images (if provided) use `data-img-en` / `data-img-th` attributes.
- [ ] If no images provided, hero mockup is a CSS-only UI demo component.
