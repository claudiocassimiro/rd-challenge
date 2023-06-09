import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";
import { IconType } from "react-icons";

interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  Icon?: IconType;
}

export default function Button({ type, text, Icon }: ButtonAttributes) {
  return (
    <button type={type} className={styles.button}>
      <span className={styles.buttonText}>{text}</span>
      {Icon ? <Icon size={19} /> : null}
    </button>
  );
}
