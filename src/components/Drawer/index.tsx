import closeIcon from "../../assets/close.svg";
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
        <a>Empresa</a>
        <a>Camisaria</a>
        <a>Alfaiataria</a>
        <a>Depoimentos</a>
        <a>Contato</a>
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
