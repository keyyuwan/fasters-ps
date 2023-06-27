import styles from "./styles.module.scss";

export function NavBar() {
  return (
    <nav className={styles.navBar}>
      <a href="#empresa">Empresa</a>
      <a href="#camisaria">Camisaria</a>
      <a href="#alfaiataria">Alfaiataria</a>
      <a href="#depoimentos">Depoimentos</a>
      <a href="#contato">Contato</a>
    </nav>
  );
}
