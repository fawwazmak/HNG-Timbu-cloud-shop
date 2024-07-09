import React from "react";
import LowerPartLeft from "./LowerPartLeft";
import LowerPartRight from "./LowerPartRight";

const CartLowerPart = () => {
  return (
    <>
      <div className="row align-items-center gx-5 mt-5">
        <div className="col-lg-6 d-md-block d-none">
          <LowerPartLeft />
        </div>
        <div className="col-lg-6">
          <LowerPartRight />
        </div>
      </div>
    </>
  );
};

export default CartLowerPart;
