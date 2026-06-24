import Script from "next/script";
import { COOKIE_NAME } from "@/lib/consent";

/**
 * Google Consent Mode v2 default state.
 *
 * Renders an inline `beforeInteractive` script so it is injected into <head>
 * and executes BEFORE the GTM loader (which loads `afterInteractive`). All
 * signals default to `denied` (except essential `security_storage`), so no
 * non-essential tracking happens until the user consents.
 *
 * For returning visitors, it reads the consent cookie and fires a
 * `consent update` immediately — before GTM — so their prior choice applies on
 * first paint. The cookie shape must stay in sync with `lib/consent.ts`.
 */
export default function ConsentDefault() {
  const inline = `
(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500
  });
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', true);

  try {
    var m = document.cookie.split('; ').find(function (r) {
      return r.indexOf('${COOKIE_NAME}=') === 0;
    });
    if (m) {
      var s = JSON.parse(decodeURIComponent(m.split('=').slice(1).join('=')));
      var g = function (v) { return v ? 'granted' : 'denied'; };
      gtag('consent', 'update', {
        analytics_storage: g(s.analytics),
        ad_storage: g(s.marketing),
        ad_user_data: g(s.marketing),
        ad_personalization: g(s.marketing),
        functionality_storage: g(s.functional),
        personalization_storage: g(s.functional),
        security_storage: 'granted'
      });
      dataLayer.push({ event: 'consent_update', analytics: !!s.analytics, functional: !!s.functional, marketing: !!s.marketing });
    }
  } catch (e) {}
})();
`;

  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      id="consent-default"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: inline }}
    />
  );
}
