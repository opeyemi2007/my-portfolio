import React from 'react';
import './App.css';

// Placeholder images - in a real app, you'd import these or use actual URLs
const heroBgImage = 'https://via.placeholder.com/1920x1080/FF4500/FFFFFF?text=Creative+Director'; 
const aboutImage1 = 'https://via.placeholder.com/400x300/CCCCCC/000000?text=Jacket';
const aboutImage2 = 'https://via.placeholder.com/400x300/CCCCCC/000000?text=Headphones';
const aboutImage3 = 'https://via.placeholder.com/400x300/CCCCCC/000000?text=Product';


function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="header-logo">Folioblox</div>
        <nav className="header-nav">
          <a href="#home" className="nav-item active">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#projects" className="nav-item">Projects</a>
          <button className="btn btn-contact">Get in touch</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="hero-overlay"></div> {/* For the gradient and darkening effect */}
        <div className="hero-content-wrapper">
          <div className="hero-left">
            <p className="greeting">Hey, I'm a</p>
            <h1 className="hero-title">Creative Director</h1>
          </div>
          <div className="hero-right">
            <h2 className="hero-slogan">Great design should feel invisible.</h2>
            <p className="hero-description">I help people design, I build brands that connect and convert.</p>
          </div>
          <div className="hero-services">
            <div className="service-item">
              <span className="service-number">01</span>
              <span className="service-title">Brand Strategy</span>
            </div>
            <div className="service-item">
              <span className="service-number">02</span>
              <span className="service-title">Brand Identity Design</span>
            </div>
            <div className="service-item">
              <span className="service-number">03</span>
              <span className="service-title">Packaging Design</span>
            </div>
            <div className="service-item">
              <span className="service-number">04</span>
              <span className="service-title">Creative Direction</span>
            </div>
          </div>
        </div>
        <div className="trusted-brands">
          <p className="trusted-text">Trusted by Brands I've helped Shape</p>
          <div className="brand-logos">
            <span>Supa Blox</span>
            <span>Hype Blox</span>
            <span>Frame Blox</span>
            <span>Ultra Blox</span>
          </div>
        </div>
      </section>

      {/* Behind the Designs Section */}
      <section className="designs-section">
        <div className="designs-text-content">
          <p className="sub-heading">Behind the Designs</p>
          <h2 className="main-heading">Shaping Experiences That Make Life Simpler</h2>
        </div>
        <div className="designs-cta">
          <p className="cta-description">I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.</p>
          <div className="cta-action">
            <p className="cta-label">Let's Build Something Meaningful Together</p>
            <button className="btn btn-orange">Get in touch</button>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="image-grid-section">
        <div className="image-card">
          <img src={aboutImage1} alt="Jacket" />
        </div>
        <div className="image-card">
          <img src={aboutImage2} alt="Headphones" />
        </div>
        <div className="image-card">
          <img src={aboutImage3} alt="Product Bottle" />
        </div>
      </section>
    </div>
  );
}

export default App;