import { useDrawer } from "../../contexts/DrawerContext";
import logoImg from "../../assets/logos/logo.svg";
import hamburguerImg from "../../assets/hamburguer.svg";
import styles from "./styles.module.scss";
import { Drawer } from "../Drawer";

export function Header() {
  const { isDrawerOpen, handleOpenDrawer } = useDrawer();

  return !isDrawerOpen ? (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hamburguer} onClick={handleOpenDrawer}>
          <img src={hamburguerImg} alt="Hamburguer Icon" />
        </div>

        <img src={logoImg} alt="Renee Trajar logo" />

        <nav className={styles.navBar}>
          <a>Empresa</a>
          <a>Camisaria</a>
          <a>Alfaiataria</a>
          <a>Depoimentos</a>
          <a>Contato</a>
        </nav>
      </div>
    </header>
  ) : (
    <Drawer />
  );
}
