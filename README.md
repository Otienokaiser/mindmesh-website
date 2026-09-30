# MindMesh website

Next.js (App Router) + TypeScript. No UI or animation libraries; CSS Modules with design tokens in `src/app/globals.css`.

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev
npm run lint && npm run typecheck && npm run build
```

## Before launch

Company facts live in `src/lib/site.ts` and are driven by environment variables (`.env.example`):

- `NEXT_PUBLIC_CONTACT_EMAIL` — defaults to `hello@mindmesh.co.ke` (unverified, confirm it).
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp buttons are hidden until set.
- `NEXT_PUBLIC_SCHOOLARY_URL` — the "Visit Schoolary" button is hidden until set.
- `CONTACT_WEBHOOK_URL` — where `/api/contact` delivers enquiries (Formspree, Zapier, Make, n8n…). Without it the form shows an email fallback.

The Schoolary dashboard is an HTML/CSS illustration with sample data. Swap in real screenshots when available.
