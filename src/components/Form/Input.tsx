import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./styles.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input(props: InputProps) {
  const { register } = useFormContext();

  return (
    <input
      id={props.name}
      className={styles.input}
      {...register(props.name)}
      {...props}
    />
  );
}
