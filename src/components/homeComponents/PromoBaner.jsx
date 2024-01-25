import React from 'react'
import styles from '../../styles/homeStyles/PromoBaner.module.css'

function PromoBaner() {

  const scrollUp = () => {
    window.scrollBy({
      top: 1800,
      behavior: "smooth"
    })
  }

  return (
    <div className={styles.baner_container}>
      <p className={styles.baner_txt}>
        Amazing Discounts
        <br />
        on Garden Products!
      </p>
      <button
        className={styles.baner_btn}
        onClick={scrollUp}>
        Check out
      </button>
    </div>
  )
}

export default PromoBaner