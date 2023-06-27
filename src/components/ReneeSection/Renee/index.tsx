import reneeImg from "../../../assets/people/renee.png";
import reneeImgDesktop from "../../../assets/people/reneeDesktop.png";
import quoteIcon from "../../../assets/icons/quoteIcon.svg";
import styles from "./styles.module.scss";

export function Renee() {
  return (
    <div className={styles.reneeSection}>
      <img src={reneeImgDesktop} alt="Renee Trajar" />

      <div className={styles.reneeInfo}>
        <div className={styles.renee}>
          <h1>Renee Trajar</h1>

          <div className={styles.divider} />

          <img src={reneeImg} alt="Renee Trajar" />
        </div>

        <div className={styles.description}>
          <p>
            Com mais de 35 anos de experiência em camisas, calças e ternos sob
            medida, possuímos profissionais experientes e altamente
            qualificados.
          </p>
          <p>
            Cada cliente tem seu molde exclusivamente desenvolvido para seu
            biotipo através das medidas tiradas pelo próprio Sr. Renee, no
            escritório ou residência do cliente.
          </p>
        </div>

        <div className={styles.quoteSection}>
          <p className={styles.quote}>
            “Nosso objetivo é superar a expectativa do cliente
            proporcionando-lhe satisfação ao usar nossos produtos, aliado a um
            relacionamento franco e honesto, valorizando o ser humano.”
          </p>
          <img src={quoteIcon} alt="Quote" />
          <p className={styles.author}>Renee Trajar</p>
        </div>

        <button className={styles.button}>
          <a href="https://api.whatsapp.com/send?phone=554199946727&text=Olá%2C gostaria de agendar uma visita." target="_blank">
            Agende uma visita!
          </a>
        </button>
      </div>
    </div>
  );
}
