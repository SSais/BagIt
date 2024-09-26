"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Nav from "../components/Navigation/Nav";

export default function Form() {
  return (
    <>
      <div className={styles.containerForm}>

        <div className={styles.logo}>
          <Image
            src="/baggitLogoRed.svg"
            alt="LogoBaggIt"
            width={150}
            height={150}
          />
        </div>

        <form className={styles.form}>
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className={styles.formButton} type="submit">
            Log In
          </button>
        </form>
      </div>
      <Nav />
    </>
  );
}
