"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/event", label: "Founding Session" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="CyberSecTalk home">
          <img
            src="/images/cybersectalklogo.png"
            alt="CyberSecTalk"
            className="logo-image"
            width="90"
            height="40"
          />
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="navMenu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="navMenu"
          aria-label="Primary"
          className={open ? "nav-menu is-open" : "nav-menu"}
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          {NAV.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "nav-link is-active" : "nav-link"}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn btn-primary btn-sm">
            Join the Waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}
