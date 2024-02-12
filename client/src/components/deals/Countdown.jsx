import styles from "./Deals.module.css";
import { CountdownCard } from "../cards";

const Countdown = ({ counts = [] }) => {
  return (
    <div className={styles.Countdown}>
      <div>
        <h3>Deals and Offers</h3>
        <p>Hygiene Equipments</p>
      </div>

      <div className={styles.timer}>
        {counts?.map((count, index) => {
          return (
            <div key={index}>
              <CountdownCard title={count.title} time={count.time} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countdown;
