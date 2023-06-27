import styles from "./styles.module.scss";

export function FirstSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p>Elegante é ter um</p>
          <h1>ALFAIATE</h1>
          <p>para chamar de seu.</p>
        </div>

        <p className={styles.description}>
          Compre hoje, <span>pague em até 3x com 12% de desconto</span> e tenha
          10 meses para confeccionar!
        </p>

        <a href="https://api.whatsapp.com/send?phone=554199946727&text=Olá&2C gostaria de fazer um orçamento.">Faça já um orçamento</button>
      </div>
    </div>
  );
}
