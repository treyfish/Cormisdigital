import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import '../../src/styles/pages.css';

export const metadata = {
  title: 'About — Trey Holland, Owner of Cromis Digital',
  description:
    'Trey Holland is a former fisheries biologist who brought scientific precision into digital marketing. Local to Old Town, FL. No agency runaround — you deal directly with the owner.',
};

const values = [
  {
    title: 'Precision Over Guesswork',
    desc: 'Every decision is backed by data. From a biology lab to a marketing dashboard — the methodology is the same.',
  },
  {
    title: 'You Deal With the Owner',
    desc: 'Trey answers the phone. Trey builds the site. Trey handles the updates. No middlemen, no surprises.',
  },
  {
    title: 'AI-Accelerated',
    desc: 'Modern, efficient tools mean faster builds and lower costs — without the overhead of a traditional agency.',
  },
  {
    title: 'Local-First Thinking',
    desc: 'We live here. We know the market. Strategies are built for this region — not copy-pasted from a template.',
  },
  {
    title: 'No Lock-In',
    desc: 'Month-to-month. No contracts. We earn your business every single month.',
  },
  {
    title: 'Transparent Reporting',
    desc: 'You see exactly what\'s working and what isn\'t. No vanity metrics — just the numbers that matter.',
  },
];

export default function AboutPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">About</span>
          <h1>Built Different.</h1>
          <p>
            A former scientist. A local owner. A different way to think about
            growing your business online.
          </p>
        </div>
      </div>

      <section className="about-story">
        <div className="container">
          <div className="about-grid">
            <ScrollReveal>
              <div className="about-text">
              <h2>The Story Behind the Name</h2>
              <p>
                Cromis Digital takes its name from <em>Pogonias cromis</em> — a
                species native to these Gulf Coast waters. A small nod to the
                place and the years Trey spent working in it.
              </p>
              <p>
                Trey Holland spent years doing field work in wildlife and natural
                resources — the kind of work where you either get accurate data
                or you make bad decisions. That trained a specific way of
                thinking: design the experiment, measure what&#39;s real, cut
                what isn&#39;t working. Most marketing agencies are allergic to
                that kind of thinking.
              </p>
              <p>
                When Trey started working with local businesses, the same problem
                kept showing up: invisible online, or burned by an agency that
                charged for reports nobody could read. Business owners were paying
                for calls with people who didn&#39;t know their name, let alone
                their market.
              </p>
              <p>
                <strong>Cromis Digital is the opposite of that.</strong>
              </p>
              <p>
                You work directly with the owner. Every time. No account managers,
                no handoffs, no corporate runaround. Trey handles your website
                and your Google presence — using efficient, modern tools that cut
                the cost and timeline of traditional agencies — and he only works
                within about 100 miles of Old Town. Not because he has to.
                Because he knows this market and wants to stay close to it.
              </p>
              <p>
                No long-term contracts. No mystery invoices. Just a local business
                owner helping other local business owners compete online — with
                the same analytical rigor he&#39;d bring to any field problem.
              </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <aside className="about-aside">
              <div className="about-aside-card">
                <span className="section-label">The Owner</span>
                <h3>Trey Holland</h3>
                <p>
                  Fisheries biologist turned digital marketer. Based in Old Town,
                  FL. Founder and sole operator of Cromis Digital. Goes by Trey.
                </p>
                <Link href="/contact" className="btn-primary">
                  Work With Trey
                </Link>
              </div>

              <div className="about-aside-card">
                <span className="section-label">The Name</span>
                <h3>Pogonias cromis</h3>
                <p>
                  The black drum. A Gulf Coast species. A reminder that this business
                  is rooted in this place — and that precision matters.
                </p>
              </div>
              </aside>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <ScrollReveal>
            <h2>How We Operate</h2>
          </ScrollReveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="value-item">
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <div className="cta-banner-inner">
              <div className="cta-banner-text">
                <h2>Ready to work with someone who actually knows your market?</h2>
                <p>One conversation. No pressure. Let&#39;s see if it&#39;s a fit.</p>
              </div>
              <Link href="/contact" className="btn-outline">Get in Touch</Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
