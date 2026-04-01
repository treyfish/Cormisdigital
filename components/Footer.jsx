import Link from 'next/link';
import '../src/styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="wave-icon">
                <svg className="wave-svg wave-top" viewBox="0 0 120 16" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footerWaveTop" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00c6ff"/>
                      <stop offset="100%" stopColor="#0072ff"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,8 C8,2 22,2 30,8 C38,14 52,14 60,8 C68,2 82,2 90,8 C98,14 112,14 120,8" fill="none" stroke="url(#footerWaveTop)" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <svg className="wave-svg wave-bottom" viewBox="0 0 120 16" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footerWaveBot" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0050aa"/>
                      <stop offset="100%" stopColor="#0072ff"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,8 C8,14 22,14 30,8 C38,2 52,2 60,8 C68,14 82,14 90,8 C98,2 112,2 120,8" fill="none" stroke="url(#footerWaveBot)" strokeWidth="2.5" strokeLinecap="round" opacity="0.55"/>
                </svg>
              </div>
              <div className="wave-wordmark">
                <span className="wave-cromis">Cromis</span>
                <span className="wave-digital">DIGITAL</span>
              </div>
            </div>
            <p className="footer-tagline">
              Local digital marketing built for small businesses. Based in Old Town, FL.
            </p>
          </div>

          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+13529497355">(352) 949-7355</a></li>
              <li><a href="mailto:TreyHolland@cromisdigital.com">TreyHolland@cromisdigital.com</a></li>
              <li><span style={{ color: 'var(--gray)' }}>Old Town, FL</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © 2025 <span className="footer-accent">Cromis Digital</span>. All rights reserved.
          </span>
          <span className="footer-copy">
            Built for local businesses that deserve more.
          </span>
        </div>
      </div>
    </footer>
  );
}
