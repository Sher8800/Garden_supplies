import React from 'react'
import styles from '../../styles/homeStyles/HomeSale.module.css'
import img from "../../images/img.png";
import BlockNameBtn from '../../ui/reused/BlockNameBtn';

const products = [
  { image: img, description: 'lorem, ipsum dolor', id: 1, price: '$500', discont: '$1000' },
  { image: img, description: 'lorem, ipsum dolor', id: 2, price: '$500', discont: '$1000' },
  { image: img, description: 'lorem, ipsum dolor', id: 3, price: '$500', discont: '$1000' },
  { image: img, description: 'lorem, ipsum dolor', id: 4, price: '$500', discont: '$1000' },
]

function HomeSale() {
  return (
    <div className={styles.homeSale_container}>

      <BlockNameBtn
        pageTitle='Sale'
        btnTitle='All sales'
        path={'AllSales'}
        classNameLine={styles.saleLine} />

      <div className={styles.products_container}>
        {products.map((product) => (
          <div className={styles.product_container} key={product.id}>
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

export default HomeSale