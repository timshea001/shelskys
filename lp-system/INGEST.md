# Landing Page Ingestion System

## Purpose
Automate the process of analyzing landing pages and extracting reusable components using Claude. Feed the swipe file into the component library with minimal manual work.

---

## Quick Ingestion Workflow

### Option 1: URL Ingestion (Claude.ai with web fetch)

```
Analyze this landing page for our component library: [URL]

1. Fetch and analyze the page structure
2. Identify the section order and purpose of each section
3. List all conversion elements (social proof, urgency, CTAs, etc.)
4. Identify 1-3 components worth extracting
5. For each extractable component:
   - Describe what it does and why it works
   - Provide clean HTML + CSS code using our design tokens
   - Suggest component ID and category

Use these CSS variables in extracted code:
--color-primary, --color-secondary, --color-accent
--color-text, --color-text-muted, --color-bg, --color-bg-alt
--space-xs (4px), --space-sm (8px), --space-md (16px), --space-lg (24px), --space-xl (32px), --space-2xl (64px)
--font-family-base, --font-family-heading
--radius-sm, --radius-md, --radius-lg
```

### Option 2: Screenshot Ingestion (Claude.ai with image)

Upload screenshot, then:

```
Analyze this landing page screenshot for our component library.

1. What's the conversion goal?
2. Section-by-section breakdown (name + purpose)
3. What makes this page effective?
4. Identify 1-3 components worth extracting
5. For the best component, provide:
   - Clean HTML + CSS code (estimate the styling from visual)
   - Use our CSS variables (--color-primary, --space-md, etc.)
   - Suggest component ID (e.g., H7, SP6, CTA3)

Focus on components that solve problems our current library doesn't.
```

### Option 3: Batch Analysis (Multiple URLs)

```
Compare these landing pages and identify the best patterns:

1. [URL 1]
2. [URL 2]
3. [URL 3]

For each page, note:
- Primary conversion tactic
- Unique component worth stealing

Then identify:
- Common patterns across all (table stakes)
- Standout components to extract (differentiation)
- Which page is most effective and why
```

---

## Component Extraction Prompt

Once you've identified a component worth extracting:

```
Extract this component for our landing page library:

Component: [description or screenshot]
Source: [URL]
Category: [hero | social-proof | product | testimonial | cta | faq | guarantee | other]

Requirements:
1. Clean semantic HTML
2. Scoped CSS using these variables:
   - Colors: --color-primary, --color-secondary, --color-accent, --color-text, --color-text-muted, --color-bg, --color-bg-alt, --color-success, --color-warning
   - Spacing: --space-xs (4px), --space-sm (8px), --space-md (16px), --space-lg (24px), --space-xl (32px), --space-2xl (64px), --space-3xl (128px)
   - Typography: --font-family-base, --font-family-heading
   - Borders: --radius-sm (4px), --radius-md (8px), --radius-lg (16px)
   - Shadows: --shadow-sm, --shadow-md, --shadow-lg

3. Use {{PLACEHOLDER}} for variable content
4. Mobile responsive (include media queries)
5. Include component header comment with:
   - ID code
   - Name
   - Best use case
   - Source URL

Output format:
<!-- Component header -->
<section>...</section>
<style>...</style>
```

---

## Structured Ingestion Format

For consistent library additions, request this format:

```
Analyze [URL/screenshot] and output in this JSON structure:

{
  "source": {
    "url": "",
    "brand": "",
    "vertical": "",
    "captured_date": ""
  },
  "page_analysis": {
    "conversion_goal": "",
    "target_audience": "",
    "traffic_source_likely": "",
    "primary_objection_addressed": "",
    "section_order": [
      {"name": "", "purpose": ""}
    ]
  },
  "conversion_elements": {
    "social_proof": [],
    "urgency_scarcity": [],
    "risk_reversal": [],
    "cta_strategy": ""
  },
  "components_to_extract": [
    {
      "name": "",
      "category": "",
      "suggested_id": "",
      "why_extract": "",
      "when_to_use": ""
    }
  ],
  "overall_effectiveness": "",
  "key_insight": ""
}
```

---

## Component Code Template

All extracted components should follow this format:

```html
<!-- ============================================
     [ID]: [COMPONENT NAME]
     Category: [hero | social-proof | product | etc.]
     Best for: [use case description]
     Source: [original URL]
     Added: [date]
     ============================================ -->

<section class="[component-class]">
  <!-- 
    Placeholders:
    {{HEADLINE}} - Main headline text
    {{SUBHEAD}} - Supporting text
    {{IMAGE_URL}} - Image source
    {{CTA_TEXT}} - Button text
    {{CTA_URL}} - Button link
    (add all placeholders used)
  -->
  
  <div class="[component-class]__container">
    <!-- Component HTML -->
  </div>
</section>

<style>
/* ============================================
   [ID]: [COMPONENT NAME]
   ============================================ */

.component-class {
  /* Use CSS variables */
  padding: var(--space-2xl) var(--space-md);
  background: var(--color-bg);
}

.component-class__container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
  .component-class {
    padding: var(--space-xl) var(--space-md);
  }
}
</style>
```

---

## Library Integration Checklist

After extracting a component, verify before adding:

```markdown
## Component Integration: [Name]

### Code Quality
- [ ] Uses semantic HTML
- [ ] All colors use CSS variables (no hex codes)
- [ ] All spacing uses CSS variables (no px values except borders)
- [ ] Includes mobile responsive styles
- [ ] No external dependencies (fonts, icons loaded separately)
- [ ] Placeholders clearly marked with {{NAME}}

### Documentation
- [ ] Component header comment complete
- [ ] ID follows convention (H7, SP6, CTA3, etc.)
- [ ] Source URL included
- [ ] "Best for" use case described

### Testing
- [ ] Renders correctly standalone
- [ ] Works with base.css
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] Placeholders are intuitive

### Library Update
- [ ] Added to appropriate components/*.html file
- [ ] Added row to SKILL.md component table
- [ ] Added to README if it's a major addition
```

---

## Evolution Tracking

Track how the library grows over time:

```markdown
# Component Library Changelog

## [Date]

### Added
- [ID]: [Name] — [Source URL]
  - Use case: [when to use]
  - Extracted because: [why it was worth adding]

### Modified
- [ID]: [Name] — [what changed]

### Deprecated
- [ID]: [Name] — [why removed, what replaces it]
```

---

## Gap Analysis Prompt

Periodically audit the library for missing components:

```
Review our current component library and identify gaps:

Current components:
- Heroes: H1 (Product), H2 (Video), H3 (Testimonial), H4 (Urgency), H5 (Split), H6 (Minimal)
- Social Proof: SP1 (Logo Bar), SP2 (Stats), SP3 (Review Carousel), SP4 (Single Quote), SP5 (UGC Grid)
- Other: Guarantee, FAQ, Final CTA

Common landing page patterns we're missing:
1. [Pattern] — Why we need it
2. [Pattern] — Why we need it
3. [Pattern] — Why we need it

Suggested swipe hunting targets:
- [Type of page to find for pattern 1]
- [Type of page to find for pattern 2]
```

---

## Automated Ingestion Workflow

### Phase 1: Capture
1. Find interesting landing page
2. Save URL to `swipe/inbox.md`
3. Optional: Screenshot if page might change

### Phase 2: Analyze (Claude)
```
Analyze these landing pages from my inbox:

[paste URLs from inbox.md]

For each, provide:
1. 1-sentence summary of what makes it effective
2. Primary component worth extracting (if any)
3. Priority: HIGH (extract now) | MEDIUM (reference) | LOW (skip)

Output as table:
| URL | Summary | Component | Priority |
```

### Phase 3: Extract (Claude)
For HIGH priority items:
```
Extract this component: [description]
From: [URL]

[Use component extraction prompt from above]
```

### Phase 4: Integrate
1. Copy generated code to components file
2. Update SKILL.md table
3. Test in a real page
4. Clear from inbox

---

## Example: Full Ingestion Flow

### Input
```
Analyze this landing page for component extraction: https://example-dtc-brand.com/landing

Focus on their social proof section - I noticed they have an interesting approach to displaying reviews.
```

### Output (Claude generates)

```json
{
  "source": {
    "url": "https://example-dtc-brand.com/landing",
    "brand": "Example DTC Brand",
    "vertical": "ecommerce-beauty",
    "captured_date": "2026-01-13"
  },
  "page_analysis": {
    "conversion_goal": "Product purchase (single SKU)",
    "traffic_source_likely": "Meta prospecting",
    "section_order": [
      {"name": "Hero", "purpose": "Problem-solution positioning"},
      {"name": "Social Proof Bar", "purpose": "Immediate credibility"},
      {"name": "How It Works", "purpose": "Demystify product"},
      {"name": "Review Highlights", "purpose": "Address skepticism"},
      {"name": "FAQ", "purpose": "Handle remaining objections"},
      {"name": "Final CTA", "purpose": "Last conversion opportunity"}
    ]
  },
  "components_to_extract": [
    {
      "name": "Review Highlight Cards",
      "category": "social-proof",
      "suggested_id": "SP6",
      "why_extract": "Shows review snippet + verified badge + 'X people found helpful' - more credible than plain quotes",
      "when_to_use": "Ecommerce with existing reviews, skeptical audience"
    }
  ]
}
```

### Extracted Component
```html
<!-- ============================================
     SP6: REVIEW HIGHLIGHT CARD
     Category: social-proof
     Best for: Ecommerce with reviews, building credibility
     Source: example-dtc-brand.com
     Added: 2026-01-13
     ============================================ -->

<div class="review-card">
  <div class="review-card__header">
    <div class="review-card__stars">★★★★★</div>
    <span class="review-card__verified">✓ Verified Purchase</span>
  </div>
  <p class="review-card__text">"{{REVIEW_TEXT}}"</p>
  <div class="review-card__footer">
    <span class="review-card__author">{{AUTHOR_NAME}}</span>
    <span class="review-card__helpful">{{HELPFUL_COUNT}} people found this helpful</span>
  </div>
</div>

<style>
.review-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border, #e5e5e5);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
}

.review-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-sm);
}

.review-card__stars {
  color: var(--color-warning, #f59e0b);
  letter-spacing: 2px;
}

.review-card__verified {
  font-size: 0.75rem;
  color: var(--color-success, #22c55e);
  font-weight: 500;
}

.review-card__text {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  margin-bottom: var(--space-md);
}

.review-card__footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.review-card__author {
  font-weight: 500;
}
</style>
```

---

## Swipe Hunting Targets

When actively looking for components to add, prioritize:

### High Value (Often Missing)
- Comparison tables (us vs. competitors)
- Before/after sliders
- Video testimonials layout
- Ingredient/feature deep-dives
- Bundle builders
- Quiz/assessment intros
- Exit-intent overlays
- Sticky mobile CTAs
- Trust badge arrangements

### By Vertical
- **Ecommerce**: Product configurators, subscription explanations, shipping calculators
- **B2B SaaS**: Pricing tables, integration logos, ROI calculators
- **Service**: Booking widgets, service area maps, team grids
- **Info Products**: Curriculum outlines, instructor bios, bonus stacks

### By Traffic Source
- **Meta Cold**: Aggressive social proof, curiosity hooks, story-driven
- **Google Search**: Answer-first, comparison-heavy, trust-forward
- **Retargeting**: Objection-focused, testimonial-heavy, urgency elements
