import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import styles from './CarouselViewer.module.css';

const pad = (n) => String(n).padStart(2, '0');

// Presents a multi-slide social carousel as one sequence. Slides keep their original aspect ratio
// (object-fit: contain, never cropped). Controls: buttons, dots, thumbnails, arrow keys, swipe.
export default function CarouselViewer({ slides, title }) {
  const [i, setI] = useState(0);
  const dir = useRef(1);
  const reduce = useReducedMotion();
  const strip = useRef(null);
  const n = slides.length;

  const go = useCallback((to) => {
    setI((cur) => {
      const next = Math.max(0, Math.min(n - 1, to));
      if (next !== cur) dir.current = next > cur ? 1 : -1;
      return next;
    });
  }, [n]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey || /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(i - 1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, i]);

  // Warm the neighbouring slides so navigation feels instant
  useEffect(() => {
    [i - 1, i + 1].forEach((k) => { if (slides[k]) { const im = new Image(); im.src = slides[k].src; } });
    const el = strip.current?.children[i];
    if (el && strip.current) strip.current.scrollTo({ left: el.offsetLeft - strip.current.clientWidth / 2 + el.clientWidth / 2, behavior: reduce ? 'auto' : 'smooth' });
  }, [i, slides, reduce]);

  // Swipe: horizontal gestures change slides; vertical scrolling is left to the browser
  const start = useRef(null);
  const onDown = (e) => { start.current = { x: e.clientX, y: e.clientY }; };
  const onUp = (e) => {
    if (!start.current) return;
    const dx = e.clientX - start.current.x, dy = e.clientY - start.current.y;
    start.current = null;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.3) go(dx < 0 ? i + 1 : i - 1);
  };

  const s = slides[i];
  const variants = {
    enter: (d) => ({ opacity: 0, x: reduce ? 0 : d * 70, scale: reduce ? 1 : 0.97 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d) => ({ opacity: 0, x: reduce ? 0 : d * -70, scale: reduce ? 1 : 0.97 }),
  };
  return (
    <section className={styles.viewer} aria-roledescription="carousel" aria-label={`${title}, ${n} slides`}>
      <div className={styles.stageWrap}>
        <p className={styles.count} aria-live="polite" aria-atomic="true">
          <b className="display">{pad(i + 1)}</b><span> / {pad(n)}</span>
        </p>
        <div className={styles.stage} onPointerDown={onDown} onPointerUp={onUp} onPointerCancel={() => { start.current = null; }}>
          <AnimatePresence mode="wait" custom={dir.current} initial={false}>
            <m.figure
              key={s.src} custom={dir.current} variants={variants} initial="enter" animate="center" exit="exit"
              transition={{ duration: reduce ? 0.01 : 0.32, ease: [0.22, 1, 0.36, 1] }}
              className={styles.slide} role="group" aria-roledescription="slide" aria-label={`Slide ${i + 1} of ${n}`}
            >
              <img src={s.src} alt={s.alt} width={s.w} height={s.h} draggable="false" fetchpriority={i === 0 ? 'high' : undefined} decoding="async" />
            </m.figure>
          </AnimatePresence>
        </div>
        <button type="button" className={`${styles.nav} ${styles.prev}`} onClick={() => go(i - 1)} disabled={i === 0} aria-label="Previous slide"><span aria-hidden="true">←</span></button>
        <button type="button" className={`${styles.nav} ${styles.next}`} onClick={() => go(i + 1)} disabled={i === n - 1} aria-label="Next slide"><span aria-hidden="true">→</span></button>
      </div>

      <div className={styles.dots} role="group" aria-label="Choose a slide">
        {slides.map((_, k) => (
          <button key={k} type="button" className={styles.dot} aria-label={`Go to slide ${k + 1} of ${n}`} aria-current={k === i ? 'true' : undefined} onClick={() => go(k)} />
        ))}
      </div>

      <div className={styles.seq}>
        <p className="eyebrow">The full sequence</p>
        <ol ref={strip} className={styles.strip}>
          {slides.map((sl, k) => (
            <li key={sl.src} style={{ '--o': `${[0, 1.4, 0.5, 1.9][k % 4]}rem` }}>
              <button type="button" className={styles.thumb} onClick={() => go(k)} aria-label={`Show slide ${k + 1} of ${n}`} aria-current={k === i ? 'true' : undefined}>
                <img src={sl.src} alt="" width={sl.w} height={sl.h} loading="lazy" decoding="async" />
                <span aria-hidden="true">{pad(k + 1)}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
