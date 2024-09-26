'use client'

import styles from "./page.module.css";
import React from 'react';
import Nav from '../components/Navigation/Nav';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <>
    <div className={styles.containerLogo}>
      <div className={styles.logo}>
          <Image src="/baggitLogoRed.svg" alt="LogoBaggIt" width={150} height={150} />
      </div>
    </div>
    <div className={styles.buttonGroup}>
        <p>I am a bag owner</p>
        <button className={styles.buttonSign}>Sign up</button>
        <p>I am a shop owner</p>
        <button className={styles.buttonSign}>Sign up</button>
    <div>
      <div className={styles.containerLogIn}>
      <button className={styles.buttonLogIn}>LOG IN</button>
    </div>
    </div>
    </div>
    <Nav />
    </>
  );
}
