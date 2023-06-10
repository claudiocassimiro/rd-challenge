import Head from "next/head";
import {
  Darker_Grotesque,
  Nunito_Sans,
  Red_Hat_Display,
} from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import TitleAndSubtitle from "@/components/TitleAndSubtitle";
import Form from "@/components/Form/FormComponent";
import Footer from "@/components/Footer";
import { useState } from "react";
import { GenerateBusinessCardData } from ".././utils/schemas/genereteBusinessCardSchema";
import BusinessCard from "@/components/BusinessCard";

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--nunito-sans",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--red-hat-display",
});

const cardDataInitialState = {
  name: "",
  phone: "",
  email: "",
};

const title = "Gerador de Cartão de Visitas";
const subtitle =
  "Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais.";

export default function Home() {
  const [cardData, setCardData] = useState(
    cardDataInitialState as GenerateBusinessCardData
  );

  return (
    <>
      <Head>
        <title>Resultados Digitais - Gerador de Cartão de Visitas</title>
        <meta
          name="description"
          content="Pagina para gerar cartões de visita para o seu negócio de forma rápida e simples."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.container} ${darkerGrotesque.className} ${nunitoSans.variable} ${redHatDisplay.variable}`}
      >
        <Header />
        <main
          className={`${styles.main} ${
            cardData.name !== "" ? styles.auxMain : undefined
          }`}
        >
          {cardData.name === "" ? (
            <>
              <TitleAndSubtitle title={title} subtitle={subtitle} />
              <Form setCardData={setCardData} />
            </>
          ) : null}

          {cardData.name !== "" ? (
            <BusinessCard cardData={cardData} setCardData={setCardData} />
          ) : null}
        </main>
        <Footer />
      </div>
    </>
  );
}
