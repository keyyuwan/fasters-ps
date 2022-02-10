import logoImg from "../../assets/logos/logo.svg";
import hamburguerImg from "../../assets/hamburguer.svg";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hamburguer}>
          <img src={hamburguerImg} alt="Hamburguer Icon" />
        </div>

        <img src={logoImg} alt="Renee Trajar logo" />
      </div>
    </header>
  );
}
