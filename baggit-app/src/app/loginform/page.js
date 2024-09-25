'use client'

import styles from "./loginform.module.css";
import React from 'react';

const App = () => {
  return (
    <>
    <div className={styles.containerLogo}>
      <div className={styles.logo}>
          <img src="/baggitLogoRed.svg" alt="LogoBaggIt" />
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
    </>
  );
}

export default App;


