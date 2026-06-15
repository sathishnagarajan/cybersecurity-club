import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Agents in Production: Identity & Security",
  description:
    "Event #1. Friday, 11 September 2026 — hosted by Adyen, Amsterdam. A practitioner-led walk-through of how AI agents are given identity, access and guardrails in a live system.",
};

export default function EventPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="section section-dark event-hero">
        <div className="container">
          <span className="event-edition">Event #1</span>
          <h1 className="event-title">
            AI Agents in Production: Identity &amp; Security
          </h1>
          <dl className="event-facts">
            <div>
              <dt>Date</dt>
              <dd>
                Friday, 11 September 2026 ·{" "}
                <span className="placeholder">[[18:00–21:00 CEST]]</span>
              </dd>
            </div>
            <div>
              <dt>Venue</dt>
              <dd>
                Hosted by Adyen — Amsterdam
                <br />
                <span className="placeholder">
                  [[Adyen HQ, Rokin 49, 1012 KK Amsterdam — confirm with
                  Adyen]]
                </span>
              </dd>
            </div>
          </dl>
          <div className="hero-actions">
            <a
              href="#"
              className="btn btn-primary"
              aria-label="Register — registration link to be added"
            >
              Register
            </a>
          </div>
          <p className="caption">
            Registration:{" "}
            <span className="placeholder">[[Luma/Meetup registration link]]</span>
          </p>
        </div>
      </section>

      {/* What you'll get */}
      <section className="section section-white">
        <div className="container">
          <p className="kicker">What you&apos;ll get</p>
          <h2 className="section-title">A real walk-through, honestly told.</h2>
          <p className="section-lead">
            A practitioner-led look at how AI agents are given identity, access
            and guardrails in a live system — the trade-offs that worked, the
            ones that didn&apos;t, and an open Q&amp;A with the engineer who
            shipped it.
          </p>
        </div>
      </section>

      {/* Speaker */}
      <section className="section section-light">
        <div className="container">
          <p className="kicker">The speaker</p>
          <article className="speaker-card">
            <div className="speaker-photo">[[Speaker headshot]]</div>
            <div>
              <h3>
                <span className="placeholder">[[Speaker Name]]</span>
              </h3>
              <p className="person-role">
                <span className="placeholder">[[Title]]</span>,{" "}
                <span className="placeholder">[[Company]]</span>
              </p>
              <p className="caption">
                <span className="placeholder">
                  [[2–3 line speaker bio placeholder]]
                </span>
              </p>
              <p className="caption">Speaker to be confirmed.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Agenda */}
      <section className="section section-white">
        <div className="container">
          <p className="kicker">Agenda</p>
          <h2 className="section-title">Run of show.</h2>
          <div className="agenda">
            <div className="agenda-row">
              <span className="agenda-time">
                <span className="placeholder">[[18:00]]</span>
              </span>
              <span className="agenda-item">
                Doors &amp; informal networking
              </span>
            </div>
            <div className="agenda-row">
              <span className="agenda-time">
                <span className="placeholder">[[18:30]]</span>
              </span>
              <span className="agenda-item">
                Production case study:{" "}
                <span className="placeholder">[[talk title]]</span>
              </span>
            </div>
            <div className="agenda-row">
              <span className="agenda-time">
                <span className="placeholder">[[19:15]]</span>
              </span>
              <span className="agenda-item">Practitioner Q&amp;A</span>
            </div>
            <div className="agenda-row">
              <span className="agenda-time">
                <span className="placeholder">[[19:45]]</span>
              </span>
              <span className="agenda-item">Networking &amp; close</span>
            </div>
          </div>
          <p className="caption">All times placeholder.</p>
        </div>
      </section>

      {/* Format & house rules */}
      <section className="section section-light">
        <div className="container">
          <p className="kicker">Format &amp; house rules</p>
          <h2 className="section-title">Practitioner to practitioner.</h2>
          <p className="section-lead">
            Sessions may run under Chatham House rule where the company
            prefers it; the write-up is reviewed before publication. Recording
            where the company permits.
          </p>
        </div>
      </section>

      {/* Venue & getting there */}
      <section className="section section-white">
        <div className="container">
          <p className="kicker">Venue &amp; getting there</p>
          <h2 className="section-title">Hosted by Adyen — Amsterdam.</h2>
          <div className="map-placeholder">[[Map embed placeholder]]</div>
          <p className="caption">
            <span className="placeholder">
              [[Transit / getting-there note placeholder]]
            </span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-light cta-band">
        <div className="container">
          <h2 className="section-title">Reserve your seat.</h2>
          <div className="hero-actions">
            <a
              href="#"
              className="btn btn-primary"
              aria-label="Register — registration link to be added"
            >
              Register
            </a>
            <Link href="/contact" className="btn btn-outline-dark">
              Questions? Contact us.
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
