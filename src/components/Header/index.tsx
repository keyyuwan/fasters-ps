import { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { HamburguerMenu } from "./HamburguerMenu";
import logoImg from "../../assets/logos/logo.svg";
import logoDarkImg from "../../assets/logos/logoDark.svg";
import styles from "./styles.module.scss";

export function Header() {
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
        <HamburguerMenu />

        <img
          className={isFixed ? styles.dark : ""}
          src={isFixed ? logoDarkImg : logoImg}
          alt="Renee Trajar logo"
        />

        <NavBar />
      </div>
    </header>
  );
}
