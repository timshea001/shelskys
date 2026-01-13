# Landing Page Brief Generator

## Purpose
Generate structured, machine-readable briefs for landing page creation. This skill produces JSON-formatted briefs that Claude Code can execute against the Landing Page Build System.

## Why Structured Briefs Matter

**Without structure:** Claude Code interprets your intent, often missing key details or making assumptions.

**With structure:** Claude Code executes a specification. Fewer revisions, consistent output.

---

## Brief Generation Process

### Step 1: Gather Input

Collect this information from the user or source materials:

```markdown
## Required Information

### Campaign Context
- Traffic source: [Google Search / Google Display / Meta Prospecting / Meta Retargeting]
- Target keyword or ad hook: [What brings them to this page?]
- Campaign goal: [Purchases / Lead capture / Sign-up / Booking]

### Product/Service
- Product URL(s): [Link to scrape]
- Price point(s): [Actual prices]
- Key differentiators: [What makes this different?]
- Available images: [URLs or "scrape from product page"]

### Audience
- Awareness level: [Unaware / Problem-aware / Solution-aware / Product-aware]
- Primary objection: [Price / Trust / Timing / Need / Competition]
- Emotional driver: [Fear of missing out / Desire for outcome / Belonging / Status]

### Assets Available
- Testimonials: [Count, source]
- Press/logos: [Count, which ones]
- Guarantee: [Yes/No, what kind]
- Video: [Yes/No, URL]

### Brand
- Primary color: [Hex code]
- Logo URL: [Link]
- Voice: [Professional / Casual / Luxury / Friendly]
- Emoji usage: [None (default) / Minimal / Moderate]
```

#### Emoji Usage Guidance

| Level | When to Use | Example Brands |
|-------|-------------|----------------|
| **None** (default) | Premium, luxury, traditional, B2B, professional services | Shelsky's, high-end food, financial services |
| **Minimal** | Friendly DTC with occasional playful touch | Some lifestyle brands, casual food delivery |
| **Moderate** | Gen-Z targeting, social-first brands with established emoji voice | Trendy DTC beauty, casual fashion |

**Default to "none" unless:**
- The brand's existing marketing uses emojis consistently
- Target audience is Gen-Z with social-first discovery
- Brief explicitly approves emoji usage

### Step 2: Generate Structured Brief

Output the brief in this exact JSON format:

```json
{
  "meta": {
    "page_name": "string - descriptive name",
    "page_slug": "string - url-friendly name",
    "traffic_source": "google_search | google_display | meta_prospecting | meta_retargeting",
    "target_keyword": "string - primary keyword or ad hook",
    "conversion_goal": "purchase | lead | signup | booking"
  },
  
  "brand": {
    "name": "string",
    "logo_url": "string",
    "primary_color": "#hex",
    "secondary_color": "#hex",
    "voice": "professional | casual | luxury | friendly",
    "emoji_usage": "none | minimal | moderate"
  },
  
  "template": {
    "type": "convincer | educator | showcase | authority",
    "hero_variant": "H1 | H2 | H3 | H4 | H5 | H6",
    "social_proof_variant": "SP1 | SP2 | SP3 | SP4 | SP5",
    "cta_variant": "CTA1 | CTA2 | CTA3 | CTA4"
  },
  
  "hero": {
    "eyebrow": "string - short label above headline",
    "headline": "string - main headline (max 10 words)",
    "subheadline": "string - supporting text (max 25 words)",
    "image_url": "string",
    "image_alt": "string",
    "cta_text": "string - action verb + benefit",
    "cta_url": "string",
    "reassurance": "string - overcome objection"
  },
  
  "social_proof": {
    "type": "stats | logos | reviews",
    "stats": [
      {"number": "string", "label": "string"},
      {"number": "string", "label": "string"},
      {"number": "string", "label": "string"}
    ],
    "logos": [
      {"url": "string", "alt": "string"}
    ],
    "press_quote": {
      "text": "string",
      "source": "string"
    }
  },
  
  "products": [
    {
      "name": "string",
      "description": "string - benefit-focused (max 20 words)",
      "price": "string - formatted",
      "price_note": "string - e.g., 'per half lb' or 'serves 4-6'",
      "image_url": "string",
      "product_url": "string",
      "badge": "string | null - e.g., 'Best Seller', 'Most Popular'"
    }
  ],
  
  "testimonials": [
    {
      "quote": "string - (max 50 words)",
      "author_name": "string",
      "author_meta": "string - location or title",
      "author_image": "string | null"
    }
  ],
  
  "faq": [
    {
      "question": "string",
      "answer": "string"
    }
  ],
  
  "guarantee": {
    "icon": "string - emoji or icon class",
    "title": "string",
    "text": "string"
  },
  
  "final_cta": {
    "headline": "string",
    "subheadline": "string",
    "cta_text": "string",
    "cta_url": "string",
    "reassurance": "string"
  },
  
  "footer": {
    "company_name": "string",
    "address": "string",
    "phone": "string",
    "links": [
      {"text": "string", "url": "string"}
    ]
  },
  
  "section_order": [
    "hero",
    "social_proof",
    "products",
    "testimonials",
    "faq",
    "guarantee",
    "final_cta"
  ]
}
```

---

## Template Selection Logic

Use this decision tree:

```
IF traffic_source == "google_search" AND awareness >= "product-aware"
  → Template: "convincer" (Template A)
  → Hero: H1 (Product Hero) or H4 (Urgency Hero if promotion)
  
ELSE IF traffic_source == "meta_prospecting" AND awareness <= "problem-aware"
  → Template: "educator" (Template B)
  → Hero: H3 (Testimonial Hero) or H5 (Split Hero)
  
ELSE IF traffic_source == "meta_retargeting"
  → Template: "showcase" (Template C)
  → Hero: H4 (Urgency Hero) or H1 (Product Hero)
  
ELSE IF conversion_goal == "lead" AND is_b2b
  → Template: "authority" (Template D)
  → Hero: H6 (Minimal Hero) or H2 (Video Hero)
```

---

## Copy Formula Templates

### Headlines by Awareness Level

**Product-Aware (they know your product):**
- "[Product] — [Key Differentiator]"
- "The [Product] That [Outcome]"
- "[Outcome] Starts Here"

**Solution-Aware (they know solutions exist):**
- "The [Better Way] to [Outcome]"
- "[Outcome] Without [Pain Point]"
- "Finally, [Solution] That [Differentiator]"

**Problem-Aware (they know the problem):**
- "Tired of [Problem]?"
- "[Problem]? Here's What [Audience] Are Doing Instead"
- "Stop [Pain]. Start [Pleasure]."

### CTA Text Formulas

**Purchase:**
- "Order [Product] Now"
- "Get [Product] — [Benefit]"
- "Shop [Product] — [Urgency]"

**Lead:**
- "Get Your Free [Resource]"
- "Request a [Consultation/Demo]"
- "[Action] — It's Free"

### Reassurance Formulas

- "Free shipping on orders over $X"
- "30-day money-back guarantee"
- "No credit card required"
- "Ships in X days"
- "Join X+ happy customers"

---

## Quality Checklist for Briefs

Before finalizing, verify:

### Completeness
- [ ] All URLs are real and accessible
- [ ] All prices are accurate and formatted
- [ ] All images have alt text specified
- [ ] Testimonials have attribution
- [ ] FAQ addresses the primary objection

### Conversion Optimization
- [ ] Headline matches traffic source intent
- [ ] CTA text is action-oriented (not "Submit" or "Click Here")
- [ ] Reassurance addresses primary objection
- [ ] Social proof appears early
- [ ] FAQ addresses top 3-4 objections

### Copy Quality
- [ ] Headlines under 10 words
- [ ] Subheadlines under 25 words
- [ ] Product descriptions under 20 words
- [ ] Testimonials under 50 words
- [ ] Benefits over features throughout

---

## Example: Ecommerce Brief

```json
{
  "meta": {
    "page_name": "Shelsky's NYC Bagels Shipped",
    "page_slug": "nyc-bagels-shipped",
    "traffic_source": "google_search",
    "target_keyword": "nyc bagels shipped nationwide",
    "conversion_goal": "purchase"
  },
  
  "brand": {
    "name": "Shelsky's of Brooklyn",
    "logo_url": "https://shelskys.com/wp-content/uploads/2022/12/logo-text.png",
    "primary_color": "#1a1a1a",
    "secondary_color": "#c9a227",
    "voice": "friendly"
  },
  
  "template": {
    "type": "convincer",
    "hero_variant": "H1",
    "social_proof_variant": "SP2",
    "cta_variant": "CTA2"
  },
  
  "hero": {
    "eyebrow": "Brooklyn's Finest Since 2011",
    "headline": "Real NYC Bagels, Shipped Fresh",
    "subheadline": "Kettle-boiled, 3-day fermented. This is what New Yorkers miss most. Delivered anywhere in America.",
    "image_url": "https://shelskys.com/wp-content/uploads/...",
    "image_alt": "Fresh bagels from Shelsky's of Brooklyn",
    "cta_text": "Order Fresh Bagels",
    "cta_url": "https://shelskys.com/product-category/bagels-bialys-bread/",
    "reassurance": "Free shipping on orders over $300"
  },
  
  "social_proof": {
    "type": "stats",
    "stats": [
      {"number": "13+", "label": "Years in Brooklyn"},
      {"number": "500+", "label": "5-Star Reviews"},
      {"number": "72hr", "label": "Fermentation Time"},
      {"number": "50", "label": "States Delivered"}
    ]
  },
  
  "products": [
    {
      "name": "Baker's Dozen Bagels",
      "description": "Mix and match any combination. Everything, Plain, Sesame, and more.",
      "price": "$31.20",
      "price_note": "13 bagels",
      "image_url": "https://shelskys.com/...",
      "product_url": "https://shelskys.com/product-category/bagels-bialys-bread/",
      "badge": null
    },
    {
      "name": "Wake Up in Brooklyn Package",
      "description": "Complete brunch: bagels, smoked fish, cream cheese, and all the fixings.",
      "price": "$229.99",
      "price_note": "Feeds 6-8",
      "image_url": "https://shelskys.com/wp-content/uploads/2023/05/2-Wake-Up-In-Brooklyn-Gift-Basket-1-scaled-1-400x400.jpeg",
      "product_url": "https://shelskys.com/product/wake-up-in-brooklyn-package/",
      "badge": "Most Popular"
    }
  ],
  
  "testimonials": [
    {
      "quote": "Sent bagels to my parents in Florida. Dad called crying (happy tears). Said it was the best bagel since leaving NYC 30 years ago.",
      "author_name": "Joshua M.",
      "author_meta": "Brooklyn",
      "author_image": null
    }
  ],
  
  "faq": [
    {
      "question": "How long do the bagels stay fresh?",
      "answer": "Eat within 3 days for peak freshness. For longer storage, freeze immediately—they'll keep for up to 3 months. Toast directly from frozen."
    },
    {
      "question": "How are they shipped?",
      "answer": "Bagels are baked fresh the morning of shipment, packed in insulated containers, and shipped overnight."
    }
  ],
  
  "guarantee": {
    "icon": "✓",
    "title": "Not Happy? We'll Make It Right.",
    "text": "If you're unsatisfied for any reason, contact us. We'll work with you to make it right."
  },
  
  "final_cta": {
    "headline": "Ready for Real NYC Bagels?",
    "subheadline": "Free shipping on orders over $300. Ships fresh overnight.",
    "cta_text": "Order Now — Ship Anywhere",
    "cta_url": "https://shelskys.com/product-category/bagels-bialys-bread/",
    "reassurance": "Satisfaction guaranteed"
  },
  
  "section_order": [
    "hero",
    "social_proof",
    "products",
    "testimonials",
    "faq",
    "guarantee",
    "final_cta"
  ]
}
```

---

## Handoff to Claude Code

When passing the brief to Claude Code, include:

1. **The JSON brief** (above)
2. **Reference to the build system skill:** "Use /mnt/skills/user/landing-page-system/SKILL.md"
3. **Component library reference:** "Pull components from /mnt/skills/user/landing-page-system/components/"
4. **CSS framework:** "Use /mnt/skills/user/landing-page-system/css/base.css as foundation"

### Prompt Template for Claude Code:

```
Build a landing page using the attached brief.

## Requirements:
1. Read and follow /mnt/skills/user/landing-page-system/SKILL.md
2. Use components from /mnt/skills/user/landing-page-system/components/
3. Base CSS from /mnt/skills/user/landing-page-system/css/base.css
4. Follow section_order from the brief exactly
5. Use real product URLs and images from the brief
6. Do not use placeholder content

## Brief:
[PASTE JSON BRIEF HERE]

## Output:
Single HTML file with embedded CSS. Mobile responsive.
```
