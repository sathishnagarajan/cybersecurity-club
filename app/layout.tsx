import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ConsentDefault from "@/components/ConsentDefault";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import "./globals.css";

// Google Tag Manager container. Set NEXT_PUBLIC_GTM_ID in .env.local
// (e.g. GTM-XXXXXXX) to enable. GTM is skipped entirely if unset.
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  title: {
    default: "WhatBroke — Production Stories from Security Engineers",
    template: "%s · WhatBroke",
  },
  description:
    "A practitioner-led community where security engineers share real production stories — the incidents, trade-offs, failures, and lessons that shaped the systems they run today.",
  openGraph: {
    title: "WhatBroke — Production Stories from Security Engineers",
    description:
      "A practitioner-led community where security engineers share real production stories.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#021433",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* Consent Mode v2 defaults must run before GTM loads. */}
      <ConsentDefault />
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
