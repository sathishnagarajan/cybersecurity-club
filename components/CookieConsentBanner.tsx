"use client";

import { useEffect, useState } from "react";
import {
  ALL_DENIED,
  ALL_GRANTED,
  CATEGORIES,
  ESSENTIAL_COPY,
  OPEN_PREFS_EVENT,
  applyConsent,
  readConsentCookie,
  writeConsentCookie,
  type Category,
  type ConsentState,
} from "@/lib/consent";

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: (next: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`cc-toggle ${checked ? "is-on" : ""} ${
        disabled ? "is-disabled" : ""
      }`}
    >
      <span className="cc-toggle-thumb" />
    </button>
  );
}

export default function CookieConsentBanner() {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selection, setSelection] = useState<ConsentState>(ALL_DENIED);

  // Show banner only if visitor hasn't chosen yet. The cookie can only be
  // read on the client (post-hydration), so this runs in an effect to avoid
  // an SSR/client mismatch.
  useEffect(() => {
    const stored = readConsentCookie();
    if (!stored) setOpen(true);

    const reopen = () => {
      setSelection(readConsentCookie() ?? ALL_DENIED);
      setShowDetails(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_PREFS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_PREFS_EVENT, reopen);
  }, []);

  const persist = (state: ConsentState) => {
    writeConsentCookie(state);
    applyConsent(state);
    setOpen(false);
    setShowDetails(false);
  };

  const acceptAll = () => persist(ALL_GRANTED);
  const rejectAll = () => persist(ALL_DENIED);
  const saveSelection = () => persist(selection);

  const setCategory = (key: Category, value: boolean) =>
    setSelection((prev) => ({ ...prev, [key]: value }));

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie settings"
      className="cc-banner"
    >
      <div className="cc-card">
        <div className="cc-head">
          <h2 className="cc-title">Cookie settings</h2>
          <p className="cc-lead">
            We use cookies to run the site, understand usage, and improve your
            experience. You choose what to allow. See our{" "}
            <a href="/privacy-policy">Privacy Policy</a>.
          </p>
        </div>

        {showDetails && (
          <div className="cc-categories">
            <div className="cc-cat">
              <div className="cc-cat-text">
                <p className="cc-cat-label">
                  {ESSENTIAL_COPY.label}{" "}
                  <span className="cc-cat-tag">(always on)</span>
                </p>
                <p className="cc-cat-desc">{ESSENTIAL_COPY.description}</p>
              </div>
              <Toggle checked disabled label="Essential cookies (always on)" />
            </div>

            {CATEGORIES.map((cat) => (
              <div key={cat.key} className="cc-cat">
                <div className="cc-cat-text">
                  <p className="cc-cat-label">{cat.label}</p>
                  <p className="cc-cat-desc">{cat.description}</p>
                </div>
                <Toggle
                  checked={selection[cat.key]}
                  onChange={(next) => setCategory(cat.key, next)}
                  label={cat.label}
                />
              </div>
            ))}
          </div>
        )}

        <div className="cc-actions">
          {!showDetails && (
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="cc-customize"
            >
              Customize
            </button>
          )}
          <button
            type="button"
            onClick={rejectAll}
            className="btn btn-outline-dark btn-sm"
          >
            Reject all
          </button>
          {showDetails ? (
            <button
              type="button"
              onClick={saveSelection}
              className="btn btn-primary btn-sm"
            >
              Save my selection
            </button>
          ) : (
            <button
              type="button"
              onClick={acceptAll}
              className="btn btn-primary btn-sm"
            >
              Accept all
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
