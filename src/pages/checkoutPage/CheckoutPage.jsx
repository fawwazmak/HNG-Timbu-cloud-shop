import React from "react";
import LeftSideCheckout from "../../components/checkoutCompos/LeftSideCheckout";
import RightSideCheckout from "../../components/checkoutCompos/RightSideCheckout";

const CheckoutPage = () => {
  return (
    <div className="row">
      <div className="col-lg-6 col-12">
        <LeftSideCheckout />
      </div>

      <div className="col-lg-6 col-12">
        <RightSideCheckout />
      </div>
    </div>
  );
};

export default CheckoutPage;
