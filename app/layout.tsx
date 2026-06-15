import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Source_Serif_4 } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "CyberSecTalk — production security stories, told by the engineers who built them",
    template: "%s · CyberSecTalk",
  },
  description:
    "An event-driven gathering for security, cloud and infrastructure practitioners in the Netherlands. One real production story per meetup — told by the engineer who built it.",
  openGraph: {
    title:
      "CyberSecTalk — production security stories, told by the engineers who built them",
    description:
      "An event-driven gathering for security, cloud and infrastructure practitioners in the Netherlands.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#021433",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
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
