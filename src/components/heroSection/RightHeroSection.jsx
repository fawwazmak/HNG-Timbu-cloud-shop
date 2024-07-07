import React from "react";
import eclipseGroup from "/heroImages/eclipseGroup.png";
import heroBag from "/heroImages/heroBag.png";

const RightHeroSection = () => {
  return (
    <>
      <div className="position-relative bg-info-subtle rounded-5 z-3">
        <img
          src={eclipseGroup}
          alt="eclipse"
          className="z-n1 position-absolute top-0 start-0"
        />
        <img src={heroBag} alt="bag" className="z-3 mb-5" />
        <img
          src={eclipseGroup}
          alt="eclipse"
          className="z-n1 position-absolute bottom-0 end-0"
        />
      </div>
    </>
  );
};

export default RightHeroSection;
