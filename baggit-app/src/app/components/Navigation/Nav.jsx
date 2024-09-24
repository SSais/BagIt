import styles from "./Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><a className={styles.navLink} href="https://baggit-app-8hir.vercel.app/home">Home</a> </li>
                <li className={styles.navItem}><a className={styles.navLink} href="https://baggit-app-8hir.vercel.app/login">Login</a> </li>
                <li className={styles.navItem}><a className={styles.navLink} href="https://baggit-app-8hir.vercel.app/map">Map</a> </li>
            </ul>
        </nav>
    );
}