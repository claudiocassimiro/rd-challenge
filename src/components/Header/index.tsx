import styles from "./styles.module.css";
import ImageComponent from "../ImageComponent";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.containerImage}>
        <ImageComponent
          dataAos="fade-right"
          src="/images/logo.webp"
          alt="Logo da RD Station com texto Resultado digitais"
          hasPriority
        />
      </div>

      <p data-aos="fade-left" className={styles.headerText}>
        Gerador de Cartão de Visita
      </p>
    </header>
  );
}
