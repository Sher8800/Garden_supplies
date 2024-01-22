import React from 'react'
import styles from '../../styles/headerStyles/HeaderPage.module.css'
import Logo from "../../images/logo.png";
import Cart from "../../images/cart.png";

function HeaderPage() {
  return (
    <header className={styles.header}>

      <a href="">
        <img className={styles.icon_logo} src={Logo} alt='icon logo' />
      </a>

      <div className={styles.links_container}>
        <a className={styles.link} href="">Main Page</a>
        <a className={styles.link} href="">Categories</a>
        <a className={styles.link} href="">All products</a>
        <a className={styles.link} href="">All sales</a>
      </div>

      <a href="">
        <img className={styles.icon_cart} src={Cart} alt='icon cart' />
      </a>

    </header>
  )
}

export default HeaderPage