'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    setLoading(false);
    if (res.ok) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-form-wrap">
        <div className="form-success">
          <div className="form-success-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="23" stroke="#378ADD" strokeWidth="2"/>
              <path d="M14 24L21 31L34 17" stroke="#378ADD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Message Sent!</h3>
          <p>Thanks for reaching out. Trey will be in touch within a few hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-wrap">
      <h2>Send a Message</h2>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="7c2cc1ac-61ca-4ced-a5f5-ae969a244cd3" />
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Smith"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="business">Business Name</label>
            <input
              id="business"
              name="business"
              type="text"
              placeholder="Smith Plumbing Co."
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(352) 555-0100"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@smithplumbing.com"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="service">What Do You Need Help With?</label>
          <select id="service" name="service" required>
            <option value="" disabled defaultValue="">Select a service...</option>
            <option value="website">Website Build</option>
            <option value="google">Google Business Profile</option>
            <option value="monthly">Hosting &amp; Care</option>
            <option value="not-sure">Not Sure — Let&#39;s Talk</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Anything Else We Should Know? (Optional)</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us a bit about your business, your goals, or any specific challenges you're facing..."
          />
        </div>

        <div className="form-submit">
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message →'}
          </button>
        </div>
      </form>
    </div>
  );
}
