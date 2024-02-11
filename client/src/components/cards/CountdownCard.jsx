import styles from "./Card.module.css";

const CountdownCard = ({ time, title }) => {
  return (
    <div className={styles.countdown}>
      <div className={styles.time}> {time} </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default CountdownCard;
