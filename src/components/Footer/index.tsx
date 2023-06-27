import logoDarkImg from "../../assets/logos/logoDark.svg";
import arrowUpIcon from "../../assets/icons/arrowUp.svg";
import styles from "./styles.module.scss";

export function Footer() {
  function handleScrollTop() {
   window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  return (
    <footer className={styles.container}>
      <div className={styles.goldDivider} />

      <div className={styles.content}>
        <div className={styles.data}>
          <div className={styles.reneeData}>
            <img src={logoDarkImg} alt="Logo Renee Trajar" />
          </div>
          <p className={styles.copyRight}>
            Copyright: 2023 © RTrajar <br />
            Todos os direitos reservados.
          </p>
        </div>

        <div className={styles.arrowBox} onClick={handleScrollTop}>
          <img src={arrowUpIcon} alt="Arrow up" />
        </div>
      </div>
    </footer>
  );
}
