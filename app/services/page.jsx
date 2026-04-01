import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import '../../src/styles/pages.css';

export const metadata = {
  title: 'Services — Simple, Honest Web Pricing for Local Businesses',
  description:
    'Two clear services: a professional website build starting at $500, and monthly hosting & care for $50/month. No contracts, no surprises.',
};

const tiers = [
  {
    tag: 'Tier 1 — One-Time',
    name: 'Website Build',
    price: '$500',
    priceNote: 'one-time — $750 for larger sites (4–5 pages)',
    desc: 'A clean, professional website built for your business and your market. Ready to launch, ready to be found. You get a site that works — mobile, fast, and set up right from day one.',
    features: [
      '1–3 page professional website',
      'Mobile-ready & fast-loading',
      'Google Business Profile setup (if needed)',
      'Contact form & click-to-call',
      'Built to show up on Google',
      'Handed off ready to go',
    ],
  },
  {
    tag: 'Tier 2 — Monthly',
    name: 'Hosting & Care',
    price: '$50',
    priceNote: 'per month — no contract, cancel anytime',
    desc: 'Your site stays live, secure, and up to date. Need to change your hours, update a price, or swap a photo? Just send a message. You run your business — I handle the website.',
    features: [
      'Site stays live & secure',
      'Small edits whenever you need them',
      'Updates handled for you',
      'No contract — cancel anytime',
    ],
  },
];

const faqs = [
  {
    q: 'Do I need to sign a long-term contract?',
    a: 'No. The website build is a one-time project — you pay once, you own it. Monthly hosting is month-to-month with no commitment. Cancel whenever you want.',
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
    a: 'We serve businesses within roughly 100 miles of Old Town, FL. This lets us deeply understand the local market and serve clients more personally.',
  },
  {
    q: 'What if I just need one thing, like a Google Business setup?',
    a: 'Reach out. We can discuss what makes sense for your situation. Not everything needs to be a full package.',
  },
];

export default function ServicesPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Services</span>
          <h1>Clear Pricing.<br />Real Results.</h1>
          <p>
            Two services. Flat prices. No contracts. Built for local businesses
            that want a website that actually works.
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
                    <h2>{t.name}</h2>
                    <div className="tier-price">{t.price}</div>
                    <div className="tier-price-note">{t.priceNote}</div>
                    <Link href="/contact" className="btn-primary tier-cta">
                      Get Started
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
