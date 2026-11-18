import styles from './FloatingObjects.module.css';

// Intentional composition: "back" objects sit between the name and the portrait,
// "front" objects overlap the portrait. Positions are desktop %, with ml/mt/ms mobile overrides.
// Objects without ml are hidden on small screens to keep the composition clean.
const OBJECTS = [
  { k: 'img', src: '/images/tools/photoshop.webp', l: 11, t: 3.5, s: 7.2, d: 1.6, r: -10, ml: 3, mt: 24, ms: 19 },
  { k: 'img', src: '/images/tools/illustrator.webp', l: 85, t: 2.5, s: 7.4, d: 1.3, r: 9, ml: 79, mt: 3, ms: 15 },
  { k: 'img', src: '/images/tools/figma.webp', l: 19, t: 67, s: 6.8, d: 2, r: 12, front: true, ml: 5, mt: 73, ms: 17 },
  { k: 'img', src: '/images/tools/coreldraw.webp', l: 75, t: 63, s: 7.2, d: 1.5, r: -9, front: true, ml: 76, mt: 69, ms: 17 },
  { k: 'img', src: '/images/tools/canva.webp', l: 3.5, t: 46, s: 6, d: 0.9, r: 7 },
  { k: 'sphere', l: 88, t: 41, s: 5.6, d: 2.3, front: true, ml: 83, mt: 45, ms: 12 },
  { k: 'sphere', l: 33, t: 10, s: 2.8, d: 1.1 },
  { k: 'cursor', l: 35, t: 57, s: 6, d: 2.5, r: -4, front: true, ml: 24, mt: 61, ms: 22 },
  { k: 'palette', l: 70, t: 40, s: 8.4, d: 1, r: 7 },
  { k: 'card', l: 9, t: 79, s: 9, d: 1.4, r: -7, front: true },
  { k: 'aa', l: 90, t: 77, s: 5, d: 1.1, r: 8 },
  { k: 'ring', l: 46, t: 3, s: 6.5, d: 0.7, spin: true, ml: 40, mt: 6, ms: 15 },
  { k: 'img', src: '/images/tools/toolbar.webp', l: 19, t: 41, s: 2.4, d: 1.2, r: 4 },
];

const SW = ['#000000', '#070FCA', '#FFFFFF', '#A1A1AA', '#030526'];

function Body({ o }) {
  switch (o.k) {
    case 'img': return <img src={o.src} alt="" width="380" height="380" decoding="async" />;
    case 'sphere': return <span className={styles.sphere} />;
    case 'ring': return <span className={styles.ring} />;
    case 'cursor':
      return (
        <span className={styles.cursor}>
          <svg viewBox="0 0 110 120" aria-hidden="true">
            <defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#6B73FF" /></linearGradient></defs>
            <path d="M16 6v86l22-21 17 38 17-8-17-37h33z" fill="url(#cg)" stroke="#070FCA" strokeWidth="5" strokeLinejoin="round" />
          </svg>
          <b>KA.</b>
        </span>
      );
    case 'palette': return <span className={styles.palette}><i>{SW.map((c) => <u key={c} style={{ background: c }} />)}</i><em>Palette</em></span>;
    case 'card': return <span className={styles.bcard}><b>KA.</b><em>Brand identity</em></span>;
    case 'aa': return <span className={styles.aa}>Aa</span>;
    default: return null;
  }
}

export default function FloatingObjects() {
  return (
    <div className={styles.layer} aria-hidden="true">
      {OBJECTS.map((o, n) => (
        <div
          key={n}
          className={`${styles.obj} ${o.front ? styles.front : ''} ${o.ml == null ? styles.hm : ''} ${o.spin ? styles.spin : ''}`}
          style={{ '--l': `${o.l}%`, '--t': `${o.t}%`, '--s': o.s, '--d': o.d, '--r': `${o.r || 0}deg`, '--n': n, '--ml': `${o.ml ?? o.l}%`, '--mt': `${o.mt ?? o.t}%`, '--ms': o.ms ?? o.s * 2 }}
        >
          <div className={styles.enter}>
            <div className={styles.bob}><Body o={o} /></div>
          </div>
        </div>
      ))}
    </div>
  );
}
