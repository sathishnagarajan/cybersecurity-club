import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach CyberSecTalk to speak at an event, sponsor, host a venue, or just get in touch.",
};

export default function ContactPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="section section-light">
        <div className="container">
          <p className="kicker">Contact</p>
          <h1 className="hero-title">
            Speak. Sponsor. Host. Or just reach us.
          </h1>
          <p className="hero-subhead">
            Whether you want to share a production story, support the
            gathering, or offer a venue — start here.
          </p>
        </div>
      </section>

      {/* Form + direct */}
      <section className="section section-white">
        <div className="container">
          <div className="contact-grid">
            <ContactForm />

            <aside className="contact-side">
              <div className="contact-block">
                <h3>Direct contact</h3>
                <p>
                  <strong>Saritha Jain</strong> — Chief Convenor
                  <br />
                  <span className="placeholder">[[email placeholder]]</span>
                  <br />
                  <span className="placeholder">[[LinkedIn placeholder]]</span>
                </p>
              </div>

              <div className="contact-block">
                <h3>General</h3>
                <p>
                  <span className="placeholder">
                    [[hello@cybersectalk.nl — placeholder]]
                  </span>
                </p>
              </div>

              <div className="contact-block address-block">
                <h3>Address</h3>
                <address>
                  <span className="placeholder">[[CyberSecTalk]]</span>
                  <br />
                  <span className="placeholder">[[Voorbeeldstraat 1]]</span>
                  <br />
                  <span className="placeholder">
                    [[3511 AA Utrecht, Netherlands]]
                  </span>
                </address>
                <p className="caption">
                  All placeholder — replace with the real address.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
