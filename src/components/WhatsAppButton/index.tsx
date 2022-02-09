import whatsAppImg from "../../assets/whats.svg";
import styles from "./styles.module.scss";

export function WhatsAppButton() {
  return (
    <div className={styles.container}>
      <img src={whatsAppImg} alt="WhatsApp logo" />
    </div>
  );
}
