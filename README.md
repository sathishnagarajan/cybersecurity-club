# CyberSecTalk

Website for **CyberSecTalk** — an event-driven gathering for security, cloud
and infrastructure practitioners in the Netherlands.

- **Build brief:** [CyberSecTalk_Website_Build_Brief.md](CyberSecTalk_Website_Build_Brief.md)
- **Placeholders to fill before launch:** [placeholders.md](placeholders.md)
- **Internal strategy context:** [STRATEGY.md](STRATEGY.md) (historical;
  some sections refer to an earlier working name and are kept for context).

## Stack

- [Next.js](https://nextjs.org) 15 (App Router)
- React 19 + TypeScript
- Global CSS — `app/globals.css` (navy + off-white + a single orange accent,
  editorial serif headings, Inter body)
- Fonts via `next/font/google` — Source Serif 4 + Inter

```
app/
  layout.tsx          — root layout, fonts, metadata, header + footer
  page.tsx            — Home
  event/page.tsx      — Event
  about/page.tsx      — About
  contact/page.tsx    — Contact
  globals.css         — all styles
  icon.svg            — favicon (placeholder)
components/
  SiteHeader.tsx      — sticky header + mobile nav (client)
  SiteFooter.tsx      — footer + sponsor line
  ContactForm.tsx     — contact form (client)
```

## Develop

```sh
npm install
npm run dev
# http://localhost:3000
```

## Build

```sh
npm run build
npm start
```

## Before going live

See [placeholders.md](placeholders.md) for the full hand-off checklist of
logo artwork, images, links, names, addresses and the contact-form backend.
