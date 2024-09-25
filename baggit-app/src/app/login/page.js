import Form from "../components/Form/form";
import styles from "./page.module.css";
import React from 'react';



export default function LoginPage() {
  return (
    <div>
      <h1 className={styles.logIn}>Login</h1>
      <Form />
    </div>
  );
}
