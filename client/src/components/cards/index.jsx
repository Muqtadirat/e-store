import styles from "./Card.module.css";

const Card = ({ variant, size, children }) => {
  return (
    <div data-size={size} data-variant={variant} className={styles.cardWrapper}>
      {children}
    </div>
  );
};

export default Card;
