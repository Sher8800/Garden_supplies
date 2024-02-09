import React from "react";
import styles from "../../styles/router/AllProducts.module.css";
import ProductCard from "../../ui/productsCard/ProductCard";
import { useGetAllProductsQuery } from "../../redux/api/productApi";
import NavigationPath from "../../ui/reused/NavigationPath";

let products = [];
const paths = ["Main page", "All products"];

function AllProducts() {
  const { data, isLoading } = useGetAllProductsQuery();
  if (data && !isLoading) {
    products = data;
  } else {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.allProducts_container}>
      <NavigationPath arr={paths} />
      <h1 className={styles.title_page}>All products</h1>
      <ProductCard products={products} classNameContainer={styles.products_container} />
    </div>
  );
}

export default AllProducts;
