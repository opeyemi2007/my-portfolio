import styles from './Marquee.module.css';

export default function Marquee({ items, className = '', speed = 38 }) {
  const row = (hidden) => (
    <ul className={styles.row} aria-hidden={hidden || undefined}>
      {items.map((t) => <li key={t} className="display">{t}<i /></li>)}
    </ul>
  );
  return (
    <div className={`${styles.marquee} ${className}`} role="presentation">
      <div className={styles.track} style={{ '--speed': `${speed}s` }}>{row(false)}{row(true)}</div>
    </div>
  );
}
