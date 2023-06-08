import Image from "next/image";
import styles from "./styles.module.css";
import { useWindowSize } from "@/utils/helpers";

const Header = () => {
  const { isDesktop } = useWindowSize();
  return (
    <header className={styles.header}>
      <Image
        src="/images/logo.webp"
        alt="logo da RD com texto Resultado digitais"
        width={isDesktop ? 147 : 100}
        height={isDesktop ? 36 : 24}
      />

      <p className={styles.headerText}>Gerador de Cartão de Visita</p>
    </header>
  );
};

export default Header;
