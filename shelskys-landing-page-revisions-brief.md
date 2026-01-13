# Shelsky's Landing Page Revisions Brief
## For Claude Code Implementation

**Date:** January 13, 2026  
**Project:** Shelsky's of Brooklyn - Landing Page Conversion Optimization  
**Landing Page Repository:** `https://timshea001.github.io/shelskys/`

---

## Overview

Four Google PPC landing pages need conversion optimization updates. The pages are currently keyword-optimized but require improved merchandising with real products, corrected copy, and new conversion elements.

**Files to Edit:**
1. `nyc-bagels-shipped-landing.html`
2. `smoked-fish-lox-landing.html`
3. `jewish-deli-gifts-landing.html`
4. `brunch-package-landing.html`

---

## Global Changes (Apply to ALL Pages)

### 1. CRITICAL: Remove "Hand-Rolled" Claims

The bagels are no longer hand-rolled—they've switched to modern equipment. Update ALL instances across all pages.

**Find and Replace:**
- "Hand-rolled, kettle-boiled" → "Kettle-boiled, 3-day fermented"
- "Hand-rolled & Kettle-Boiled" → "Traditionally Made & Kettle-Boiled" 
- "Hand-Rolled & Kettle-Boiled" (title case) → "Traditionally Made & Kettle-Boiled"
- "Every bagel is rolled by hand" → "Every bagel is made using traditional methods"
- Any variation of "hand rolled" or "hand-rolled" → remove or replace with "traditionally made"

**Keep these claims (they're accurate):**
- "3-day fermented" / "72 hours of cold fermentation"
- "Kettle-boiled"
- "Dense and chewy"
- References to sourdough starter

### 2. Add Satisfaction Guarantee Section

Add this section to ALL four pages, positioned before the final CTA:

```html
<!-- Satisfaction Guarantee - Add before final CTA on all pages -->
<section class="guarantee-section">
  <div class="container">
    <h2>Our Guarantee</h2>
    <div class="guarantee-content">
      <span class="guarantee-icon">✓</span>
      <div class="guarantee-text">
        <h3>Not Happy? We'll Make It Right.</h3>
        <p>If you're unsatisfied with your order for any reason, contact us at shelskys@shelskys.com. We'll work with you to make it right with a refund or store credit.</p>
      </div>
    </div>
  </div>
</section>
```

### 3. Add FAQ Section 

Add to ALL four pages, positioned after testimonials and before guarantee:

**Base FAQ Template (customize per page):**

```html
<section class="faq-section">
  <div class="container">
    <h2>Common Questions</h2>
    <div class="faq-grid">
      <!-- FAQ items will be page-specific - see individual page sections -->
    </div>
  </div>
</section>
```

### 4. Remove Duplicate Press Logos

Currently press logos appear twice on some pages (after hero AND after stats). Keep only ONE instance—position it after the hero section stats bar.

### 5. Update Footer Copyright

Change "© 2025" to "© 2026" on all pages.

---

## Page 1: NYC Bagels Shipped Landing

**File:** `nyc-bagels-shipped-landing.html`  
**Source for Products:** `https://shelskys.com/product-category/bagels-bialys-bread/`

### Product Merchandising Updates

Replace placeholder products with these REAL products from the Shelsky's site:

**Product Grid (3 products):**

| Product | Name | Price | Description | Link |
|---------|------|-------|-------------|------|
| 1 | Baker's Dozen Bagels | From $31.20 | Mix and match any combination: Everything, Plain, Sesame, Pumpernickel, Salt, Onion, Garlic, and more | https://shelskys.com/product-category/bagels-bialys-bread/ |
| 2 | Wake Up in Brooklyn Package | $229.99 | Complete brunch kit: Dozen bagels + smoked fish + cream cheese + all the fixings. Feeds 6-8. | https://shelskys.com/product/wake-up-in-brooklyn-package/ |
| 3 | Big Macher Brooklyn Brunch | $329.99 | The ultimate Brooklyn care package. Bagels, fish, spreads, salads, and sweets. Feeds 10-12. | https://shelskys.com/product/big-macher-brooklyn-brunch-package/ |

**Image URLs to Pull:**
- Fetch product images from the Shelsky's product pages (they use format: `https://shelskys.com/wp-content/uploads/...`)
- Example: Everything Bagel at `https://shelskys.com/product/everything-bagel/`

### Bagel Flavor List
Add a visual grid showing available flavors:
- Everything
- Plain  
- Sesame
- Salt
- Poppy
- Onion
- Garlic
- Pumpernickel
- Whole Wheat Everything
- Cinnamon Raisin
- Salt & Pepper ("Bagel au Poivre")
- Gluten-Free (from The Great Knead)

### FAQ Section for Bagels Page

```html
<div class="faq-item">
  <h3>How long do the bagels stay fresh?</h3>
  <p>Eat within 3 days for peak freshness. For longer storage, freeze immediately upon arrival—they'll keep for up to 3 months. Toast directly from frozen.</p>
</div>

<div class="faq-item">
  <h3>How are they shipped?</h3>
  <p>Bagels are baked fresh the morning of shipment, packed in insulated containers, and shipped overnight. They arrive ready to enjoy.</p>
</div>

<div class="faq-item">
  <h3>What makes these different from other bagels?</h3>
  <p>72 hours of cold fermentation develops complex flavor. Kettle-boiling creates the signature crust. These are authentic Brooklyn bagels—dense, chewy, with that profound crust that defines a real bagel.</p>
</div>

<div class="faq-item">
  <h3>Do you have gluten-free options?</h3>
  <p>Yes! We carry gluten-free bagels from Philadelphia's The Great Knead—the gold standard of GF bagels.</p>
</div>
```

### Additional Copy Updates

**Hero subtitle update:**
- FROM: "Hand-rolled, kettle-boiled, 3-day fermented."
- TO: "Kettle-boiled, 3-day fermented, made with sourdough starter. This is what New Yorkers miss most."

**"Why Shelsky's" section - update second feature:**
```html
<h3>Traditionally Made & Kettle-Boiled</h3>
<p>Every bagel is kettle-boiled before baking—the old-school method that creates that perfect crust and dense, chewy interior you remember.</p>
```

---

## Page 2: Smoked Fish & Lox Landing

**File:** `smoked-fish-lox-landing.html`  
**Source for Products:** `https://shelskys.com/product-category/smoked-fish/`

### Product Merchandising Updates

Replace placeholder products with REAL products:

**Product Grid (4+ products):**

| Product | Name | Price | Description | Link |
|---------|------|-------|-------------|------|
| 1 | House-Cured Gravlax | $36.99/half lb | Wild salmon cured in-house with dill, juniper, and aquavit. Silky texture, subtle sweetness. | https://shelskys.com/product/house-cured-gravlax/ |
| 2 | Eastern Gaspé Nova | $35.97/half lb | The classic. Cold-smoked Atlantic salmon with buttery, silky texture. | https://shelskys.com/product/eastern-gaspe-nova-smoked-salmon/ |
| 3 | Pastrami Smoked Salmon | $38.49/half lb | Our signature cure—salmon with pastrami spices including Sichuan peppercorns. | https://shelskys.com/product/pastrami-smoked-salmon/ |
| 4 | Tsar's Cut Balik Salmon | $62.38/half lb | The belly cut. Supremely fatty, melt-in-your-mouth. Once reserved for royalty. | https://shelskys.com/product/tsars-cut-balik-salmon/ |
| 5 | Salty Belly Lox | $35.99/half lb | Traditional salt-cured lox. Rich, intense flavor. | https://shelskys.com/product/salty-belly-lox/ |
| 6 | Ōra King Salmon | $38.37/half lb | Organic and sustainable. Premium New Zealand salmon. | https://shelskys.com/product/ora-king-salmon-organic-and-sustainable/ |

**Additional Varieties to List:**
- New Brunswick Smoked Salmon ($31.49/half lb)
- Mild Scottish Smoked Salmon ($38.38/half lb)
- Double-Smoked Irish Organic ($38.49/half lb)

### Add Serving Size Guide

Add new section after products:

```html
<section class="serving-guide">
  <div class="container">
    <h2>How Much Do I Need?</h2>
    <p class="section-intro">Each half-pound feeds approximately 2-3 people as part of a bagel brunch.</p>
    <div class="guide-grid">
      <div class="guide-item">
        <span class="guest-count">2-4 guests</span>
        <span class="recommendation">1 lb (2 half-pounds)</span>
      </div>
      <div class="guide-item">
        <span class="guest-count">6-8 guests</span>
        <span class="recommendation">2 lbs (4 half-pounds)</span>
      </div>
      <div class="guide-item">
        <span class="guest-count">10-12 guests</span>
        <span class="recommendation">3 lbs or a package</span>
      </div>
      <div class="guide-item">
        <span class="guest-count">15+ guests</span>
        <span class="recommendation">Big Macher Package</span>
      </div>
    </div>
  </div>
</section>
```

### FAQ Section for Smoked Fish Page

```html
<div class="faq-item">
  <h3>How long does smoked fish last?</h3>
  <p>Vacuum-sealed and refrigerated, our smoked fish stays fresh for 2-3 weeks unopened. Once opened, consume within 5-7 days. You can also freeze for up to 2 months.</p>
</div>

<div class="faq-item">
  <h3>What's the difference between Nova and Lox?</h3>
  <p>Nova is cold-smoked and has a milder, silkier texture. Traditional lox is salt-cured (not smoked) with a more intense, briny flavor. We offer both!</p>
</div>

<div class="faq-item">
  <h3>How is it shipped?</h3>
  <p>Vacuum-sealed and packed with ice packs in insulated containers. Ships overnight to arrive fresh and cold.</p>
</div>

<div class="faq-item">
  <h3>What makes Shelsky's fish different?</h3>
  <p>Chef Peter Shelsky trained at Eleven Madison Park (3 Michelin stars). We cure our gravlax in-house daily. We source from Acme Smoked Fish—the same supplier used by Russ & Daughters, Barney Greengrass, and Zabar's.</p>
</div>
```

### Add Sourcing Credibility Section

Add after "Why Our Smoked Fish Is Better":

```html
<section class="sourcing-section">
  <div class="container">
    <h2>Where Our Fish Comes From</h2>
    <p>We source from the best: Acme Smoked Fish in Brooklyn (the same supplier trusted by Russ & Daughters, Barney Greengrass, and Zabar's), organic Irish salmon farms, and sustainable New Zealand operations. Every piece is selected by hand.</p>
  </div>
</section>
```

---

## Page 3: Jewish Deli Gifts Landing

**File:** `jewish-deli-gifts-landing.html`  
**Source for Products:** `https://shelskys.com/product-category/gift-and-brunch-packages-free-shipping/`

### Product Merchandising Updates

Replace placeholders with REAL packages:

**Product Grid:**

| Product | Name | Price | Serves | Description | Link |
|---------|------|-------|--------|-------------|------|
| 1 | A Brooklyn Schmear Package | $209.99 | 4-6 | Bagels, cream cheeses, and all the schmear essentials | https://shelskys.com/product/a-brooklyn-schmear-package/ |
| 2 | Wake Up in Brooklyn | $229.99 | 6-8 | Complete brunch with bagels, fish, and fixings | https://shelskys.com/product/wake-up-in-brooklyn-package/ |
| 3 | "How YOU Doin'?" Package | $269.99 | 8-10 | Expanded brunch spread with premium selections | https://shelskys.com/product/how-you-doin-package/ |
| 4 | Cardiologist's Dream | $239.99 | 4-6 | Deli brunch package with meats and fish | https://shelskys.com/product/cardiologists-dream-brooklyn-deli-brunch-for-4/ |
| 5 | Big Macher Brooklyn Brunch | $329.99 | 10-12 | The ultimate spread—everything they need | https://shelskys.com/product/big-macher-brooklyn-brunch-package/ |
| 6 | Brooklyn is SWEET | $229.99 | 4-6 | Sweet-focused package with babka, rugelach, pastries | https://shelskys.com/product/brooklyn-is-sweet-package/ |
| 7 | Holiday Package | $204.99 | 4-6 | "Celebrate the Miraculous Defeat of Tyranny" | https://shelskys.com/product/shelskys-celebrate-the-miraculous-defeat-of-tyranny-package/ |

### Add Corporate Gifting CTA

Add after regular products:

```html
<section class="corporate-section">
  <div class="container">
    <h2>Corporate & Bulk Gifting</h2>
    <p>Need to send to multiple recipients or order for a large team? We offer bulk pricing and can coordinate multiple shipments.</p>
    <div class="corporate-cta">
      <a href="mailto:shelskys@shelskys.com?subject=Corporate%20Gift%20Inquiry" class="btn btn-secondary">Email Us for Corporate Orders</a>
      <a href="tel:7188558817" class="btn btn-outline">Or Call: 718.855.8817</a>
    </div>
  </div>
</section>
```

### FAQ Section for Gifts Page

```html
<div class="faq-item">
  <h3>Can I include a gift message?</h3>
  <p>Yes! Every order includes a complimentary personalized gift card. Add your message at checkout.</p>
</div>

<div class="faq-item">
  <h3>Can I schedule delivery for a specific date?</h3>
  <p>Yes, you can select your preferred delivery date at checkout. We recommend ordering at least 3-5 days in advance.</p>
</div>

<div class="faq-item">
  <h3>What if my recipient isn't home?</h3>
  <p>Packages are shipped with ice packs and insulated packaging. They'll stay fresh for several hours even if left at the door. We recommend providing a delivery address where someone will be available.</p>
</div>

<div class="faq-item">
  <h3>Do you ship internationally?</h3>
  <p>Currently we ship to all 50 US states. International shipping is not available for perishable items.</p>
</div>
```

### Update Occasion Icons Section

Ensure these occasions are covered:
- Birthdays
- Thank You Gifts  
- Housewarming
- Corporate Gifts
- Jewish Holidays (Rosh Hashanah, Hanukkah, Passover, Shabbat)
- Condolences/Shiva
- Celebrations (Graduations, Bar/Bat Mitzvahs)
- Miss New York? (Displaced NYers)

---

## Page 4: Brunch Package Landing

**File:** `brunch-package-landing.html`  
**Source for Products:** `https://shelskys.com/product-category/gift-and-brunch-packages-free-shipping/`

### Differentiation from Gifts Page

This page should emphasize HOSTING (ordering for yourself to serve) vs GIFTING (sending to others).

**Update hero copy:**
```html
<h1>Host an Unforgettable Brooklyn Brunch</h1>
<p>Complete brunch packages with everything you need. Just unwrap, arrange, and take all the credit. Effortless entertaining, delivered.</p>
```

### Product Merchandising Updates

Focus on packages sized for hosting, with emphasis on "what's included":

| Product | Name | Price | Serves | What's Included | Link |
|---------|------|-------|--------|-----------------|------|
| 1 | A Brooklyn Schmear | $209.99 | 4-6 | Dozen bagels, 3 cream cheeses, fixings | https://shelskys.com/product/a-brooklyn-schmear-package/ |
| 2 | Wake Up in Brooklyn | $229.99 | 6-8 | Dozen bagels, smoked fish, cream cheese, capers, onions, tomatoes | https://shelskys.com/product/wake-up-in-brooklyn-package/ |
| 3 | "How YOU Doin'?" | $269.99 | 8-10 | Expanded spread with premium fish selections | https://shelskys.com/product/how-you-doin-package/ |
| 4 | Big Macher Brooklyn Brunch | $329.99 | 10-12 | The works: bagels, multiple fish, salads, spreads, sweets | https://shelskys.com/product/big-macher-brooklyn-brunch-package/ |
| 5 | Cardiologist's Dream | $239.99 | 4-6 | Deli-style with pastrami, corned beef, plus fish | https://shelskys.com/product/cardiologists-dream-brooklyn-deli-brunch-for-4/ |

### Add "What's Included" Expanded Section

For each package, show detailed contents. Fetch actual contents from product pages.

### Add Hosting Tips Section

```html
<section class="hosting-tips">
  <div class="container">
    <h2>Hosting Tips</h2>
    <div class="tips-grid">
      <div class="tip">
        <h3>Set Up in 10 Minutes</h3>
        <p>Everything arrives ready to serve. Just unwrap, arrange on platters, and you're done.</p>
      </div>
      <div class="tip">
        <h3>Serve at Room Temperature</h3>
        <p>Take fish out of the fridge 15-20 minutes before serving. It tastes best slightly cool, not cold.</p>
      </div>
      <div class="tip">
        <h3>Toast the Bagels</h3>
        <p>A quick toast brings out the best texture—crispy outside, chewy inside.</p>
      </div>
      <div class="tip">
        <h3>Build Your Own Bar</h3>
        <p>Let guests assemble their own bagels. Set out fish, cream cheese, capers, onions, and tomatoes buffet-style.</p>
      </div>
    </div>
  </div>
</section>
```

### Add Lead Time Info

```html
<section class="lead-time">
  <div class="container">
    <h3>📅 When to Order</h3>
    <p>Order at least <strong>3-5 days before</strong> your event for guaranteed delivery. Need it sooner? <a href="tel:7188558817">Call us</a>—we'll do our best to accommodate.</p>
  </div>
</section>
```

### FAQ Section for Brunch Page

```html
<div class="faq-item">
  <h3>How far in advance should I order?</h3>
  <p>We recommend ordering 3-5 days before your brunch. For large orders or holiday weekends, order at least a week ahead.</p>
</div>

<div class="faq-item">
  <h3>Do I need to prepare anything?</h3>
  <p>Nope! Everything arrives ready to serve. Just unwrap and arrange. We recommend having a cutting board and a few platters handy.</p>
</div>

<div class="faq-item">
  <h3>Can I customize the packages?</h3>
  <p>Our packages are pre-set for the best experience, but you can always order à la carte items to add on. Contact us for special dietary requests.</p>
</div>

<div class="faq-item">
  <h3>What about dietary restrictions?</h3>
  <p>Our fish is gluten-free. We carry gluten-free bagels from The Great Knead. All products are kosher-style (not certified kosher). Contact us for specific allergen questions.</p>
</div>
```

---

## Image Assets

Claude Code should pull images directly from Shelsky's product pages. 

**Image URL Pattern:**
`https://shelskys.com/wp-content/uploads/[year]/[month]/[filename]`

**Key Images to Use:**

From Gift/Brunch Packages:
- Brooklyn Schmear: `https://shelskys.com/wp-content/uploads/2023/05/1-Shelskys-Schmear-Gift-Basket-1-scaled-1-400x400.jpeg`
- Wake Up in Brooklyn: `https://shelskys.com/wp-content/uploads/2023/05/2-Wake-Up-In-Brooklyn-Gift-Basket-1-scaled-1-400x400.jpeg`
- How You Doin: `https://shelskys.com/wp-content/uploads/2023/05/4-How-you-doin-Gift-Basket-2-scaled-1-400x400.jpeg`
- Cardiologist's Dream: `https://shelskys.com/wp-content/uploads/2023/05/5-Cardiologists-Dream-1-scaled-1-400x400.jpeg`
- Big Macher: `https://shelskys.com/wp-content/uploads/2023/05/6-look-like-a-real-macher-big-shot-1-scaled-1-400x400.jpeg`
- Brooklyn is Sweet: `https://shelskys.com/wp-content/uploads/2023/05/3-from-Brooklyn-with-sweet-love-1-scaled-1-400x400.jpeg`
- Holiday Package: `https://shelskys.com/wp-content/uploads/2023/05/HanukkahBasket1-scaled-1-400x400.jpeg`

From Smoked Fish:
- New Brunswick Salmon: `https://shelskys.com/wp-content/uploads/2023/01/New-Brunswick-Smoked-Salmon_3-0239_SQ-400x400.jpg`
- Eastern Gaspé Nova: `https://shelskys.com/wp-content/uploads/2023/01/Smoked-Irish-Salmon_3-0221_SQ-400x400.jpg`
- Scottish Salmon: `https://shelskys.com/wp-content/uploads/2023/05/Smoked-Scottish-Salmon_3-0213_SQ-400x400.jpg`
- Irish Organic: `https://shelskys.com/wp-content/uploads/2023/01/Smoked-Irish-Salmon_3-0219_SQ-400x400.jpg`
- Ōra King: `https://shelskys.com/wp-content/uploads/2023/01/Wild-King-Salmon_3-0216_SQ-400x400.jpg`
- Salty Belly Lox: `https://shelskys.com/wp-content/uploads/2023/01/Belly-Lox_3-0207_SQ-400x400.jpg`
- House-Cured Gravlax: `https://shelskys.com/wp-content/uploads/2023/01/Gravlax_3-0230_SQ-400x400.jpg`
- Pastrami Salmon: `https://shelskys.com/wp-content/uploads/2023/01/Pastrami-Smoked-Salmon_3-0228_SQ-400x400.jpg`
- Tsar's Cut Balik: `https://shelskys.com/wp-content/uploads/2023/01/Tsars-Cut-Balik-Salmon-scaled-e1609091751991-400x400.jpg`

**For bagels:** Fetch directly from product pages - visit each product URL to get image sources.

---

## CSS Additions

Add these styles to handle new sections (add to existing `<style>` block or create new):

```css
/* FAQ Section */
.faq-section {
  padding: 60px 0;
  background: #fafafa;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.faq-item h3 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #1a1a1a;
}

.faq-item p {
  color: #666;
  line-height: 1.6;
}

/* Guarantee Section */
.guarantee-section {
  padding: 40px 0;
  background: #f0f7f0;
  text-align: center;
}

.guarantee-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.guarantee-icon {
  font-size: 3rem;
  color: #2d5a27;
}

.guarantee-text h3 {
  margin-bottom: 5px;
}

/* Serving Guide */
.serving-guide {
  padding: 60px 0;
  background: #fff;
}

.guide-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.guide-item {
  text-align: center;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;
}

.guest-count {
  display: block;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.recommendation {
  color: #666;
}

/* Corporate Section */
.corporate-section {
  padding: 60px 0;
  background: #2d3748;
  color: white;
  text-align: center;
}

.corporate-cta {
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Hosting Tips */
.hosting-tips {
  padding: 60px 0;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.tip {
  padding: 25px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
}

.tip h3 {
  margin-bottom: 10px;
  font-size: 1rem;
}

/* Lead Time */
.lead-time {
  padding: 30px 0;
  background: #fff8e6;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .guide-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .guarantee-content {
    flex-direction: column;
    text-align: center;
  }
}
```

---

## Testimonial Updates

Pull more testimonials from the Shelsky's homepage and reviews. Key quotes to add:

**From brand document/site:**
- "Shelsky's has sort of become our synagogue. This tiny shop holds so many of the traditions, foods, rituals, and memories that I'm trying so hard to pass down to my children."
- "I have ordered from them all. Katz, Zabars, Russ, Manny's in Chicago etc. By far and away your appetizing and deli beats them all hands down." — Florida customer
- "Thank you so much for everything you and your team did for Jack's bar mitzvah this past weekend. Everyone complimented how delicious it was."
- "It was also the first Yom Kippur in the U.S., and Shelsky's made us feel at home."
- "I've been hoarding my points because I want you all to keep making delicious bagels and not give me stuff for free."

---

## Implementation Checklist

For Claude Code to verify each page:

### All Pages:
- [ ] "Hand-rolled" references removed/updated
- [ ] FAQ section added
- [ ] Guarantee section added
- [ ] Press logos appear only once
- [ ] Footer updated to 2026
- [ ] Real products with correct prices
- [ ] Real images from Shelsky's site
- [ ] All links point to correct product pages

### Bagels Page:
- [ ] Hero subtitle updated
- [ ] "Why Shelsky's" section updated
- [ ] Bagel flavor grid added
- [ ] Products use real prices ($2.40 per bagel, etc.)

### Smoked Fish Page:
- [ ] All 9 fish varieties listed with correct prices
- [ ] Serving size guide added
- [ ] Sourcing credibility section added

### Gifts Page:
- [ ] All 7 packages listed with correct prices
- [ ] Corporate gifting CTA added
- [ ] All occasions covered in icon grid

### Brunch Page:
- [ ] Hero emphasizes hosting vs gifting
- [ ] Hosting tips section added
- [ ] Lead time info added
- [ ] "What's Included" details for each package

---

## Contact Info (Use on All Pages)

- **Email:** shelskys@shelskys.com
- **Phone:** 718.855.8817
- **Address 1:** 141 Court St, Brooklyn NY 11201 (Shelsky's of Brooklyn)
- **Address 2:** 453 4th Ave, Brooklyn NY 11215 (Shelsky's Brooklyn Bagels)
- **Website:** https://shelskys.com

---

## Notes

1. **Do NOT mention the equipment change explicitly** - just remove hand-rolled claims quietly
2. **Keep the 3-day fermentation messaging prominent** - this IS the key differentiator
3. **Testimonials are the strongest conversion element** - consider moving them higher on mobile
4. **All prices are from January 2026** - verify against live site during implementation
5. **Free shipping threshold:** $300 for regular orders, FREE on all gift baskets/brunch packages
