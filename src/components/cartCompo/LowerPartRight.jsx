import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";

const LowerPartRight = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div
        className="mx-lg-0 mt-md-5 mt-lg-0 mt-0 mx-auto d-md-block d-flex flex-sm-row flex-column align-items-center justify-content-between gap-3 gap-md-0"
        style={{ width: "fit-content" }}
      >
        <div
          className="d-flex gap-3 align-items-center mb-0 mx-md-0 mx-auto"
          style={{ width: "fit-content" }}
        >
          <p className="fs-2 fw-medium d-md-block d-none">Qty</p>
          <p
            className="bg-warning bg-md-light rounded-circle d-flex align-items-center my-0 justify-content-center border fs-4 fw-bold "
            style={{ height: "60px", width: "60px" }}
            onClick={decreaseQuantity}
          >
            -
          </p>
          <p
            className="rounded-pill border fs-4 fw-bold d-flex align-items-center my-0 justify-content-center"
            style={{ height: "60px", width: "100px" }}
          >
            {quantity}
          </p>
          <p
            className="bg-warning bg-md-light rounded-circle d-flex align-items-center my-0 justify-content-center border fs-4 fw-bold "
            style={{ height: "60px", width: "60px" }}
            onClick={increaseQuantity}
          >
            +
          </p>
        </div>

        <div className="d-flex align-items-center mt-md-5 gap-4">
          <p className="bg-warning rounded-pill my-0 py-4 px-5 text-light fw-medium">
            Checkout
          </p>
          <div className="d-flex align-items-center gap-3">
            <div
              className="border rounded-circle d-md-flex d-none align-items-center justify-content-center"
              style={{ height: "80px", width: "80px" }}
            >
              <FiHeart className="" />
            </div>

            <div
              className="border rounded-circle d-md-flex d-none align-items-center justify-content-center"
              style={{ height: "80px", width: "80px" }}
            >
              <FiCopy />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowerPartRight;
