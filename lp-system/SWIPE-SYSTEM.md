# Landing Page Swipe File System

## Purpose
Capture high-converting landing pages from the wild, analyze what makes them work, extract reusable patterns, and integrate them into the component library.

---

## Quick Capture Workflow

When you find a good landing page:

### 1. Log It

Add to `swipe-log.md`:

```markdown
## [Date] - [Brand/Product Name]

**URL:** [url]
**Source:** [Where you found it - Meta ad library, competitor research, etc.]
**Traffic Type:** [Meta prospecting / Google search / etc.]
**Vertical:** [Ecommerce / B2B SaaS / Local service / etc.]

### Why It Caught Your Eye
[1-2 sentences on first impression]

### Screenshot
[filename or link]

### Priority
[ ] Analyze soon
[ ] Reference only
[ ] Extract component
```

### 2. Screenshot It

Use browser extension or:
```bash
# Full page screenshot with Chrome
google-chrome --headless --screenshot=swipe/[name].png --window-size=1400,10000 [url]
```

Save to `/swipe/screenshots/`

---

## Deep Analysis Template

When you're ready to analyze a captured page:

```markdown
# Landing Page Analysis: [Brand Name]

**URL:** [url]
**Analyzed:** [date]
**Vertical:** [industry]
**Traffic Source:** [inferred or known]

---

## First Impression (5-Second Test)

- What do I understand immediately?
- What's the primary emotion?
- What action am I being asked to take?
- What trust signal do I see first?

---

## Structure Breakdown

### Above the Fold
| Element | Implementation | Effectiveness |
|---------|----------------|---------------|
| Headline | [exact text] | [why it works/doesn't] |
| Subhead | [exact text] | |
| Hero image/video | [description] | |
| CTA | [text + placement] | |
| Trust signal | [what + where] | |

### Full Page Sections (in order)
1. [Section name] — [purpose]
2. [Section name] — [purpose]
3. ...

### Section Order Notes
- What's unusual about the order?
- Why might they have chosen this sequence?

---

## Conversion Elements Audit

### Social Proof
- [ ] Stats/numbers
- [ ] Customer logos
- [ ] Testimonials (text)
- [ ] Video testimonials
- [ ] UGC/customer photos
- [ ] Press mentions
- [ ] Certifications/badges
- [ ] Review count/rating

**What's working:**
[notes]

### Urgency/Scarcity
- [ ] Deadline
- [ ] Limited quantity
- [ ] Price increase
- [ ] Seasonal relevance
- [ ] None (evergreen)

**Implementation:**
[how they did it]

### Risk Reversal
- [ ] Money-back guarantee
- [ ] Free trial
- [ ] Free shipping
- [ ] "No questions asked"
- [ ] Specific guarantee terms

**Placement:**
[where it appears]

### CTA Strategy
- Primary CTA text: [text]
- Secondary CTA: [if any]
- CTA frequency: [how many times]
- Button color: [hex or description]
- Reassurance text: [near CTA]

---

## Design Patterns Worth Stealing

### Layout Patterns
[Describe any interesting layout approaches]

### Visual Hierarchy
[How do they guide the eye?]

### Typography
[Fonts, sizes, weights that stand out]

### Color Usage
[How color supports conversion]

### Micro-interactions
[Hover states, animations, etc.]

---

## Copy Patterns Worth Stealing

### Headline Formula
[Break down the structure]
Example: "[Outcome] + [Timeframe] + [Without Pain Point]"

### Benefit Framing
[How do they present features as benefits?]

### Objection Handling
[Where and how do they address objections?]

### Voice/Tone
[Describe the personality]

---

## What I'd Test

1. [Hypothesis about what could improve]
2. [Another test idea]
3. [Another test idea]

---

## Components to Extract

### High Priority (Add to library)
- [ ] [Component name] — [why it's worth adding]

### Medium Priority (Reference)
- [ ] [Pattern name] — [when to use]

### Inspiration Only
- [Notes on things that are too brand-specific to templatize]

---

## Tags
`[vertical]` `[traffic-source]` `[component-type]` `[conversion-tactic]`
```

---

## Component Extraction Process

When you identify a component worth adding:

### Step 1: Document the Pattern

```markdown
## Component: [Name]

**Source:** [URL where you found it]
**Category:** [hero | social-proof | product | testimonial | cta | other]

### What It Does
[1-2 sentences]

### When to Use
- Traffic source: [best fit]
- Awareness level: [best fit]
- Objection it addresses: [if applicable]

### Why It Works
[Conversion principle it leverages]

### Visual Reference
[Screenshot or sketch]
```

### Step 2: Code It

Create clean HTML + CSS following the existing component format:

```html
<!-- ============================================
     [ID]: [NAME]
     Best for: [use case]
     Source: [original URL]
     ============================================ -->
<section class="[component-class]">
  <!-- Structure with {{PLACEHOLDER}} variables -->
</section>

<style>
/* Scoped styles using existing CSS variables */
</style>
```

### Step 3: Add to Library

1. Add HTML/CSS to appropriate file in `/components/`
2. Add entry to component table in `SKILL.md`
3. Note source URL for attribution

### Step 4: Test It

Build a test page using the new component to verify it works in context.

---

## Swipe File Organization

```
/swipe/
├── swipe-log.md           ← Quick capture log
├── screenshots/           ← Full page screenshots
│   ├── 2026-01-13-brand-name.png
│   └── ...
├── analyses/              ← Deep analysis docs
│   ├── brand-name-analysis.md
│   └── ...
└── extractions/           ← Components being developed
    ├── component-name.html
    └── ...
```

---

## Tagging System

Use consistent tags for filtering:

### By Vertical
- `#ecommerce-food`
- `#ecommerce-fashion`
- `#ecommerce-beauty`
- `#b2b-saas`
- `#b2b-service`
- `#local-service`
- `#info-product`
- `#subscription`

### By Traffic Source
- `#meta-prospecting`
- `#meta-retargeting`
- `#google-search`
- `#google-display`
- `#email`
- `#direct`

### By Component Type
- `#hero`
- `#social-proof`
- `#testimonial`
- `#product-display`
- `#pricing`
- `#faq`
- `#guarantee`
- `#cta`
- `#form`

### By Conversion Tactic
- `#urgency`
- `#scarcity`
- `#social-proof`
- `#authority`
- `#risk-reversal`
- `#personalization`
- `#comparison`

---

## Quick Analysis Prompts

Use these when you want fast analysis:

### Screenshot Analysis
```
Analyze this landing page screenshot. Identify:
1. The conversion goal
2. Target audience
3. Primary objection being addressed
4. Top 3 elements that make it effective
5. Any components worth extracting for our library
```

### URL Analysis
```
Fetch and analyze this landing page: [URL]

Structure your analysis as:
1. 5-second test (what do I understand immediately?)
2. Section-by-section breakdown
3. Conversion elements audit
4. What makes this page effective
5. Components worth stealing
```

### Competitive Analysis
```
Compare these 3 landing pages for [product type]:
1. [URL 1]
2. [URL 2]  
3. [URL 3]

Identify:
- Common patterns across all 3
- Unique approaches worth testing
- Best-in-class elements from each
```

---

## Integration Checklist

Before a new component joins the library:

- [ ] Coded in clean HTML + CSS
- [ ] Uses existing CSS variables (no hardcoded colors)
- [ ] Mobile responsive
- [ ] Has clear {{PLACEHOLDER}} variables
- [ ] Documented in component file with:
  - ID code (e.g., H7, SP6)
  - Best use case
  - Source attribution
- [ ] Added to SKILL.md component table
- [ ] Tested in at least one real page

---

## Monthly Swipe Review

Once a month, review your swipe file:

1. **Triage new captures** — Analyze or archive
2. **Extract pending components** — Code anything flagged for extraction
3. **Update component library** — Add new components
4. **Prune** — Remove outdated patterns
5. **Identify gaps** — What component types are you missing?

---

## Example: Quick Capture to Component

### Capture (30 seconds)
```markdown
## 2026-01-13 - Ridge Wallet

**URL:** https://ridge.com/
**Source:** Meta ad library
**Traffic Type:** Meta prospecting
**Vertical:** Ecommerce - accessories

### Why It Caught Your Eye
Hero with rotating product + "X people viewing" live counter. Social proof feels urgent without fake countdown.

### Priority
[x] Extract component
```

### Analysis (10 minutes)
- Live viewer count creates urgency without being sleazy
- Rotating product shows multiple colors without requiring clicks
- Trust badges (Forbes, GQ) immediately below hero
- "Free shipping + returns" prominent

### Extraction (20 minutes)
```html
<!-- ============================================
     SP6: LIVE VIEWER COUNT
     Best for: High-traffic products, urgency without countdown
     Source: ridge.com (Jan 2026)
     ============================================ -->
<div class="live-viewers">
  <span class="live-viewers__dot"></span>
  <span class="live-viewers__count">{{COUNT}}</span>
  <span class="live-viewers__text">people viewing this right now</span>
</div>

<style>
.live-viewers {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.live-viewers__dot {
  width: 8px;
  height: 8px;
  background: var(--color-success);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.live-viewers__count {
  font-weight: 600;
  color: var(--color-text);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
```

### Integration
- Added to `components/social-proof.html`
- Added row to SKILL.md: `SP6 | Live Viewer Count | Urgency without countdown`
- Tested in Ridge-style product page

---

## Swipe Sources

Where to find landing pages worth studying:

### Ad Libraries
- [Meta Ad Library](https://www.facebook.com/ads/library/)
- [Google Ads Transparency Center](https://adstransparency.google.com/)
- [TikTok Ad Library](https://library.tiktok.com/)

### Curated Collections
- [Landingfolio](https://landingfolio.com/)
- [Lapa Ninja](https://www.lapa.ninja/)
- [SaaS Landing Page](https://saaslandingpage.com/)
- [One Page Love](https://onepagelove.com/)

### Competitor Research
- Search your client's keywords, click the ads
- Check competitors' retargeting (visit their site, watch for ads)
- Subscribe to competitor emails for promo landing pages

### Your Own Winners
- Pages with >3% conversion rate
- A/B test winners
- Client pages that outperformed
