import styles from "./Card.module.css";

const OfferCard = ({ item, img, alt, discount }) => {
  return (
    <div className={styles.OfferCard}>
      <img src={img} alt={alt} />
      {item}
      <div className={styles.discount}>{discount}%</div>
    </div>
  );
};

export default OfferCard;
