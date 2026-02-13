import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [active, setActive] = useState<string>('home');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            const navbarHeight = 20;
            const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setActive(id);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const ids = ['home', 'projects', 'contact'];
        const sections = ids
            .map(id => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: '-120px 0px 0px 0px', threshold: 0.2 }
        );

        sections.forEach(s => observer.observe(s));

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.logo}>Daven Waay</h1>
            <button 
                className={styles.hamburger} 
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
                <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
                <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
            </button>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                <ul className={styles.navList}>
                    <li>
                        <a
                            className={`${styles.link} ${active === 'home' ? styles.active : ''}`}
                            href="#home"
                            onClick={(e) => handleClick(e, 'home')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className={`${styles.link} ${active === 'projects' ? styles.active : ''}`}
                            href="#projects"
                            onClick={(e) => handleClick(e, 'projects')}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            className={`${styles.link} ${active === 'contact' ? styles.active : ''}`}
                            href="#contact"
                            onClick={(e) => handleClick(e, 'contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

