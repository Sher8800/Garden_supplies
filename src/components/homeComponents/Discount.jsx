import React from 'react'
import styles from '../../styles/homeStyles/Discount.module.css'
import gartenProduct from '../../images/gartenProduct.png'

function Discount() {
  return (
    <div className={styles.discount_container}>
      <p className={styles.title}>5% off on the first order</p>
      <div className={styles.imgForm_container}>
        <img className={styles.img} src={gartenProduct} alt="image" />
        <div className={styles.form_container}>
          <div className={styles.input_container}>
            <input className={styles.input} type="text" placeholder='Name' />
            <input className={styles.input} type="number" placeholder='Phone number' />
            <input className={styles.input} type="text" placeholder='Email' />
          </div>
          <button className={styles.btn}>Get a discount</button>
        </div>
      </div>
    </div>
  )
}

export default Discount