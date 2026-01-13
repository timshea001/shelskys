# Landing Page System — README

## Overview

A complete skill system for building high-converting landing pages for Meta and Google PPC campaigns. Designed to reduce revision cycles and increase output variety.

## The Problem This Solves

| Old Way | New Way |
|---------|---------|
| Verbose briefs that Claude Code interprets | Structured JSON briefs that Claude Code executes |
| Same Bootstrap-looking layouts every time | Component library with proven variations |
| Best practices mentioned but not enforced | Conversion principles embedded in the system |
| 5-10 revision cycles | 1-3 revision cycles |
| Generic "AI-looking" pages | Variety through component selection |

---

## Skill Files

```
/landing-page-system/
├── SKILL.md              ← Main skill file (Claude Code reads this first)
├── BRIEF-GENERATOR.md    ← How to create structured briefs
├── QA-REVIEW.md          ← Quality checklist before launch
├── README.md             ← This file
│
├── /components/
│   ├── heroes.html       ← 6 hero variations with CSS
│   └── social-proof.html ← Social proof, testimonials, FAQ, CTA components
│
├── /css/
│   └── base.css          ← CSS framework with design tokens
│
└── /layouts/             ← (Add full page templates here)
```

---

## Workflow

### Phase 1: Research & Brief (Claude.ai)

1. **Gather inputs:**
   - Product URL(s) to scrape
   - Traffic source (Google/Meta)
   - Target keyword or ad hook
   - Available assets (testimonials, logos, etc.)

2. **Use BRIEF-GENERATOR.md** to create structured JSON brief

3. **Review brief** for completeness before handoff

### Phase 2: Build (Claude Code)

1. **Pass to Claude Code** with this prompt:

```
Build a landing page using the attached brief.

## Requirements:
1. Read and follow /mnt/skills/user/landing-page-system/SKILL.md
2. Use components from /mnt/skills/user/landing-page-system/components/
3. Base CSS from /mnt/skills/user/landing-page-system/css/base.css
4. Follow section_order from the brief exactly
5. Use ONLY the real URLs and data from the brief — no placeholders

## Brief:
[PASTE JSON BRIEF HERE]

## Output:
Single HTML file with embedded CSS. Mobile responsive. Push to GitHub.
```

2. **Claude Code executes** against the structured brief

### Phase 3: QA (Claude.ai or Manual)

1. **Use QA-REVIEW.md** checklist
2. Document issues
3. Generate revision brief if needed
4. Create A/B test hypotheses

---

## Installation

### Option 1: User Skill (Recommended)

Upload the `/landing-page-system/` folder to your Claude.ai project as a user skill.

Files will be available at:
- `/mnt/skills/user/landing-page-system/SKILL.md`
- `/mnt/skills/user/landing-page-system/components/heroes.html`
- etc.

### Option 2: Project Files

Add the files to your project as project knowledge/files.

### Option 3: GitHub

Host the skill files in a repo and have Claude Code clone them at runtime.

---

## Creating Variety

The system creates variety through **component selection**, not random generation.

### Hero Variations (6 options)
| ID | Style | When to Use |
|----|-------|-------------|
| H1 | Product right, copy left | Ecommerce, product-focused |
| H2 | Video background | High-ticket, storytelling |
| H3 | Testimonial integrated | Trust-building |
| H4 | Urgency/countdown | Sales, promotions |
| H5 | 50/50 split | A/B testing, balanced |
| H6 | Minimal/elegant | Luxury brands |

### Social Proof Variations (5 options)
| ID | Style | When to Use |
|----|-------|-------------|
| SP1 | Logo bar | B2B, press mentions |
| SP2 | Stats bar | Ecommerce metrics |
| SP3 | Review carousel | Multiple testimonials |
| SP4 | Single featured quote | One powerful proof |
| SP5 | UGC grid | Instagram-style social proof |

### How to Get Different Looks

1. **Specify in brief:** `"hero_variant": "H3"` → Testimonial hero
2. **Change section order:** Put testimonials before products
3. **Swap proof type:** Stats vs. logos vs. quotes
4. **Adjust brand colors:** Different palette = different feel

---

## Reducing Revision Cycles

### Why briefs fail:

1. **Ambiguity** — "Make it pop" means nothing
2. **Missing data** — No real product URLs
3. **Unstructured** — Claude Code has to interpret intent
4. **No constraints** — Infinite design space

### How structured briefs fix this:

| Element | Old Brief | New Brief |
|---------|-----------|-----------|
| Headline | "Write a compelling headline" | `"headline": "Real NYC Bagels, Shipped Fresh"` |
| Products | "Show 3-4 products" | Full JSON with names, prices, URLs, images |
| Layout | "Modern and clean" | `"template": "convincer", "hero_variant": "H1"` |
| CTA | "Add a call to action" | `"cta_text": "Order Fresh Bagels", "cta_url": "..."` |

---

## Best Practices Embedded

The SKILL.md file embeds these principles:

### 3 Laws of Landing Page Conversion
1. **Message Match** — Headline echoes the ad
2. **One Goal** — Single conversion action
3. **Objection Sequence** — Answer objections in order

### Common Mistakes Blocked
- ❌ Generic Bootstrap layouts
- ❌ Same structure every time
- ❌ Placeholder content
- ❌ Missing mobile optimization
- ❌ No urgency elements
- ❌ Weak CTAs

### Required Elements Enforced
- ✅ Social proof in first viewport
- ✅ CTA visible without scrolling
- ✅ Guarantee section
- ✅ FAQ for objection handling
- ✅ Reassurance near CTAs

---

## Extending the System

### Add New Components

1. Create HTML + CSS in `/components/`
2. Add to component table in SKILL.md
3. Reference by ID in briefs

### Add New Templates

1. Create full page template in `/layouts/`
2. Document use case in SKILL.md
3. Add to template selection logic

### Industry-Specific Variations

Create sub-skills for verticals:
- `/landing-page-system/verticals/ecommerce-food.md`
- `/landing-page-system/verticals/b2b-saas.md`
- `/landing-page-system/verticals/local-service.md`

---

## Slash Command Ideas

If you want to create shortcuts:

| Command | Action |
|---------|--------|
| `/lp-brief` | Generate structured landing page brief |
| `/lp-review` | Run QA checklist on a URL |
| `/lp-audit` | Full conversion audit with recommendations |
| `/lp-test` | Generate A/B test hypotheses |

---

---

## Evolving the Library

The component library is designed to grow. Use the swipe system to add new patterns.

### Quick Capture
```
Found interesting landing page → Add URL to swipe/inbox.md
```

### Analyze & Extract
```
Use INGEST.md prompts to:
1. Analyze pages in batch
2. Extract high-priority components
3. Generate library-ready code
```

### Integrate
```
1. Add component to components/*.html
2. Update SKILL.md table
3. Log in CHANGELOG.md
```

### Files
- `INGEST.md` — Prompts for AI-assisted analysis and extraction
- `SWIPE-SYSTEM.md` — Manual capture and analysis templates
- `CHANGELOG.md` — Library version history
- `swipe/inbox.md` — Quick capture queue

---

## Metrics to Track

After implementing this system, measure:

1. **Revision cycles per page** (target: 1-3)
2. **Time from brief to deployed page** (target: <2 hours)
3. **Conversion rate of pages** (vs. old workflow)
4. **Visual variety** (subjective, but noticeable)

---

## Next Steps to Improve

1. **Add more components:** Product displays, comparison tables, pricing sections
2. **Create layout templates:** Full HTML templates Claude Code can use as starting points
3. **Build example library:** 5-10 reference implementations for different verticals
4. **Automate QA:** Script that checks for common issues automatically
5. **Version control:** Track which version of components each page uses

---

## Support

This skill system is maintained by the user. Update components and best practices as you learn what works.

Key files to update:
- `SKILL.md` — When you discover new best practices
- `/components/` — When you create winning variations
- `QA-REVIEW.md` — When you identify new common issues
