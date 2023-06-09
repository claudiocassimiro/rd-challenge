import Head from "next/head";
import { Darker_Grotesque } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import TitleAndSubtitle from "@/components/TitleAndSubtitle";
import Form from "@/components/Form/FormComponent";
import Footer from "@/components/Footer";

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
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
      <div className={`${styles.container} ${darkerGrotesque.className}`}>
        <Header />
        <main className={styles.main}>
          <TitleAndSubtitle
            title="Gerador de Cartão de Visitas"
            subtitle="Crie grátis seu cartão de visita em passos rápidos! Você o insere no
        Instagram e demais canais digitais."
          />
          <Form />
        </main>
        <Footer />
      </div>
    </>
  );
}
