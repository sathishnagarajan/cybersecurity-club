import Link from "next/link";

export default function Home() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="section section-dark hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="kicker">A practitioner gathering · Netherlands</p>
              <h1 className="hero-title">
                Where security &amp; infrastructure engineers talk about what
                actually runs in production.
              </h1>
              <p className="hero-subhead">
                CyberSecTalk is an event-driven gathering for security, cloud
                and infrastructure practitioners in the Netherlands. One real
                production story per meetup — told by the engineer who built
                it.
              </p>
              <div className="hero-actions">
                <Link href="/event" className="btn btn-primary">
                  See the event
                </Link>
                <Link href="/contact" className="btn btn-outline-light">
                  Get involved
                </Link>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <img
                src="/images/talkshield.png"
                alt=""
                width="440"
                height="440"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="section section-light">
        <div className="container">
          <p className="kicker">How we help</p>
          <h2 className="section-title">A gathering, built around the work.</h2>
          <div className="help-grid">
            <article className="help-card">
              <h3>Learn from production</h3>
              <p>
                Real systems — how they&apos;re built, secured and operated —
                not slideware.
              </p>
            </article>
            <article className="help-card">
              <h3>Connect around substance</h3>
              <p>
                Meet peers worth knowing, met over real engineering.
              </p>
            </article>
            <article className="help-card">
              <h3>Grow your craft</h3>
              <p>
                Sessions that leave you better at the work, and a network that
                compounds.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* What we hold — six values */}
      <section className="section section-white">
        <div className="container">
          <p className="kicker">Our values</p>
          <h2 className="section-title">What every session has to earn.</h2>
          <div className="values-grid">
            <article className="value-card">
              <span className="value-num">01</span>
              <h3>Real technical insights</h3>
              <p>Substance that survives contact with production.</p>
            </article>
            <article className="value-card">
              <span className="value-num">02</span>
              <h3>Production case studies</h3>
              <p>How real systems are built, secured and operated.</p>
            </article>
            <article className="value-card">
              <span className="value-num">03</span>
              <h3>Learning opportunities</h3>
              <p>Sessions that leave attendees better at their craft.</p>
            </article>
            <article className="value-card">
              <span className="value-num">04</span>
              <h3>Career growth</h3>
              <p>A gathering that compounds into advancement.</p>
            </article>
            <article className="value-card">
              <span className="value-num">05</span>
              <h3>Strong speakers</h3>
              <p>Practitioners who have shipped what they talk about.</p>
            </article>
            <article className="value-card">
              <span className="value-num">06</span>
              <h3>Meaningful networking</h3>
              <p>Peers worth knowing, met around substance.</p>
            </article>
          </div>
        </div>
      </section>

      {/* How it works — the format */}
      <section className="section section-dark">
        <div className="container">
          <p className="kicker">How it works</p>
          <h2 className="section-title">
            A sharp wedge first. Knowledge that lasts.
          </h2>
          <div className="format-grid">
            <div className="format-col">
              <h3>The wedge topic</h3>
              <p>
                <strong>AI Agents in Production: Identity &amp; Security.</strong>{" "}
                We launch sharp here, then widen into the broader cloud,
                DevOps and security tent as we earn credibility.
              </p>
            </div>
            <div className="format-col">
              <h3>The format</h3>
              <p>
                One company&apos;s real production story per meetup, told by
                who built it.
              </p>
              <p>
                Every session becomes a recording and a write-up — building a
                knowledge hub so the value lasts between events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First event teaser */}
      <section className="section section-light">
        <div className="container">
          <p className="kicker">Upcoming event</p>
          <h2 className="section-title">Coming up.</h2>
          <article className="event-teaser">
            <div>
              <span className="edition">Event #1</span>
              <h3>AI Agents in Production: Identity &amp; Security</h3>
              <div className="event-meta">
                <span>Friday, 11 September 2026</span>
                <span>Hosted by Adyen — Amsterdam</span>
              </div>
            </div>
            <Link href="/event" className="btn btn-primary">
              See the event
            </Link>
          </article>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section section-light cta-band">
        <div className="container">
          <h2 className="section-title">
            Want to speak, host, or sponsor? Let&apos;s talk.
          </h2>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
