import whatsAppImg from "../../assets/icons/whats.svg";
import styles from "./styles.module.scss";

export function WhatsAppButton() {
  return (
    <div className={styles.container}>
      <a href="https://api.whatsapp.com/send?phone=554199946727" style={{ textDecoration: 'none' }} target="_blank">
      
      <img src={whatsAppImg} alt="WhatsApp logo" />
      </a>
    </div>
  );
}
