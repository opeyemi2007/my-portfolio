import React from 'react';
import './App.css';

// Replace these with your real images when ready
const heroBgImage = 'https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Kingsley+Adio'; 
const aboutImage1 = 'https://via.placeholder.com/400x300/CCCCCC/000000?text=Photography';
const aboutImage2 = 'https://via.placeholder.com/400x300/CCCCCC/000000?text=Videography';
const aboutImage3 = 'https://via.placeholder.com/400x300/CCCCCC/000000?text=Design+%2B+Web';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="header-logo">Kingsley</div>
        <nav className="header-nav">
          <a href="#home" className="nav-item active">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#projects" className="nav-item">Projects</a>
          <button className="btn btn-contact">Hire Me</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="hero-overlay"></div>

        <div className="hero-content-wrapper">
          {/* Left */}
          <div className="hero-left">
            <p className="greeting">Hey, I'm</p>
            <h1 className="hero-title">Kingsley Adio</h1>
            <p className="hero-sub">Developer • Videographer • Photographer • Graphic Designer</p>
          </div>

          {/* Right */}
          <div className="hero-right">
            <h2 className="hero-slogan">I Create Digital Experiences That Stand Out.</h2>
            <p className="hero-description">
              I build clean websites, shoot cinematic visuals, and design brand identities that speak clearly.
            </p>
          </div>

          {/* Services */}
          <div className="hero-services">
            <div className="service-item">
              <span className="service-number">01</span>
              <span className="service-title">Web Development</span>
            </div>
            <div className="service-item">
              <span className="service-number">02</span>
              <span className="service-title">Graphic Design</span>
            </div>
            <div className="service-item">
              <span className="service-number">03</span>
              <span className="service-title">Videography</span>
            </div>
            <div className="service-item">
              <span className="service-number">04</span>
              <span className="service-title">Photography</span>
            </div>
          </div>
        </div>

        {/* Trusted Brands */}
        <div className="trusted-brands">
          <p className="trusted-text">Brands & Creatives I've Worked With</p>
          <div className="brand-logos">
            <span>FCD Crew</span>
            <span>Classic Makeup USA</span>
            <span>ALIFE</span>
            <span>PocketVendo</span>
          </div>
        </div>
      </section>

      {/* Behind the Designs Section */}
      <section className="designs-section">
        <div className="designs-text-content">
          <p className="sub-heading">Behind My Work</p>
          <h2 className="main-heading">Bringing Ideas To Life With Clean, Creative Execution</h2>
        </div>

        <div className="designs-cta">
          <p className="cta-description">
            I combine tech, visuals, and creativity to deliver professional projects — from websites to ads, videos, and full brand stories.
          </p>

          <div className="cta-action">
            <p className="cta-label">Let’s Create Something Amazing</p>
            <button className="btn btn-orange">Hire Me</button>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="image-grid-section" id="about">
        <div className="image-card">
          <img src={aboutImage1} alt="Photography Work" />
        </div>
        <div className="image-card">
          <img src={aboutImage2} alt="Videography Work" />
        </div>
        <div className="image-card">
          <img src={aboutImage3} alt="Design + Web Development" />
        </div>
      </section>
    </div>
  );
}

export default App;
