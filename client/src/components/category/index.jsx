import { useEffect, useState } from "react";
import Card from "../cards";
import CategoryList from "./CategoryList";
import Button from "../buttons";
import { fetchCategories } from "../../lib/api";
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
        <Card className={styles.loginCard}>
          <p>{`Hi user, let's get started`}</p>
          <Button>Join now</Button>
          <Button variant="secondary">Log in</Button>
        </Card>
        <Card variant="primary">Get US $10 off with a new supplier</Card>
        <Card variant="secondary">Send quotes with supplier preferences</Card>
      </div>
    </section>
  );
};

export default Category;
