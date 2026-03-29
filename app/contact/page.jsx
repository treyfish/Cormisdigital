import ContactForm from '../../components/ContactForm';
import ScrollReveal from '../../components/ScrollReveal';
import '../../src/styles/pages.css';

export const metadata = {
  title: 'Contact — Get a Free Consultation from Cromis Digital',
  description:
    'Reach out to Cromis Digital for a free consultation. Most inquiries get a response within a few hours. No sales pressure — just a real conversation.',
};

export default function ContactPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Contact</span>
          <h1>Let&#39;s Talk.</h1>
          <p>
            No sales scripts. No pressure. Just a real conversation about
            your business and what&#39;s possible.
          </p>
        </div>
      </div>

      <section className="contact-page">
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal>
              <div className="contact-info">
                <h2>Get In Touch</h2>
                <p>
                  Whether you need a full website build or just want to know what&#39;s
                  holding your Google Business Profile back — reach out. We respond fast.
                </p>

                <div className="contact-details">
                  <div className="contact-detail">
                    <div className="contact-detail-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div className="contact-detail-content">
                      <span className="contact-detail-label">Phone</span>
                      <span className="contact-detail-value">
                        <a href="tel:+13529497355">(352) 949-7355</a>
                      </span>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div className="contact-detail-content">
                      <span className="contact-detail-label">Email</span>
                      <span className="contact-detail-value">
                        <a href="mailto:TreyHolland@cromisdigital.com">TreyHolland@cromisdigital.com</a>
                      </span>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div className="contact-detail-content">
                      <span className="contact-detail-label">Location</span>
                      <span className="contact-detail-value">Oldtown, FL (serving ~100mi radius)</span>
                    </div>
                  </div>
                </div>

                <div className="contact-response-note">
                  Most inquiries get a response within a few hours.
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
