import Link from "next/link";

export default function Home() {
  return (
    <main id="main">
      {/* HERO */}
      <section id="hero" className="section section-dark hero hero-centered">
        <div className="container">
          <p className="hero-eyebrow">Community for Security Practitioners</p>
          <h1 className="hero-title">WhatBroke</h1>
          <div className="hero-subtitle">
            Production Stories from Security Engineers
          </div>
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
            <Link href="/contact?subject=waitlist" className="btn btn-primary">
              Join the Waitlist
            </Link>
            <Link
              href="/contact?subject=speaker"
              className="btn btn-outline-light"
            >
              Speak at a Future Session
            </Link>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section section-white">
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
      <section className="section section-light">
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

      {/* FOUNDING SESSION TEASER (with photo) */}
      <section className="section section-white">
        <div className="container">
          <p className="kicker">Founding Session</p>
          <h2 className="section-title">Coming up.</h2>
          <p className="section-lead">
            The first WhatBroke session looks at AI agents running in
            production — how teams are handling identity, access, and security
            boundaries for autonomous systems that take real actions.
          </p>
          <div className="teaser-with-photo">
            <div className="teaser-photo">
              <img
                src="/images/whatbroke-home.jpeg"
                alt="WhatBroke community gathering"
              />
            </div>
            <article className="event-teaser teaser-card">
              <div>
                <span className="edition">Event #1</span>
                <h3>AI Agents in Production: Identity &amp; Security</h3>
                <div className="event-meta">
                  <span>Details will be announced soon.</span>
                </div>
              </div>
              <Link href="/event" className="btn btn-primary">
                See the event
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="section section-light">
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
              <Link
                href="/contact?subject=speaker"
                className="btn btn-primary btn-sm card-cta"
              >
                Become a Speaker
              </Link>
            </article>
            <article className="help-card">
              <span className="card-label">Host a Session</span>
              <h3>Open Your Doors</h3>
              <p>
                Interested in hosting an upcoming WhatBroke meetup?
              </p>
              <Link
                href="/contact?subject=host"
                className="btn btn-outline-dark btn-sm card-cta"
              >
                Become a Host
              </Link>
            </article>
            <article className="help-card">
              <span className="card-label">Support the Community</span>
              <h3>Partner With Us</h3>
              <p>
                Help grow practitioner-led learning through sponsorship or
                partnerships.
              </p>
              <Link
                href="/contact?subject=sponsor"
                className="btn btn-outline-dark btn-sm card-cta"
              >
                Become a Sponsor
              </Link>
            </article>
            <article className="help-card">
              <span className="card-label">Stay Connected</span>
              <h3>Join the Waitlist</h3>
              <p>
                Get notified about future sessions and community updates.
              </p>
              <Link
                href="/contact?subject=waitlist"
                className="btn btn-primary btn-sm card-cta"
              >
                Join the Waitlist
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="section section-tight section-white center-text">
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
