import styles from "./styles.module.css";
import { GenerateBusinessCardData } from "../.././utils/schemas/genereteBusinessCardSchema";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbArrowBigDownFilled } from "react-icons/tb";
import ImageComponent from "../ImageComponent";
import { useWindowSize } from "@/utils/helpers";
import Button from "../Button";
import Link from "next/link";
import BackButton from "../BackButton";

interface BusinessCardAttributes {
  cardData: GenerateBusinessCardData;
  setCardData: (data: GenerateBusinessCardData) => void;
}

export default function BusinessCard({
  cardData,
  setCardData,
}: BusinessCardAttributes) {
  const { isDesktop } = useWindowSize();
  return (
    <div data-aos="fade-down" className={styles.wrapper}>
      {isDesktop ? (
        <ImageComponent
          src="/images/paint-man.webp"
          alt="Imagem de homem pintando uma tela"
          width={isDesktop ? 471 : 269}
          height={isDesktop ? 347 : 198}
          className={styles.imageStyle}
          hasPriority
        />
      ) : null}
      <div className={styles.container}>
        <BackButton text="Gerar outro cartão" handleClick={setCardData} />

        <div className={styles.businessCard}>
          <div className={styles.containerImage}>
            <ImageComponent
              src="/images/logo-marca.webp"
              alt="Logo marca da RD Station"
              width={isDesktop ? 70 : 45}
              height={isDesktop ? 60 : 38}
            />
          </div>
          <div className={styles.cardInfos}>
            <p className={styles.cardInfoText}>{cardData.name}</p>
            <p className={styles.cardInfoText}>{cardData.phone}</p>
            <p className={styles.cardInfoText}>{cardData.email}</p>
          </div>
        </div>
        <Button
          text="BAIXAR CARTÃO"
          Icon={TbArrowBigDownFilled}
          disabled
          auxClassName={styles.auxButton}
        />
        <Link
          title="Fazer um teste Grátis do RD Station Marketing"
          href="https://app.rdstation.com.br/signup"
          target="_blank"
          className={styles.containerText}
        >
          <span className={styles.text}>
            FAZER UM TESTE GRÁTIS DO RD STATION MARKETING
          </span>
          <FaLongArrowAltRight size={20} color="#fff" />
        </Link>
      </div>
    </div>
  );
}
