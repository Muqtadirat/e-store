import { useEffect, useState } from "react";
import styles from "./Deals.module.css";
import Countdown from "./countdown";
import Offers from "./Offers";
import { fetchDeals } from "../../lib/api";

const Deals = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const getDeals = async () => {
      const data = await fetchDeals();
      setDeals(data.deals);
    };

    getDeals();
  }, []);

  const counts = [
    {
      time: 4,
      title: "Days",
    },
    {
      time: 13,
      title: "Hours",
    },
    {
      time: 34,
      title: "Mins",
    },
    {
      time: 56,
      title: "Sec",
    },
  ];

  return (
    <section className={styles.Deals}>
      <Countdown counts={counts} />
      <Offers items={deals} />
    </section>
  );
};

export default Deals;
