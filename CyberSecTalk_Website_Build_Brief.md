# CyberSecTalk — Website Build Brief

Instructions for the agent building the CyberSecTalk site. Build exactly the four pages
specified, using the copy provided. Anything wrapped in `[[ ... ]]` is a **placeholder** the
team will fill later — render it visibly as placeholder text (or a clearly-styled blank), never
invent real names, photos, prices, or links.

---

## 0 · What this is (read first)

CyberSecTalk is an **event-driven gathering** for security, cloud and infrastructure
**practitioners** in the Netherlands. The format: **one real production story per meetup, told by
the engineer who built it** — no vendor decks, no pitches, no recruiting. The job of the website
is to say two things clearly: **who we are** and **how we help**. Nothing more.

It is **not** a daily-engagement forum (no WhatsApp/Slack/LinkedIn group yet), **not** a vendor
stage, and **not** a recruitment funnel. The site must never imply any of those.

**The word "community."** Use it sparingly. We are technically a community but want to avoid
implying a busy daily forum. Prefer framings like *"a practitioner gathering,"* *"where Dutch
security & infrastructure engineers meet,"* *"a knowledge-sharing circle."* "Community" is fine in
moderation (the reference site CTOtalk uses it freely); just don't lead every line with it.

---

## 1 · Brand, tone & design direction

**Voice.** Practitioner to practitioner. Plain, confident, technically literate, zero marketing
fluff. Short sentences. Benefit over feature. Model the tone on **ctotalk.in** — verb-driven and
clean (their hero is literally "Explore. Learn. Share." / "India's first knowledge sharing and
networking community"). Adapt, don't copy.

**Palette (carry over from the existing strategy deck for continuity):**

- Navy `#14233C` (primary / dark sections / headings)
- Slightly lighter navy `#1A2C47` (cards on dark)
- Orange `#C2410C` (single accent — CTAs, kickers, rules)
- Ink `#1F2A3A` body text on light; off-white `#F7F9FC` light backgrounds
- Muted grey `#6B7787` for captions/labels; hairline `#C9D2DE`
- Use orange as the *only* accent. Don't introduce extra colours.

**Type.** A serif for big headings (the deck uses a Georgia/"Times-display" feel) paired with a
clean sans for body (Inter / system sans). Keep it editorial, not techy-neon.

**Layout.** Generous whitespace, card grids for values/format, alternating light/dark sections.
Fully responsive, mobile-first. Accessible: AA contrast, real focus states, alt text on every
image, semantic headings.

**Imagery.** No stock "hacker in a hoodie." Prefer abstract/geometric or real event-style photos.
Leave `[[image placeholder]]` where none exists yet.

---

## 2 · Global elements (every page)

**Top nav:** Logo (`[[CyberSecTalk logo]]`) · Home · First Event · About · Contact ·
a primary button **"Register"** (links to the event registration URL placeholder).

**Footer (this is where the sponsor lives — nowhere above):**

- One transparent line, low-key: *"CyberSecTalk is supported by NicheBytes as title sponsor."*

  Plain text, footer only. Do **not** put NicheBytes in the hero, headers, or above the fold on
  any page.

- Links: Code of Conduct (`[[link]]`), Privacy Policy (`[[link]]`), Contact.
- Social: LinkedIn (`[[link]]`) only for now.
- `© 2026 CyberSecTalk`.

**Sathish Nagarajan must not appear anywhere on the public site.** (Internal strategist only.)

---

## 3 · Page 1 — Home

Goal: in one screen, say who we are + how we help, then route to the first event.

**Hero (dark/navy):**

- Headline: **"Where security & infrastructure engineers talk about what actually runs in production."**
- Subhead: *"CyberSecTalk is an event-driven gathering for security, cloud and infrastructure

  practitioners in the Netherlands. One real production story per meetup — told by the engineer
  who built it. No vendor decks. No pitches."*

- Buttons: **"See the first event"** (→ First Event) · **"Get involved"** (→ Contact)

**Section — "How we help" (light, 3 cards).** Mirror CTOtalk's Learn/Explore/Share idea but in
our language:

- **Learn from production.** Real systems — how they're built, secured and operated — not slideware.
- **Connect around substance.** Meet peers worth knowing, met over real engineering, not pitches.
- **Grow your craft.** Sessions that leave you better at the work, and a network that compounds.

**Section — "What we hold" (our six core values).** Present as a 2×3 card grid, titled with a
kicker "OUR VALUES" / heading "What every session has to earn." Use the deck's six verbatim:

1. **Real technical insights** — substance that survives contact with production.
2. **Production case studies** — how real systems are built, secured and operated.
3. **Learning opportunities** — sessions that leave attendees better at their craft.
4. **Career growth** — a gathering that compounds into advancement.
5. **Strong speakers** — practitioners who have shipped, not vendor decks.
6. **Meaningful networking** — peers worth knowing, met around substance.

**Section — "How it works" (dark, the format).** Short, two-part:

- **The wedge topic:** *AI Agents in Production: Identity & Security.* (Launch sharp here; widen

  into the broader cloud / DevOps / security tent as we earn credibility.)

- **The format:** one company's real production story per meetup, told by who built it. Every

  session becomes a recording + write-up — building a **knowledge hub** so the value lasts between
  events.

**Section — "First event" teaser card.** Pull the headline, date, venue, CTA from Page 2.

**Trust strip (light, slim).** Three short pills, no recruiter framing:
*No pitches from any stage · No sourcing, no CV collection · Public code of conduct from day one.*

**Closing CTA band:** *"Want to speak, host, or sponsor? Let's talk."* → Contact.

---

## 4 · Page 2 — First Event (placeholder content)

A single-event page. Real details where given; placeholders elsewhere.

**Hero:**

- Edition label: **"Event #1 · Launch edition"**
- Title: **"AI Agents in Production: Identity & Security"**
- Date: **Friday, 11 September 2026** *(11 Sep 2026 falls on a Friday — confirm the weekday and

  start time; leave time as `[[18:00–21:00 CEST]]` placeholder)*

- Venue: **Hosted by Adyen — Amsterdam** *(address placeholder: `[[Adyen HQ, Rokin 49, 1012 KK

  Amsterdam — confirm with Adyen]]`)*

- Primary button: **"Register"** → `[[Luma/Meetup registration link]]`

> Note for the team: the first event is in **Amsterdam** (Adyen), while the Contact page uses a
> **Utrecht** address. That's intentional per the brief, but flag it so it reads deliberately,
> not accidentally.

**Section — "What you'll get."** 2–3 lines: a real production walk-through of how AI agents are
given identity, access and guardrails in a live system; honest trade-offs; practitioner Q&A.

**Section — "The speaker" (placeholder).**

- `[[Speaker headshot]]`
- **`[[Speaker Name]]`** — `[[Title]]`, `[[Company]]`
- `[[2–3 line speaker bio placeholder]]`
- Caption: *"Speaker to be confirmed."*

**Section — "Agenda" (placeholder run-of-show).**

- `[[18:00]]` Doors & informal networking
- `[[18:30]]` Production case study: `[[talk title]]`
- `[[19:15]]` Practitioner Q&A
- `[[19:45]]` Networking & close

*(All times placeholder.)*

**Section — "Format & house rules."** Practitioner to practitioner. No product pitches. Sessions
may run under **Chatham House rule** where the company prefers it; the write-up is reviewed before
publication. Recording where the company permits.

**Section — venue & getting there.** Map embed placeholder + transit note placeholder.

**CTA:** Register button repeated + "Questions? Contact us."

---

## 5 · Page 3 — About

Goal: who we are, our vision, our values-as-approach, and the people.

**Hero (light):** kicker "ABOUT" / heading **"What we are — and what we are not."**
Intro line: *"An event-driven gathering of security, cloud and infrastructure practitioners in the
Netherlands. Conversations between professionals — practitioner to practitioner."*

**Section — "Our vision."**

> *"To give the Netherlands' security, cloud and infrastructure engineers a place to share how
> real systems are actually built and secured — and to connect around substance. Knowledge
> shared, people connected, craft advanced."*

*(Reframes "create a cybersecurity professionals community for knowledge sharing and connecting"
without leaning on the word "community.")*

**Section — "We are / We are not" (two columns, from the deck):**

- **We are:** an event-driven gathering of practitioners · conversations practitioner to

  practitioner · monthly meetups in one city first, growth only after the model proves.

- **We are not:** a daily-engagement forum (no chat group until events show the need) · a vendor

  stage (no pitches) · a recruitment funnel (no sourcing, no CV collection) · a brand chasing
  scale before contribution.

**Section — "How we approach it" (the six values as our operating approach).** Reuse the six core
values from the Home page, but framed as *"the approach we hold ourselves to."* Same six items.

**Section — "How a session works."** The wedge × case-study × knowledge-hub flow (session →
reviewed write-up → recording → hub). Keep to ~4 short steps.

**Section — "The people."**

- **Chief Convenor:** `[[photo]]` **Saritha Jain** — Chief Convenor. *`[[short bio placeholder —

  the face, the network, the room]]`*

- **Advisors** (placeholders, 3–4 cards): `[[Advisor Name]]` — `[[Title, Company]]` · repeat.

  Caption the group: *"Advisory board — names to be announced."*

- Do **not** list Sathish.

**Section — "We coexist and complement" (optional, slim).** One line: *"The Dutch security scene
is established and generous — OWASP NL, ISACA NL, ISC2 NL, the Secure Software Alliance. We add to
it by contributing value, and collaborate where it serves everyone."*

---

## 6 · Page 4 — Contact

**Hero (light):** heading **"Speak. Sponsor. Host. Or just reach us."**
Intro: *"Whether you want to share a production story, support the gathering, or offer a venue —
start here."*

**Contact form** (wire to `[[Formspree / Netlify Forms / backend endpoint placeholder]]`):

- Full name *(required)*
- Email *(required)*
- Organisation
- **"I'm reaching out about" — dropdown:** Speaking at an event · Sponsoring · Hosting a venue ·

  Something else *(required)*

- Message *(required, textarea)*
- Submit button: **"Send"**
- Success state: *"Thanks — we'll be in touch."*
- Privacy microcopy: *"We only use your details to reply. No CV collection, no recruiting — see

  our Code of Conduct."*

**Direct contact block:**

- **Saritha Jain** — Chief Convenor · `[[email placeholder]]` · `[[LinkedIn placeholder]]`
- General: `[[hello@cybersectalk.nl — placeholder]]`

**Address block (dummy Utrecht):**

- `[[CyberSecTalk]]`
- `[[Voorbeeldstraat 1]]`
- `[[3511 AA Utrecht, Netherlands]]`
- *(All placeholder — replace with the real address.)*

**Do not** add any "apply for a job," "upload CV," or vendor enquiry path. Keep purposes to the
four dropdown options only.

---

## 7 · Hard content rules (apply everywhere)

1. **NicheBytes** appears only as a single footer line. Never in heroes, headers, or body.
2. **Sathish Nagarajan** appears nowhere.
3. **No recruiting language** anywhere — no "jobs," "hiring," "CV," "candidates," "sourcing."
4. **No vendor/product pitch language** — we don't sell tools; speakers don't pitch.
5. Keep the **"community"** word light; prefer "gathering / meetup / knowledge-sharing."
6. Every unconfirmed fact is a visible **placeholder** `[[ ... ]]` — never fabricate names,

   photos, addresses, prices, times, or links.

7. Lead with **who we are + how we help**; the sponsor and the backing firm stay quiet.

---

## 8 · Technical notes

- **Pages/routes:** `/` (Home), `/event` (First Event), `/about` (About), `/contact` (Contact).
- **Responsive & accessible:** mobile-first, AA contrast, keyboard-navigable, alt text, semantic

  landmarks.

- **Forms:** front-end + a placeholder backend endpoint; show validation + success/error states;

  no data stored client-side.

- **SEO:** per-page `<title>` and meta description; Open Graph image placeholder; favicon

  placeholder. Suggested home title: *"CyberSecTalk — production security stories, told by the
  engineers who built them."*

- **Performance:** lazy-load images, system fonts or one webfont pair max.
- Drop a `placeholders.md` in the repo listing every `[[ ... ]]` so the team can fill them in one

  pass.

---

## 9 · Placeholder inventory (hand-off checklist)

Logo & favicon · OG image · hero/event images · speaker name + title + company + headshot + bio ·
event start time · Adyen venue address confirmation · registration link · agenda times/titles ·
advisor names/titles/photos · Saritha bio + email + LinkedIn · general email · Utrecht address ·
form backend endpoint · Code of Conduct / Privacy Policy links · LinkedIn URL.
