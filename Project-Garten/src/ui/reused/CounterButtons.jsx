import React from "react";
import styles from "../../styles/uiStyles/reused/CounterButtons.module.css";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";
import CheckingDiscountPrice from "./CheckingDiscountPrice";
import { useDispatch } from "react-redux";

function CounterButtons({ decrement, increment, count }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.btns_prices}>
      <div className={styles.count_btns}>
        <button onClick={decrement} className={styles.decrement}>
          <img className={styles.img_count_btns} src={minus} alt="minus" />
        </button>
        <div className={styles.count}>{count}</div>
        <button onClick={increment} className={styles.increment}>
          <img className={styles.img_count_btns} src={plus} alt="plus" />
        </button>
      </div>
      {/* <CheckingDiscountPrice product={}
        classNameContainer={styles.prices}
        classNamePrice={styles.price}
        classNameDiscountPrice={styles.discount_prices}
      /> */}

      {/* <div className={styles.prices}>
        <p className={styles.price}>$155</p>
        <p className={styles.discont_prices}>$240</p>
      </div> */}
    </div>
  );
}

export default CounterButtons;
