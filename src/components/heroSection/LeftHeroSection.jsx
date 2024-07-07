import React from "react";
import Rbutton from "../Rbutton";

const LeftHeroSection = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="fs-1">Shop Quality And Trending Bags</h1>
          <p>
            Explore our curated collections of quality and{" "}
            <span className="text-warning">Trending</span> bags tailored to your
            Elegant taste.
          </p>
        </div>

        <Rbutton btnText="Explore Now" btnColor="primary" />
      </div>
    </>
  );
};

export default LeftHeroSection;
