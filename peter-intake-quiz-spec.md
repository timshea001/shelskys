# Peter Intake Quiz — GitHub Pages — Dev Handoff Spec

**Date:** 2026-05-12
**Status:** Draft, awaiting Tim's review
**Author:** Tim + Claude
**Companion:** `docs/superpowers/specs/2026-05-12-cora-email-operator-design.md` (Cora — the agent that ingests this quiz's output)
**For:** Web developer building the form

---

## Purpose

Bootstrap Cora's `brain/clients/shelskys/peter-voice.md` and supporting files by collecting structured input directly from Peter (Shelsky's of Brooklyn). Replaces 60+ minutes of interview time with a self-serve form Peter fills out at his own pace.

Designed to be **reusable across clients** — the form is parameterized on client name + a few client-specific fields, so future clients (Cobi, SMBL, etc.) can be onboarded with the same tool.

## Success criteria

- Peter finishes in ≤15 min on first sit-down.
- Output is a JSON file that Cora can ingest via `cora ingest-intake <path>` with no manual cleanup.
- Tim receives the completed JSON within 2 min of Peter pressing Submit.
- Form is shareable as a single URL (no login, no account creation).
- Mobile-friendly — Peter may fill it out on his phone.

## Non-goals

- Multi-user accounts, authentication, or roles. Single-use form, anonymous.
- Real-time validation against backend systems. The form is fully static.
- Saving progress / resume-later. Sit-down-and-finish flow only. (If resume is critical, defer to v2.)
- Storing data on a server. Output is a JSON download + email; no DB.
- Editing previously submitted responses. To update, Peter re-takes the quiz; Cora idempotently overwrites the relevant brain files.
- Pre-populating fields from Shopify/WooCommerce APIs. The product fields are free-text paste-in.

## Tech stack

- **Hosting:** GitHub Pages, free tier, on Clare Digital's GitHub org (or Tim's personal — whichever is easier).
- **Stack:** Static HTML + vanilla JS + Tailwind CDN (or plain CSS — dev's call). No build step required; if a build is wanted, use a minimal Vite or Astro setup.
- **No backend.** Form state lives entirely client-side until submission.
- **Submission delivery:** On Submit, two things happen in parallel:
  1. Generate a JSON file in-browser, trigger download (filename: `<client>-intake-<YYYY-MM-DD>.json`).
  2. POST the JSON to a Formspree (or Netlify Forms / Web3Forms) endpoint that emails it to `tim@claredigital.co`. Email subject: `[Intake] <client> intake submitted by <name>`. Body: the JSON pretty-printed plus a one-line summary.
- **Repo name (suggested):** `claredigital/client-intake-quiz` or similar.
- **Final URL pattern:** `https://claredigital.github.io/client-intake-quiz/?client=shelskys` (client passed as URL param; form reads it and customizes copy).

## Page structure

Single-page form, sectioned into 5 numbered sections. Progress indicator at top (e.g. "Section 2 of 5"). "Previous" / "Next" buttons between sections. "Submit" on the final section. All sections accessible — no hard validation gating early sections, only soft warnings for empty required fields on Submit.

### Header

- Clare Digital wordmark/logo (top left).
- Title: "Voice & Brand Intake — <Client Name>" (Client Name pulled from URL param via `?client=shelskys` → "Shelsky's of Brooklyn"; defaults to "Your Brand" if no param).
- Subtitle: "About 15 minutes. Your answers train how we write emails in your voice."

### Section 1 — Who's filling this out

- **Your name** (text, required)
- **Your role** (text, required — e.g. "Owner", "Marketing Director")
- **Best email for us to reach you** (email, required)

### Section 2 — Voice & tone

- **In one sentence, how would you describe your brand to a stranger?** (textarea, 280 chars)
- **Three words you'd use to describe your brand voice** (3 short text inputs, required — e.g. "warm", "knowing", "neighborhood")
- **Three words you'd NEVER want associated with your brand** (3 short text inputs — e.g. "corporate", "salesy", "cheap")
- **Formal ↔ Familiar** (slider 1–10, 1=Formal, 10=Familiar)
- **Warm ↔ Direct** (slider 1–10, 1=Warm, 10=Direct)
- **Restrained ↔ Playful** (slider 1–10, 1=Restrained, 10=Playful)
- **An email subject line you'd be proud to send** (text, optional — examples welcome)
- **An email subject line you'd never send** (text, optional)

### Section 3 — Words & phrases

- **Phrases you love using** (repeatable text rows — start with 3 visible, "+ Add another" button to add up to 10. Free text.)
- **Phrases that make you cringe** (repeatable, same UX)
- **Production-reality language we should NEVER use** (textarea with placeholder: "Sometimes the way a product is described in marketing doesn't quite match how it's actually made. Tell us anything where we should be careful not to overclaim. For example: if your bagels aren't actually hand-rolled, tell us not to say that.")
  - **Pre-fill (Shelsky's only — based on existing brand rules):**
    - "hand-rolled" (already known — please confirm or strike)
    - "kettle-boiled" (already known — please confirm or strike)
    - "boiled" (already known — please confirm or strike)
  - For non-Shelsky's clients: this field starts blank.
  - Each pre-filled item has a "Keep" / "Remove" toggle so Peter can confirm.
- **How do you refer to your storefront?** (radio with text fallback)
  - "141 Court"
  - "the shop"
  - "the deli"
  - "our place"
  - Other (text input)
- **How do you refer to customers?** (radio with text fallback)
  - "you"
  - "folks"
  - "neighbors"
  - "members"
  - "guests"
  - Other (text input)

(Pre-fill values for the storefront / customer radios are Shelsky's-specific. For other clients, present as blank radios + Other field, or accept a `?radios=<json>` URL param if we want them client-configurable.)

### Section 4 — Products & priorities

- **Top 10 products you want emails to feature most often** (large textarea, one per line, optional URL after `|`)
  - Placeholder text:
    ```
    Big Macher Brooklyn Brunch | https://shelskys.com/product/big-macher
    A Brooklyn Schmear Package
    Brooklyn is SWEET (and so is Mom)
    ```
- **Products to underweight / not lead with** (textarea, one per line)
  - Placeholder: "Deli meats — moms don't want them as Mother's Day gifts"
- **Anything seasonal we should know about?** (textarea)
  - Placeholder: "Latkes only in December. Big Macher availability seasonal — call first."

### Section 5 — Stories, goals & boundaries

#### Stories Cora can pull from

- **The story behind the brand / location** (textarea, 2–4 sentences)
- **Your favorite thing on the menu — and why** (textarea)
- **A regular customer story you love telling** (textarea, optional)
- **A press moment / quote you're proud of** (text + optional URL)
- **Something about your neighborhood that's central to who you are** (textarea, optional)

#### Email program goals

- **What does a great month look like for the email program?** (checkboxes, multi-select)
  - More local orders
  - More shipping orders
  - More catering inquiries
  - More retention / repeat buyers
  - More new subscribers
  - More events / RSVPs
  - Other (text)
- **Cadence comfort** (radio)
  - 1 email/week
  - 2 emails/week
  - Depends on the week — surprise me
  - Let Cora decide (within reason)
- **Sale / discount stance** (radio)
  - Never discount — heritage / craft pricing only
  - Rare discounts for big moments only (Mother's Day, Black Friday)
  - Occasional discounts (monthly)
  - Regular discounts (weekly / bi-weekly)
- **Topics / themes that are off-limits** (textarea, optional)
  - Placeholder: "No politics. No price-led messaging on weekdays."

### Final screen

- "Thanks. We've sent your answers to Tim. Cora — our email operator — will start drafting in your voice within 24 hours."
- Download button: "Save your answers as JSON" (in case Peter wants a copy).
- Quiet "Reset form" link.

## Output JSON shape

```json
{
  "client_slug": "shelskys",
  "client_name": "Shelsky's of Brooklyn",
  "filled_by": {
    "name": "Peter [Last]",
    "role": "Owner",
    "email": "peter@shelskys.com"
  },
  "filled_at": "2026-05-12T14:23:00Z",
  "schema_version": "1.0",
  "voice": {
    "one_sentence_brand": "A Brooklyn appetizing shop run by people who actually live in Brooklyn.",
    "voice_words": ["warm", "knowing", "neighborhood"],
    "anti_voice_words": ["corporate", "salesy", "cheap"],
    "formal_familiar": 7,
    "warm_direct": 4,
    "restrained_playful": 6,
    "subject_lines_loved": ["A real macher move."],
    "subject_lines_vetoed": ["LIMITED TIME!!! 50% OFF BAGELS"]
  },
  "language": {
    "phrases_loved": ["from our Cobble Hill kitchen", "made the morning we ship them"],
    "phrases_vetoed": ["artisanal", "curated"],
    "production_reality_bans": ["hand-rolled", "kettle-boiled", "boiled"],
    "storefront_term": "141 Court",
    "customer_term": "neighbors"
  },
  "products": {
    "priority": [
      { "name": "Big Macher Brooklyn Brunch", "url": "https://shelskys.com/product/big-macher" },
      { "name": "A Brooklyn Schmear Package", "url": null },
      { "name": "Brooklyn is SWEET (and so is Mom)", "url": null }
    ],
    "underweight": [
      { "name": "Deli meats", "note": "Moms don't want them as Mother's Day gifts" }
    ],
    "seasonal_notes": "Latkes only in December. Big Macher availability seasonal."
  },
  "stories": {
    "brand_origin": "...",
    "favorite_menu_item": "...",
    "regular_customer_story": "...",
    "press_moment": { "text": "...", "url": null },
    "neighborhood_anchor": "..."
  },
  "program": {
    "goals": ["More local orders", "More retention / repeat buyers"],
    "cadence_pref": "1/week",
    "discount_stance": "rare_only",
    "off_limits": "No politics."
  }
}
```

### Schema validation

The dev should validate output JSON against a simple JSON Schema before download/submit, surfacing any malformed fields as errors. Schema file lives in the repo at `schema/intake-v1.json`.

## Submission flow

1. Peter clicks Submit on Section 5.
2. Client-side JS:
   a. Validates against `schema/intake-v1.json`. On error: highlight fields, don't submit.
   b. Assembles the JSON.
   c. Triggers in-browser download (`<client>-intake-<YYYY-MM-DD>.json`).
   d. POSTs the JSON to a Formspree endpoint (configured per-deploy via a `data-form-endpoint` attribute on the form root).
   e. Shows the final-screen thanks message.
3. Formspree emails Tim. Subject: `[Intake] Shelsky's intake submitted by Peter [Last]`. Body: JSON pretty-printed, plus a one-line summary at the top ("Peter @ Shelsky's submitted intake — discount stance: rare_only, cadence: 1/week").
4. Tim drops the JSON file into a known dropbox location (e.g. `~/Downloads/`).
5. Tim runs `cora ingest-intake ~/Downloads/shelskys-intake-2026-05-12.json` → Cora updates brain.

## Cora-side ingest contract (defined here, implemented in Cora repo)

`cora ingest-intake <path-to-json>` does:

1. Read + validate JSON against `schema/intake-v1.json`.
2. Resolve `client_slug` → `brain/clients/<slug>/`. Refuse if dir doesn't exist (suggests new-client setup wasn't done).
3. Write/update files (idempotent — overwrites with diff commit):
   - `peter-voice.md` (or generic `voice.md` for non-Peter clients): one-sentence brand, voice words / anti words, sliders interpreted as prose, subject lines liked/vetoed.
   - `do-not-say.md`: union of existing entries + `production_reality_bans` + `anti_voice_words` (only if explicitly meant as banned in copy) + `phrases_vetoed`. Dedup. Each entry tagged with source ("from intake 2026-05-12" or pre-existing "from STATUS.md").
   - `products-priority.md`: priority + underweight + seasonal notes.
   - `heritage-stance.md`: discount stance + off-limits topics.
   - `content-library/stories/<client>-stories.md`: each story field as its own subheading.
   - `_self/clients.yaml` updated with last intake timestamp.
4. Reconcile product names against current `catalog/shop.yaml` + `catalog/sauce.yaml`. For each mismatch, Slack Tim: "Peter listed 'Brooklyn Schmear' but I found 'A Brooklyn Schmear Package' in the WooCommerce crawl — same thing? (Y/N)".
5. Commit all changes to brain repo with message: `intake: ingest <client> intake <date>`.
6. Slack-post a summary to Tim with diffs.

## Privacy & data handling

- No data persisted server-side. Form is static; submission goes to Tim's email via Formspree only.
- Formspree configured with HTTPS + spam protection. Subject line includes client slug so Tim's email filters can route correctly.
- No analytics, no tracking pixels, no cookies. (Optional: simple Plausible / Cloudflare Web Analytics if Tim wants completion-rate data — but no third-party tracking by default.)
- Form does not display any other client's data. Each link is isolated by `?client=` param and only renders client-specific pre-fills.

## Reusability across clients

The form is parameterized for multi-client use. Configure per-client behavior via URL params:

- `?client=shelskys` — used to populate header, pre-filled production-reality bans, storefront/customer radio defaults, JSON `client_slug` + `client_name`.
- Client config map lives in `clients.json` in the repo:

```json
{
  "shelskys": {
    "client_name": "Shelsky's of Brooklyn",
    "production_reality_bans_prefill": ["hand-rolled", "kettle-boiled", "boiled"],
    "storefront_term_options": ["141 Court", "the shop", "the deli", "our place"],
    "customer_term_options": ["you", "folks", "neighbors"]
  }
}
```

Adding a new client = adding an entry to `clients.json` and pushing — no other dev work.

## Visual design

Minimal, calm, brand-neutral (the form is a Clare Digital tool, not a client tool). Use Clare Digital brand tokens if available; otherwise:

- Light cream background (#FAFAF7 or similar)
- Charcoal body text (#1A1A1A)
- One accent color for buttons / progress bar (slate or warm rust — dev's call within "doesn't look like a corporate SaaS form")
- Generous whitespace
- Mobile-first responsive — single column on small screens

Avoid: heavy gradients, animation, anything that feels like a typical lead-capture funnel. The form should feel like a thoughtful intake, not a marketing surface.

## Acceptance criteria for dev handoff

- Deployed to GitHub Pages, live URL works on mobile + desktop.
- `?client=shelskys` correctly populates header + pre-fills.
- Filling all required fields + clicking Submit produces:
  - A downloaded JSON file matching the schema above.
  - An email to `tim@claredigital.co` with the JSON in the body.
- Validation prevents submit when required fields are blank, with clear inline error messaging.
- JSON Schema is enforced and lives at `/schema/intake-v1.json` in the repo.
- Resetting the form clears all state.
- Browser refresh mid-form loses state (acceptable for v1; warn user near top of form: "Don't refresh — your answers won't save.").
- README in the repo documents: how to add a new client, how to deploy, how to test locally.

## Out of scope (deferred to v2 if needed)

- Resume-later (would require localStorage or backend).
- Multi-language.
- Conditional logic ("if you answered X, show Y").
- Direct webhook into Cora (would require exposing Cora's gateway to the public web — defer until trust is established).
- File uploads (photos, brand assets) — for now Peter pastes URLs or sends separately.
- Auto-fill from previous intake (would require persistence).

## Open questions

1. **Formspree vs. Netlify Forms vs. Web3Forms** — dev's choice based on free-tier limits and ease of integration. Document the choice in repo README.
2. **GitHub org** — Clare Digital org or Tim's personal? Decision needed before repo creation.
3. **Custom domain** — host at `intake.claredigital.co` via CNAME, or stick with the github.io URL? CNAME is nicer-feeling for client share but not required.
4. **Spam protection** — Formspree's built-in is probably enough. Add hCaptcha if spam becomes an issue.
5. **Analytics** — completion rate would be valuable for tuning the form length. Plausible or nothing? Default: nothing in v1.
