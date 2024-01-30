import React from 'react'
import styles from '../../styles/uiStyles/productsCard/ProductCard.module.css'
import { BASE_URL } from '../../redux/api/baseUrl'

function ProductCard({ products, classNameContainer }) {
  return (
    <div className={classNameContainer}>
      {products ? products.map((product) => (
        <div className={styles.product_container} key={product.id}>
          <div className={styles.img_container} >
            <img className={styles.img_products} src={BASE_URL + product.image} alt="image" />
            <button className={styles.btnAdd}>Add to cart</button>
            {product.discont_price ?
              <p className={styles.discont}>
                {`- ${Math.ceil(100 - (product.discont_price / (product.price / 100)))} %`}
              </p> : ''}
          </div>

          <div className={styles.description_container}>
            <p className={styles.title}>{product.title}</p>
            <div className={styles.price_container}>
              {product.discont_price ?
                <>
                  <p className={styles.price}>{product.discont_price + '$'}</p>
                  <p className={styles.discont_price}>{product.price + '$'}</p>
                </>
                :
                <p className={styles.price}>{product.price + '$'}</p>
              }

            </div>
          </div>

        </div>
      )) : ''}
    </div>
  )
}

export default ProductCard