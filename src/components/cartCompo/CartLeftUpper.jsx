import React from "react";
import cartBagOne from "/cartImages/blueBagCart.png";

const CartLeftUpper = () => {
  return (
    <>
      <div className="bg-info-subtle rounded-3 p-4 d-lg-flex d-none align-items-center justify-content-center">
        <img src={cartBagOne} alt="display bag" className="img-fluid" />
      </div>
      <div className="bg-info-white d-lg-none rounded-3 p-4 d-flex align-items-center justify-content-center">
        <img src={cartBagOne} alt="display bag" className="img-fluid" />
      </div>
    </>
  );
};

export default CartLeftUpper;
