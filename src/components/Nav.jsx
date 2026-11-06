import { useEffect, useState } from 'react';
import { site, mailto } from '../config/site.js';
import styles from './Nav.module.css';

const links = [
  ['Home', 'home'],
  ['Work', 'work'],
  ['About', 'about'],
  ['Contact', 'contact'],
];
const sectionToNav = { home: 'home', work: 'work', about: 'about', services: 'about', process: 'about', principles: 'about', contact: 'contact' };

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = Object.keys(sectionToNav).map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(sectionToNav[e.target.id])),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.solid : ''}`}>
      <div className={`container ${styles.bar}`}>
        <a href="#home" className={styles.logo} aria-label={`${site.name}, back to top`} onClick={close}>
          {site.monogram}
        </a>
        <nav className={styles.desktop} aria-label="Primary">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={`${styles.link} ${active === id ? styles.active : ''}`} aria-current={active === id ? 'true' : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <a href={mailto()} className={styles.cta}>Start a project</a>
        <button type="button" className={styles.burger} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
          <span className="sr">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={`${styles.line} ${open ? styles.l1 : ''}`} />
          <span className={`${styles.line} ${open ? styles.l2 : ''}`} />
        </button>
      </div>
      <div id="mobile-menu" className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          {links.map(([label, id], i) => (
            <a key={id} href={`#${id}`} onClick={close} className={styles.mLink}>
              <span className={styles.mNum}>0{i + 1}</span>
              {label}
            </a>
          ))}
        </nav>
        <a href={mailto()} onClick={close} className={styles.mCta}>Start a project</a>
      </div>
    </header>
  );
}
