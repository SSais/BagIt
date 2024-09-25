import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Nav from "../components/Navigation/Nav";
import Form from "../components/Form/form";

export default function Booking() {
  return (
    <main className={styles.main}>
      <Form />
      <Nav />
    </main>
  );
}
