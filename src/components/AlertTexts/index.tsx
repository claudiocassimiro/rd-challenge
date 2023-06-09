import Link from "next/link";

import styles from "./styles.module.css";

export default function AlertText() {
  return (
    <div className={styles.containerAlertTexts}>
      <p className={styles.alertText}>
        • Ao preencher o formulário, concordo * em receber comunicações de
        acordo com meus interesses.
      </p>
      <p className={styles.alertText}>
        • Ao informar meus dados, eu concordo com a{" "}
        <Link
          className={styles.linkStyle}
          href="https://legal.rdstation.com/pt/privacy-policy/"
          title="pólitica de privacidade"
          target="_blank"
        >
          Política de privacidade.
        </Link>
      </p>
      <p className={styles.changePermissionText}>
        * Você pode alterar suas permissões de comunicação a qualquer tempo.
      </p>
    </div>
  );
}
