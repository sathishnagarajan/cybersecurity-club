import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <Link href="/" className="logo" aria-label="CyberSecTalk home">
            <img
              src="/images/cybersectalk-inverse-logo.png"
              alt="CyberSecTalk"
              className="logo-image"
              width="92"
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
          {/* Placeholder — Code of Conduct URL to be added. */}
          <a href="#" aria-label="Code of Conduct (to be added)">
            Code of Conduct
          </a>
          {/* Placeholder — Privacy Policy URL to be added. */}
          <a href="#" aria-label="Privacy Policy (to be added)">
            Privacy Policy
          </a>
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
          CyberSecTalk is supported by NicheBytes as title sponsor.
        </p>
        <p>© {new Date().getFullYear()} CyberSecTalk</p>
      </div>
    </footer>
  );
}
