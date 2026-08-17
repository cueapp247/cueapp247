# Cue — Landing Page Brief

Use this file with the `landing-page-skill` to build the landing page.
All content, copy, and identity details are specific to **Cue**.

---

## App Identity

| Field | Value |
|---|---|
| **App name** | Cue |
| **App ID** | `cue` (use as localStorage prefix) |
| **Tagline** | The list that knows where you are. |
| **One-sentence description** | Cue automatically surfaces the right shopping list the moment you walk into a store — no searching, no switching, just buy. |
| **Platforms** | iPhone, iPad, Apple Watch, Home Screen Widgets, Watch Complications |
| **Pricing** | Free |
| **App Store URL** | *(add when live)* |

---

## Accent / Brand Colors

| Token | Hex (Light) | Hex (Dark) | Use |
|---|---|---|---|
| Primary (teal) | `#16C7BE` | `#1AD4CC` | Main accent, buttons, CTAs |
| Secondary (blue) | `#2D6DF6` | `#4A84FF` | Secondary elements |
| Accent (orange) | `#FF981A` | `#FFA830` | Prices, financial data |
| Background | `#FAF7F2` | `#0F1115` | Page background |
| Surface | `#FFFFFF` | `#1B1E24` | Cards, sections |
| Graphite | `#2B2D33` | `#E8E8EE` | Body text |

**Design philosophy:** Calm, clean, premium. Apple-native. Distinctively Cue.

**CSS accent to use:** `#16C7BE` (teal) for `--accent`; `#0FA8A0` for `--accent-strong`.

**Body gradient:** Radial teal spot top-left bleeding into `#FAF7F2` (light) / `#0F1115` (dark).

---

## Hero Section

**h1:** Cue

**Body:**  
The shopping list that surfaces itself. Walk into a store — Cue shows your list. Walk into another — it switches automatically. No tapping, no searching.

**Primary CTA:** Get Cue — Free  
**Secondary CTA:** See how it works

**Price line:** Free · Works entirely within Apple ecosystem

**Proof stats (3 items):**

| Value | Label |
|---|---|
| Automatic | list switching |
| Zero | third-party servers |
| Works on | iPhone, Watch & iPad |

**Hero mockup:** No images available yet — use a CSS-only mockup showing a phone-like card with a list of grocery items (checkbox circles in teal), a small badge at the top reading "Groceries · Active", and a subtle location pin icon.

---

## Features Section (6 cards)

**Section headline:** Everything you need to shop smarter  
**Section subheading:** Built around one idea — the right list should be waiting for you, not the other way around.

| # | Icon (SF Symbol style) | Title | Body |
|---|---|---|---|
| 1 | location.fill | Automatic List Switching | Walk into a store and Cue surfaces the right list instantly using geofencing. No manual switching ever. |
| 2 | applewatch | Buy Mode on Apple Watch | Glance at your wrist, tap to complete items. A horizontal switcher lets you jump to any list without pulling out your phone. |
| 3 | mic.fill | Voice Capture | Dictate new items directly from your Apple Watch using Voice Capture. Hands are full? Just say it. |
| 4 | square.grid.2x2.fill | Home Screen Widgets | Your active list lives on your Home Screen. One glance and you know exactly what to grab. |
| 5 | icloud.fill | Private iCloud Sync | Data syncs across iPhone and iPad through your private iCloud account. No accounts to create, no third-party servers. |
| 6 | dollarsign.circle.fill | Running Total | Add estimated prices to items and Cue tallies them as you shop — so you know before you reach the checkout. |

---

## Devices / Platform Band

**Section headline:** On every device you use  
**Section description:** Cue lives on iPhone, iPad, Apple Watch, and your Home Screen. The same smart list, always in reach.

**CSS-only widget mockup to build:**  
A triptych of three rounded panels side-by-side (or stacked on mobile):
1. **iPhone panel** — a list card "Groceries" with 3 rows (teal circles, text labels)
2. **Apple Watch panel** — a smaller dark rounded rect showing "Buy Mode" with 2 item rows and a teal completion ring on the left
3. **Widget panel** — a small square card showing the app icon mark + "3 items · Groceries" in small type

---

## How It Works (Timeline — 4 steps)

**Section headline:** From store entrance to checkout  
**Section description:** Cue's six-tier algorithm figures out where you are and picks the best list automatically.

| Step | Title | Body |
|---|---|---|
| 1 | Set up your lists | Create a Context for each store or errand — Groceries, Costco, Pharmacy. Assign a location trigger and a colour. |
| 2 | Add items anytime | Tap + to add what you need, wherever you are. Add notes, quantities, or estimated prices. |
| 3 | Walk into the store | Cue detects your geofence and promotes the right list to the top — on your iPhone and Apple Watch. |
| 4 | Tap to complete | Check off items as you shop. Cue keeps a running total. Done — leave the store and the list resets for next time. |

---

## Privacy / Trust Strip

**Section headline:** Your data never leaves Apple's ecosystem  
**Section description:** No accounts. No tracking. No analytics. Cue is built on SwiftData and private CloudKit.

| # | Title | Body |
|---|---|---|
| 1 | Zero tracking | No advertising SDK. No analytics SDK. Cue's privacy manifest explicitly records zero collected data types. |
| 2 | Private iCloud only | Sync uses your personal iCloud account via CloudKit. Cue has no servers of its own. |
| 3 | Local-first on Watch | Your Apple Watch stores its own copy of your data locally — nothing leaves the Apple ecosystem. |
| 4 | Your lists, your device | Items, locations, and preferences stay in SwiftData on your device. Delete any time with a single tap in Settings. |

---

## Final CTA / Download Band

**Headline:** Your list, ready when you walk in the door.  
**Body:** Cue is free and works entirely within your Apple ecosystem. Available for iPhone, iPad, and Apple Watch.  
**Primary CTA:** Download on the App Store  
**Secondary CTA:** Read support docs

---

## Footer

**Tagline:** Cue syncs your data privately through iCloud.

---

## Support Page Content

**Intro:**  
Cue is a context-aware shopping list for iPhone, iPad, and Apple Watch. If you have questions or run into an issue, reach out — we're happy to help.

**Last updated:** August 2026

**Contact:**  
Email [support address] or open a request via the App Store review page.

**FAQ items (4):**
1. How does automatic list switching work? — Cue monitors geofences you set on each Context. When your device enters the region, that Context becomes active and Cue surfaces it on your iPhone and Apple Watch.
2. Why does my list not switch automatically? — Make sure you've granted "Always On" location permission in Settings → Cue, and that you've set a location trigger on your Context. iOS limits apps to 20 monitored regions at a time; Cue rebalances them as you move.
3. How do I add items from my Apple Watch? — Open Cue on your Watch, tap the mic icon, and dictate your item using Voice Capture. Microphone and speech recognition permissions are required.
4. Can I use Cue without an iCloud account? — Yes. Cue works fully offline and on a single device. iCloud sync is optional and activates automatically when you're signed in with an Apple ID that has iCloud Drive enabled.

---

## Privacy Policy Content

**Intro:**  
Cue is built with privacy as a core value. The app collects no personal data, uses no tracking, and has no third-party analytics or advertising SDKs.

**Last updated:** August 2026

**Sections:**

1. **Information we handle**  
   Cue stores the lists, items, and location triggers you create. This data lives entirely on your device in SwiftData and, if you choose, in your private iCloud account via CloudKit. Cue does not transmit any of this data to its own servers.

2. **Sync and storage**  
   iCloud sync uses Apple's CloudKit private database, linked to your personal Apple ID. Only you can access this data. Apple Watch sync uses WatchConnectivity — data stays within your device pair.

3. **No advertising or analytics**  
   Cue contains no advertising SDK, no analytics SDK, and performs no user tracking. The app's `PrivacyInfo.xcprivacy` manifest records zero collected data types and zero tracking domains.

4. **Location data**  
   Cue requests "Always On" location permission solely to monitor geofences you set. Location data is used on-device to determine which Context to surface. It is never uploaded, stored remotely, or shared.

5. **Your controls**  
   You can revoke location or microphone permissions at any time in iOS Settings. You can erase all Cue data from Settings → Data Management → Erase All Data. Deleting the app removes all local data.

6. **Contact**  
   Questions about privacy? Email [privacy contact address].

---

## Language Support

Build with **English and Thai** language support following the skill's i18n pattern.  
`langLabel` in English = `"ภาษาไทย"` (switches to Thai)  
`langLabel` in Thai = `"English"` (switches back to English)

Provide full Thai translations for all strings. The app is used in Thailand as well as globally.

---

## Notes for Implementation

- No app screenshots are available yet. Use CSS-only UI mockups for the hero and device band.
- The brand mark SVG should be a small teal rounded square containing a simple list/checkmark icon.
- The primary button gradient should go from `#16C7BE` to `#0FA8A0` (teal range).
- Feature card icons should use stroke style in `#16C7BE`.
- The timeline step numbers should use a teal circle background.
- Watch panel in the device band should use a dark background (`#1B1E24`) with teal completion rings.
