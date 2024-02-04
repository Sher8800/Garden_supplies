import React from "react";
import styles from "../../styles/router/CartPage.module.css";
import BlockNameBtn from "../../ui/reused/BlockNameBtn";
import { useNavigate } from "react-router-dom";
import BasketCard from "../../ui/productsCard/BasketCard";
import CheckoutForm from "../../ui/reused/CheckoutForm";
import Order from "../../components/cartComponents/Order";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/slices/CartSlice";

function CartPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { cart: cartProducts } = useSelector(cartSelector);
  console.log(cartProducts);

  return (
    <div className={styles.cartPage_container}>
      <BlockNameBtn pageTitle="Shopping cart" btnTitle="Back to the store" classNameLine={styles.cartLine} onClick={goBack} />

      <div className={styles.cart_container}>
        <div className={styles.products_container}>
          <BasketCard />
        </div>

        <div className={styles.form_container}>
          <Order />
          <CheckoutForm classInput={styles.input} classBtn={styles.btn} txtBtn="Order" />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
