"use client";

import { useState, type FormEvent } from "react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setError("");

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Demo mode — no form endpoint configured yet.
    if (!FORMSPREE_ID) {
      console.warn(
        "CyberSecTalk: set NEXT_PUBLIC_FORMSPREE_ID in .env.local to capture real submissions."
      );
      setSubmitted(true);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again, or email us.");
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-card">
        <div className="form-success">
          <h3>Thanks — we&apos;ll be in touch.</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="organisation">Organisation</label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            autoComplete="organization"
          />
        </div>

        <div className="field">
          <label htmlFor="subject">I&apos;m reaching out about</label>
          <select id="subject" name="subject" defaultValue="" required>
            <option value="" disabled>
              Select one
            </option>
            <option>Speaking at an event</option>
            <option>Sponsoring</option>
            <option>Hosting a venue</option>
            <option>Something else</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Send"}
        </button>

        {error && (
          <p className="form-status is-error" role="status" aria-live="polite">
            {error}
          </p>
        )}

        <p className="form-microcopy">
          We only use your details to reply. No CV collection, no recruiting —
          see our{" "}
          <a href="#" aria-label="Code of Conduct (to be added)">
            Code of Conduct
          </a>
          .
        </p>
      </form>
    </div>
  );
}
