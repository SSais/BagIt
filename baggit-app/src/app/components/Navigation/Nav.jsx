import styles from "./Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="https://baggit-app-8hir.vercel.app/home">
                        <img className={styles.navIcon} src="/home.png" alt="home" />Home
                    </a> </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="https://baggit-app-8hir.vercel.app/booking">
                        <img className={styles.navIcon} src="/booking.png" alt="booking" />Booking
                    </a> </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="https://baggit-app-8hir.vercel.app/login">
                        <img className={styles.navIcon} src="/account.png" alt="account" />Account
                    </a> </li>
            </ul>
        </nav>
    );
}