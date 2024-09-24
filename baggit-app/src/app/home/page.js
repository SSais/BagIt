import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Form from "../components/Login Form/Form";
import Nav from "../components/Navigation/Nav";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Nav />
      <Footer />
    </main>
  );
}
