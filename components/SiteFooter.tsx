import Link from "next/link";
import { CookiePreferencesLink } from "@/components/CookiePreferencesLink";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <Link href="/" className="logo" aria-label="WhatBroke home">
            <img
              src="/images/whatbroke-logo-inverse-footer.png"
              alt="WhatBroke"
              className="logo-image footer-logo-image"
              width="172"
              height="40"
            />
          </Link>
          <p className="footer-tag">
            Production Stories from Security Engineers. Built for practitioners.
            Powered by community.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <Link href="/">Home</Link>
          <Link href="/event">Founding Session</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <Link href="/code-of-conduct">Code of Conduct</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <CookiePreferencesLink className="footer-link-button" />
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Follow</h4>
          {/* Placeholder — LinkedIn URL to be added. */}
          <a href="#" aria-label="LinkedIn (to be added)">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="sponsor-line">
          WhatBroke is supported by NicheBytes as title sponsor.
        </p>
        <p>© {new Date().getFullYear()} WhatBroke</p>
      </div>
    </footer>
  );
}
