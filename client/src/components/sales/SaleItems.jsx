import { SaleCard} from "../cards";
import styles from "./Sales.module.css";

const SaleItems = ({ saleItems = [] }) => {
    return (
      <div className={styles.SaleItems}>
        {saleItems?.map((saleItem) => {
          return (
            <div className={styles.cardBox} key={saleItem.id}>
              <SaleCard
                item={saleItem.item}
                price={saleItem.price}
                img={saleItem.img}
                alt={saleItem.alt}
              />
            </div>
          );
        })}
      </div>
    );
};

export default SaleItems