import React from 'react'
import styles from '../../styles/cartStyles/Order.module.css'

function Order() {
  return (
    <div className={styles.order_container}>
      <p className={styles.txt_black}>Order details</p>
      <p className={styles.txt_grey}>3 items</p>
      <div className={styles.total_container}>
        <p className={styles.txt_grey}>Total</p>
        <p className={styles.total_price}>$541,00</p>
      </div>
    </div>
  )
}

export default Order