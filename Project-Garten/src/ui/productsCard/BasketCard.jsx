import React from 'react'
import styles from '../../styles/uiStyles/productsCard/BasketCard.module.css'
import secateurs from '../../images/secateurs.png'
import deleteImg from '../../images/delete.png'
import CaunterBtns from '../reused/CaunterBtns'

function BasketCard() {
  return (
    <div className={styles.product_container}>
      <img className={styles.img} src={secateurs} alt="img" />

      <div className={styles.description_container}>
        <div className={styles.title_btn}>
          <p className={styles.title}>Secateurs</p>
          <img className={styles.btn_delete} src={deleteImg} alt="img" />
        </div>

        <CaunterBtns />

      </div>
    </div>
  )
}

export default BasketCard