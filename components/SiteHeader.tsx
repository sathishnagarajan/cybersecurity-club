"use client";

import { useState } from "react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#founding", label: "Founding Session" },
  { href: "#get-involved", label: "Get Involved" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#hero" className="logo" aria-label="WhatBroke home">
          <span className="logo-wordmark">
            What<span className="logo-accent">Broke</span>
          </span>
        </a>

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
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm">
            Join the Waitlist
          </a>
        </nav>
      </div>
    </header>
  );
}
