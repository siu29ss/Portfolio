import styles from './HeroStyles.module.css';
import heroImg from '../../assets/react.svg';
import sun from '../../assets/sun_2893120.png';
import moon from '../../assets/moon.png'
import behanceLight from '../../assets/behance_3536860.png';
import behanceDark from '../../assets/behanceDark.png';
import githubLight from '../../assets/github_3291695.png';
import githubDark from '../../assets/githubDark.png';
import linkedinLight from '../../assets/linkedin_3536569.png';
import linkedinDark from '../../assets/linkedInDark.png';
import CV from '../../assets/Siuli Sharon Sabnam.pdf'
import { useTheme } from '../../common/ThemeContext';
function Hero() {
  const {theme, toggleTheme}=useTheme();
  
  const themeIcon=theme==='light'? sun:moon;
  const behanceIcon=theme==='light'?behanceLight:behanceDark;
  const githubIcon=theme==='light'?githubLight:githubDark;
  const linkedinIcon=theme==='light'?linkedinLight:linkedinDark;
  


   return (
     <section id='hero' className={styles.container}>
       <div className={styles.colorModeContainer}> 
          <img 
             className={styles.hero} 
             src={heroImg} 
             alt="Profile picture of Siuli Sharon Sabnam" 
          />
          <img 
            className={styles.colorMode}
            src={themeIcon} 
            alt="Color mode icon" 
            onClick={toggleTheme}/>
            
       </div>
       <div className={styles.info}>
        <h1>Siuli <br />
        Sharon <br />
        Sabnam</h1>
        <h2>Industrial Designer</h2>
        <span>
            <a href="https://www.behance.net/" target='_blank'>
             <img src={behanceIcon} alt="Behance Icon" />
            </a>
            <a href="https://github.com/" target='_blank'>
             <img src={githubIcon} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/" target='_blank'>
             <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
        </span>
        <p className={styles.description}>Driven by a passion for design, seamlessly blending creativity with technology 
         provide innovative design solutions .
        </p>
        <a href={CV} download>
          <button className='hover' >
            Reume
          </button>
        </a>
      
       </div>
    </section>
  )
}

export default Hero