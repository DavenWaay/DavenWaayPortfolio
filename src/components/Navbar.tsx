import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [active, setActive] = useState<string>('home');

    const handleClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActive(id);
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
            { root: null, rootMargin: '0px', threshold: 0.45 }
        );

        sections.forEach(s => observer.observe(s));

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.logo}>Daven Waay</h1>
            <nav className={styles.nav}>
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

