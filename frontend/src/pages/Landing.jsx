import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="brand-highlight">CampeX</span>
          </h1>
          <p className="hero-subtitle">
            Discover your campus like never before. Explore virtual tours, connect with events,
            and join vibrant student communities.
          </p>
          <div className="hero-buttons">
            <Link to="/tour" className="btn-primary">
              <span className="btn-icon">🎥</span>
              Start Virtual Tour
            </Link>
            <Link to="/events" className="btn-secondary">
              Explore Events
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="campus-preview">
            <div className="preview-placeholder">
              <img src="/college-bg.png" alt="Campus Preview" className="preview-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">Experience Campus Life</h2>
          <p className="section-subtitle">
            Everything you need to make the most of your campus experience
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎥</div>
              <h3 className="feature-title">Virtual Tour</h3>
              <p className="feature-description">
                Explore every corner of our beautiful campus from anywhere, anytime.
                Navigate through buildings, classrooms, and outdoor spaces.
              </p>
              <Link to="/tour" className="feature-link">Take Tour →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎟️</div>
              <h3 className="feature-title">Campus Events</h3>
              <p className="feature-description">
                Stay updated with the latest campus events, workshops, seminars,
                and cultural activities happening around you.
              </p>
              <Link to="/events" className="feature-link">View Events →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3 className="feature-title">Student Clubs</h3>
              <p className="feature-description">
                Connect with like-minded students through various clubs and societies.
                Find your passion and build lasting friendships.
              </p>
              <Link to="/clubs" className="feature-link">Join Clubs →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3 className="feature-title">AI Assistant</h3>
              <p className="feature-description">
                Get instant answers to your questions about campus life, academics,
                facilities, and more with our intelligent chatbot.
              </p>
              <Link to="/chatbot" className="feature-link">Chat Now →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Beta Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Planned Events</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Active Clubs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2 className="cta-title">Ready to Explore?</h2>
          <p className="cta-subtitle">
            Join thousands of students who are already discovering their campus through CampeX
          </p>
          <div className="cta-buttons">
            <Link to="/tour" className="btn-primary">
              <span className="btn-icon"></span>
              Get Started
            </Link>
            <Link to="/chatbot" className="btn-outline">
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;