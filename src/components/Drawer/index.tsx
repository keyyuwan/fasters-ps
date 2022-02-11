import closeIcon from "../../assets/icons/close.svg";
import { useDrawer } from "../../contexts/DrawerContext";
import styles from "./styles.module.scss";

export function Drawer() {
  const { handleCloseDrawer } = useDrawer();

  return (
    <div className={styles.container}>
      <div className={styles.closeButton} onClick={handleCloseDrawer}>
        <img src={closeIcon} alt="Close" />
      </div>

      <div className={styles.links}>
        <a href="#">Empresa</a>
        <a href="#">Camisaria</a>
        <a href="#">Alfaiataria</a>
        <a href="#">Depoimentos</a>
        <a href="#">Contato</a>
      </div>

      <div className={styles.contact}>
        <p className={styles.title}>Telefones</p>
        <p className={styles.value}>+55 (11) 3088-0757</p>
      </div>
      <div className={styles.contact}>
        <p className={styles.title}>E-mail</p>
        <p className={styles.value}>renee@reneetrajar.com.br</p>
      </div>
    </div>
  );
}
