import styles from "./styles.module.css";

interface TitleAndSubtitleAttributes {
  title: string;
  subtitle: string;
}

export default function TitleAndSubtitle({
  title,
  subtitle,
}: TitleAndSubtitleAttributes) {
  return (
    <div className={styles.containerTitleAndSubtitle}>
      <h1 data-aos="zoom-out" className={styles.title}>
        {title}
      </h1>
      <p data-aos="zoom-out" className={styles.subtitle}>
        {subtitle}
      </p>
    </div>
  );
}
