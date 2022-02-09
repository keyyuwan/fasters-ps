import reneeImg from "../../assets/renee.png";
import styles from "./styles.module.scss";

export function ReneeSection() {
  return (
    <div className={styles.container}>
      <div className={styles.renee}>
        <h1>Renee Trajar</h1>

        <div className={styles.divider} />

        <img src={reneeImg} alt="Renee Trajar" />
      </div>

      <div className={styles.description}>
        <p>
          Com mais de 35 anos de experiência em camisas, calças e ternos sob
          medida, possuímos profissionais experientes e altamente qualificados.
        </p>
        <p>
          Cada cliente tem seu molde exclusivamente desenvolvido para seu
          biotipo através das medidas tiradas pelo próprio Sr. Renee, no
          escritório ou residência do cliente.
        </p>
      </div>

      <div className={styles.quoteSection}>
        <p className={styles.quote}>
          “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe
          satisfação ao usar nossos produtos, aliado a um relacionamento franco
          e honesto, valorizando o ser humano.”
        </p>
        <p className={styles.author}>Renee Trajar</p>
      </div>

      <button className={styles.button}>Agende uma visita!</button>
    </div>
  );
}
