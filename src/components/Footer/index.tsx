import logoDarkImg from "../../assets/logos/logoDark.svg";
import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.goldDivider} />

      <div className={styles.content}>
        <img src={logoDarkImg} alt="Logo Renee Trajar" />
        <p className={styles.cnpj}>CNPJ:04.487.685/0001-01</p>
        <p className={styles.copyRight}>
          Copyright: 2021 © Renee Trajar <br />
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
