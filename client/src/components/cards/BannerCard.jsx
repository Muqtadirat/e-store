import styles from "./Card.module.css";
import clsx from "clsx";

const BannerCard = ({ variant, size, children, className }) => {
  return (
    <div
      data-size={size}
      data-variant={variant}
      className={clsx(styles.cardWrapper, className)}
    >
      {children}
    </div>
  );
};

export default BannerCard;
