import Link from "next/link";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://legal.rdstation.com/pt/privacy-policy/"
        target="_blank"
        className={styles.link}
        title="política de privacidade"
      >
        Política de Privacidade
      </Link>
      <span className={styles.copyrightText}>© 2023 Resultados Digitais</span>
    </footer>
  );
};

export default Footer;
