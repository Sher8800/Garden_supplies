import React from "react";
import styles from "../../styles/router/AllProducts.module.css";
import ProductCard from "../../ui/productsCard/ProductCard";
import { useGetProductsInCategoriesQuery } from "../../redux/api/productApi";
import { useLocation } from "react-router-dom";
import NavigationPath from "../../ui/reused/NavigationPath";

let categories = [];
const paths = ["Main page", "Categories", "Tools and equipment"];

function ProductsInCategories() {
  const location = useLocation();
  const { state } = location;

  const { data, isLoading } = useGetProductsInCategoriesQuery(state.id);
  if (data && !isLoading) {
    categories = data;
  } else {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.allProducts_container}>
      <NavigationPath arr={paths} />
      <h1 className={styles.title_page}>{state.title}</h1>
      <ProductCard products={categories.data} classNameContainer={styles.products_container} />
    </div>
  );
}

export default ProductsInCategories;
