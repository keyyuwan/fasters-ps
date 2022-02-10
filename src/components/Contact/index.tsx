import styles from "./styles.module.scss";

export function Contact() {
  return (
    <div className={styles.container}>
      <section className={styles.formContainer}>
        <h1>Contato</h1>

        <div className={styles.divider} />

        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <textarea placeholder="Mensagem" />

          <button>Enviar Mensagem</button>
        </form>
      </section>

      <section className={styles.contactContainer}>
        <div className={styles.contact}>
          <p className={styles.title}>Telefones</p>
          <p className={styles.value}>+55 (11) 3088-0757</p>
        </div>
        <div className={styles.contact}>
          <p className={styles.title}>E-mail</p>
          <p className={styles.value}>renee@reneetrajar.com.br</p>
        </div>

        <p className={styles.attendance}>Atendimento personalizado</p>
        <button className={styles.attendanceButton}>Clique aqui!</button>
      </section>
    </div>
  );
}
