import { LabelHTMLAttributes } from "react";

import styles from "./styles.module.css";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={styles.label} {...props} />;
}
