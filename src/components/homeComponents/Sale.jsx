import React from 'react'
import styles from '../../styles/homeStyles/Sale.module.css'
import img from "../../images/img.png";
import BlockNameBtn from './BlockNameBtn';

const products = [
  { image: img, description: 'lorem, ipsum dolor', price: '$500', discont: '$1000' },
  { image: img, description: 'lorem, ipsum dolor', price: '$500', discont: '$1000' },
  { image: img, description: 'lorem, ipsum dolor', price: '$500', discont: '$1000' },
  { image: img, description: 'lorem, ipsum dolor', price: '$500', discont: '$1000' },
]

function Sale() {
  return (
    <div className={styles.homeCategories_container}>

      <BlockNameBtn pageTitle='Sale' btnTitle='All sales' />

      <div className={styles.products_container}>
        {products.map((product) => (
          <div className={styles.product_container}>
            <div className={styles.img_products} style={{ background: `URL(${product.image})` }}>
              <p className={styles.discont}>-34%</p>
            </div>

            <div className={styles.description_container}>
              <p className={styles.title}>{product.description}</p>
              <div className={styles.price_container}>
                <p className={styles.price}>{product.price}</p>
                <p className={styles.discont_price}>{product.discont}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div >
  )
}

export default Sale