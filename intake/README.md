# Client Voice & Brand Intake — Static Form

Single-page HTML form that collects voice/brand info from a client and outputs a JSON file matching `schema/intake-v1.json`. Designed to feed Cora's brain (`brain/clients/<slug>/`) via `cora ingest-intake <path>`.

## Live URL

`https://lp.shelskys.com/intake/?client=shelskys`

The `?client=` URL param is required — it loads pre-fills + branding from `clients.json`.

Default fallback if no `?client=` is passed: a generic "Your Brand" form with no pre-fills.

## Adding a new client

Edit `clients.json` and add an entry:

```json
{
  "your-slug": {
    "client_name": "Your Client Name",
    "production_reality_bans_prefill": ["claim a", "claim b"],
    "storefront_term_options": ["the shop", "the studio"],
    "customer_term_options": ["you", "members"]
  }
}
```

Then share `https://lp.shelskys.com/intake/?client=your-slug`.

## Wiring up email delivery

Out of the box the form **only downloads JSON locally** — Tim has to be emailed the file manually.

To enable auto-send, edit `index.html` and set `FORM_ENDPOINT` (top of the inline `<script>` block) to a Formspree / Web3Forms / Netlify Forms endpoint. Recommended: Formspree's free tier (50 submissions/month).

Example:

```js
const FORM_ENDPOINT = "https://formspree.io/f/abcd1234";
```

The POST body shape:

```json
{
  "_subject": "[Intake] <client_name> intake submitted by <name>",
  "summary": "...",
  "json": { /* the full intake payload */ }
}
```

## Local testing

```bash
cd intake
python3 -m http.server 8000
# open http://localhost:8000/?client=shelskys
```

Or just open `index.html` directly in a browser — `clients.json` will fail to load via `file://` in some browsers (CORS), so prefer the local server.

## Schema

`schema/intake-v1.json` is the authoritative output schema. Cora's `cora ingest-intake` command validates against this before writing to the brain.

## Privacy

- No data is stored server-side. JSON download happens fully in-browser.
- `<meta name="robots" content="noindex, nofollow">` is set so search engines don't index the form.
- If you need to lock it down further, host this on a private GitHub Pages repo (requires GitHub Pro / Team / Enterprise) instead of the current public deploy.
