import React from "react";
import LeftHeroSection from "./LeftHeroSection";
import RightHeroSection from "./RightHeroSection";

const Herosection = () => {
  return (
    <>
      <div className="px-5 d-flex flex-lg-row text-lg-start text-center flex-column justify-content-between align-items-center gap-5 pt-5">
        <LeftHeroSection />
        <RightHeroSection />
      </div>
    </>
  );
};

export default Herosection;
