import styles from "./styles.module.scss";

export function NavBar() {
  return (
    <nav className={styles.navBar}>
      <a href="/#">Empresa</a>
      <a href="/#">Camisaria</a>
      <a href="/#">Alfaiataria</a>
      <a href="/#">Depoimentos</a>
      <a href="/#">Contato</a>
    </nav>
  );
}
