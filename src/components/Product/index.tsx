import styles from "./styles.module.scss";

interface ProductProps {
  imgUrl: string;
  title: string;
  description: string;
  pros: string[];
}

export function Product({ imgUrl, title, description, pros }: ProductProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={imgUrl} alt={title} />

        <div className={styles.imgBorder} />
      </div>

      <div className={styles.productInfo}>
        <h2>{title}</h2>
        <div>{description}</div>

        <ul>
          {pros.map((pro) => (
            <li key={pro}>{pro}</li>
          ))}
        </ul>

        <button className={styles.button}>Quero um orçamento</button>
      </div>
    </div>
  );
}
