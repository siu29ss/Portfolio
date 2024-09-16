import React from "react";
import ProjectCard from "../../common/ProjectCard";
import styles from './ProjectStyles.module.css';
import wardrobeWizard from '../../assets/wardrobeWizard.png';
import globetrotter from '../../assets/globetrotter.png';
import trailblazer from '../../assets/trailblaer.png';
import nitris from '../../assets/trailblaer.png';

const uxUiDesignProjects = [
  { src: wardrobeWizard, link: "https://siu29ss.github.io/QUIZCYBORG/", h3: "Wardrobe Wizard", p: "UX/UI Case Study" ,h5:"View Project"},
  { src: globetrotter, link: "https://siu29ss.github.io/QUIZCYBORG/", h3: "Globetrotter", p: "UX/UI Case Study",h5:"View Project" },
  { src: trailblazer, link: "https://siu29ss.github.io/QUIZCYBORG/", h3: "Trailblazer", p: "UX/UI Case Study",h5:"View Project" },
];

const productDesignProjects = [
  { src: trailblazer, link: "https://siu29ss.github.io/QUIZCYBORG/", h3: "Neck Brace", p: "Product Design",h5:"View Project" },
  { src: trailblazer, link: "https://siu29ss.github.io/QUIZCYBORG/", h3: "MirrorBox", p: "Product Design" ,h5:"View Project"},
];

const sketchesIllustrationsProjects = [
  { src: nitris, link: "https://siu29ss.github.io/QUIZCYBORG/", h3: "NITRIS", p: "Website Redesign",h5:"View Project" },
];

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.subsection}>
        <h2>UX/UI Design</h2>
        <div className={styles.projectContainer}>
          {uxUiDesignProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <div className={styles.subsection}>
        <h2>Product Design</h2>
        <div className={styles.projectContainer}>
          {productDesignProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <div className={styles.subsection}>
        <h2>Sketches / Illustrations</h2>
        <div className={styles.projectContainer}>
          {sketchesIllustrationsProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
