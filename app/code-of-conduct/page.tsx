import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "WhatBroke is dedicated to providing a harassment-free community experience for everyone — at our meetups, in our chat channels, and any space connected to WhatBroke.",
};

export default function CodeOfConductPage() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="section section-light">
        <div className="container">
          <p className="kicker">Community</p>
          <h1 className="hero-title">Code of Conduct</h1>
        </div>
      </section>

      {/* BODY */}
      <section className="section section-white">
        <div className="container">
          <article className="legal-prose">
            <h2>The quick version</h2>
            <p>
              <BrandMark /> is dedicated to providing a harassment-free
              community experience for everyone — regardless of gender, gender
              identity and expression, age, sexual orientation, disability,
              physical appearance, body size, race, ethnicity, religion (or
              lack thereof), or technology choices.
            </p>
            <p>
              We do not tolerate harassment of community participants in any
              form, at our meetups, in our chat channels, on social platforms,
              or in any space connected to <BrandMark />. Sexual language and
              imagery is not appropriate in any <BrandMark /> setting —
              sessions, side-conversations, online platforms, or social
              events.
            </p>
            <p>
              Participants violating these rules may be warned or asked to
              leave the event at organisers&apos; discretion, without refund
              where tickets apply.
            </p>

            <h2>The longer version</h2>
            <p>
              Harassment includes — but is not limited to — offensive comments
              related to gender, gender identity and expression, age, sexual
              orientation, disability, physical appearance, body size, race,
              ethnicity, religion, or technology choices; sexual images in
              public spaces; deliberate intimidation; stalking; following;
              harassing photography or recording; sustained disruption of
              talks or other events; inappropriate physical contact; and
              unwelcome sexual attention.
            </p>
            <p>
              Participants asked to stop any harassing behaviour are expected
              to comply immediately.
            </p>
            <p>
              Sponsors and partners are also subject to this policy. They
              should not use sexualised imagery, activities, or other material
              at their tables or in their presentations.
            </p>

            <h2>Reporting</h2>
            <p>
              If you are being harassed, notice someone else being harassed,
              or have any other concerns, please contact a <BrandMark />{" "}
              organiser immediately.
            </p>
            <p>
              At in-person events, look for organisers wearing a{" "}
              <BrandMark /> lanyard or pin. Outside of events, reach us via
              the <Link href="/contact">contact form</Link> and we will
              respond in confidence.
            </p>

            <h2>Attribution</h2>
            <p className="legal-fineprint">
              This Code of Conduct is adapted from the{" "}
              <a
                href="https://confcodeofconduct.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conference Code of Conduct
              </a>
              , originally written by JSConf 2012 and The Ada Initiative, and
              is licensed under the{" "}
              <a
                href="https://creativecommons.org/licenses/by/3.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creative Commons Attribution 3.0 Unported License
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
