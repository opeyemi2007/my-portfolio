import React from 'react';
import './App.css';

// Replace these with your real images when ready
const heroBgImage = 'https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Kingsley+Adio';
const aboutImage1 = 'https://via.placeholder.com/400x300/CCCCCC/000000?text=Photography';
const aboutImage2 = 'https://via.placeholder.com/400x300/CCCCCC/000000?text=Videography';
const aboutImage3 = 'https://via.placeholder.com/400x300/CCCCCC/000000?text=Design+%2B+Web';

function App() {

  const phoneNumber = "+2349163926124"; // your number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="header-logo">Kingsley</div>
        <nav className="header-nav">
          <a href="#home" className="nav-item active">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#projects" className="nav-item">Projects</a>
          <button className="btn btn-contact" onClick={handleClick}>Hire Me</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBgImage})` }}>
        <div className="hero-overlay"></div>

        <div className="hero-content-wrapper">
          {/* Left */}
          <div className="hero-left">

            <img src="public/IMG-20250506-WA0044.jpg" alt="profile pic" className='profilepic' />
            <p className="greeting">Hey, I'm</p>
            <h1 className="hero-title">Kingsley Adio</h1>
            <p className="hero-sub">Video Editor • Videographer • Brand Designer</p>
          </div>

          {/* Right */}
          <div className="hero-right">
            <h2 className="hero-slogan">I Create Digital Experiences That Stand Out.</h2>
            <p className="hero-description">
              I’m a creative professional specializing in video editing, brand design, and videography. I bring stories to life through visually
              engaging content, helping brands stand out with high-quality visuals and compelling storytelling. From crafting sleek brand identities
              to producing and editing captivating videos, I focus on delivering work that connects with audiences and leaves a lasting impression. My
              goal is simple: turn ideas into powerful visual experiences that elevate your brand.
            </p>
          </div>

          {/* Services */}
          <div className="hero-services">
            <div className="service-item">
              <span className="service-number">01</span>
              <span className="service-title">Video Editor</span>
            </div>
            <div className="service-item">
              <span className="service-number">02</span>
              <span className="service-title">Brand Designer</span>
            </div>
            <div className="service-item">
              <span className="service-number">03</span>
              <span className="service-title">Videography</span>
            </div>
          </div>
        </div>

        <div className="Drivelinks" id="projects">
          {/* Video */}
          <div className="PortfolioDocument" onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1sIh6DgaR69xlTH5549sXcHcyS4e_XrUg?usp=sharing",
              "_blank"
            )
          }>
            <div className="img-wrap">
              <img src="/desktop folders 1456.png" className="img1" />
              <img src="public/desktop folders 1753.png" className="img2" />
            </div>
            <p className="folderName">Video Edit</p>
          </div>

          {/* Brand */}
          <div className="PortfolioDocument" onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1pe6MczHW-gQtmMhoXZPJCYKAwxoZlkhS?usp=sharing",
              "_blank"
            )
          }>
            <div className="img-wrap">
              <img src="/desktop folders 1456.png" className="img1" />
              <img src="public/desktop folders 1753.png" className="img2" />
            </div>
            <p className="folderName">Brand Design</p>
          </div>

          {/* VideoGraphy */}
          <div className="PortfolioDocument" onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1R-Qa3zAK2IEQOM3HkNMQz62VLIYUh7YL?usp=sharing",
              "_blank"
            )
          }>
            <div className="img-wrap">
              <img src="/desktop folders 1456.png" className="img1" />
              <img src="public/desktop folders 1753.png" className="img2" />
            </div>
            <p className="folderName">Videography</p>
          </div>



        </div>

        {/* Trusted Brands */}
        <div className="trusted-brands">
          <p className="trusted-text">Brands & Creatives I've Worked With :</p>
          <div className="brand-logos">
            <span>FCD Crew</span>
            <span>Classic Makeup USA</span>
            <span>ALIFE</span>
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
            I’m a creative specializing in video editing, brand design, and videography.
            I create visually engaging content that helps brands stand out and connect
            with their audience through strong storytelling and high-quality visuals.
          </p>

          <div className="cta-action">
            <p className="cta-label">Let’s Create Something Amazing</p>
            <button className="btn btn-orange" onClick={handleClick}>Hire Me</button>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      {/* <section className="image-grid-section" id="about">
        <div className="image-card">
          <img src={aboutImage1} alt="video Editing" />
        </div>
        <div className="image-card">
          <img src={aboutImage2} alt="Videography" />
        </div>
        <div className="image-card">
          <img src={aboutImage3} alt="Brand design" />
        </div>
      </section> */}
    </div>
  );
}

export default App;
