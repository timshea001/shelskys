# Landing Page QA & Review

## Purpose
Quality assurance checklist and optimization review for landing pages before deployment. This skill ensures pages meet conversion best practices and technical requirements.

---

## Pre-Flight Checklist

Run through this checklist before any page goes live:

### 🔴 Critical (Must Fix)

| Check | Pass/Fail | Notes |
|-------|-----------|-------|
| All product links work | | |
| All images load | | |
| CTA buttons functional | | |
| Mobile responsive (test at 375px) | | |
| No horizontal scroll on mobile | | |
| Form submissions work (if applicable) | | |
| Tracking pixel fires | | |
| Page loads in under 3 seconds | | |

### 🟡 Conversion Elements (Should Have)

| Check | Pass/Fail | Notes |
|-------|-----------|-------|
| Headline visible without scrolling | | |
| CTA visible without scrolling | | |
| Trust signal in first viewport | | |
| Social proof within 2 scrolls | | |
| Guarantee visible | | |
| FAQ addresses top objection | | |
| No outbound navigation links | | |
| Phone number clickable on mobile | | |

### 🟢 Quality Polish (Nice to Have)

| Check | Pass/Fail | Notes |
|-------|-----------|-------|
| All images have alt text | | |
| Favicon set | | |
| Meta title optimized | | |
| Meta description written | | |
| Open Graph tags for social sharing | | |
| Schema markup (Product/FAQ) | | |
| Consistent spacing throughout | | |
| Animations smooth, not janky | | |
| **No emojis** (unless brief approved) | | |

### Copy Audit

| Check | Pass/Fail | Notes |
|-------|-----------|-------|
| Headlines use benefits, not features | | |
| CTAs are action-oriented verbs | | |
| No placeholder or generic copy | | |
| Testimonials feel authentic | | |
| **No emojis in headlines or CTAs** | | |
| No excessive exclamation points | | |
| Consistent brand voice throughout | | |

---

## Conversion Audit Questions

Ask these questions for each section:

### Hero Section
1. Does the headline match the ad that brought them here?
2. Can a visitor understand the offer in 5 seconds?
3. Is the primary benefit clear?
4. Is there a reason to act now vs. later?

### Social Proof
1. Is the proof specific (numbers, names, locations)?
2. Is the proof relevant to the target audience?
3. Is the proof believable (not too perfect)?
4. Does the proof address the primary objection?

### Product Section
1. Are prices clearly visible?
2. Is it clear what's included?
3. Are there enough options (but not too many)?
4. Is the path to purchase obvious?

### Testimonials
1. Do testimonials mention specific results?
2. Are testimonials from relatable people?
3. Do testimonials address common objections?
4. Are testimonials varied (different angles)?

### FAQ
1. Does FAQ address shipping/delivery concerns?
2. Does FAQ address money-back/return policy?
3. Does FAQ address "why you" vs. competitors?
4. Does FAQ address timing/urgency?

### CTA
1. Is CTA text action-oriented (verb + benefit)?
2. Is CTA button visually prominent?
3. Is there reassurance near the CTA?
4. Does CTA appear multiple times on long pages?

---

## Message Match Audit

Compare the landing page to the ad creative:

| Element | Ad Says | Page Says | Match? |
|---------|---------|-----------|--------|
| Headline | | | ✓/✗ |
| Main benefit | | | ✓/✗ |
| Offer/price | | | ✓/✗ |
| Visual style | | | ✓/✗ |
| CTA | | | ✓/✗ |

**Rule:** If any of these don't match, fix before launching.

---

## Mobile Audit

Test on actual device or use Chrome DevTools (375px width):

### Layout
- [ ] No horizontal scroll
- [ ] Text readable without zooming (min 16px body)
- [ ] Buttons at least 48px tap target
- [ ] Forms have large enough input fields
- [ ] Images don't break layout

### Performance
- [ ] Hero image loads quickly (consider mobile-specific image)
- [ ] Non-essential elements lazy loaded
- [ ] No auto-playing video on mobile data
- [ ] Page weight under 2MB ideally

### UX
- [ ] Sticky CTA visible (if used)
- [ ] Phone number is tap-to-call
- [ ] Form fields have correct keyboard types
- [ ] Navigation easy with thumb reach

---

## A/B Test Hypothesis Generator

For each page, generate 3 test hypotheses:

### Template:
```
Hypothesis: If we [change X], then [metric Y] will improve by [Z%]
because [reason based on conversion principle].
```

### Common High-Impact Tests:

1. **Headline Tests**
   - Benefit-focused vs. feature-focused
   - Question vs. statement
   - Including specific number vs. vague claim

2. **CTA Tests**
   - Button color (primary vs. contrasting)
   - Button text (verb + benefit variations)
   - Button placement (above vs. below product)

3. **Social Proof Tests**
   - Stats bar vs. logo bar
   - Testimonial placement (hero vs. below products)
   - Single powerful quote vs. multiple quotes

4. **Layout Tests**
   - Image left vs. image right in hero
   - Long-form vs. short-form page
   - Products above vs. below testimonials

5. **Urgency Tests**
   - With deadline messaging vs. without
   - Scarcity messaging vs. none
   - Guarantee prominent vs. subtle

---

## Post-Launch Monitoring

Track these metrics in first 7 days:

### Traffic Metrics
- Sessions
- Bounce rate
- Time on page
- Scroll depth

### Conversion Metrics
- Add to cart rate (ecommerce)
- Form submission rate (lead gen)
- Button click rate (CTR on primary CTA)
- Conversion rate (goal completions / sessions)

### Quality Signals
- Page speed (Core Web Vitals)
- Mobile vs. desktop performance
- Traffic source breakdown
- Exit rate by section (if using heatmaps)

---

## Common Issues & Fixes

### Issue: High bounce rate (>70%)
**Possible causes:**
- Message mismatch with ads
- Page loads too slow
- Hero doesn't communicate value fast enough
- Wrong audience targeting

**Fixes to try:**
1. Verify headline matches ad creative
2. Check page speed, optimize images
3. Add trust signal to hero
4. Review audience targeting in ad platform

### Issue: Low scroll depth
**Possible causes:**
- Hero is weak or confusing
- No visual cues to scroll
- Content below fold isn't engaging

**Fixes to try:**
1. Add "peek" of next section at bottom of viewport
2. Strengthen hero value proposition
3. Add progress indicator or section previews

### Issue: High cart abandonment
**Possible causes:**
- Unexpected costs (shipping)
- Trust concerns at checkout
- Too many steps
- No urgency to complete

**Fixes to try:**
1. Show shipping cost earlier
2. Add trust badges near checkout
3. Simplify form fields
4. Add "complete your order" urgency

### Issue: Form abandonment
**Possible causes:**
- Too many fields
- Asking for sensitive info too early
- No progress indicator
- No value reminder

**Fixes to try:**
1. Reduce to essential fields only
2. Save sensitive questions for last
3. Add "step X of Y" indicator
4. Remind them of benefit near submit button

### Issue: Brand mismatch (page feels "off")
**Possible causes:**
- Emojis on a premium/traditional brand
- Overly casual copy on professional brand
- Generic stock photography
- Inconsistent color/typography

**Fixes to try:**
1. Remove all emojis from headlines, CTAs, and body copy
2. Replace generic phrases with brand-specific language
3. Use brand photography or product images
4. Verify color tokens match brand guidelines

---

## Review Documentation Template

After QA, document findings:

```markdown
## Landing Page Review: [Page Name]
**Date:** [Date]
**Reviewer:** [Name]
**URL:** [URL]

### Summary
[1-2 sentence overall assessment]

### Critical Issues
1. [Issue] → [Fix required]
2. [Issue] → [Fix required]

### Recommended Improvements
1. [Improvement] → [Expected impact]
2. [Improvement] → [Expected impact]
3. [Improvement] → [Expected impact]

### A/B Test Recommendations
1. [Test hypothesis]
2. [Test hypothesis]

### Approval Status
[ ] Ready to launch
[ ] Needs fixes before launch
[ ] Needs major revision

### Next Steps
1. [Action item] — [Owner] — [Due date]
2. [Action item] — [Owner] — [Due date]
```
