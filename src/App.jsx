import React from 'react';
import './App.css';
import ParticlesBg from './components/ParticlesBg';
import { motion } from "framer-motion";

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
        <ParticlesBg />

        <div className="floating-elements">
          <img src="/icons/3D Chrome cursor icon - Icoon_co.png" className="float-icon icon1" />
          <img src="/icons/🎬 Clapper Board Emoji.png" className="float-icon icon2" />
          <img src="/icons/Sayfalar yerinde duramıyor, Gümüş Kalem'de klasör….png" className="float-icon icon3" />
        </div>

        <div className="hero-content-wrapper">
          {/* Left */}
          <div className="hero-left">

            <img src="/IMG-20250506-WA0044.jpg" alt="profile pic" className='profilepic' />
          <motion.p 
  className="greeting"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
>
  Hey, I'm
</motion.p>

<motion.h1
  className="hero-title"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.4 }}
>
  Kingsley Adio
</motion.h1>

<motion.p
  className="hero-sub"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.6 }}
>
  Video Editor • Videographer • Brand Designer
</motion.p>
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
              <img src="/desktop folders 1753.png" className="img2" />
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
              <img src="/desktop folders 1753.png" className="img2" />
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
              <img src="/desktop folders 1753.png" className="img2" />
            </div>
            <p className="folderName">Videography</p>
          </div>
        </div>


        <section className="testimonials-section">
  <motion.h2 
    className="section-heading"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    What Clients Say
  </motion.h2>

  <div className="testimonials-wrapper">
    {[
      {
        name: "FCD Crew",
        feedback: "Kingsley transformed our brand visuals. Professional and creative!"
      },
      {
        name: "Classic Makeup USA",
        feedback: "His video editing skills are unmatched. Every project shines."
      },
      {
        name: "ALIFE",
        feedback: "Highly recommend Kingsley for any creative visual work."
      }
    ].map((testimonial, index) => (
      <motion.div
        className="testimonial-card"
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <p className="testimonial-feedback">"{testimonial.feedback}"</p>
        <p className="testimonial-name">- {testimonial.name}</p>
      </motion.div>
    ))}
  </div>
</section>


{/* Journey Section */}
<section className="journey-section">
  <motion.h2
    className="section-heading"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    My Journey Since 2022
  </motion.h2>

  <div className="timeline">
    {[
      { year: "2022", event: "Started video editing and brand design projects." },
      { year: "2023", event: "Worked with local brands and FCD Crew." },
      { year: "2024", event: "Expanded to international clients and refined skills." },
      { year: "2025", event: "Built a professional portfolio and high-impact projects." },
    ].map((item, index) => (
      <motion.div
        className="timeline-item"
        key={index}
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.3 }}
      >
        <span className="timeline-year">{item.year}</span>
        <p className="timeline-event">{item.event}</p>
      </motion.div>
    ))}
  </div>
</section>


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
      <section className="image-grid-section" id="about">
        <div className="image-card">
          <img src={aboutImage1} alt="video Editing" />
        </div>
        <div className="image-card">
          <img src={aboutImage2} alt="Videography" />
        </div>
        <div className="image-card">
          <img src={aboutImage3} alt="Brand design" />
        </div>
      </section>
    </div>
  );
}

export default App;
