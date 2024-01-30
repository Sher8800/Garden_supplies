import React from 'react'
import styles from '../../styles/uiStyles/productsCard/CategoryCard.module.css'
import { BASE_URL } from '../../redux/api/baseUrl'
import { NavLink } from 'react-router-dom'


function CategoryCard({ classNameImg, classNameCategoriesContainer, array }) {
  return (
    <div className={classNameCategoriesContainer}>
      {array ? array.map((category) => (
        <NavLink
          to={"/ProductsInCategories"}
          state={{ id: category.id, title: category.title }}
          className={styles.category_container}
          key={category.id}>
          <img className={classNameImg} src={BASE_URL + category.image} alt="image" />
          <p className={styles.description_categories}>{category.title}</p>
        </NavLink>
      )) : ''}
    </div>
  )
}

export default CategoryCard