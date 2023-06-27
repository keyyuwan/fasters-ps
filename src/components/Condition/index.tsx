import blackSuitImg from "../../assets/blackSuit.png";
import styles from "./styles.module.scss";

export function Condition() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.conditions}>
          <h1>Condição imperdível</h1>

          <span>Compre hoje e garanta:</span>

          <ul className={styles.guaranteesList}>
            <li>
              12% de desconto e pagamento em até <span>3x sem juros</span>;
            </li>
            <li>
              Até <span>10 meses</span> para confeccionar sua roupa. Não se
              preocupe se suas medidas aumentaram ou diminuíram, estará sempre
              elegante;
            </li>
            <li>
              Condição muito especial por <span>tempo limitado</span>;
            </li>
            <li>
              Poder presentear alguém com uma roupa de alta costura,{" "}
              <span>exclusiva</span>.
            </li>
          </ul>

          <button className={styles.button}>
            <a href="https://api.whatsapp.com/send?phone=554199946727&text=Olá%2C gostaria de garantir a condição especial." target="_blank">
              Garanta essa condição especial!
            </a>
          </button>
        </div>

        <img src={blackSuitImg} alt="Terno preto" />
      </div>
    </div>
  );
}
