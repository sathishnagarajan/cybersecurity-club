import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CyberSecTalk — Production Stories from Security Engineers",
    template: "%s · CyberSecTalk",
  },
  description:
    "A practitioner-led community where security engineers share real production stories — the incidents, trade-offs, failures, and lessons that shaped the systems they run today.",
  openGraph: {
    title: "CyberSecTalk — Production Stories from Security Engineers",
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
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
