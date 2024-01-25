import React from 'react'
import styles from '../../styles/uiStyles/reused/CaunterBtns.module.css'
import plus from '../../images/plus.png'
import minus from '../../images/minus.png'

function CaunterBtns() {
  return (
    <div className={styles.btns_prices}>
      <div className={styles.count_btns}>
        <button className={styles.decrement}>
          <img className={styles.img_count_btns} src={minus} alt="minus" />
        </button>
        <div className={styles.count}>1</div>
        <button className={styles.increment}>
          <img className={styles.img_count_btns} src={plus} alt="plus" />
        </button>
      </div>

      <div className={styles.prices}>
        <p className={styles.price}>$155</p>
        <p className={styles.discont_prices}>$240</p>
      </div>
    </div>
  )
}

export default CaunterBtns