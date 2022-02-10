import { Fragment, HTMLAttributes } from "react";
import { benefits } from "../../utils/benefits";
import styles from "./styles.module.scss";

export function Benefits() {
  return (
    <div className={styles.container}>
      {benefits.map((benefit) => (
        <Fragment key={benefit.id}>
          <div>
            <img src={benefit.icon} alt={benefit.title} />
            <h5 className={styles.benefitTitle}>{benefit.title}</h5>
            <p className={styles.benefitDescription}>{benefit.description}</p>
          </div>
          <div className={styles.divider} />
        </Fragment>
      ))}
    </div>
  );
}
