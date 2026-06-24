export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <a href="#hero" className="logo" aria-label="WhatBroke home">
            <span className="logo-wordmark">
              What<span className="logo-accent">Broke</span>
            </span>
          </a>
          <p className="footer-tag">
            Prod Stories from Security Engineers. Built for practitioners.
            Powered by community.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <a href="#about">About</a>
          <a href="#founding">Founding Session</a>
          <a href="#get-involved">Get Involved</a>
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
          <a href="#contact">Contact</a>
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
