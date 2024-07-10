import React from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "react-bootstrap";
import Bag from "/smallBag.png";

const RightSideCheckout = () => {
  return (
    <>
      <div className="border border-dark-subtle p-5">
        <h3 className="text-center">Order Summary</h3>
        <div className="d-flex flex-column p-4 border border-2 border-dark-subtle rounded-3">
          <div className="align-self-end">
            <IoMdClose className="" />
          </div>
          <div className="d-flex justify-content-between">
            <div className="bg-primary-subtle p-4 rounded">
              <img src={Bag} alt="" />
            </div>
            <div>
              <h4 className="">Prada Bag</h4>
              <div className="d-flex align-items-center gap-3 mt-5">
                <p className="fs-4">Qty</p>
                <div className="d-flex gap-3">
                  <p
                    className="border rounded-circle p-2 bg-warning d-flex align-items-center justify-content-center"
                    style={{ height: "50px", width: "50px" }}
                  >
                    -
                  </p>
                  <p
                    className="border rounded-pill p-2 d-flex align-items-center justify-content-center"
                    style={{ height: "50px", width: "100px" }}
                  >
                    1
                  </p>
                  <p
                    className="border rounded-circle p-2 bg-warning d-flex align-items-center justify-content-center"
                    style={{ height: "50px", width: "50px" }}
                  >
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <p className="fs-5 text-dark-subtle">Coupon code</p>
          <div className="col-12 row gx-3">
            <input type="text" className="col-8 rounded-3 py-2 border-1" />
            <Button className="bg-primary py-3 px-3 col-4">Apply</Button>
          </div>
        </div>
      </div>

      <div className="border border-dark-subtle p-5 mb-5">
        <div className="fs-4">
          <div className="d-flex justify-content-between">
            <p>Subtotal</p>
            <p>#100,000</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Tax</p>
            <p>#0.00</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Shipping Fee</p>
            <p>#0.00</p>
          </div>

          <div className="fw-bold d-flex justify-content-between">
            <p>Total</p>
            <p>#100,000</p>
          </div>
        </div>

        <Button className="bg-primary d-lg-block d-none py-3 px-5 mx-auto">
          PAY NOW
        </Button>
      </div>
    </>
  );
};

export default RightSideCheckout;
