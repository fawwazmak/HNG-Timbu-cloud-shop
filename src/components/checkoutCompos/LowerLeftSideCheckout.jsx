import React from "react";

const LowerLeftSideCheckout = () => {
  return (
    <div>
      <h3>Payment Details</h3>
      <form action="" className="row">
        <div className="col-12">
          <p>Payment Method</p>
          <div className="">
            <div className="rounded-3 py-2 border-1 border-dark" style={{height: "100px"}}>Credit Card</div>
            <div className="rounded-3 py-2 border-1 border-dark" style={{height: "100px"}}>Paypal</div>
          </div>
        </div>

        <div className="col-12 row">
          <p>Cardholder Name</p>
          <input className="rounded-3 py-2 border-1 col-12" type="text" />
        </div>

        <div className="col-12 row">
          <p>Card Number</p>
          <input className="rounded-3 py-2 border-1 col-12" type="text" />
        </div>

        <div className="col-12">
          <div className="row align-items-center">
            <div className="col-3 row">
              <p>Expiry Date</p>
              <input
                className="rounded-3 py-2 border-1 col-12"
                type="text"
                placeholder="Month"
              />
            </div>

            <div className="col-3 row">
              <input
                className="rounded-3 py-2 border-1 col-12"
                type="text"
                placeholder="Year"
              />
            </div>

            <div className="col-6 row">
              <p>CW</p>
              <input className="rounded-3 py-2 border-1 col-12" type="text" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LowerLeftSideCheckout;
