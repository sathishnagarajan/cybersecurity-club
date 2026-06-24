"use client";

import { OPEN_PREFS_EVENT } from "@/lib/consent";

/** Re-opens the cookie consent banner so users can change/withdraw consent. */
export function CookiePreferencesLink({
  className,
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_PREFS_EVENT))}
      className={className}
    >
      Cookie Preferences
    </button>
  );
}
