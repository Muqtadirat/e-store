import styles from "./Card.module.css";
import clsx from "clsx";

const BannerCard = ({ variant, size, children, className, bgImg }) => {
  return (
    <div
      data-size={size}
      data-variant={variant}
      className={clsx(styles.cardWrapper, className)}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {children}
    </div>
  );
};

export default BannerCard;
