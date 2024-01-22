import React from 'react'
import styles from '../../styles/homeStyles/HomePage.module.css'
import PromoBanner from '../../components/homeComponents/PromoBaner'
import Discount from '../../components/homeComponents/Discount'
import Sale from '../../components/homeComponents/Sale'
import HomeCategories from '../../components/homeComponents/HomeCategories'

function HomePage() {
  return (
    <div className={styles.home_container}>
      <PromoBanner />
      <div className={styles.home_pading}>
        <HomeCategories />
        <Discount />
        <Sale />
      </div>
    </div>
  )
}

export default HomePage