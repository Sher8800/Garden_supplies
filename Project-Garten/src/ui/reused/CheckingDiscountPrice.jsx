import React from "react";

function CheckingDiscountPrice({ product, classNameContainer, classNamePrice, classNameDiscountPrice }) {
  return (
    <div className={classNameContainer}>
      {product.discont_price ? (
        <>
          <p className={classNamePrice}>{"$" + product.discont_price}</p>
          <p className={classNameDiscountPrice}>{"$" + product.price}</p>
        </>
      ) : (
        <p className={classNamePrice}>{"$" + product.price}</p>
      )}
    </div>
  );
}

export default CheckingDiscountPrice;
