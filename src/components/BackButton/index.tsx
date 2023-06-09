import { MdKeyboardArrowLeft } from "react-icons/md";
import styles from "./styles.module.css";
import { GenerateBusinessCardData } from "../.././utils/schemas/genereteBusinessCardSchema";

interface BackButtonAttributes {
  text: string;
  color?: string;
  handleClick: (data: GenerateBusinessCardData) => void;
}

export default function BackButton({
  text,
  color = "#fff",
  handleClick,
}: BackButtonAttributes) {
  return (
    <div className={styles.backButtonContainer}>
      <button
        type="button"
        onClick={() => handleClick({ name: "", phone: "", email: "" })}
        className={styles.button}
      >
        <MdKeyboardArrowLeft size={18} color={color} />
        <span className={styles.buttonText}>{text}</span>
      </button>
    </div>
  );
}
