import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { typeShort } from '../data/projects.js';
import useReveal from '../hooks/useReveal.js';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, index }) {
  const { slug, title, category, year, type, cover } = project;
  const slideCount = project.kind === 'carousel' ? project.slides.length : 0;
  const reveal = useReveal();
  const media = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: media, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);
  return (
    <li ref={reveal} className={styles.item}>
      <a href={`#/work/${slug}`} className={styles.card} aria-label={`${title}, ${slideCount ? `carousel design, ${slideCount} slides, ` : ''}${category}, ${typeShort[type]}. View project`}>
        <div className={styles.media} ref={media}>
          <div className={styles.imgwrap}>
            <m.img src={cover} alt={`${title} cover artwork`} width="1600" height="1200" loading="lazy" decoding="async" style={reduce ? undefined : { y, scale: 1.16 }} />
          </div>
          <span className={styles.shade} aria-hidden="true" />
          <span className={styles.num} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          {slideCount > 0 && <span className={styles.car} aria-hidden="true">Carousel design<b>{String(slideCount).padStart(2, '0')} slides</b></span>}
          <span className={styles.view} aria-hidden="true">{slideCount ? 'View project' : 'View'}</span>
        </div>
        <div className={styles.meta}>
          <h3 className={`display ${styles.title}`}>{title}</h3>
          <p className={styles.info}>
            <span>{category}</span>
            {year ? <span>{year}</span> : null}
            <span className={`${styles.tag} ${type === 'concept' ? styles.concept : ''}`}>{typeShort[type]}</span>
          </p>
        </div>
      </a>
    </li>
  );
}
