import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext.tsx';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSidebar = () => {
    if (currentTheme !== 'theme2') return null;

    return (
      <aside className="sidebar">
        <h3>Contact Info</h3>
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h4>Address</h4>
              <p>123 Business Street<br />City, State 12345</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <h4>Email</h4>
              <p>hello@company.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🕒</div>
            <div>
              <h4>Hours</h4>
              <p>Mon-Fri: 9AM-6PM<br />Sat-Sun: 10AM-4PM</p>
            </div>
          </div>
        </div>
        
        <div className="sidebar-widget">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </aside>
    );
  };

  const renderContent = () => (
    <div className="content-area">
      <section className="hero-section">
        <h1 className="hero-title">
          {currentTheme === 'theme1' && 'Get In Touch'}
          {currentTheme === 'theme2' && 'Contact Our Team'}
          {currentTheme === 'theme3' && '💬 Let\'s Chat! 💬'}
        </h1>
        <p className="hero-description">
          {currentTheme === 'theme1' && 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'}
          {currentTheme === 'theme2' && 'Reach out to our dedicated team for inquiries, support, or collaboration opportunities.'}
          {currentTheme === 'theme3' && 'We\'re super excited to hear from you! Drop us a message and let\'s create something amazing together! 🌟'}
        </p>
      </section>

      <div className="contact-content">
        <div className="contact-form-section">
          <h2 className="section-title">Send us a Message</h2>
          
          {submitStatus === 'success' && (
            <div className="success-message">
              <p>
                {currentTheme === 'theme3' ? '🎉 Message sent successfully! We\'ll get back to you soon! 🎉' : '✅ Message sent successfully! We\'ll get back to you soon.'}
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error-message">
              <p>❌ Something went wrong. Please try again later.</p>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="business">Business Partnership</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-small"></span>
                  Sending...
                </>
              ) : (
                currentTheme === 'theme3' ? '🚀 Send Message' : 'Send Message'
              )}
            </button>
          </form>
        </div>

        {currentTheme !== 'theme2' && (
          <div className="contact-info-section">
            <h2 className="section-title">Contact Information</h2>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  {currentTheme === 'theme3' ? '📍' : '🏢'}
                </div>
                <h3>Visit Us</h3>
                <p>123 Business Street<br />City, State 12345<br />United States</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  {currentTheme === 'theme3' ? '📞' : '☎️'}
                </div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  {currentTheme === 'theme3' ? '✉️' : '📧'}
                </div>
                <h3>Email Us</h3>
                <p>hello@company.com<br />support@company.com</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  {currentTheme === 'theme3' ? '🕒' : '⏰'}
                </div>
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9AM - 6PM<br />Saturday - Sunday: 10AM - 4PM</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How quickly do you respond to inquiries?</h3>
            <p>We typically respond to all inquiries within 24 hours during business days.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer customer support?</h3>
            <p>Yes! Our dedicated support team is available to help with any questions or issues.</p>
          </div>
          <div className="faq-item">
            <h3>Can I schedule a consultation?</h3>
            <p>Absolutely! Contact us to schedule a consultation that fits your needs.</p>
          </div>
          <div className="faq-item">
            <h3>What information should I include in my message?</h3>
            <p>Please provide as much detail as possible about your inquiry to help us assist you better.</p>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className={`contact-page ${currentTheme}`}>
      {renderSidebar()}
      {renderContent()}
    </div>
  );
};

export default Contact;