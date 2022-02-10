import nelsonImg from "../../../assets/people/Nelson.png";
import styles from "./styles.module.scss";

export function Nelson() {
  return (
    <>
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
