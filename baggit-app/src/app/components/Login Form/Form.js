import styles from "./Form.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
