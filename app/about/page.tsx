import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "An event-driven gathering of security, cloud and infrastructure practitioners in the Netherlands. Conversations between professionals — practitioner to practitioner.",
};

export default function AboutPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="section section-light">
        <div className="container">
          <p className="kicker">About</p>
          <h1 className="hero-title">Built by practitioners. For practitioners.</h1>
          <p className="hero-subhead">
            An event-driven gathering of security, cloud and infrastructure
            practitioners in the Netherlands. Conversations between
            professionals — practitioner to practitioner.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="section section-white">
        <div className="container">
          <p className="kicker">Our vision</p>
          <blockquote className="vision-quote">
            To give the Netherlands&apos; security, cloud and infrastructure
            engineers a place to share how real systems are actually built and
            secured — and to connect over the work. Knowledge shared,
            people connected, craft advanced.
          </blockquote>
        </div>
      </section>

      {/* Who we are / Where we come from */}
      <section className="section section-light">
        <div className="container">
          <p className="kicker">Who we are</p>
          <h2 className="section-title">We are. Where we come from.</h2>
          <div className="we-grid">
            <div className="we-col">
              <h3>We are</h3>
              <ul>
                <li>An event-driven gathering of practitioners.</li>
                <li>Conversations practitioner to practitioner.</li>
                <li>
                  Monthly meetups in one city first — growth only after the
                  model proves.
                </li>
              </ul>
            </div>
            <div className="we-col">
              <h3>Where we come from</h3>
              <ul>
                <li>
                  People who&apos;ve worked closely with senior security and
                  infrastructure engineers.
                </li>
                <li>
                  Built engineering communities before — and learned what
                  makes them last.
                </li>
                <li>Practitioner-led, end to end.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How we approach it — same six values reframed */}
      <section className="section section-white">
        <div className="container">
          <p className="kicker">How we approach it</p>
          <h2 className="section-title">
            The approach we hold ourselves to.
          </h2>
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
              <p>Peers worth knowing, met over the work.</p>
            </article>
          </div>
        </div>
      </section>

      {/* How a session works */}
      <section className="section section-light">
        <div className="container">
          <p className="kicker">How a session works</p>
          <h2 className="section-title">
            Wedge → case study → knowledge hub.
          </h2>
          <div className="session-steps">
            <article className="session-step">
              <span className="step-num">01</span>
              <h3>Pick a sharp wedge</h3>
              <p>One narrow, real problem worth a full session.</p>
            </article>
            <article className="session-step">
              <span className="step-num">02</span>
              <h3>Tell the production story</h3>
              <p>The engineer who built it walks the room through it.</p>
            </article>
            <article className="session-step">
              <span className="step-num">03</span>
              <h3>Review the write-up</h3>
              <p>The company reviews the recap before it goes public.</p>
            </article>
            <article className="session-step">
              <span className="step-num">04</span>
              <h3>Publish to the hub</h3>
              <p>
                Recording plus write-up join the growing knowledge hub.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* People */}
      <section className="section section-white">
        <div className="container">
          <p className="kicker">The people</p>
          <h2 className="section-title">Who&apos;s behind it.</h2>

          <article className="convenor">
            <div className="person-photo">[[photo]]</div>
            <div>
              <p className="person-role">Chief Convenor</p>
              <p className="person-name">Saritha Jain</p>
              <p className="person-bio">
                <span className="placeholder">
                  [[short bio placeholder — the face, the network, the room]]
                </span>
              </p>
            </div>
          </article>

          <div style={{ marginTop: 56 }}>
            <p className="kicker">Advisors</p>
            <div className="people-grid">
              {[1, 2, 3, 4].map((i) => (
                <article className="person-card" key={i}>
                  <div className="person-photo">[[advisor photo]]</div>
                  <p className="person-name">
                    <span className="placeholder">[[Advisor Name]]</span>
                  </p>
                  <p className="person-role">
                    <span className="placeholder">[[Title, Company]]</span>
                  </p>
                </article>
              ))}
            </div>
            <p className="people-caption">
              Advisory board — names to be announced.
            </p>
          </div>
        </div>
      </section>

      {/* We coexist and complement */}
      <section className="section section-tight section-light">
        <div className="container center-text">
          <p className="section-lead">
            The Dutch security scene is established and generous — OWASP NL,
            ISACA NL, ISC2 NL, the Secure Software Alliance. We add to it by
            contributing value, and collaborate where it serves everyone.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-white cta-band">
        <div className="container">
          <h2 className="section-title">Want to be part of it?</h2>
          <div className="hero-actions">
            <Link href="/event" className="btn btn-primary">
              See the event
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
