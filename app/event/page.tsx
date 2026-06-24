import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founding Session",
  description:
    "Event #1. AI Agents in Production: Identity & Security. Details will be announced soon — join the waitlist to be notified first.",
};

export default function EventPage() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="section section-dark event-hero">
        <div className="container">
          <p className="kicker">Founding Session</p>
          <h1 className="event-title">Founding Session Coming Soon</h1>
          <p className="hero-subhead">
            We&apos;re currently working with speakers, hosts, and community
            partners to launch the first WhatBroke session.
          </p>
        </div>
      </section>

      {/* DETAILS */}
      <section className="section section-white">
        <div className="container">
          <div className="founding-inner">
            <div>
              <p className="kicker">What to expect</p>
              <h2 className="section-title">
                A small, practitioner-focused first meetup.
              </h2>
              <p>
                The inaugural discussion will explore identity and security
                challenges surrounding AI agents in production environments.
              </p>
              <p>
                We&apos;re intentionally keeping the first meetup small and
                practitioner-focused. Join the waitlist and we&apos;ll let you
                know as soon as registration opens.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary founding-cta"
              >
                Join the Waitlist
              </Link>
            </div>
            <div>
              <div className="event-box-light">
                <div className="event-badge">Event #1</div>
                <div className="event-box-title-light">
                  AI Agents in Production: Identity &amp; Security
                </div>
                <div className="event-box-meta-light">
                  Details will be announced soon.
                </div>
                <Link href="/contact" className="btn btn-primary">
                  Get Notified
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-light cta-band">
        <div className="container">
          <h2 className="section-title">Want a heads up when seats open?</h2>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Join the Waitlist
            </Link>
            <Link href="/contact" className="btn btn-outline-dark">
              Questions? Contact us.
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
