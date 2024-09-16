import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, link, h3, p, h5 }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <img className={styles.image} src={src} alt={`${h3} logo`} />
      <div className={styles.cardData}>
        <h3>{h3}</h3>
        <p>{p}</p>
        <h5>{h5}</h5>
      </div>
    </a>
  );
}

export default ProjectCard;
