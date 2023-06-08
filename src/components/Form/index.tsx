import { useWindowSize } from "@/utils/helpers";
import ImageComponent from "../ImageComponent";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Form = () => {
  const { isDesktop } = useWindowSize();
  return (
    <div className={styles.container}>
      <ImageComponent
        src="/images/paint-man.webp"
        alt="imagem de homem pintando uma tela"
        width={isDesktop ? 471 : 269}
        height={isDesktop ? 347 : 198}
        className={styles.imageStyle}
      />
      <form className={styles.form}>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="">
            Nome*
          </label>
          <input
            type="text"
            placeholder="digite Seu Nome"
            className={styles.input}
          />
        </div>

        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="">
            Telefone*
          </label>
          <input
            type="text"
            placeholder="(00) 0 0000-0000"
            className={styles.input}
          />
        </div>

        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="">
            Email*
          </label>
          <input
            type="email"
            placeholder="nome@email.com"
            className={styles.input}
          />
        </div>
      </form>
      <div className={styles.containerAlertTexts}>
        <p className={styles.alertText}>
          • Ao preencher o formulário, concordo * em receber comunicações de
          acordo com meus interesses.
        </p>
        <p className={styles.alertText}>
          • Ao informar meus dados, eu concordo com a{" "}
          <Link
            className={styles.linkStyle}
            href="#"
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

      <button type="button" className={styles.button}>
        <span className={styles.buttonText}>GERAR CARTÃO GRÁTIS</span>
        <FaArrowRight size={19} />
      </button>
    </div>
  );
};

export default Form;
