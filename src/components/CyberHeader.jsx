import React, { useState } from "react";

export default function CyberHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="cyber-header">
      <nav className="cyber-header__utility-nav" aria-label="Utility navigation">
        <a href="#accommodation" className="cyber-header__utility-link">
          <span className="cyber-header__utility-icon">⬡</span>
          ACCOMMODATION
        </a>
        <span className="cyber-header__divider" aria-hidden="true">|</span>
        <a href="#workshops" className="cyber-header__utility-link">
          <span className="cyber-header__utility-icon">⬡</span>
          WORKSHOPS
        </a>
      </nav>

      <div className="cyber-header__cta-wrap">
        <button
          className="cyber-header__cta-btn"
          aria-label="Sign in or register for Techfest"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="cyber-header__cta-scan-line" aria-hidden="true" />
          <span className="cyber-header__cta-text">
            <span className="cyber-header__cta-icon" aria-hidden="true">◈</span>
            SIGN&nbsp;IN&nbsp;/&nbsp;REGISTER
          </span>
        </button>

        {menuOpen && (
          <div className="cyber-header__dropdown" role="menu">
            <a href="#signin" role="menuitem" className="cyber-header__dropdown-item">
              <span>◉</span> SIGN IN
            </a>
            <a href="#register" role="menuitem" className="cyber-header__dropdown-item">
              <span>◎</span> REGISTER
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
