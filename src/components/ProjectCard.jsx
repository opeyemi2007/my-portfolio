import PlaceholderArt from './PlaceholderArt.jsx';
import styles from './ProjectCard.module.css';

const shapes = ['wide', 'tall', 'tall', 'wide'];

export default function ProjectCard({ project, index }) {
  const { slug, title, category, year, type, cover, placeholder, hue } = project;
  return (
    <li className={`${styles.item} ${styles[shapes[index % 4]]}`}>
      <a href={`#/work/${slug}`} className={styles.card} aria-label={`${title}, ${category}. View project details`}>
        <div className={styles.media}>
          {cover && !placeholder ? (
            <img src={cover} alt={`${title} cover artwork`} loading="lazy" decoding="async" />
          ) : (
            <PlaceholderArt hue={hue} variant={index} label={`${title} placeholder artwork`} />
          )}
          <span className={styles.view} aria-hidden="true">View project</span>
        </div>
        <div className={styles.meta}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.info}>
            {category}
            {year ? `, ${year}` : ''}
            {type === 'concept' ? ', concept project' : ''}
          </p>
        </div>
      </a>
    </li>
  );
}
