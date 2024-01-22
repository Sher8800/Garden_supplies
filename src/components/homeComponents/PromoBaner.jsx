import React from 'react'
import styles from '../../styles/homeStyles/PromoBaner.module.css'

function PromoBaner() {
  return (
    <div className={styles.baner_container}>
      <p className={styles.baner_txt}>
        Amazing Discounts
        <br />
        on Garden Products!
      </p>
      <button className={styles.baner_btn}>Check out</button>
    </div>
  )
}

export default PromoBaner