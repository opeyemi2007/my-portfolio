import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Work from './components/Work.jsx';
import Brands from './components/Brands.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Principles from './components/Principles.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';

// Hash routing: "#/work/<slug>" opens a case study; any other hash is an in-page anchor.
const slugFromHash = () => {
  const m = window.location.hash.match(/^#\/work\/([^/?#]+)/);
  return m ? decodeURIComponent(m[1]) : null;
};

export default function App() {
  const [slug, setSlug] = useState(slugFromHash);

  useEffect(() => {
    const onHash = () => setSlug(slugFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    if (slug) {
      window.scrollTo(0, 0);
      document.title = 'Project | Kingsley Adio';
      return;
    }
    document.title = 'Kingsley Adio | Graphic Designer & Visual Creative';
    const id = window.location.hash.slice(1);
    const t = setTimeout(() => {
      const el = id && document.getElementById(id);
      if (el) el.scrollIntoView();
    }, 0);
    return () => clearTimeout(t);
  }, [slug]);

  return (
    <>
      <a href={slug ? '#main' : '#work'} className="skip">Skip to content</a>
      <Nav />
      {slug ? (
        <ProjectDetail slug={slug} />
      ) : (
        <main id="main">
          <Hero />
          <Work />
          <Brands />
          <About />
          <Services />
          <Process />
          <Principles />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  );
}
