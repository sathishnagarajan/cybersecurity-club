# Placeholders — hand-off checklist

Every `[[ ... ]]` placeholder currently visible on the site, grouped by area.
Fill these in and the site is launch-ready.

## Brand / assets

- [x] **Logo** — wired in from `/public/images/`:
      - Header: `/images/cybersectalklogo.png`
      - Footer: `/images/cybersectalk-inverse-logo.png`
      - Hero artwork: `/images/talkshield.png` (right of the home hero)
- [ ] **Favicon / app icon** — replace `app/icon.svg` (placeholder is a navy
      square with a small orange dot).
- [ ] **Open Graph image** (1200×630) — add to `app/layout.tsx` metadata under
      `openGraph.images`.

## Global / links

- [ ] **Registration URL** — the Luma/Meetup link. Used by:
      - "Register" button in the global header (`components/SiteHeader.tsx`),
        which currently routes to `/event` as a friendly stand-in.
      - Two "Register" buttons on `/event` (`app/event/page.tsx`).
- [ ] **Code of Conduct** URL — footer + contact form microcopy.
- [ ] **Privacy Policy** URL — footer.
- [ ] **LinkedIn** URL — footer + Saritha's direct contact block.
- [ ] **Contact form backend** — set `NEXT_PUBLIC_FORMSPREE_ID` in
      `.env.local` (Formspree). Without it the form runs in demo mode.

## /event — Event

- [ ] **Start time** — `[[18:00–21:00 CEST]]` (date Fri 11 Sep 2026 is fixed).
- [ ] **Venue address** — `[[Adyen HQ, Rokin 49, 1012 KK Amsterdam — confirm
      with Adyen]]`.
- [ ] **Speaker headshot** — `[[Speaker headshot]]`.
- [ ] **Speaker name** — `[[Speaker Name]]`.
- [ ] **Speaker title** — `[[Title]]`.
- [ ] **Speaker company** — `[[Company]]`.
- [ ] **Speaker bio** — `[[2–3 line speaker bio placeholder]]`.
- [ ] **Agenda times** — `[[18:00]]`, `[[18:30]]`, `[[19:15]]`, `[[19:45]]`.
- [ ] **Talk title** — `[[talk title]]`.
- [ ] **Map embed** — replace `[[Map embed placeholder]]` with a Google /
      Mapbox embed iframe.
- [ ] **Transit note** — `[[Transit / getting-there note placeholder]]`.

## /about

- [ ] **Saritha photo** — `[[photo]]`.
- [ ] **Saritha bio** — `[[short bio placeholder — the face, the network,
      the room]]`.
- [ ] **Advisor 1–4** — name, title/company, photo for each of the four
      advisor cards.

## /contact

- [ ] **Saritha email** — `[[email placeholder]]`.
- [ ] **Saritha LinkedIn** — `[[LinkedIn placeholder]]`.
- [ ] **General email** — `[[hello@cybersectalk.nl — placeholder]]`.
- [ ] **Address** — `[[CyberSecTalk]] / [[Voorbeeldstraat 1]] /
      [[3511 AA Utrecht, Netherlands]]`.

## When you fill them

Search the codebase for `placeholder`, `[[`, and `aria-label="... to be
added"` to confirm nothing was missed before launch.
