import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach CyberSecTalk to join the waitlist, speak at a session, host a venue, sponsor, or just say hello.",
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

      {/* BODY: form + aside */}
      <section className="contact-body">
        <div className="container">
          <div className="contact-grid">
            <ContactForm />
            <aside className="contact-aside">
              <div className="contact-photo">
                <img
                  src="/images/whatbroke-home.jpeg"
                  alt="CyberSecTalk community gathering"
                />
              </div>
              <div className="direct-contact">
                <div className="direct-contact-label">Direct Contact</div>
                <div className="direct-contact-person">
                  <div className="dc-avatar">SJ</div>
                  <div>
                    <div className="dc-name">Saritha Jain</div>
                    <div className="dc-role">Founder · NicheBytes</div>
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
