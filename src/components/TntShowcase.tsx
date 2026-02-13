import { Link } from 'react-router-dom';
import styles from './TntShowcase.module.css';
import tntVideo from '../assets/tnt/tntShowcase.mp4';

export default function TntShowcase() {
    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backButton}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to Portfolio
            </Link>
            
            <div className={styles.content}>
                <div className={styles.videoSection}>
                    <video 
                        className={styles.video}
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    >
                        <source src={tntVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className={styles.textSection}>
                    <h1 className={styles.title}>
                        A Gamified Mobile Application for Early Childhood Learning
                    </h1>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Project Overview</h2>
                        <p className={styles.paragraph}>
                            For our capstone project, we developed <strong>Think n' Tinker</strong>, an interactive learning application designed to support nursery, prep, and kindergarten learners through play-based and multi-sensory experiences. The project aims to move beyond rote memorization by making foundational learning more engaging, intuitive, and enjoyable for young children.
                        </p>
                        <p className={styles.paragraph}>
                            Think n' Tinker features interactive lessons, educational games, and visual and auditory activities focused on core concepts such as the alphabet, numbers, colors, and shapes. Through gamification and child-friendly design, the application encourages active participation, sustained engagement, and meaningful learning that complements classroom instruction.
                        </p>
                    </div>

                    <div className={styles.techStack}>
                        <h3 className={styles.techTitle}>Built With</h3>
                        <div className={styles.techTags}>
                            <span className={styles.techTag}>React Native</span>
                            <span className={styles.techTag}>TypeScript</span>
                            <span className={styles.techTag}>Firebase</span>
                            <span className={styles.techTag}>Expo Go</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
