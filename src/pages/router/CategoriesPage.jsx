import React from 'react'
import styles from '../../styles/router/CategoriesPage.module.css'
import CategoryCard from '../../ui/productsCard/CategoryCard'
import img from "../../images/img.png";
import NavigationPath from '../../ui/reused/NavigationPath';

const cotegories = [
  { image: img, id: 1, description: 'lorem, ipsum dolor' },
  { image: img, id: 2, description: 'lorem, ipsum dolor' },
  { image: img, id: 3, description: 'lorem, ipsum dolor' },
  { image: img, id: 4, description: 'lorem, ipsum dolor' },
  { image: img, id: 5, description: 'lorem, ipsum dolor' },
]

function CategoriesPage() {
  return (
    <div className={styles.categoriesPage_container}>
      <NavigationPath />
      <p className={styles.title}>Categories</p>
      <CategoryCard
        array={cotegories}
        classNameCategoriesContainer={styles.categories}
        classNameImg={styles.img} />
    </div>
  )
}

export default CategoriesPage