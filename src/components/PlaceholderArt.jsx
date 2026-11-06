import styles from './PlaceholderArt.module.css';

// Clearly labelled temporary artwork. Never shown once a project has real images.
export default function PlaceholderArt({ hue = 237, variant = 0, label = 'Placeholder artwork' }) {
  const shapes = [
    <><circle cx="62" cy="42" r="26" /><rect x="14" y="58" width="44" height="6" rx="3" /></>,
    <><rect x="18" y="16" width="64" height="64" rx="8" /><circle cx="50" cy="48" r="16" /></>,
    <><path d="M12 80 L50 14 L88 80 Z" /><rect x="14" y="84" width="72" height="4" rx="2" /></>,
  ];
  return (
    <div className={styles.art} style={{ '--h': hue }} role="img" aria-label={label}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {shapes[variant % shapes.length]}
      </svg>
      <span className={styles.tag}>Placeholder</span>
    </div>
  );
}
