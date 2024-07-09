import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const CartRightUpper = () => {
  return (
    <>
      <div>
        <h1 className="text-lg-start text-center">PRADA BAG</h1>
        <p className="fw-medium fs-2 text-lg-start text-center">#100,000</p>
        <p className="fs-3 text-secondary text-lg-start text-center">
          A sleek, high profile and elegant Bag that compliments your outfit and
          give you elegant outlook for all your event
        </p>

        <div className="d-flex flex-sm-row flex-column-reverse gap-2 border border-secondary align-items-center rounded-2 w-50 px-3 py-2 mx-lg-0 mx-auto">
          <IoIosArrowDown />
          <p className="fw-medium fs-5 mb-0 flex-grow-1 text-center">
            More Product
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className="d-md-block d-none">
          <p className="fs-3">Select color</p>

          <div className="d-flex gap-lg-3 justify-content-md-between justify-content-lg-start">
            <div
              className="bg-danger rounded-circle border-2 border-dark"
              style={{ width: "50px", height: "50px" }}
            ></div>
            <div
              className="bg-info-subtle rounded-circle border-2 border-dark"
              style={{ width: "50px", height: "50px" }}
            ></div>
            <div
              className="bg-dark rounded-circle border-2 border-dark"
              style={{ width: "50px", height: "50px" }}
            ></div>
            <div
              className="bg-light rounded-circle border-2 border-dark"
              style={{ width: "50px", height: "50px" }}
            ></div>
            <div
              className="bg-warning rounded-circle border-2 border-dark"
              style={{ width: "50px", height: "50px" }}
            ></div>
          </div>
        </div>

        <div className="mt-5">
          <div className="d-flex flex-sm-row flex-column gap-sm-5 gap-2 justify-content-md-between mb-0 align-items-center w-75 w-md-100 mx-md-0 mx-auto">
            <p className="fs-3 mb-0">Description</p>
            <FaArrowRight />
            <p className="fs-3 mb-0">
              Medium size <span className="d-lg-inline d-none">Bag</span>
            </p>
          </div>

          <div className="d-flex mt-sm-3 mt-5 flex-sm-row flex-column gap-sm-5 gap-2 justify-content-md-between mb-0 align-items-center w-75 w-md-100 mx-md-0 mx-auto">
            <p className="fs-3 mb-0">Free Shipping</p>
            <FaArrowRight />
            <p className="fs-3 mb-0">Free Delivery</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartRightUpper;
