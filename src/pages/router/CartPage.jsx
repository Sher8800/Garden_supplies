import React from "react";
import styles from "../../styles/router/CartPage.module.css";
import BlockNameBtn from "../../ui/reused/BlockNameBtn";
import { useNavigate } from "react-router-dom";
import BasketCard from "../../ui/productsCard/BasketCard";
import CheckoutForm from "../../ui/reused/CheckoutForm";
import Order from "../../components/cartComponents/Order";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/slices/CartSlice";
import EmptyCart from "../../components/cartComponents/EmptyCart";
import { useState } from "react";
import ModalWindow from "../../components/cartComponents/ModalWindow";

function CartPage() {
  const [sendingOrder, setSendingOrder] = useState(false);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { cart: cartProducts } = useSelector(cartSelector);

  return (
    <div className={styles.cartPage_container}>
      <BlockNameBtn pageTitle="Shopping cart" btnTitle="Back to the store" classNameLine={styles.cartLine} onClick={goBack} />
      {cartProducts.length == 0 ? (
        <EmptyCart />
      ) : (
        <div className={styles.cart_container}>
          <BasketCard arr={cartProducts} />

          <div className={styles.form_container}>
            <Order />
            <CheckoutForm
              setSendingOrder={setSendingOrder}
              cartProducts={cartProducts}
              classInput={styles.input}
              classBtn={styles.btn}
              txtBtn="Order"
            />
          </div>
          <ModalWindow sendingOrder={sendingOrder} setSendingOrder={setSendingOrder} />
        </div>
      )}
    </div>
  );
}

export default CartPage;
