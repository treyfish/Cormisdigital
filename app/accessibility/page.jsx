import Link from 'next/link';
import '../../src/styles/pages.css';

export const metadata = {
  title: 'Accessibility Statement',
  description:
    'Cromis Digital is committed to making cromisdigital.com accessible to people with disabilities and continuously improving toward WCAG 2.1 Level AA.',
};

export default function AccessibilityPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Legal</span>
          <h1>Accessibility Statement</h1>
          <p>
            We&rsquo;re committed to making this site usable for everyone, and
            we want to hear from you if something isn&rsquo;t working.
          </p>
          <p className="legal-meta">Effective date: June 16, 2026</p>
        </div>
      </div>

      <section className="legal-page">
        <div className="container">
          <div className="legal-content">
            <h2>Our commitment</h2>
            <p>
              Cromis Digital is committed to making cromisdigital.com accessible
              to people with disabilities, including users of assistive
              technologies. Accessibility is part of how we build websites for
              ourselves and for our clients, and we treat it as an ongoing
              effort rather than a one-time checkbox.
            </p>

            <h2>Standard we follow</h2>
            <p>
              We aim to conform to the{' '}
              <a
                href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web Content Accessibility Guidelines (WCAG) 2.1
              </a>{' '}
              at Level AA. These guidelines explain how to make web content
              more accessible to people with disabilities and easier to use for
              everyone.
            </p>

            <h2>What we&rsquo;ve done</h2>
            <ul>
              <li>Built the site with semantic HTML so it works with screen readers.</li>
              <li>Provided visible keyboard focus indicators on links, buttons, and form fields.</li>
              <li>Included a &ldquo;Skip to main content&rdquo; link for keyboard users.</li>
              <li>Used color contrast that meets WCAG AA targets for body text.</li>
              <li>Labeled form fields so they work with assistive technology.</li>
              <li>Added descriptive alternative text to meaningful images.</li>
              <li>Built a fully responsive layout that works at zoom levels up to 200%.</li>
            </ul>

            <h2>Known limitations</h2>
            <p>
              We&rsquo;re a small team and we know we don&rsquo;t catch
              everything. If you run into a part of the site that&rsquo;s
              difficult to use with assistive technology, please tell us — we
              treat reports as a priority and will work to fix issues quickly.
            </p>

            <h2>Tell us about a problem</h2>
            <p>
              If you find an accessibility issue or you need information on
              this site in a different format, please reach out and we will do
              our best to help:
            </p>
            <ul>
              <li>
                Email:{' '}
                <a href="mailto:TreyHolland@cromisdigital.com">
                  TreyHolland@cromisdigital.com
                </a>
              </li>
              <li>
                Phone: <a href="tel:+13529497355">(352) 949-7355</a>
              </li>
              <li>
                <Link href="/contact">Use the contact form</Link>
              </li>
            </ul>
            <p>
              Please describe the issue, the page where it happened, and what
              assistive technology or browser you were using, if you can.
              We&rsquo;ll aim to respond within a few business days.
            </p>

            <h2>Continuous improvement</h2>
            <p>
              We review accessibility as we make changes to the site, and we
              update this statement when our approach changes. The effective
              date above reflects the most recent review.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
