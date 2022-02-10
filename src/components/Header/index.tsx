import { useDrawer } from "../../contexts/DrawerContext";
import logoImg from "../../assets/logos/logo.svg";
import logoDarkImg from "../../assets/logos/logoDark.svg";
import hamburguerImg from "../../assets/icons/hamburguer.svg";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

export function Header() {
  const { handleOpenDrawer } = useDrawer();

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", addFixedPositon);

    return () => {
      window.removeEventListener("scroll", addFixedPositon);
    };
  });

  function addFixedPositon() {
    const scrollTop = window.scrollY;

    scrollTop >= 600 ? setIsFixed(true) : setIsFixed(false);
  }

  return (
    <header
      className={
        isFixed ? `${styles.container} ${styles.fixed}` : styles.container
      }
    >
      <div className={styles.content}>
        <div className={styles.hamburguer} onClick={handleOpenDrawer}>
          <img src={hamburguerImg} alt="Hamburguer Icon" />
        </div>

        <img
          className={isFixed ? styles.dark : ""}
          src={isFixed ? logoDarkImg : logoImg}
          alt="Renee Trajar logo"
        />

        <nav className={styles.navBar}>
          <a>Empresa</a>
          <a>Camisaria</a>
          <a>Alfaiataria</a>
          <a>Depoimentos</a>
          <a>Contato</a>
        </nav>
      </div>
    </header>
  );
}
