import { useCallback, useEffect, useRef, useState } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Intro from './components/Intro.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Work from './components/Work.jsx';
import Brands from './components/Brands.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Tools from './components/Tools.jsx';
import Cv from './components/Cv.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';

// Hash routing: "#/work/<slug>" opens a case study; any other hash is an in-page anchor.
const slugFromHash = () => {
  const m = window.location.hash.match(/^#\/work\/([^/?#]+)/);
  return m ? decodeURIComponent(m[1]) : null;
};
// A shared deep link (case study or section) skips the opening screen.
const initialPhase = () => (window.location.hash.length > 1 ? 'done' : 'intro');

export default function App() {
  const [slug, setSlug] = useState(slugFromHash);
  const [phase, setPhase] = useState(initialPhase); // intro -> cover -> reveal -> done
  const timers = useRef([]);
  const locked = phase === 'intro' || phase === 'cover';

  useEffect(() => {
    const onHash = () => setSlug(slugFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('locked', locked);
    return () => document.body.classList.remove('locked');
  }, [locked]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const enter = useCallback(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPhase('done'); window.scrollTo(0, 0); return;
    }
    setPhase('cover');
    timers.current.push(setTimeout(() => { window.scrollTo(0, 0); setPhase('reveal'); }, 600));
    timers.current.push(setTimeout(() => setPhase('done'), 1260));
  }, []);

  useEffect(() => {
    if (slug) {
      window.scrollTo(0, 0);
      document.title = 'Project | Kingsley Adio';
      return;
    }
    document.title = 'Kingsley Adio | Graphic Designer & Visual Creative';
    const id = window.location.hash.slice(1);
    const t = setTimeout(() => { const el = id && document.getElementById(id); if (el) el.scrollIntoView(); }, 0);
    return () => clearTimeout(t);
  }, [slug]);

  const active = phase === 'reveal' || phase === 'done';
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="app" inert={locked} aria-hidden={locked ? true : undefined}>
        <a href={slug ? '#main' : '#work'} className="skip">Skip to content</a>
        <Nav onProject={Boolean(slug)} />
        {slug ? (
          <ProjectDetail slug={slug} />
        ) : (
          <main id="main">
            <Hero active={active} />
            <Work />
            <Brands />
            <About />
            <Services />
            <Tools />
            <Cv />
            <Contact />
          </main>
        )}
        <Footer />
      </div>
      {phase !== 'done' && <Intro phase={phase} onEnter={enter} />}
    </LazyMotion>
  );
}
