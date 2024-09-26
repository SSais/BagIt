"use client";

import styles from "./page.module.css";
import React from "react";
import Nav from "../components/Navigation/Nav";
import Image from "next/image";

export default function LoginPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerLogo}>
          <div className={styles.logo}>
            <Image
              src="/baggitLogoRed.svg"
              alt="LogoBaggIt"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <p>I am a customer</p>
          <button className={styles.buttonSign}>Sign Up</button>
          <p>I am a shop owner</p>
          <button className={styles.buttonSign}>Sign Up</button>
          <div>
            <div className={styles.containerLogIn}>
              <p>I already have an account</p>
              <button
                className={styles.buttonLogIn}
                onClick={() =>
                  (window.location.href =
                    "https://baggit-app.vercel.app/loginform")
                }
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
}
