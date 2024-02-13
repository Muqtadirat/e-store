import { useEffect, useState } from "react";
import { BannerCard } from "../cards";
import Button from "../buttons";
import SaleItems from "./SaleItems";
import { fetchSales } from "../../lib/api";
import styles from "./Sales.module.css";

const Sales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      const data = await fetchSales();
      setSales(data.sales);
    };

    getSales();
  }, []);

  const bgUrl =
    "https://images.pexels.com/photos/4022220/pexels-photo-4022220.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <section className={styles.Sales}>
      <div>
        <BannerCard
          variant="tertiary"
          bgImg={bgUrl}
          className={styles.saleCategory}
        >
          <p>Home and Outdoor</p>
          <Button variant="secondary">Source Now</Button>
        </BannerCard>
      </div>

      <SaleItems saleItems={sales} />
    </section>
  );
};

export default Sales;
