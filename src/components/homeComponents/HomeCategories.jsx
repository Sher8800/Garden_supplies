import React from 'react'
import styles from '../../styles/homeStyles/HomePage.module.css'
import BlockNameBtn from './BlockNameBtn';
import img from "../../images/img.png";
import CategoriesCard from '../categoriesComponents/CategoriesCard';

const cotegories = [
  { image: img, description: 'lorem, ipsum dolor' },
  { image: img, description: 'lorem, ipsum dolor' },
  { image: img, description: 'lorem, ipsum dolor' },
  { image: img, description: 'lorem, ipsum dolor' },
]

function HomeCategories() {
  return (
    <div className={styles.main_container}>
      <BlockNameBtn pageTitle='Categories' btnTitle='All categories' />
      <CategoriesCard
        array={cotegories}
        classNameCategoriesContainer={styles.categories_container}
        classNameImg={styles.img_categories} />
    </div>
  )
}

export default HomeCategories