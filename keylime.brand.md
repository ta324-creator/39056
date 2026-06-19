# Key Lime Maritime — Brand Guidelines

*Last updated: June 2026*

---

## 1. Brand Overview

**Company:** Key Lime Maritime LLC
**Industry:** Marine services — boat removal, disposal, and trailer transport
**Service area:** Florida · Minnesota · California
**Positioning:** Licensed direct provider, not a broker. Serious, dependable, no-nonsense — closer to a freight/logistics carrier than a typical "boat guy" outfit.

**Brand voice in one line:** *Industrial confidence. We say what we do, then we do it.*

---

## 2. Visual Identity

### 2.1 Design Direction
Dark, premium, serious — modeled after high-end freight and logistics carriers (think Maersk), not a consumer marine startup. No rounded, friendly, "template" feel. Sharp edges, thin rule lines, restrained color.

### 2.2 Color Palette

| Token | Value | Usage |
|---|---|---|
| `--black` | `#0A0C0E` | Primary background |
| `--surface` | `#131619` | Section backgrounds, alternating panels |
| `--raised` | `#1A1E22` | Form fields, cards, raised elements |
| `--border` | `#202529` | Hairline dividers, default borders |
| `--border-mid` | `#2E3338` | Stronger borders, outlined buttons |
| `--green` | `oklch(60% 0.16 140)` | Primary CTA fill (buttons) |
| `--green-hi` | `oklch(72% 0.18 140)` | Accent text, hover states, highlight word in headlines |
| `--white` | `#ECEAE7` | Primary text (warm white, not pure white) |
| `--mid` | `#9DA3A9` | Secondary text, body copy on dark |
| `--muted` | `#5C6168` | Tertiary text, labels, disabled states |

**Rules:**
- Lime green (`--green` / `--green-hi`) is an **accent, not a base color**. Use it for: one highlighted word per headline, primary buttons, checkmarks, hover states, active nav links. Never use it as a large fill or background.
- Background is always dark. No light/white-background sections.
- Borders do the separating — avoid drop shadows and rounded cards. Sharp 2px border-radius maximum.

### 2.3 Typography

**Display / Headlines — Montserrat (800/900 weight)**
- Used for: all H1–H3 headlines, hero text, section titles, pull-quotes
- Always uppercase
- Tight letter-spacing (`-0.01em` to `-0.02em`)
- Heaviest weight available (900 Black preferred for hero)

**Body — Inter (300/400/500/600 weight)**
- Used for: paragraphs, form labels, nav links, buttons, captions
- Light weight (300) for descriptive copy, medium (500/600) for UI labels and emphasis
- Never use Inter for headlines; never use Montserrat for body copy

**Type scale reference:**
| Class | Size | Use |
|---|---|---|
| `.disp-xl` | 52–176px (clamp) | Hero headline |
| `.disp-lg` | 36–96px (clamp) | Large section headers |
| `.disp-md` | 28–56px (clamp) | Standard section headers |
| `.disp-sm` | 24–38px (clamp) | Sub-headers, card titles |
| `.tag` | 10px | Eyebrow labels, all-caps, letter-spaced |

### 2.4 Logo
- File: `limelogovector-clean.svg`
- Used at small scale in nav (28px height) and footer (24px height)
- Always paired with wordmark "Key **Lime** Maritime" — the word "Lime" rendered in `--green-hi`

---

## 3. Voice & Tone

**We are:** Direct, confident, plain-spoken, competent.
**We are not:** Cute, salesy, corporate-jargon-heavy, apologetic.

### Do
- Short sentences. Active voice.
- State the process plainly: "We remove, haul, and dispose. Paperwork included."
- Lead with what's verifiable (USDOT number, zero violations, locked pricing)
- Use real specifics — "$50/ft," "24 hours," "3–7 days" — not vague promises

### Don't
- Don't use exclamation points or hype language ("Amazing deals!!")
- Don't pad copy with filler adjectives ("incredible," "amazing," "unbeatable")
- Don't hide pricing or process behind "contact us to learn more"
- Don't use rounded, friendly emoji-style icons or playful copy

### Sample lines
> "Your Boat. Gone. Done."
> "One call. We handle the rest."
> "Not a broker. We're the hauler."
> "No add-ons after we arrive."

---

## 4. Verified Credentials

These are real, public, and should always be linked — never just claimed in text.

| Credential | Detail | Source |
|---|---|---|
| Florida LLC | Active, good standing | [Sunbiz.org](https://search.sunbiz.org/Inquiry/corporationsearch/SearchResultDetail?inquirytype=EntityName&directionType=Initial&searchNameOrder=KEYLIMEMARITIME%20L250001865940&aggregateId=flal-l25000186594-ca8678b2-31aa-4411-85d9-5ab649207ca2&searchTerm=KEY%20LIME%20MARINE%20LLC&listNameOrder=KEYLIMEMARINE%20L110000474401) |
| USDOT Motor Carrier | #4434746 — Active, 0 crashes, 0 violations | [FMCSA SAFER](https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&query_type=queryCarrierSnapshot&query_param=USDOT&query_string=4434746) |
| Carrier Trust Score | 97/100 — Excellent | [LoadWrap](https://loadwrap.com/company/4434746-keylime-maritime-llc) |
| Vessel AIS Tracking | M/V Key Lime · MMSI 368003410 | [MarineTraffic](https://www.marinetraffic.com/es/ais/details/ships/shipid:5417486/mmsi:368003410/imo:0/vessel:KEY%20LIME) |

---

## 5. Contact & Business Info

| Field | Value |
|---|---|
| Phone | (424) 410-3376 |
| Email | keylimemaritime@gmail.com |
| WhatsApp | wa.me/14244103376 |
| Facebook | facebook.com/keylimemaritime |
| Address (FL) | 3805 S Randall St, Tampa, FL 33611 |
| Address (MN) | Fort Ripley, MN 56449 |
| Service states | Florida · Minnesota · California |

---

## 6. Pricing Reference

| Item | Price |
|---|---|
| Removal — starting rate | $50 / linear ft |
| 24ft runabout | ~$1,200 |
| 32ft cabin cruiser | ~$1,600 |
| 40ft sailboat | ~$2,000 |
| In-water / storm extraction | Quoted individually |
| Quote response time | Within 24 hours |
| Typical scheduling window | 3–7 days |

---

## 7. UI Component Patterns

- **Buttons:** Solid green fill for primary action, outlined for secondary. Uppercase, letter-spaced, sharp corners (2px radius), minimum 52px height for touch targets.
- **Sections:** Alternate between `--black` and `--surface` backgrounds to create rhythm. Always separated by a 1px `--border` line, never a shadow.
- **Cards/grids:** Bordered, not shadowed. Internal dividers use `--border`, not gaps.
- **Forms:** Dark raised fields (`--raised`), bottom-border focus state in `--green`, no rounded pill inputs.
- **Mobile:** Sticky bottom CTA bar (Quote + Call) on all pages. WhatsApp float button repositions above it. All touch targets ≥52px. Inputs forced to 16px font to prevent iOS zoom.

---

## 8. File & Asset Reference

| File | Purpose |
|---|---|
| `index.html` | Home page |
| `removal.html` | Boat Removal & Disposal service page |
| `transport.html` | Transport & Areas We Cover service page |
| `styles.css` | Shared stylesheet (or inlined in standalone builds) |
| `script.js` | Shared form logic, nav, scroll reveal |
| `limelogovector-clean.svg` | Primary logo |

**Fonts loaded via Google Fonts:**
```
Montserrat:wght@800;900
Inter:wght@300;400;500;600
```

---

*This document reflects the current live design system as of the most recent site revision. Update this file whenever color, type, or voice decisions change so future work — including AI-assisted work — stays consistent.*
