import React from 'react'
import styles from '../../styles/uiStyles/productsCard/CategoryCard.module.css'

function CategoryCard({ classNameImg, classNameCategoriesContainer, array }) {
  return (
    <div className={classNameCategoriesContainer}>
      {array ? array.map((category) => (
        <div className={styles.category_container} key={category.id}>
          <img className={classNameImg} src={category.image} alt="Categories" />
          <p className={styles.description_categories}>{category.description}</p>
        </div>
      )) : ''}
    </div>
  )
}

export default CategoryCard