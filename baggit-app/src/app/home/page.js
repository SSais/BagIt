import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Form from "../components/Login Form/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Form />
      <Footer />
    </main>
  );
}
