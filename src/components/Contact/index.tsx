import { useState } from "react"
import styles from "./styles.module.scss";

export function Contact() {
  const [isFormSent, setIsFormSent] = useState(false)

  function handleSubmit() {
    setIsFormSent(true)
  }
  
  return (
    <div id="contato" className={styles.container}>
      <section className={styles.formContainer}>
        <h1>Contato</h1>

        <div className={styles.divider} />

        {isFormSent ? (
          <p style={{ marginTop: 32 }}>Mensagem enviada com sucesso.</p>
        ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="E-mail" required />
          <textarea placeholder="Mensagem" required />

          <button type="submit">Enviar Mensagem</button>
        </form>
        )}

      </section>

      <section className={styles.contactContainer}>
        <div className={styles.contact}>
          <p className={styles.title}>Telefones</p>
          <p className={styles.value}>+55 (41) 9994-6727</p>
        </div>
        <div className={styles.contact}>
          <p className={styles.title}>E-mail</p>
          <p className={styles.value}>contato@rauldubois.com.br</p>
        </div>
      </section>
    </div>
  );
}
