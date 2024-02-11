import { OfferCard } from "../cards";
import styles from "./Deals.module.css";

const Offers = ({ items = [] }) => {
  return (
    <div className={styles.Offers}>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <OfferCard
              item={item.item}
              discount={item.discount}
              alt={item.alt}
              img={item.img}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Offers;
