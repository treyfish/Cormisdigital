import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import '../src/styles/home.css';

export const metadata = {
  title: 'Cromis Digital — Get Found, Get Leads, and Grow',
  description:
    'Cromis Digital helps local businesses in Old Town, FL get found online, generate leads, and grow. No contracts. Direct owner access. AI-powered results.',
};

const steps = [
  {
    title: 'We Talk About Your Business',
    desc: 'One conversation. You tell me what you need, I tell you what makes sense. No pressure, no pitch deck.',
  },
  {
    title: 'We Build It Right',
    desc: 'A clean, professional website built for your market — mobile-ready, fast, and set up to show up on Google.',
  },
  {
    title: 'You Stay Visible',
    desc: 'Monthly hosting and care keeps your site live and up to date. Small edits whenever you need them.',
  },
];

const serviceCards = [
  {
    tag: 'One-Time',
    name: 'Website Build',
    price: '$500',
    priceNote: 'one-time',
    desc: 'A professional website built for your business. Mobile-ready, fast, and set up to get found on Google.',
  },
  {
    tag: 'Monthly',
    name: 'Hosting & Care',
    price: '$50',
    priceNote: '/month',
    desc: 'Your site stays live, secure, and up to date. Small edits when you need them. No contract, cancel anytime.',
  },
];

const whyCards = [
  {
    stat: '100mi',
    title: '100 Mile Radius',
    desc: 'We focus on businesses within 100 miles of Old Town, FL — so we know your market.',
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
        <div className="hero-dot-grid" />
        <div className="hero-glow" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Serving Old Town, FL &amp; Surrounding Area</div>
            <h1 className="hero-headline">
              We Help Local Businesses<br />
              <span className="accent">Get Found, Get Leads,</span><br />
              and Grow.
            </h1>
            <p className="hero-sub">
              Based in Old Town, FL. No contracts. No big agency runaround.
              You work directly with the owner.
            </p>
            <div className="hero-ctas">
              <Link href="/services" className="btn-primary">See Our Services</Link>
              <Link href="/contact" className="btn-outline">Get a Free Consultation</Link>
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

      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container">
          <ScrollReveal>
            <div className="services-preview-header">
              <div>
                <span className="section-label">What We Offer</span>
                <h2>Everything Your Business Needs to Compete Online</h2>
              </div>
              <Link href="/services">View all services →</Link>
            </div>
          </ScrollReveal>
          <div className="services-cards">
            {serviceCards.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="service-card">
                  <span className="service-card-tag">{s.tag}</span>
                  <h3>{s.name}</h3>
                  <div className="service-card-price">
                    {s.price} <span>{s.priceNote}</span>
                  </div>
                  <p>{s.desc}</p>
                  <Link href="/services" className="service-card-link">
                    Learn More →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
