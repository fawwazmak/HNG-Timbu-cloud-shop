import React from "react";
import CartLeftUpper from "./CartLeftUpper";
import CartRightUpper from "./CartRightUpper";

const CartUpperPart = () => {
  return (
    <>
      <div
        className="row gx-5 justify-content center align-items-center"
        style={{ rowGap: "20px" }}
      >
        <div className="col-lg-6">
          <CartLeftUpper />
        </div>
        <div className="col-lg-6">
          <CartRightUpper />
        </div>
      </div>
    </>
  );
};

export default CartUpperPart;
