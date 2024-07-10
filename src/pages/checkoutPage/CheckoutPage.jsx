import React from "react";
import LeftSideCheckout from "../../components/checkoutCompos/LeftSideCheckout";
import RightSideCheckout from "../../components/checkoutCompos/RightSideCheckout";

const CheckoutPage = () => {
  return (
    <div className="row">
      <div className="col-6">
        <LeftSideCheckout />
      </div>

      <div className="col-6">
        <RightSideCheckout />
      </div>
    </div>
  );
};

export default CheckoutPage;
