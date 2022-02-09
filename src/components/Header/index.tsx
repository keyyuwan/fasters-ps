import logoImg from "../../assets/logo.svg";
import hamburguerImg from "../../assets/hamburguer.svg";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hamburguer}>
          <img src={hamburguerImg} alt="Hamburguer Icon" />
        </div>

        <img src={logoImg} alt="Renee Trajar logo" />
      </div>
    </div>
  );
}
