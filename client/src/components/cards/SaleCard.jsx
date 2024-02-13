import styles from "./Card.module.css";

const SaleCard = ({ item, price, img, alt }) => {
  return (
    <div className={styles.sale}>
      <div>
        <p>{item}</p>
        <p>From USD{price}</p>
      </div>

      <img src={img} alt={alt} />
    </div>
  );
};

export default SaleCard;
