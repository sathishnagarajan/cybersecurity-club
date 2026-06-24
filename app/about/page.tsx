import type { Metadata } from "next";
import Link from "next/link";

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
          <p className="kicker">About WhatBroke</p>
          <h1 className="hero-title">
            Production stories back at the center of technical communities.
          </h1>
        </div>
      </section>

      {/* ABOUT BODY + FOUNDER CARD */}
      <section className="section section-white">
        <div className="container">
          <div className="about-layout">
            <div className="about-body">
              <p>
                WhatBroke was created to bring production stories back to
                the center of technical communities. Too often, engineering
                events focus on polished outcomes and ideal architectures.
              </p>
              <p>
                But the most valuable lessons come from the challenges teams
                encounter along the way — the incidents, trade-offs, security
                decisions, and unexpected failures that shape real-world
                systems.
              </p>
              <p>
                <strong>The goal is simple:</strong> create a trusted space
                where practitioners can learn from each other&apos;s
                experiences and build stronger systems together.
              </p>
            </div>
            <div>
              <div className="founder-card">
                <div className="founder-photo">
                  <img
                    src="/images/whatbroke-home.jpeg"
                    alt="Saritha Jain — Founder of WhatBroke"
                  />
                </div>
                <div className="founder-info">
                  <div className="founder-name">Saritha Jain</div>
                  <div className="founder-role">
                    Founder &amp; Community Builder
                  </div>
                  <p className="founder-bio">
                    Technology community builder passionate about connecting
                    practitioners, creating meaningful technical conversations,
                    and helping professionals learn from real-world experiences.
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
              </div>
            </div>
          </div>
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
