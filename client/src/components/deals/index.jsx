import styles from "./Deals.module.css";
import Countdown from "./countdown";
import Offers from "./Offers";

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

  const items = [
    {
      id: 1,
      img: "./assets/camera.png",
      item: "Smart Watches",
      discount: "-25",
      alt: "Smartwatch with various features",
    },
    {
      id: 2,
      img: "./assets/camera.png",
      item: "Laptops",
      discount: "-15",
      alt: "Modern laptop computer",
    },
    {
      id: 3,
      img: "./assets/camera.png",
      item: "GoPro cameras",
      discount: "-40",
      alt: "Action camera for outdoor adventures",
    },
    {
      id: 4,
      img: "./assets/camera.png",
      item: "Gaming Headphones",
      discount: "-25",
      alt: "Headphones designed for gaming",
    },
    {
      id: 5,
      img: "./assets/camera.png",
      item: "Camon",
      discount: "-25",
      alt: "Mobile phone with advanced features",
    },
  ];

  return (
    <section className={styles.Deals}>
      <Countdown counts={counts} />
      <Offers items={items} />
    </section>
  );
};

export default Deals;
