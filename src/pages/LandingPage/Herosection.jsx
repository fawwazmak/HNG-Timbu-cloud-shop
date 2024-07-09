import React from "react";
import LeftHeroSection from "./LeftHeroSection";
import RightHeroSection from "./RightHeroSection";

const Herosection = () => {
  return (
    <>
      <div className="custom-hero row text-lg-start text-center justify-content-between align-items-center pt-5">
        <LeftHeroSection />
        <RightHeroSection />
      </div>
    </>
  );
};

export default Herosection;
