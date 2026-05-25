import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import InteractiveDotGrid from '../components/InteractiveDotGrid';
import '../src/styles/home.css';

export const metadata = {
  title: {
    absolute: 'Cromis Digital — Websites + AI Systems for Local Service Businesses',
  },
  description:
    'Cromis Digital builds custom websites and AI-powered systems for local service businesses across Florida. Catch every lead. No contracts. Direct owner access.',
  keywords: [
    'custom websites Florida',
    'AI lead system',
    'missed call text back',
    'local SEO',
    'Google Business Profile',
    'service business marketing',
    'Old Town FL',
  ],
};

const steps = [
  {
    title: 'We Talk About Your Business',
    desc: 'One conversation. You tell me what you need, I tell you what makes sense. No pressure, no pitch deck.',
  },
  {
    title: 'We Build It Right',
    desc: 'A fast, mobile-ready website — plus the AI systems that catch your leads — built for your market and set up to show up on Google.',
  },
  {
    title: 'You Stay Visible',
    desc: 'Ongoing support keeps your site live, your lead system running, and your Google presence growing. Small edits whenever you need them.',
  },
];

const serviceCards = [
  {
    name: 'Custom Websites',
    desc: 'Modern, fast, mobile-first sites built to convert visitors into customers. Hand-built on Next.js. No templates.',
  },
  {
    name: 'Never Miss a Lead',
    badge: 'Featured',
    desc: 'AI-powered system that auto-texts back when you miss a call, captures and summarizes leads, and automates review requests.',
  },
  {
    name: 'Local SEO & Google Business Profile',
    desc: 'Show up when your customers are searching. Ongoing optimization, weekly posts, and monthly reporting.',
  },
];

const whyCards = [
  {
    stat: 'FL',
    title: 'Florida-Wide',
    desc: 'Based in Old Town, FL. Serving service businesses across the state.',
  },
  {
    stat: '1:1',
    title: 'Direct Owner Access',
    desc: 'You deal directly with Trey — the owner — every time. No account managers. No runaround.',
  },
  {
    stat: 'Fast',
    title: 'Built Efficiently',
    desc: 'Modern tools mean faster builds and lower costs than a traditional agency — without cutting corners.',
  },
  {
    stat: '$0',
    title: 'No Long-Term Contracts',
    desc: 'Month-to-month. Cancel anytime. We earn your business every month — that\'s the only way we do it.',
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <InteractiveDotGrid />
        <div className="hero-glow" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Websites &amp; AI Systems | Serving Local Businesses Across Florida</div>
            <h1 className="hero-headline">
              Websites and AI systems<br />
              <span className="accent">that catch every lead.</span>
            </h1>
            <p className="hero-sub">
              Custom-built sites paired with automated systems that recover
              missed calls, summarize leads, and request reviews automatically.
              Built for local service businesses across Florida.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn-primary">Get a Free Strategy Call</Link>
              <a href="#recent-work" className="btn-outline">See Recent Work</a>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how">
        <div className="container">
          <ScrollReveal>
            <div className="how-header">
              <span className="section-label">The Process</span>
              <h2>Simple. Transparent. Effective.</h2>
              <p>Three steps from where you are now to where you want to be.</p>
            </div>
          </ScrollReveal>
          <div className="how-steps">
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="how-step">
                  <div className="how-step-num">
                    <span className="how-step-count">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="how-step-body">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section services-preview">
        <div className="container">
          <ScrollReveal>
            <div className="services-preview-header">
              <div>
                <span className="section-label">What We Build</span>
                <h2>Websites and Systems Built to Win More Work</h2>
              </div>
              <Link href="/services">View all services →</Link>
            </div>
          </ScrollReveal>
          <div className="services-cards services-cards-3">
            {serviceCards.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="service-card">
                  {s.badge && <span className="service-card-badge">{s.badge}</span>}
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  <Link href="/services" className="service-card-link">
                    Learn More →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="services-quote">
              <p>Every business is different. Get a free quote.</p>
              <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Cromis */}
      <section className="section why">
        <div className="container">
          <ScrollReveal>
            <div className="why-header">
              <span className="section-label">Why Cromis</span>
              <h2>Not Another Agency. Something Better.</h2>
              <p>We built this around how small businesses actually need to work.</p>
            </div>
          </ScrollReveal>
          <div className="why-grid">
            {whyCards.map((w, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="why-card">
                  <div className="why-card-stat">{w.stat}</div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="section recent-work" id="recent-work">
        <div className="container">
          <ScrollReveal>
            <div className="recent-work-header">
              <span className="section-label">Recent Work</span>
              <h2>Real Businesses. Real Results.</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="recent-work-card">
              <div className="recent-work-image">
                <img src="/photos/rlsiteworks-screenshot.jpg" alt="R L Site Works, LLC website" />
              </div>
              <div className="recent-work-body">
                <h3>R L Site Works, LLC</h3>
                <span className="recent-work-subtitle">Tree &amp; site services · Lake City, FL</span>
                <p>Full website rebuild from Wix to Next.js with Google Business Profile optimization.</p>
                <a
                  href="https://www.rlsiteworksllc.com"
                  className="recent-work-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <div className="cta-banner-inner">
              <div className="cta-banner-text">
                <h2>Ready to grow your business?</h2>
                <p>No commitments. Just a real conversation about what&#39;s possible.</p>
              </div>
              <Link href="/contact" className="btn-outline">Get in Touch</Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
