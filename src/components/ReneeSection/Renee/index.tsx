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
          <h1>Raul Dubois</h1>

          <div className={styles.divider} />

          <img src={reneeImg} alt="Renee Trajar" />
        </div>

        <div className={styles.description}>
          <p>
            Com um histórico de mais de três décadas no ramo de confecção personalizada de camisas, calças e ternos, 
            contamos com uma equipe de profissionais experientes e altamente capacitados.
          </p>
          <p>
            Para cada cliente, é criado um padrão exclusivo que é cuidadosamente desenvolvido de acordo com suas medidas corporais. 
            Essas medidas são obtidas pessoalmente pelo Sr. Raul, seja no escritório ou na residência do cliente.
          </p>
        </div>

        <div className={styles.quoteSection}>
          <p className={styles.quote}>
            “Nossa meta é exceder as expectativas dos nossos clientes, garantindo que eles fiquem satisfeitos ao utilizar nossos produtos. Buscamos alcançar isso por meio de um relacionamento transparente e sincero, 
            onde valorizamos o ser humano em todas as interações.”
          </p>
          <img src={quoteIcon} alt="Quote" />
          <p className={styles.author}>Raul Dubois</p>
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
