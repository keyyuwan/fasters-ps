import { useState } from "react";
import { depositions } from "../../utils/depositions";
import styles from "./styles.module.scss";

import arrowLeftIcon from "../../assets/depositions/arrowLeft.svg";
import arrowRightIcon from "../../assets/depositions/arrowRight.svg";

export function Depositions() {
  const [activeDepositionIndex, setActiveDepositionIndex] = useState(1);

  const deposition = depositions[activeDepositionIndex - 1];

  function handleNextPage() {
    const hasNextPage = activeDepositionIndex + 1 <= depositions.length;

    if (!hasNextPage) {
      return;
    }

    setActiveDepositionIndex(activeDepositionIndex + 1);
  }

  function handleLastPage() {
    const hasPreviousPage = activeDepositionIndex - 1 >= 1;

    if (!hasPreviousPage) {
      return;
    }

    setActiveDepositionIndex(activeDepositionIndex - 1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Depoimentos</h1>
        <div className={styles.divider} />

        <div className={styles.swiperContainer}>
          <div className={styles.avatar}>
            <img src={deposition.avatar} alt={deposition.name} />
          </div>
          <p className={styles.depositionText}>"{deposition.depositionText}"</p>
          <p className={styles.author}>{deposition.name}</p>
          <p className={styles.authorCareer}>{deposition.job}</p>

          <div className={styles.buttons}>
            <div onClick={handleLastPage}>
              <img src={arrowLeftIcon} alt="Arrow Left" />
            </div>
            <div className={styles.dotsContainer}>
              {depositions.map((dep) => (
                <div
                  key={dep.id}
                  className={
                    dep.id === activeDepositionIndex
                      ? `${styles.dot} ${styles.active}`
                      : styles.dot
                  }
                />
              ))}
            </div>
            <div onClick={handleNextPage}>
              <img src={arrowRightIcon} alt="Arrow Right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
