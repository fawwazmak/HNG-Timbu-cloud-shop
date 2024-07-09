import React from "react";
import eclipseGroup from "/landingPageImages/eclipseGroup.png";
import heroBag from "/landingPageImages/heroBag.png";
import Rbutton from "../../components/Rbutton";
import ReviewHero from "./ReviewHero";

const RightHeroSection = () => {
  return (
    <>
      <div className="position-relative bg-info-subtle rounded-5 p-4 col-lg-4 col-12 text-lg-start text-center mt-lg-0 mt-3 mb-lg-0 mb-3">
        <div className="position-relative z-3">
          <img
            src={eclipseGroup}
            alt="eclipse"
            className="z-n1 position-absolute top-0 start-0"
          />
          <img src={heroBag} alt="bag" className="z-3 mb-5 img-fluid" />
          <img
            src={eclipseGroup}
            alt="eclipse"
            className="z-n1 position-absolute bottom-0 end-0"
          />
        </div>
        <ReviewHero comment={"Elegant Bags"} top={0} end={0} />
        <ReviewHero comment={"Classy Bags"} bottom={0} start={0} />
      </div>

      <p className="fs-4 fw-normal d-lg-none d-block">
        Explore our curated collections of quality and Trending bags tailored to
        your Elegant taste.
      </p>

      <Rbutton
        btnText={"EXPLORE NOW"}
        classname="d-lg-none d-block bg-primary mx-auto"
      />
    </>
  );
};

export default RightHeroSection;
