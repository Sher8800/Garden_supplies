import React from 'react'
import styles from '../styles/HeaderPage.module.css'
import Logo from "../images/logo.png";
import Cart from "../images/cart.png";
import CustomLink from '../customFiles/customLink/CustomLink';

function HeaderPage() {
  return (
    <header className={styles.header}>

      <CustomLink to="">
        <img className={styles.icon_logo} src={Logo} alt='icon logo' />
      </CustomLink>

      <div className={styles.links_container}>
        <CustomLink defaultClass={styles.link} to="">Main Page</CustomLink>
        <CustomLink defaultClass={styles.link} to="CategoriesPage">Categories</CustomLink>
        <CustomLink defaultClass={styles.link} to="AllProducts">All products</CustomLink>
        <CustomLink defaultClass={styles.link} to="AllSales">All sales</CustomLink>
      </div>

      <CustomLink to="CartPage">
        <img className={styles.icon_cart} src={Cart} alt='icon cart' />
      </CustomLink>

    </header>
  )
}

export default HeaderPage