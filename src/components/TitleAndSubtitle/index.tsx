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
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
