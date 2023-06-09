import styles from "./styles.module.css";
import { useWindowSize } from "@/utils/helpers";
import ImageComponent from "../ImageComponent";

export default function Header() {
  const { isDesktop } = useWindowSize();
  return (
    <header data-aos="zoom-out" className={styles.header}>
      <ImageComponent
        dataAos="fade-right"
        src="/images/logo.webp"
        alt="Logo da RD Station com texto Resultado digitais"
        width={isDesktop ? 147 : 100}
        height={isDesktop ? 36 : 24}
        hasPriority
      />

      <p data-aos="fade-left" className={styles.headerText}>
        Gerador de Cartão de Visita
      </p>
    </header>
  );
}
