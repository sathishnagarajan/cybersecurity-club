import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export const metadata: Metadata = {
  title: "About",
  description:
    "About WhatBroke — a practitioner-led community bringing production stories back to the center of technical communities.",
};

export default function AboutPage() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="section section-light">
        <div className="container">
          <p className="kicker">
            About <BrandMark />
          </p>
          <h1 className="hero-title">
            Production stories back at the center of technical communities.
          </h1>
        </div>
      </section>

      {/* BODY */}
      <section className="section section-white">
        <div className="container">
          <div className="about-body prose-wide">
            <p>
              <BrandMark /> was created to bring production stories back to
              the center of technical communities. Too often, engineering
              events focus on polished outcomes and ideal architectures.
            </p>
            <p>
              But the most valuable lessons come from the challenges teams
              encounter along the way — the incidents, trade-offs, security
              decisions, and unexpected failures that shape real-world systems.
            </p>
            <p>
              <strong>The goal is simple:</strong> create a trusted space where
              practitioners can learn from each other&apos;s experiences and
              build stronger systems together.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section section-light">
        <div className="container">
          <p className="kicker">Founder</p>
          <h2 className="section-title">Built by practitioners.</h2>
          <article className="founder-row">
            <div className="founder-row-photo">
              <img
                src="/images/saritha-jain-profile.png"
                alt="Saritha Jain — Founder / Chief Convenor of WhatBroke"
              />
            </div>
            <div className="founder-row-info">
              <div className="founder-role">Founder / Chief Convenor</div>
              <div className="founder-name">Saritha Jain</div>
              <p className="founder-bio">
                Started <BrandMark /> to bring honest production stories back
                to the security and infrastructure community — the incidents,
                trade-offs, and lessons that shape the systems engineering
                teams actually run.
              </p>
              <p className="founder-bio">
                Founder of NicheBytes, a niche technical talent partner
                specialising in Cloud, DevOps, and Cybersecurity across
                European SaaS and scale-ups. 12+ years embedded with
                engineering teams at Zoho, Worldline, and PowerToFly,
                building practitioner networks across the EU/UK technology
                ecosystem.
              </p>
              <div className="founder-links">
                <a
                  href="https://www.linkedin.com/in/sarithajain/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ADVISORS */}
      <section className="section section-white">
        <div className="container">
          <p className="kicker">Advisors</p>
          <article className="founder-row is-compact">
            <div className="founder-row-photo">
              <img
                src="/images/sathish-nagarajan.png"
                alt="Sathish Nagarajan — Advisor at WhatBroke"
              />
            </div>
            <div className="founder-row-info">
              <div className="founder-role">Advisor</div>
              <div className="founder-name">Sathish Nagarajan</div>
              <p className="founder-bio">
                Multidisciplinary marketing leader and entrepreneur with 20+
                years across SaaS, technology, film production, and creative
                industries. Combines product strategy, GTM thinking, and
                community-building experience. Founder of Pinrom.
              </p>
              <div className="founder-links">
                <a
                  href="https://linkedin.com/in/sathishnagarajan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-light cta-band">
        <div className="container">
          <h2 className="section-title">Want to be part of it?</h2>
          <div className="hero-actions">
            <Link href="/event" className="btn btn-primary">
              See the founding session
            </Link>
            <Link href="/contact" className="btn btn-outline-dark">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
