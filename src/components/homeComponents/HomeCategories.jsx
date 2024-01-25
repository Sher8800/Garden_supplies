import React from 'react'
import styles from '../../styles/router/HomePage.module.css'
import img from "../../images/img.png";
import CategoryCard from '../../ui/productsCard/CategoryCard';
import BlockNameBtn from '../../ui/reused/BlockNameBtn';

const cotegories = [
  { image: img, id: 1, description: 'lorem, ipsum dolor' },
  { image: img, id: 2, description: 'lorem, ipsum dolor' },
  { image: img, id: 3, description: 'lorem, ipsum dolor' },
  { image: img, id: 4, description: 'lorem, ipsum dolor' },
]

function HomeCategories() {
  return (
    <div className={styles.main_container}>
      <BlockNameBtn
        pageTitle='Categories'
        btnTitle='All categories'
        path={'CategoriesPage'}
        classNameLine={styles.cotegoriesLine} />
      <CategoryCard
        array={cotegories}
        classNameCategoriesContainer={styles.categories_container}
        classNameImg={styles.img_categories} />
    </div>
  )
}

export default HomeCategories