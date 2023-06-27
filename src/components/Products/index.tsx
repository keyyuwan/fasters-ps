import { Product } from "../Product";
import { camisariaPros, alfaiatariaPros } from "../../utils/pros";
import tieImg from "../../assets/tie.png";
import suitImg from "../../assets/suit.png";
import styles from "./styles.module.scss";

export function Products() {
  return (
    <div className={styles.container}>
      <div id="camisaria" />
      <Product
        imgUrl={tieImg}
        title="Camisaria"
        description="Confeccionadas artesanalmente"
        pros={camisariaPros}
      />
      <div className={styles.divider} />
      <div id="alfaiataria" />
      <Product
        imgUrl={suitImg}
        title="Alfaiataria"
        description="Totalmente feito a mão sob medida"
        pros={alfaiatariaPros}
      />

      <button className={styles.button}>Quero um orçamento</button>
    </div>
  );
}
