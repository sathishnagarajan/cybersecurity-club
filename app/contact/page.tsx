import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach WhatBroke to join the waitlist, speak at a session, host a venue, sponsor, or just say hello.",
};

export default function ContactPage() {
  return (
    <main id="main">
      {/* BANNER */}
      <section className="contact-banner">
        <div className="container">
          <h1 className="contact-banner-title">
            Speak. Sponsor. Host.
            <br />
            Or just reach us.
          </h1>
          <p className="contact-banner-sub">
            Whether you want to share a production story, support the
            gathering, or offer a venue — start here.
          </p>
        </div>
      </section>

      {/* BODY: form + "What happens next" panel */}
      <section className="contact-body">
        <div className="container">
          <div className="contact-grid">
            <ContactForm />
            <aside className="what-next">
              <div className="what-next-eyebrow">
                <span>What happens next</span>
              </div>
              <div className="what-next-steps">
                <div className="what-next-step">
                  <span className="what-next-num">01</span>
                  <div>
                    <p className="what-next-title">You reach out.</p>
                    <p className="what-next-sub">
                      That&apos;s all it takes to start.
                    </p>
                  </div>
                </div>
                <div className="what-next-step">
                  <span className="what-next-num">02</span>
                  <div>
                    <p className="what-next-title">We connect.</p>
                    <p className="what-next-sub">
                      A real conversation. No fluff.
                    </p>
                  </div>
                </div>
                <div className="what-next-step">
                  <span className="what-next-num is-active">03</span>
                  <div>
                    <p className="what-next-title">See you in the room.</p>
                    <p className="what-next-sub">
                      Every seat here is intentional.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
