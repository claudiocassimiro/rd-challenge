import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";
import { IconType } from "react-icons";

interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  Icon?: IconType;
  auxClassName?: string;
}

export default function Button({
  type,
  text,
  Icon,
  disabled = false,
  auxClassName,
}: ButtonAttributes) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${styles.button} ${auxClassName}`}
    >
      <span className={styles.buttonText}>{text}</span>
      {Icon ? <Icon size={20} /> : null}
    </button>
  );
}
