import React from 'react';
import { useTheme } from '../../contexts/ThemeContext.tsx';
import './About.css';

const About: React.FC = () => {
  const { currentTheme } = useTheme();

  const renderSidebar = () => {
    if (currentTheme !== 'theme2') return null;

    return (
      <aside className="sidebar">
        <h3>About Sections</h3>
        <ul className="sidebar-menu">
          <li><a href="#mission">Our Mission</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#values">Our Values</a></li>
          <li><a href="#history">Our History</a></li>
        </ul>
        
        <div className="sidebar-widget">
          <h4>Quick Facts</h4>
          <div className="stat-item">
            <span className="stat-label">Founded:</span>
            <span className="stat-value">2020</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Team Size:</span>
            <span className="stat-value">50+</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Countries:</span>
            <span className="stat-value">25</span>
          </div>
        </div>
      </aside>
    );
  };

  const renderContent = () => (
    <div className="content-area">
      <section className="hero-section">
        <h1 className="hero-title">
          {currentTheme === 'theme1' && 'About Our Company'}
          {currentTheme === 'theme2' && 'Our Story & Vision'}
          {currentTheme === 'theme3' && '🌟 About Our Amazing Journey! 🌟'}
        </h1>
        <p className="hero-description">
          {currentTheme === 'theme1' && 'We are dedicated to providing exceptional products and services that enhance your daily life through innovation and quality.'}
          {currentTheme === 'theme2' && 'Discover the passion and expertise behind our premium collection, crafted with meticulous attention to detail and unwavering commitment to excellence.'}
          {currentTheme === 'theme3' && 'Join us on this colorful adventure as we bring joy, creativity, and amazing products to people all around the world! 🚀'}
        </p>
      </section>

      <section className="mission-section" id="mission">
        <h2 className="section-title">Our Mission</h2>
        <div className="mission-content">
          <div className="mission-text">
            <p>
              We believe in creating products that not only meet your needs but exceed your expectations. 
              Our mission is to bridge the gap between quality and affordability, ensuring that everyone 
              has access to premium products that enhance their lifestyle.
            </p>
            <p>
              Through continuous innovation and customer-centric approach, we strive to build lasting 
              relationships with our customers while contributing positively to our communities and environment.
            </p>
          </div>
          <div className="mission-image">
            <div className="placeholder-image">
              {currentTheme === 'theme3' ? '🎯' : '🚀'}
            </div>
          </div>
        </div>
      </section>

      <section className="values-section" id="values">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">
              {currentTheme === 'theme3' ? '💎' : '✨'}
            </div>
            <h3>Quality First</h3>
            <p>We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high standards.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">
              {currentTheme === 'theme3' ? '🤝' : '👥'}
            </div>
            <h3>Customer Focus</h3>
            <p>Our customers are at the heart of everything we do. We listen, adapt, and continuously improve based on feedback.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">
              {currentTheme === 'theme3' ? '🌱' : '🌍'}
            </div>
            <h3>Sustainability</h3>
            <p>We are committed to sustainable practices that protect our planet for future generations.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">
              {currentTheme === 'theme3' ? '⚡' : '🔬'}
            </div>
            <h3>Innovation</h3>
            <p>We embrace new technologies and creative solutions to stay ahead of the curve and serve you better.</p>
          </div>
        </div>
      </section>

      <section className="team-section" id="team">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">
              {currentTheme === 'theme3' ? '👨‍💼' : '👤'}
            </div>
            <h3>John Smith</h3>
            <p className="member-role">CEO & Founder</p>
            <p className="member-bio">
              Visionary leader with 15+ years of experience in e-commerce and product development.
            </p>
          </div>
          <div className="team-member">
            <div className="member-avatar">
              {currentTheme === 'theme3' ? '👩‍💻' : '👤'}
            </div>
            <h3>Sarah Johnson</h3>
            <p className="member-role">CTO</p>
            <p className="member-bio">
              Technology expert passionate about creating seamless digital experiences for our customers.
            </p>
          </div>
          <div className="team-member">
            <div className="member-avatar">
              {currentTheme === 'theme3' ? '👨‍🎨' : '👤'}
            </div>
            <h3>Mike Chen</h3>
            <p className="member-role">Head of Design</p>
            <p className="member-bio">
              Creative designer focused on user experience and bringing beautiful, functional designs to life.
            </p>
          </div>
          <div className="team-member">
            <div className="member-avatar">
              {currentTheme === 'theme3' ? '👩‍💼' : '👤'}
            </div>
            <h3>Emily Davis</h3>
            <p className="member-role">Head of Operations</p>
            <p className="member-bio">
              Operations specialist ensuring smooth processes and exceptional customer service delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="history-section" id="history">
        <h2 className="section-title">Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2020</div>
            <div className="timeline-content">
              <h3>Company Founded</h3>
              <p>Started with a vision to revolutionize online shopping experience.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2021</div>
            <div className="timeline-content">
              <h3>First Major Milestone</h3>
              <p>Reached 10,000 satisfied customers and expanded our product range.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2022</div>
            <div className="timeline-content">
              <h3>International Expansion</h3>
              <p>Launched in 15 countries, bringing our products to a global audience.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2023</div>
            <div className="timeline-content">
              <h3>Innovation Award</h3>
              <p>Recognized for outstanding innovation in e-commerce technology.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className={`about-page ${currentTheme}`}>
      {renderSidebar()}
      {renderContent()}
    </div>
  );
};

export default About;