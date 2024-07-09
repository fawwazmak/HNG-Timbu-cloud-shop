import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LeftHeroSection = () => {
   const navigate = useNavigate();

   const goToProductPage = () => {
     navigate("/products"); 
   };
  return (
    <>
      <div className="col-lg-6 col-12 d-flex flex-column gap-4">
        <div>
          <h1 className="fw-bolder custom-h1-lg">
            Shop Quality And <span className="text-warning">Trending</span> Bags
          </h1>
          <p className="fs-4 fw-normal d-lg-block d-none">
            Explore our curated collections of quality and Trending bags
            tailored to your Elegant taste.
          </p>
        </div>

        <Button className="bg-primary d-lg-block d-none w-25 py-3" onClick={goToProductPage}>
          Explore Now
        </Button>
      </div>
    </>
  );
};

export default LeftHeroSection;
