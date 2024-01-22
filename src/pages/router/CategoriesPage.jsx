import React from 'react'
import styles from '../../styles/categoriesStyles/CategoriesPage.module.css'
import CategoriesCard from '../../components/categoriesComponents/CategoriesCard'
import img from "../../images/img.png";
import NavigationPath from '../../ui/NavigationPath';

const cotegories = [
  { image: img, description: 'lorem, ipsum dolor' },
  { image: img, description: 'lorem, ipsum dolor' },
  { image: img, description: 'lorem, ipsum dolor' },
  { image: img, description: 'lorem, ipsum dolor' },
  { image: img, description: 'lorem, ipsum dolor' },
]

function CategoriesPage() {
  return (
    <div className={styles.categoriesPage_container}>
      <NavigationPath />
      <p className={styles.title}>Categories</p>
      <CategoriesCard
        array={cotegories}
        classNameCategoriesContainer={styles.categories}
        classNameImg={styles.img} />
    </div>
  )
}

export default CategoriesPage