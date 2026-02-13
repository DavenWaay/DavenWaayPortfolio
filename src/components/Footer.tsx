import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.profile}>
                    <p className={styles.name}>Daven H, Waay.</p>
                    <p className={styles.role}>BSIT 4th Year Student</p>
                    <p className={styles.school}>Cavite State University Imus Campus</p>
                    <p className={styles.summary}>
                        Like what you see? Contact me and Let's build something amazing together.
                    </p>
                </div>

                <div className={styles.contact}>
                    <p className={styles.contactTitle}>Get In Touch</p>
                    <div className={styles.contactList}>
                        <a className={styles.contactItem} href="mailto:davenwaay18@gmail.com">
                            <span className={styles.iconBox} aria-hidden="true">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16v16H4z"></path>
                                    <path d="M22 6l-10 7L2 6"></path>
                                </svg>
                            </span>
                            <span>davenwaay18@gmail.com</span>
                        </a>

                        <a className={styles.contactItem} href="tel:09077459851">
                            <span className={styles.iconBox} aria-hidden="true">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.12 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </span>
                            <span>09077459851</span>
                        </a>

                        <a className={styles.contactItem} href="https://github.com/docurev111" target="_blank" rel="noreferrer">
                            <span className={styles.iconBox} aria-hidden="true">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </span>
                            <span>github.com/DavenWaay</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.bottomRow}>
                <p className={styles.copy}>© 2026 Daven H, Waay. All rights reserved.</p>
            </div>
        </footer>
    );
}