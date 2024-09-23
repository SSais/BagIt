import styles from "./Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><a className={styles.navLink} href="http://localhost:3000/home">Home</a> </li>
                <li className={styles.navItem}><a className={styles.navLink} href="http://localhost:3000/login">Login</a> </li>
                <li className={styles.navItem}><a className={styles.navLink} href="http://localhost:3000/map">Map</a> </li>
            </ul>
        </nav>
    );
}