import { useDrawer } from "../../../contexts/DrawerContext";
import hamburguerImg from "../../../assets/icons/hamburguer.svg";
import styles from "./styles.module.scss";

export function HamburguerMenu() {
  const { handleOpenDrawer } = useDrawer();

  return (
    <div className={styles.hamburguer} onClick={handleOpenDrawer}>
      <img src={hamburguerImg} alt="Hamburguer Icon" />
    </div>
  );
}
