import React from 'react'
import styles from '../../styles/categoriesStyles/CategoriesCard.module.css'

function CategoriesCard({ classNameImg, classNameCategoriesContainer, array }) {
  return (
    <div className={classNameCategoriesContainer}>
      {array ? array.map((category) => (
        <div className={styles.category_container}>
          <img className={classNameImg} src={category.image} alt="Categories" />
          <p className={styles.description_categories}>{category.description}</p>
        </div>
      )) : ''}
    </div>
  )
}

export default CategoriesCard