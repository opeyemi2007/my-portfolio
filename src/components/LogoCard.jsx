import styles from './LogoCard.module.css';

// Every logo sits in an identical display area. Its size is derived from its own proportions so wide
// wordmarks and square marks carry a similar visual weight. Logos are never stretched, cropped,
// recoloured or filtered: object-fit: contain inside a box that already matches the logo's ratio.
const AREA_W = 100, AREA_H = 62, WEIGHT = 0.2;

export function logoBox(w, h) {
  const ar = w / h;
  let bw = Math.sqrt(AREA_W * AREA_H * WEIGHT * ar), bh = bw / ar;
  if (bw > 80) { bw = 80; bh = bw / ar; }
  if (bh > 58) { bh = 58; bw = bh * ar; }
  return { width: `${(bw / AREA_W) * 100}%`, height: `${(bh / AREA_H) * 100}%` };
}

export default function LogoCard({ brand }) {
  const { name, file, w, h, surface, rel, href } = brand;
  const body = (
    <>
      <span className={`${styles.area} ${surface === 'dark' ? styles.dark : styles.light}`}>
        <img src={`/images/brands/${file}.webp`} alt={`${name} logo`} width={w} height={h} style={logoBox(w, h)} loading="lazy" decoding="async" />
      </span>
      <span className={styles.cap}><b>{name}</b>{rel ? <em>{rel}</em> : null}</span>
    </>
  );
  return href
    ? <a href={href} className={styles.card} aria-label={`${name}${rel ? `, ${rel}` : ''}. View project`}>{body}</a>
    : <div className={styles.card}>{body}</div>;
}
