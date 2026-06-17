import Script from 'next/script';
import '../../src/styles/pages.css';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Cromis Digital collects, uses, and protects information from visitors of cromisdigital.com.',
};

export default function PrivacyPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Legal</span>
          <h1>Privacy Policy</h1>
          <p>How we handle the information you share with us.</p>
        </div>
      </div>

      <section className="legal-page">
        <div className="container">
          <div className="termly-embed-wrap">
            <div
              name="termly-embed"
              data-id="c2b2d7fd-0426-4b0f-b5b5-9e396a476c41"
              data-type="iframe"
            />
          </div>
        </div>
      </section>

      <Script
        src="https://app.termly.io/embed-policy.min.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
