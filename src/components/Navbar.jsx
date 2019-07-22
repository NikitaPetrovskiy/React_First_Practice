import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}><a href="#"></a>Profile</div>
            <div className={styles.item}><a href="#"></a>Messages</div>
            <div className={styles.item}><a href="#"></a>News</div>
            <div className={styles.item}><a href="#"></a>Music</div>
            <div className={styles.item}><a href="#"></a>Settings</div>
        </nav>
    )
};

export default Navbar;