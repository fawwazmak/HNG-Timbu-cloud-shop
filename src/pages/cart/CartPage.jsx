import React from "react";
import CartUpperPart from "../../components/cartCompo/CartUpperPart";
import CartLowerPart from "../../components/cartCompo/CartLowerPart";

const CartPage = () => {
  return (
    <>
      <div className="px-5 pt-5">
        <CartUpperPart />
        <CartLowerPart />
      </div>
    </>
  );
};

export default CartPage;
