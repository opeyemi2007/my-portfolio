import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { site } from '../config/site.js';
import styles from './Nav.module.css';

const links = [['Work', '#work'], ['About', '#about'], ['Services', '#services'], ['Contact', '#contact']];
const spy = { work: '#work', brands: '#work', about: '#about', services: '#services', tools: '#services', cv: '#contact', contact: '#contact' };

export default function Nav({ onProject }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const btn = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 40);
      let cur = '';
      Object.keys(spy).forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = spy[id];
      });
      setActive(cur);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); };
  }, [onProject]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus(); } };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);

  const cur = onProject ? '#work' : active;
  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#home" className={styles.logo} aria-label={`${site.name}, home`}>{site.monogram}</a>
      <nav aria-label="Primary" className={styles.links}>
        {links.map(([l, h], i) => (
          <a key={h} href={h} className={`${styles.link} ${cur === h ? styles.active : ''}`} aria-current={cur === h ? 'true' : undefined}>
            <span>0{i + 1}</span>{l}
          </a>
        ))}
        {site.cv && <a href={site.cv} download className={styles.cta}>CV</a>}
      </nav>
      <button ref={btn} type="button" className={styles.burger} aria-expanded={open} aria-controls="menu" onClick={() => setOpen((v) => !v)}>
        <span className={styles.bars} aria-hidden="true"><i /><i /></span>
        <span className="sr">{open ? 'Close menu' : 'Open menu'}</span>
      </button>
      <AnimatePresence>
        {open && (
          <m.div
            id="menu" className={styles.menu} role="dialog" aria-modal="true" aria-label="Menu"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }} animate={{ clipPath: 'circle(150% at 100% 0%)' }} exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.65, ease: [0.7, 0, 0.2, 1] }}
          >
            <ul>
              {links.map(([l, h], i) => (
                <li key={h}>
                  <m.a href={h} onClick={() => setOpen(false)} initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.25 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className={`display ${styles.mlink}`}>
                    <small>0{i + 1}</small>{l}
                  </m.a>
                </li>
              ))}
            </ul>
            <div className={styles.mfoot}>
              {site.cv && <a href={site.cv} download onClick={() => setOpen(false)}>Download CV</a>}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
