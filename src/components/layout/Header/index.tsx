import React from 'react';
import styles from '../../../../styles/Home.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={styles.logo}><a href="#">Sing</a></h1>
                <ul className={styles.ul}>
                    <li className={styles.li}><a className={styles.a} href="#">Home</a></li>
                    <li className={styles.li}><a className={styles.a} href="#">Products</a></li>
                    <li className={styles.li}><a className={styles.a} href="#">Services</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;