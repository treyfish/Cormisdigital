'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../src/styles/nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <div className="wave-icon">
            <svg className="wave-svg wave-top" viewBox="0 0 120 16" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="navWaveTop" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00c6ff"/>
                  <stop offset="100%" stopColor="#0072ff"/>
                </linearGradient>
              </defs>
              <path d="M0,8 C8,2 22,2 30,8 C38,14 52,14 60,8 C68,2 82,2 90,8 C98,14 112,14 120,8" fill="none" stroke="url(#navWaveTop)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <svg className="wave-svg wave-bottom" viewBox="0 0 120 16" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="navWaveBot" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0050aa"/>
                  <stop offset="100%" stopColor="#0072ff"/>
                </linearGradient>
              </defs>
              <path d="M0,8 C8,14 22,14 30,8 C38,2 52,2 60,8 C68,14 82,14 90,8 C98,2 112,2 120,8" fill="none" stroke="url(#navWaveBot)" strokeWidth="2.5" strokeLinecap="round" opacity="0.55"/>
            </svg>
          </div>
          <div className="wave-wordmark">
            <span className="wave-cromis">Cromis</span>
            <span className="wave-digital">DIGITAL</span>
          </div>
        </Link>

        <ul className="nav-links">
          {[['/', 'Home'], ['/services', 'Services'], ['/about', 'About'], ['/contact', 'Contact']].map(([href, label]) => (
            <li key={href}>
              <Link href={href} className={isActive(href) ? 'active' : ''}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <Link href="/contact" className="btn-primary">Free Consultation</Link>
        </div>

        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile-menu">
          {[['/', 'Home'], ['/services', 'Services'], ['/about', 'About'], ['/contact', 'Contact']].map(([href, label]) => (
            <Link key={href} href={href} className={isActive(href) ? 'active' : ''}>
              {label}
            </Link>
          ))}
          <div className="nav-mobile-cta">
            <Link href="/contact" className="btn-primary">Free Consultation</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
