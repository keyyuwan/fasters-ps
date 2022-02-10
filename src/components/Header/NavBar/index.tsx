import styles from "./styles.module.scss";

export function NavBar() {
  return (
    <nav className={styles.navBar}>
      <a>Empresa</a>
      <a>Camisaria</a>
      <a>Alfaiataria</a>
      <a>Depoimentos</a>
      <a>Contato</a>
    </nav>
  );
}
