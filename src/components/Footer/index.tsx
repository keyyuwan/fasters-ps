import logoDarkImg from "../../assets/logos/logoDark.svg";
import arrowUpIcon from "../../assets/icons/arrowUp.svg";
import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.goldDivider} />

      <div className={styles.content}>
        <div className={styles.data}>
          <div className={styles.reneeData}>
            <img src={logoDarkImg} alt="Logo Renee Trajar" />
            <p className={styles.cnpj}>CNPJ:04.487.685/0001-01</p>
          </div>
          <p className={styles.copyRight}>
            Copyright: 2021 © Renee Trajar <br />
            Todos os direitos reservados.
          </p>
        </div>

        <div className={styles.arrowBox}>
          <img src={arrowUpIcon} alt="Arrow up" />
        </div>
      </div>
    </footer>
  );
}
