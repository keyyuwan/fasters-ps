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
        <a href="#empresa" onClick={handleCloseDrawer}>Empresa</a>
        <a href="#camisaria" onClick={handleCloseDrawer}>Camisaria</a>
        <a href="#alfaiataria" onClick={handleCloseDrawer}>Alfaiataria</a>
        <a href="#depoimentos" onClick={handleCloseDrawer}>Depoimentos</a>
        <a href="#contato" onClick={handleCloseDrawer}>Contato</a>
      </div>

      <div className={styles.contact}>
        <p className={styles.title}>Telefones</p>
        <p className={styles.value}>+55 (41) 9994-6727</p>
      </div>
      <div className={styles.contact}>
        <p className={styles.title}>E-mail</p>
        <p className={styles.value}>contato@rtrajar.com.br</p>
      </div>
    </div>
  );
}
