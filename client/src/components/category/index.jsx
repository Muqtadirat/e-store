import Card from "../cards";
import CategoryList from "./CategoryList";
import styles from "./Category.module.css";

const Category = () => {
  return (
    <section className={styles.category}>
      <CategoryList />
      <div className={styles.trend}>
        <h2>
          Latest trending <br /> Electronic items
        </h2>
      </div>
      <div className={styles.cardBox}>
        <Card>Loading...</Card>
        <Card variant="primary">Get US $10 off with a new supplier</Card>
        <Card variant="secondary">Send quotes with supplier preferences</Card>
      </div>
    </section>
  );
};

export default Category;
