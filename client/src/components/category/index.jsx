import { useEffect, useState } from "react";
import { BannerCard } from "../cards";
import CategoryList from "./categoryList";
import Button from "../buttons";
import { fetchCategories } from "../../lib/api";
import { Avatar } from "../../icons";
import styles from "./Category.module.css";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data.categories);
    };

    getCategories();
  }, []);

  return (
    <section className={styles.category}>
      <CategoryList categories={categories} />

      <div className={styles.trend}>
        <h2 className={styles.h2}>
          Latest trending <br />{" "}
          <span className={styles.span}>Electronic items</span>
        </h2>
        <Button variant="secondary">Learn more</Button>
      </div>

      <div className={styles.cardBox}>
        <BannerCard className={styles.loginCard}>
          <div className={styles.avatar}>
            <Avatar /> <p>{`Hi user, let's get started`}</p>
          </div>
          <Button>Join now</Button>
          <Button variant="secondary">Log in</Button>
        </BannerCard>
        <BannerCard variant="primary">Get US $10 off with a new supplier</BannerCard>
        <BannerCard variant="secondary">Send quotes with supplier preferences</BannerCard>
      </div>
    </section>
  );
};

export default Category;
