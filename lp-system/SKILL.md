# Landing Page Build System

## Purpose
Build high-converting landing pages for Meta and Google PPC campaigns. This skill provides a component library, layout templates, and conversion best practices to create variety while maintaining quality.

## CRITICAL: Read Before Building

### The 3 Laws of Landing Page Conversion
1. **Message Match** — The headline MUST echo the ad that brought them here
2. **One Goal** — Every element serves ONE conversion action (no navigation, no distractions)
3. **Objection Sequence** — Answer objections in the order visitors think them

### Common Claude Code Mistakes to Avoid
- ❌ Generic Bootstrap layouts with card grids
- ❌ Same hero → features → testimonials → CTA every time
- ❌ Placeholder content or "Lorem ipsum"
- ❌ Missing mobile optimization
- ❌ No urgency or scarcity elements
- ❌ Weak CTAs ("Submit" instead of action-oriented)
- ❌ Too many CTAs competing for attention
- ❌ **Emojis in headlines, body copy, or CTAs** (see Emoji Policy below)

### Emoji Policy: Default OFF

**Do NOT use emojis unless:**
1. The brief explicitly requests them
2. The brand voice document specifies emoji usage
3. It's a DTC brand targeting Gen-Z with established emoji-heavy social presence

**Why emojis hurt conversion on premium brands:**
- Reduce perceived quality and craftsmanship
- Clash with sophisticated typography
- Signal "discount" or "mass market" positioning
- Distract from copy rather than enhance it

**What to use instead:**
- **For visual breaks:** Use dashes, bullets, or line breaks
- **For emphasis:** Use bold text or typography hierarchy
- **For checkmarks/features:** Use CSS-styled checkmarks (✓) or icons
- **For urgency:** Use bold text, color, or countdown timers

**See `/components/visual-elements.html` for ready-to-use alternatives:**

| Instead of... | Use Component |
|---------------|---------------|
| ✅ ✓ ☑️ emoji lists | VE1: Check List |
| ✨ 🔥 ⭐ sparkle/fire | VE2: Badges |
| ───✦─── decorative lines | VE3: Dividers |
| 💡 📦 🎁 callouts | VE4: Callout Box |
| • emoji bullets inline | VE5: Inline Separator |
| ⭐⭐⭐⭐⭐ ratings | VE6: Star Rating |
| 1️⃣ 2️⃣ 3️⃣ number emojis | VE7: Number Highlight |
| 📍 📞 ✉️ functional | VE8: Icon + Text |
| ✓ ✔️ trust checks | VE9: Trust Badge |
| " " quote marks | VE10: Pull Quote |

**Examples:**

❌ BAD: "🥯 Fresh NYC Bagels Shipped to Your Door! 📦"
✅ GOOD: "Fresh NYC Bagels — Shipped to Your Door"

❌ BAD: "✨ Hand-Rolled • 3-Day Fermented • Shipped Fresh ✨"
✅ GOOD: "Hand-Rolled · 3-Day Fermented · Shipped Fresh"

❌ BAD: "Order Now 🛒"
✅ GOOD: "Order Now — Ships Tomorrow"

**If emojis ARE approved for a brand:**
- Limit to 1-2 per page maximum
- Use only in supporting text, never headlines
- Stick to product-relevant emojis only
- Test against non-emoji version

---

## STEP 1: Understand the Brief

Before writing ANY code, extract these from the brief:

```
CAMPAIGN CONTEXT:
- Traffic source: [Meta/Google/Both]
- Campaign type: [Prospecting/Retargeting/Brand]
- Target keyword or ad hook: [What message brought them here?]

PAGE GOAL:
- Primary conversion: [Purchase/Lead/Sign-up]
- Secondary conversion: [Email capture/Chat/Call]
- Average order value: [Affects urgency tactics]

AUDIENCE:
- Awareness level: [Unaware/Problem-aware/Solution-aware/Product-aware]
- Primary objection: [Price/Trust/Timing/Need]
- Emotional driver: [Fear/Desire/Belonging/Status]

ASSETS AVAILABLE:
- Product images: [URLs]
- Testimonials: [Count and type]
- Trust badges: [Press/Certifications/Guarantees]
- Video: [Yes/No]
```

---

## STEP 2: Select Layout Template

Choose based on traffic source and awareness level:

### Template A: "The Convincer" (Google Search — High Intent)
Best for: Product-aware visitors from branded/product keywords
```
1. Hero with product + instant credibility
2. Social proof bar (logos/stats)
3. Product options with clear pricing
4. How it works (3 steps)
5. Testimonials (results-focused)
6. FAQ (objection handling)
7. Guarantee
8. Final CTA
```

### Template B: "The Educator" (Meta — Cold Traffic)
Best for: Problem-aware visitors from interest targeting
```
1. Hero with pain point + solution hook
2. Problem agitation section
3. Solution introduction
4. Social proof (relatable testimonials)
5. Product showcase
6. Comparison (us vs alternatives)
7. Risk reversal (guarantee)
8. Urgency + CTA
```

### Template C: "The Showcase" (Meta — Retargeting)
Best for: Visitors who've seen ads/visited site
```
1. Hero with reminder + offer
2. Product grid with prices
3. Customer photos/UGC
4. Limited time element
5. Single strong CTA
```

### Template D: "The Authority" (B2B Lead Gen)
Best for: Decision-makers evaluating solutions
```
1. Hero with outcome promise
2. Logo bar (client credibility)
3. Problem/solution narrative
4. Case study highlights
5. How it works
6. Pricing/packages (or "Get Quote")
7. FAQ
8. Contact form + call option
```

---

## STEP 3: Build with Components

See `/components/` directory for HTML/CSS for each component type.

### Hero Variations (pick one)
| ID | Name | Best For | Key Element |
|----|------|----------|-------------|
| H1 | Product Hero | Ecommerce | Large product image right, copy left |
| H2 | Video Hero | High-ticket | Autoplay video background |
| H3 | Testimonial Hero | Trust-building | Quote integrated into hero |
| H4 | Urgency Hero | Promotions | Countdown timer prominent |
| H5 | Split Hero | A/B testing | 50/50 image and copy |
| H6 | Minimal Hero | Sophisticated | Text-focused, subtle image |

### Social Proof Variations
| ID | Name | Best For |
|----|------|----------|
| SP1 | Logo Bar | B2B, Press mentions |
| SP2 | Stats Bar | Ecommerce (orders, reviews, years) |
| SP3 | Review Carousel | Multiple testimonials |
| SP4 | Single Quote | One powerful testimonial |
| SP5 | UGC Grid | Instagram-style customer photos |
| SP6 | Video Testimonials | High trust needed |

### Product Display Variations
| ID | Name | Best For |
|----|------|----------|
| PD1 | Card Grid | Multiple products |
| PD2 | Featured + Supporting | Hero product + upsells |
| PD3 | Comparison Table | Packages/tiers |
| PD4 | Single Product Deep | One hero product |
| PD5 | Bundle Builder | Customizable packages |

### CTA Variations
| ID | Name | Best For |
|----|------|----------|
| CTA1 | Simple Button | Clear next step |
| CTA2 | Button + Reassurance | Price objection |
| CTA3 | Two Options | Primary + secondary action |
| CTA4 | Sticky Bar | Long pages |
| CTA5 | Exit Intent Popup | Last chance capture |

### Visual Elements (Emoji Alternatives)
| ID | Name | Use Instead Of |
|----|------|----------------|
| VE1 | Check List | ✅ emoji lists |
| VE2 | Badges | ✨ 🔥 sparkles |
| VE3 | Dividers | Decorative emoji lines |
| VE4 | Callout Box | 💡 📦 callouts |
| VE5 | Inline Separator | • emoji bullets |
| VE6 | Star Rating | ⭐ emoji stars |
| VE7 | Number Highlight | 1️⃣ 2️⃣ number emojis |
| VE8 | Icon + Text | 📍 📞 functional emojis |
| VE9 | Trust Badge | ✓ checkmark emojis |
| VE10 | Pull Quote | " " quote emojis |

---

## STEP 4: Apply Conversion Principles

### Above the Fold Checklist
- [ ] Headline matches ad message
- [ ] Subhead clarifies the offer
- [ ] Primary CTA visible without scrolling
- [ ] One trust signal (reviews, guarantee, logo)
- [ ] Product/service visualized

### Information Hierarchy
```
ATTENTION (Hero)     → What is this? Why should I care?
INTEREST (Problem)   → Do they understand my situation?
DESIRE (Solution)    → How does this solve my problem?
TRUST (Proof)        → Can I believe them?
ACTION (CTA)         → What do I do next?
REASSURANCE (Risk)   → What if it doesn't work?
```

### Urgency Tactics (Use Sparingly, Authentically)
- Shipping deadlines ("Order by Friday for weekend delivery")
- Limited inventory ("Only 12 left in stock")
- Seasonal relevance ("Perfect for [upcoming holiday]")
- Price increases ("Price goes up January 1st")
- ❌ NEVER use fake countdown timers or false scarcity

### Mobile Optimization Rules
- Hero headline: Max 8 words
- CTA buttons: Min 48px tap target
- Images: Lazy load below fold
- Forms: Max 3 fields on mobile
- Sticky CTA: Consider for long pages

---

## STEP 5: CSS Framework

Use the provided CSS utilities in `/css/base.css`. This ensures:
- Consistent spacing scale
- Responsive breakpoints
- Accessible color contrast
- Performance-optimized

### Spacing Scale (use these)
```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 2rem;      /* 32px */
--space-xl: 4rem;      /* 64px */
--space-2xl: 8rem;     /* 128px */
```

### Color Tokens (customize per brand)
```css
--color-primary: #2563eb;      /* Main CTA color */
--color-primary-dark: #1d4ed8; /* Hover state */
--color-text: #1f2937;         /* Body text */
--color-text-muted: #6b7280;   /* Secondary text */
--color-bg: #ffffff;           /* Background */
--color-bg-alt: #f9fafb;       /* Alternate sections */
--color-border: #e5e7eb;       /* Borders */
--color-success: #059669;      /* Positive signals */
--color-warning: #d97706;      /* Urgency */
```

---

## STEP 6: Quality Checklist

Before delivering, verify:

### Conversion Elements
- [ ] Headline matches traffic source intent
- [ ] Primary CTA appears 3+ times on page
- [ ] CTA text is action-oriented (not "Submit")
- [ ] Social proof within first viewport
- [ ] Guarantee/risk reversal present
- [ ] FAQ addresses top 3-4 objections
- [ ] No external links (keep them on page)

### Technical Quality
- [ ] All images have alt text
- [ ] No broken links
- [ ] Forms have proper labels
- [ ] Mobile responsive (test at 375px)
- [ ] No horizontal scroll on mobile
- [ ] Page weight under 2MB

### Copy Quality
- [ ] Benefits over features
- [ ] Specific numbers over vague claims
- [ ] Active voice over passive
- [ ] "You" focused (not "we")
- [ ] No jargon unless audience expects it
- [ ] **No emojis** (unless explicitly approved in brief)

---

## File Structure

```
/landing-page-system/
├── SKILL.md (this file)
├── /components/
│   ├── heroes.html
│   ├── social-proof.html
│   ├── visual-elements.html    ← Emoji alternatives
│   ├── product-displays.html
│   ├── testimonials.html
│   ├── faqs.html
│   ├── ctas.html
│   └── guarantees.html
├── /layouts/
│   ├── template-a-convincer.html
│   ├── template-b-educator.html
│   ├── template-c-showcase.html
│   └── template-d-authority.html
├── /css/
│   └── base.css
└── /examples/
    ├── ecommerce-food.html
    ├── ecommerce-fashion.html
    ├── b2b-saas.html
    └── b2b-service.html
```

---

## Example Brief → Build Mapping

**Input Brief:**
```json
{
  "traffic_source": "google",
  "keyword": "nyc bagels shipped",
  "awareness": "product-aware",
  "primary_objection": "trust (will they arrive fresh?)",
  "products": 3,
  "testimonials": 5,
  "has_guarantee": true
}
```

**Output Decisions:**
- Template: A (The Convincer)
- Hero: H1 (Product Hero) — show the bagels prominently
- Social Proof: SP2 (Stats Bar) — years, reviews, states shipped
- Products: PD2 (Featured + Supporting)
- Testimonials: SP4 (Single Quote) then SP3 (Carousel)
- CTA: CTA2 (Button + Reassurance) — "Ships Fresh Tomorrow"

---

## Variety Generation

To avoid same-looking pages, randomize these elements:

### Section Order Variations
Standard order can be shuffled. Valid alternatives:
- Move testimonials above product grid (trust-first)
- Move FAQ higher if objections are strong
- Lead with UGC if Instagram-style brand

### Visual Variations
- Hero image: Left vs Right vs Full-width
- Section backgrounds: Alternate white/gray vs all white
- Testimonial style: Cards vs quotes vs carousel
- CTA color: Primary vs contrasting accent

### Copy Angle Variations
Same product, different hooks:
- Nostalgia: "The bagels you remember"
- Quality: "3-day fermented perfection"
- Convenience: "Real NYC bagels at your door"
- Social: "Join 10,000+ bagel lovers"

Pick the angle that matches the ad creative.
