import React from 'react';
import styles from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const { theme } = useTheme();
    const skillsRow1 = ["HTML", "CSS", "UX/UI", "CAD", "Visual Design"];
    const skillsRow2 = ["Figma", "Adobe Illustrator", "Fusion360", "Blender", "SolidWorks"];
    const skillsRow3 = ["User Research", "Design Thinking", "Communication", "Canva", "Adobe Photoshop"];

    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.marqueeContainer}>
                <div className={`${styles.marquee} ${styles.right}`}>
                    <div className={styles.marqueeContent}>
                        {skillsRow1.map((skill, index) => (
                            <div key={index} className={`${styles.skillItem} ${theme === 'dark' ? styles.skillItemDark : ''}`}>{skill}</div>
                        ))}
                        {skillsRow1.map((skill, index) => (
                            <div key={index + skillsRow1.length} className={`${styles.skillItem} ${theme === 'dark' ? styles.skillItemDark : ''}`}>{skill}</div>
                        ))}
                        {skillsRow1.map((skill, index) => (
                            <div key={index} className={`${styles.skillItem} ${theme === 'dark' ? styles.skillItemDark : ''}`}>{skill}</div>
                        ))}
                        {skillsRow1.map((skill, index) => (
                            <div key={index + skillsRow1.length} className={`${styles.skillItem} ${theme === 'dark' ? styles.skillItemDark : ''}`}>{skill}</div>
                        ))}
                    </div>
                </div>
                
                <div className={`${styles.marquee} ${styles.left}`}>
                    <div className={styles.marqueeContent}>
                        {skillsRow2.map((skill, index) => (
                            <div key={index} className={`${styles.skillItem} ${theme === 'dark' ? styles.skillItemDark : ''}`}>{skill}</div>
                        ))}
                        {skillsRow2.map((skill, index) => (
                            <div key={index + skillsRow2.length} className={`${styles.skillItem} ${theme === 'dark' ? styles.skillItemDark : ''}`}>{skill}</div>
                        ))}
                        {skillsRow2.map((skill, index) => (
                            <div key={index} className={`${styles.skillItem} ${theme === 'dark' ? styles.skillItemDark : ''}`}>{skill}</div>
                        ))}
                        {skillsRow2.map((skill, index) => (
                            <div key={index + skillsRow2.length} className={`${styles.skillItem} ${theme === 'dark' ? styles.skillItemDark : ''}`}>{skill}</div>
                        ))}
                        
                    </div>
                </div>
                <div className={`${styles.marquee} ${styles.right}`}>
                    <div className={styles.marqueeContent}>
                        {skillsRow3.map((skill, index) => (
                            <div key={index} className={`${styles.skillItem} ${theme === 'dark' ? styles.skillItemDark : ''}`}>{skill}</div>
                        ))}
                        {skillsRow3.map((skill, index) => (
                            <div key={index + skillsRow3.length} className={`${styles.skillItem} ${theme === 'dark' ? styles.skillItemDark : ''}`}>{skill}</div>
                        ))}
                        {skillsRow3.map((skill, index) => (
                            <div key={index} className={`${styles.skillItem} ${theme === 'dark' ? styles.skillItemDark : ''}`}>{skill}</div>
                        ))}
                        {skillsRow3.map((skill, index) => (
                            <div key={index + skillsRow3.length} className={`${styles.skillItem} ${theme === 'dark' ? styles.skillItemDark : ''}`}>{skill}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
