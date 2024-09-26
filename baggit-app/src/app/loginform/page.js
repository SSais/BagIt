'use client'

import styles from "./page.module.css";
import Nav from "../components/Navigation/Nav";

export default function Form() {

    return (
        <div className={styles.containerForm}>
          <form className={styles.form} >
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button className={styles.formButton} type="submit">
              Login
            </button>
          </form>
          <Nav />
        </div>
      );
}