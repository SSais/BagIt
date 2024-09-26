import styles from "./Nav.module.css";
import Image from 'next/image';
export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="https://baggit-app.vercel.app/home">
                        <Image className={styles.navIcon} src="/home.png" alt="home" width={25} height={25} />Home
                    </a> </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="https://baggit-app.vercel.app/booking">
                        <Image className={styles.navIcon} src="/booking.png" alt="booking" width={25} height={25} />Booking
                    </a> </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="https://baggit-app.vercel.app/login">
                        <Image className={styles.navIcon} src="/account.png" alt="account" width={25} height={25} />Account
                    </a> </li>
            </ul>
        </nav>
    );
}