import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main id="main">
      {/* HERO */}
      <section id="hero" className="section section-dark hero hero-centered">
        <div className="container">
          <p className="hero-eyebrow">Community for Security Practitioners</p>
          <h1 className="hero-title">WhatBroke</h1>
          <div className="hero-subtitle">Prod Stories from Security Engineers</div>
          <p className="hero-description">
            A practitioner-led community where security engineers share real
            production stories — the incidents, trade-offs, failures, and
            lessons that shaped the systems they run today.
          </p>
          <div className="hero-rule">
            <strong>No vendor pitches. No marketing decks.</strong> Just honest
            conversations about what actually happens in production.
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Join the Waitlist
            </a>
            <a href="#contact" className="btn btn-outline-light">
              Speak at a Future Session
            </a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="section section-white">
        <div className="container">
          <p className="kicker">Why WhatBroke</p>
          <h2 className="section-title">
            The lessons that matter most rarely come from success.
          </h2>
          <div className="prose-block">
            <p>
              The most valuable engineering lessons rarely come from success
              stories. They come from outages, security incidents, unexpected
              failures, difficult trade-offs, and the moments when systems
              behave in ways nobody anticipated.
            </p>
            <p>
              Yet those stories are often missing from conference talks and
              technical blogs. WhatBroke exists to create a space where
              practitioners can openly share what happened, what they learned,
              and how they would approach the problem differently today.
            </p>
            <div className="why-callout">
              <p>
                Because every production system has a story. And every engineer
                has something worth sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="section section-light">
        <div className="container">
          <p className="kicker">How Every Session Works</p>
          <h2 className="section-title">
            A sharp format. Focused on what actually happened.
          </h2>
          <div className="help-grid">
            <article className="help-card">
              <span className="card-label">One Story</span>
              <h3>The Practitioner</h3>
              <p>
                One practitioner shares a real production challenge, incident,
                or lesson learned — unfiltered.
              </p>
            </article>
            <article className="help-card">
              <span className="card-label">What Happened</span>
              <h3>The Architecture</h3>
              <p>
                We explore the decisions, failures, trade-offs, and operational
                realities behind the story.
              </p>
            </article>
            <article className="help-card">
              <span className="card-label">What Changed</span>
              <h3>The Takeaway</h3>
              <p>
                Attendees leave with practical lessons and ideas they can apply
                in their own environments.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-white">
        <div className="container">
          <div className="about-layout">
            <div className="about-body">
              <p className="kicker">About WhatBroke</p>
              <h2 className="section-title">
                Production stories back at the center of technical communities.
              </h2>
              <p>
                WhatBroke was created to bring production stories back to the
                center of technical communities. Too often, engineering events
                focus on polished outcomes and ideal architectures.
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

      {/* FOUNDING SESSION */}
      <section id="founding" className="section section-dark">
        <div className="container">
          <div className="founding-inner">
            <div>
              <p className="kicker">Founding Session</p>
              <h2 className="section-title">Founding Session Coming Soon</h2>
              <p>
                We&apos;re currently working with speakers, hosts, and community
                partners to launch the first WhatBroke session.
              </p>
              <p>
                The inaugural discussion will explore identity and security
                challenges surrounding AI agents in production environments.
              </p>
              <p>
                We&apos;re intentionally keeping the first meetup small and
                practitioner-focused. Join the waitlist and we&apos;ll let you
                know as soon as registration opens.
              </p>
              <a href="#contact" className="btn btn-primary founding-cta">
                Join the Waitlist
              </a>
            </div>
            <div>
              <div className="event-box">
                <div className="event-badge">Event #1</div>
                <div className="event-box-title">
                  AI Agents in Production: Identity &amp; Security
                </div>
                <div className="event-box-meta">
                  Details will be announced soon.
                </div>
                <a href="#contact" className="btn btn-primary">
                  Get Notified
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="section section-white">
        <div className="container">
          <p className="kicker">Get Involved</p>
          <h2 className="section-title">
            There&apos;s a place for you in this community.
          </h2>
          <div className="involve-grid">
            <article className="help-card">
              <span className="card-label">Tell a Story</span>
              <h3>Become a Speaker</h3>
              <p>
                Have a production lesson worth sharing? We&apos;d love to hear
                from you.
              </p>
              <a href="#contact" className="btn btn-primary btn-sm card-cta">
                Become a Speaker
              </a>
            </article>
            <article className="help-card">
              <span className="card-label">Host a Session</span>
              <h3>Open Your Doors</h3>
              <p>
                Interested in hosting an upcoming WhatBroke meetup?
              </p>
              <a
                href="#contact"
                className="btn btn-outline-dark btn-sm card-cta"
              >
                Become a Host
              </a>
            </article>
            <article className="help-card">
              <span className="card-label">Support the Community</span>
              <h3>Partner With Us</h3>
              <p>
                Help grow practitioner-led learning through sponsorship or
                partnerships.
              </p>
              <a
                href="#contact"
                className="btn btn-outline-dark btn-sm card-cta"
              >
                Become a Sponsor
              </a>
            </article>
            <article className="help-card">
              <span className="card-label">Stay Connected</span>
              <h3>Join the Waitlist</h3>
              <p>
                Get notified about future sessions and community updates.
              </p>
              <a href="#contact" className="btn btn-primary btn-sm card-cta">
                Join the Waitlist
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-banner">
          <div className="container">
            <h2 className="contact-banner-title">
              Speak. Sponsor. Host.
              <br />
              Or just reach us.
            </h2>
            <p className="contact-banner-sub">
              Whether you want to share a production story, support the
              gathering, or offer a venue — start here.
            </p>
          </div>
        </div>
        <div className="contact-body">
          <div className="container">
            <div className="contact-grid">
              <ContactForm />
              <aside className="contact-aside">
                <div className="contact-photo">
                  <img
                    src="/images/whatbroke-home.jpeg"
                    alt="WhatBroke community gathering"
                  />
                </div>
                <div className="direct-contact">
                  <div className="direct-contact-label">Direct Contact</div>
                  <div className="direct-contact-person">
                    <div className="dc-avatar">SJ</div>
                    <div>
                      <div className="dc-name">Saritha Jain</div>
                      <div className="dc-role">
                        Founder · NicheBytes
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="section section-light center-text">
        <div className="container">
          <p className="kicker">Supported By</p>
          <h2 className="section-title">Community Partners</h2>
          <p className="section-lead">
            WhatBroke is supported by organizations and community partners who
            believe in practitioner-led learning, technical excellence, and
            open knowledge sharing.
          </p>
          <div className="sponsors-row">
            <div className="sponsor-tile">NicheBytes</div>
          </div>
        </div>
      </section>
    </main>
  );
}
