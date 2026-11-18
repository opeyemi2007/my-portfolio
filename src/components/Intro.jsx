import { useCallback, useEffect, useRef, useState } from 'react';
import FloatingObjects from './FloatingObjects.jsx';
import { site } from '../config/site.js';
import styles from './Intro.module.css';

const WORDS = ['KINGSLEY', 'ADIO'];

function NameLayer({ shadow, innerRef }) {
  let n = 0;
  return (
    <div className={`${styles.nameLayer} ${shadow ? styles.shadow : ''}`} aria-hidden="true">
      <span className={styles.nameWrap} ref={innerRef}>
        {WORDS.map((w) => (
          <span className={styles.word} key={w}>
            {[...w].map((c, i) => (
              <span className={styles.cm} key={i}><span className={styles.char} style={{ '--i': n++ }}>{c}</span></span>
            ))}
          </span>
        ))}
      </span>
    </div>
  );
}

// phase: 'intro' (waiting) | 'cover' (blue wipe rising) | 'reveal' (wipe leaving)
export default function Intro({ phase, onEnter }) {
  const root = useRef(null);
  const nameRef = useRef(null);
  const [ready, setReady] = useState(false);
  const armed = useRef(false);
  const fired = useRef(false);
  const coarse = useRef(typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches);

  const enter = useCallback((force) => {
    if (fired.current || (!force && !armed.current)) return;
    fired.current = true;
    onEnter();
  }, [onEnter]);

  // Fit the giant name to the viewport width (after the display font has loaded)
  useEffect(() => {
    const fit = () => {
      const el = nameRef.current, r = root.current;
      if (!el || !r) return;
      r.style.setProperty('--fs', '100px');
      const w = el.getBoundingClientRect().width || 1;
      const vw = window.innerWidth, vh = window.innerHeight;
      const target = vw * (vw <= 760 ? 0.95 : 0.975);
      let fs = (100 * target) / w;
      fs = Math.min(fs, vh * (vw <= 760 ? 0.2 : 0.5));
      r.style.setProperty('--fs', `${fs}px`);
    };
    let raf = 0;
    const onResize = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(fit); };
    let alive = true;
    const img = new Image();
    img.src = '/images/hero/portrait.webp';
    const go = () => { if (alive) { fit(); setReady(true); } };
    Promise.all([img.decode().catch(() => {}), document.fonts ? document.fonts.ready : null]).then(go);
    const fallback = setTimeout(go, 2500);
    window.addEventListener('resize', onResize);
    const armT = setTimeout(() => { armed.current = true; }, 900);
    return () => { alive = false; clearTimeout(fallback); clearTimeout(armT); cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  // Intentional gestures only: wheel, swipe, keyboard. Ordinary page scrolling is blocked.
  useEffect(() => {
    let acc = 0, decay = 0, sy = 0, sx = 0;
    const onWheel = (e) => {
      e.preventDefault();
      if (fired.current || e.deltaY < 2) return;
      acc += e.deltaY;
      clearTimeout(decay); decay = setTimeout(() => { acc = 0; }, 220);
      if (acc >= 70) enter(false);
    };
    const onStart = (e) => { sy = e.touches[0].clientY; sx = e.touches[0].clientX; };
    const onMove = (e) => {
      e.preventDefault();
      if (fired.current) return;
      const dy = sy - e.touches[0].clientY, dx = Math.abs(sx - e.touches[0].clientX);
      if (dy > 64 && dy > dx * 1.2) enter(false);
    };
    const onKey = (e) => {
      if (['Enter', ' ', 'ArrowDown', 'PageDown', 'End'].includes(e.key)) { e.preventDefault(); enter(true); }
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(decay);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('keydown', onKey);
    };
  }, [enter]);

  // Subtle pointer parallax (pointer devices only, never with reduced motion)
  useEffect(() => {
    if (coarse.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = root.current;
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    const tick = () => {
      cx += (tx - cx) * 0.07; cy += (ty - cy) * 0.07;
      r.style.setProperty('--mx', cx.toFixed(3)); r.style.setProperty('--my', cy.toFixed(3));
      raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.002 ? requestAnimationFrame(tick) : 0;
    };
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2; ty = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener('pointermove', onMove); };
  }, []);

  const cls = [styles.intro, ready ? `ready ${styles.ready}` : '', phase === 'cover' ? styles.cover : '', phase === 'reveal' ? styles.out : ''].join(' ');
  return (
    <div className={cls} ref={root} role="region" aria-label="Introduction" data-intro>
      <div className={styles.stage}>
        <div className={styles.bg} aria-hidden="true"><i className={styles.grid} /><i className={styles.glow} /></div>
        <i className={styles.disc} aria-hidden="true" />
        <h1 className={styles.h1}>
          <span className="sr">Kingsley Adio</span>
          <NameLayer shadow />
          <NameLayer innerRef={nameRef} />
        </h1>
        <div className={styles.portrait}>
          <img src="/images/hero/portrait.webp" alt="Portrait of Kingsley Adio" width="1024" height="1100" fetchpriority="high" decoding="async" />
        </div>
        <FloatingObjects />
        <p className={`${styles.corner} ${styles.tl}`}>{site.monogram}</p>
        <p className={`${styles.corner} ${styles.tr}`}>{site.role}</p>
        <p className={`${styles.corner} ${styles.bl}`}>Beyond the ordinary</p>
        <p className={`${styles.corner} ${styles.br}`}>Portfolio · {site.location}</p>
        <button type="button" className={styles.cue} onClick={() => enter(true)} aria-label="Enter the portfolio">
          <span>{coarse.current ? 'Swipe up to explore' : 'Scroll to explore'}</span>
          <i aria-hidden="true" />
        </button>
      </div>
      <div className={styles.wipe} aria-hidden="true"><b>KA.</b></div>
    </div>
  );
}
