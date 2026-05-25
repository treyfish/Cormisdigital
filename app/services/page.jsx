import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import '../../src/styles/pages.css';

export const metadata = {
  title: 'Services — Websites, AI Lead Systems & Local SEO',
  description:
    'Custom websites, AI-powered lead systems, and local SEO for service businesses across Florida. Pricing is custom to your business. No contracts.',
};

const tiers = [
  {
    tag: 'Websites',
    name: 'Custom Websites',
    desc: 'A fast, mobile-first website built to turn visitors into customers. Hand-built on Next.js — no templates, no page builders, no bloat. You get a site that loads fast, looks sharp, and is set up to be found on Google from day one.',
    features: [
      'Hand-built on Next.js — no templates',
      'Fast-loading & mobile-first',
      'Designed to convert visitors into customers',
      'Contact form & click-to-call',
      'Built to show up on Google',
      'You own it — no platform lock-in',
    ],
  },
  {
    tag: 'AI Lead System',
    badge: 'Featured',
    name: 'Never Miss a Lead',
    desc: 'An AI-powered system that makes sure no lead slips through the cracks. When you can’t pick up, it texts the caller back automatically, captures and summarizes every lead, and keeps your reviews growing — all while you’re out on the job.',
    features: [
      'Auto-texts back when you miss a call',
      'Captures & summarizes every lead',
      'Automated review requests',
      'Works while you’re on the job',
      'Keeps every lead in one place',
    ],
  },
  {
    tag: 'Local SEO',
    name: 'Local SEO & Google Business Profile',
    desc: 'Show up when your customers are searching. We optimize your Google Business Profile and local presence so you appear in the map pack and local results — and we keep it working with ongoing posts and reporting.',
    features: [
      'Google Business Profile optimization',
      'Weekly Google posts',
      'Ongoing local SEO',
      'Review strategy',
      'Monthly reporting',
    ],
  },
];

const faqs = [
  {
    q: 'How much does it cost?',
    a: 'Every business is different, so pricing is custom. Reach out for a free quote — you’ll get a straight answer on what makes sense for your situation, with no obligation.',
  },
  {
    q: 'Do I need to sign a long-term contract?',
    a: 'No long-term contracts, ever. Your website is a one-time build that you own. Ongoing services like the lead system and SEO are month-to-month — cancel anytime.',
  },
  {
    q: 'Who will I be working with?',
    a: 'You work directly with Trey Holland — the owner of Cromis Digital — every time. No account managers, no handoffs, no surprises.',
  },
  {
    q: 'How long does it take to build my website?',
    a: 'Most websites are complete within 2–4 weeks depending on how quickly we can collect your content and feedback.',
  },
  {
    q: 'Do you work with businesses outside of Old Town, FL?',
    a: 'Yes. We’re based in Old Town, FL and work with local service businesses across the state.',
  },
];

export default function ServicesPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Services</span>
          <h1>Websites, AI Systems,<br />and Local SEO.</h1>
          <p>
            Three ways we help local service businesses across Florida get found
            and catch every lead. Every business is different — pricing is custom,
            and there are no long-term contracts.
          </p>
        </div>
      </div>

      <div className="services-page">
        <div className="container">
          <div className="services-tiers">
            {tiers.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="tier-card">
                  <div className="tier-left">
                    <span className="tier-tag">{t.tag}</span>
                    {t.badge && <span className="tier-badge">{t.badge}</span>}
                    <h2>{t.name}</h2>
                    <Link href="/contact" className="btn-primary tier-cta">
                      Get a Free Quote
                    </Link>
                  </div>
                  <div className="tier-right">
                    <p>{t.desc}</p>
                    <ul className="tier-features">
                      {t.features.map((f, j) => (
                        <li key={j}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="services-faq">
              <h2>Common Questions</h2>
              <div className="faq-list">
                {faqs.map((f, i) => (
                  <div className="faq-item" key={i}>
                    <h3>{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <div className="cta-banner-inner">
              <div className="cta-banner-text">
                <h2>Have a question before you reach out?</h2>
                <p>Tell me about your business and I&#39;ll give you a straight answer.</p>
              </div>
              <Link href="/contact" className="btn-outline">Talk to Trey</Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
