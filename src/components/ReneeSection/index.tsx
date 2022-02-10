import reneeImg from "../../assets/people/renee.png";
import reneeImgDesktop from "../../assets/people/reneeDesktop.png";
import quoteIcon from "../../assets/icons/quoteIcon.svg";
import nelsonImg from "../../assets/people/Nelson.png";
import styles from "./styles.module.scss";

export function ReneeSection() {
  return (
    <>
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

          <button className={styles.button}>Agende uma visita!</button>
        </div>
      </div>
      <div className={styles.backgroundImgWrapper}>
        <div className={styles.tailorImgContainer}>
          <div className={styles.tailorImg}>
            <div className={styles.quoteContainer}>
              <p className={styles.quote}>
                “Faço roupas com o Renee Trajar há mais de duas décadas, o
                serviço é impecável em todos os detalhes, desde a costura ao
                caimento. O Renee tem uma equipe de mestre!”
              </p>
              <p className={styles.author}>Nelson Garey</p>
              <p className={styles.authorCareer}>
                Advogado | Nelson Garey Advogados Associados
              </p>
            </div>
          </div>
        </div>
        <div className={styles.nelsonImgContainer}>
          <div className={styles.nelsonImgBackgroundColor}>
            <img
              className={styles.nelsonRotated}
              src={nelsonImg}
              alt="Nelson"
            />
          </div>
        </div>
      </div>
      <div className={styles.nelsonQuoteSection}>
        <p className={styles.quote}>
          “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é
          impecável em todos os detalhes, desde a costura ao caimento. O Renee
          tem uma equipe de mestre!”
        </p>
        <p className={styles.author}>Nelson Garey</p>
        <p className={styles.authorCareer}>
          Advogado | Nelson Garey Advogados Associados
        </p>
      </div>
    </>
  );
}
