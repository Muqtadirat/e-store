import styles from "./Deals.module.css";
import Countdown from "./countdown";

const Deals = () => {
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
    </section>
  );
};

export default Deals;
