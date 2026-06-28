import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How WhatBroke handles your personal data under the EU General Data Protection Regulation (GDPR) and Dutch data protection law.",
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="section section-light">
        <div className="container">
          <p className="kicker">Legal</p>
          <h1 className="hero-title">Privacy Policy</h1>
          <p className="legal-meta">Last updated: 25 June 2026</p>
        </div>
      </section>

      {/* BODY */}
      <section className="section section-white">
        <div className="container">
          <article className="legal-prose">
            <p>
              This Privacy Policy explains how <BrandMark /> (&ldquo;we&rdquo;,
              &ldquo;our&rdquo;) handles your personal data. <BrandMark /> is
              operated by Saritha Jain / NicheBytes from the Netherlands. We
              comply with the EU General Data Protection Regulation (GDPR) and
              applicable Dutch data protection law.
            </p>

            <h2>What we collect</h2>
            <p>
              When you submit the contact form on this site, we collect:
            </p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Organisation (optional)</li>
              <li>
                Enquiry type — waitlist, speaking, hosting, sponsoring, or
                other
              </li>
              <li>The content of your message</li>
            </ul>
            <p>
              We do not knowingly collect any other personal data through this
              site.
            </p>

            <h2>Why we collect it, and our lawful basis</h2>
            <ul>
              <li>
                <strong>Responding to your enquiry</strong> — your name, email,
                organisation, and message are processed so we can reply to
                you. Lawful basis: our legitimate interest (Art. 6(1)(f)
                GDPR) in running the community and replying to people who
                reach out, and your consent (Art. 6(1)(a) GDPR) implied by
                submitting the form.
              </li>
              <li>
                <strong>Waitlist</strong> — if you select &ldquo;Joining the
                waitlist&rdquo;, we keep your email so we can notify you when
                a session is announced. Lawful basis: your consent.
              </li>
              <li>
                <strong>Analytics &amp; marketing cookies</strong> — only if
                you grant consent via our cookie banner. See{" "}
                <a href="#cookies">Cookies</a> below.
              </li>
            </ul>

            <h2>How long we keep your data</h2>
            <ul>
              <li>
                Contact form submissions: retained only as long as needed to
                respond and follow up — typically up to 12 months, then
                deleted.
              </li>
              <li>
                Waitlist email addresses: kept until you ask us to remove you,
                or until <BrandMark /> ceases operation.
              </li>
              <li>
                Cookies: see the <a href="#cookies">Cookies</a> section.
              </li>
            </ul>

            <h2>Who we share it with</h2>
            <p>
              We use the following processors. Each is contractually bound to
              process personal data only on our instructions.
            </p>
            <ul>
              <li>
                <strong>Formspree</strong> (
                <a
                  href="https://formspree.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  formspree.io
                </a>
                ) processes our contact form submissions. See their{" "}
                <a
                  href="https://formspree.io/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>
                .
              </li>
              <li>
                <strong>Google</strong> (Google Tag Manager and any
                consent-gated analytics tags) processes anonymised analytics
                data only if you grant consent.
              </li>
            </ul>
            <p>
              We do not sell your data, and we do not share it for marketing
              purposes outside the cases above.
            </p>

            <h2 id="cookies">Cookies</h2>
            <p>
              Our cookie banner asks for consent across three categories —
              functional, analytical, and marketing. Essential cookies (e.g.
              the cookie that remembers your consent choice itself) are always
              set; nothing else loads until you grant consent. You can change
              or withdraw your consent at any time using the{" "}
              <strong>Cookie Preferences</strong> link in the footer.
            </p>
            <p>
              We use Google Consent Mode v2 — when you grant or deny consent,
              all Google services on the site respect that setting before
              loading.
            </p>

            <h2>Your rights under GDPR</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you (Art. 15)</li>
              <li>Have your data corrected if inaccurate (Art. 16)</li>
              <li>
                Have your data deleted — the &ldquo;right to be
                forgotten&rdquo; (Art. 17)
              </li>
              <li>Restrict or object to our processing (Art. 18, 21)</li>
              <li>Receive your data in a portable format (Art. 20)</li>
              <li>Withdraw consent at any time (Art. 7(3))</li>
            </ul>
            <p>
              To exercise these rights, contact us via the{" "}
              <Link href="/contact">contact form</Link> and select
              &ldquo;Something else&rdquo;. We will respond within one month.
            </p>
            <p>
              You also have the right to lodge a complaint with the Dutch Data
              Protection Authority (Autoriteit Persoonsgegevens) —{" "}
              <a
                href="https://autoriteitpersoonsgegevens.nl"
                target="_blank"
                rel="noopener noreferrer"
              >
                autoriteitpersoonsgegevens.nl
              </a>
              .
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. When we do, the
              &ldquo;Last updated&rdquo; date at the top of this page will
              change.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy-related questions, please use the{" "}
              <Link href="/contact">contact form</Link>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
