import styles from "./styles.module.scss";

export function FirstSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p>Ter o seu</p>
          <h1>ALFAIATE</h1>
          <p>é sinônimo de elegância.</p>
        </div>

        <p className={styles.description}>
          Compre hoje, <span>pague em até 3x com 12% de desconto</span> e tenha
          10 meses para confeccionar!
        </p>

        <button>Faça já um orçamento</button>
      </div>
    </div>
  );
}
