"use client";

import { useEffect, useState, type FormEvent } from "react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const SUBJECTS = [
  "Joining the waitlist",
  "Speaking at a session",
  "Hosting a session",
  "Sponsoring / partnering",
  "Something else",
] as const;

// Short URL slug → dropdown value
const SUBJECT_FROM_PARAM: Record<string, (typeof SUBJECTS)[number]> = {
  waitlist: "Joining the waitlist",
  speaker: "Speaking at a session",
  speaking: "Speaking at a session",
  host: "Hosting a session",
  hosting: "Hosting a session",
  sponsor: "Sponsoring / partnering",
  sponsoring: "Sponsoring / partnering",
  partner: "Sponsoring / partnering",
  other: "Something else",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [subject, setSubject] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = new URLSearchParams(window.location.search)
      .get("subject")
      ?.toLowerCase()
      .trim();
    if (raw && SUBJECT_FROM_PARAM[raw]) {
      setSubject(SUBJECT_FROM_PARAM[raw]);
    }
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setError("");

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!FORMSPREE_ID) {
      console.warn(
        "WhatBroke: set NEXT_PUBLIC_FORMSPREE_ID in .env.local to capture real submissions."
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
          <select
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            <option value="" disabled>
              Select one
            </option>
            {SUBJECTS.map((s) => (
              <option key={s}>{s}</option>
            ))}
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
