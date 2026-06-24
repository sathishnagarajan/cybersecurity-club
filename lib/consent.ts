// GDPR cookie-consent utilities (Google Consent Mode v2).
//
// The cookie written here is also read by the inline `beforeInteractive`
// script in `components/ConsentDefault.tsx` so a returning visitor's choice is
// applied before GTM loads. Keep the cookie name and JSON shape in sync with
// that script if either changes.

export type Category = "analytics" | "functional" | "marketing";

export type ConsentState = Record<Category, boolean>;

export const CATEGORIES: {
  key: Category;
  label: string;
  description: string;
}[] = [
  {
    key: "functional",
    label: "Functional Cookies",
    description:
      "Enable enhanced functionality and personalisation. Disabling them may cause some features to work incorrectly.",
  },
  {
    key: "analytics",
    label: "Analytical Cookies",
    description:
      "Help us understand how visitors use the site so we can analyse performance and improve the experience.",
  },
  {
    key: "marketing",
    label: "Marketing Cookies",
    description:
      "Used to deliver relevant content and advertising on this site and on third-party sites.",
  },
];

export const ESSENTIAL_COPY = {
  label: "Essential Cookies",
  description:
    "Required for the website to function. Some services or features may not be available if disabled.",
};

export const COOKIE_NAME = "whatbroke_cookie_consent";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 days, in seconds.

/** Custom DOM event used to re-open the banner (e.g. from a footer link). */
export const OPEN_PREFS_EVENT = "whatbroke:open-cookie-prefs";

export const ALL_DENIED: ConsentState = {
  analytics: false,
  functional: false,
  marketing: false,
};

export const ALL_GRANTED: ConsentState = {
  analytics: true,
  functional: true,
  marketing: true,
};

/** Reads and validates the persisted consent choice, or null if none/invalid. */
export function readConsentCookie(): ConsentState | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  try {
    const raw = JSON.parse(
      decodeURIComponent(match.split("=").slice(1).join("="))
    );
    return {
      analytics: !!raw.analytics,
      functional: !!raw.functional,
      marketing: !!raw.marketing,
    };
  } catch {
    return null;
  }
}

/** Persists the consent choice as a first-party cookie. */
export function writeConsentCookie(state: ConsentState): void {
  if (typeof document === "undefined") return;
  const value = encodeURIComponent(JSON.stringify(state));
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
}

type ConsentValue = "granted" | "denied";

/** Maps category booleans to Google Consent Mode v2 signals. */
export function toGtagConsent(
  state: ConsentState
): Record<string, ConsentValue> {
  const v = (granted: boolean): ConsentValue =>
    granted ? "granted" : "denied";
  return {
    analytics_storage: v(state.analytics),
    ad_storage: v(state.marketing),
    ad_user_data: v(state.marketing),
    ad_personalization: v(state.marketing),
    functionality_storage: v(state.functional),
    personalization_storage: v(state.functional),
    security_storage: "granted", // essential, always on
  };
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Applies a consent choice at runtime: updates Consent Mode signals (gates
 * Google tags automatically) and pushes a `consent_update` event so non-Google
 * tags can fire via a GTM custom trigger.
 */
export function applyConsent(state: ConsentState): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", toGtagConsent(state));
  }
  window.dataLayer.push({ event: "consent_update", ...state });
}
