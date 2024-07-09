import React from "react";
import leftImage from "/productPageImages/channelAshBag.png";
import ExclusiveTime from "./ExclusiveTime";
import { Button } from "react-bootstrap";

const exclusiveOfferOnProductPage = () => {
  return (
    <>
      <div className="bg-primary-subtle row rounded-3 align-items-center my-5 p-5">
        <div className="col-md-6 d-flex align-items-center justify-content-md-start justify-content-center">
          <img src={leftImage} alt="display Image" className="img-fluid" />
        </div>

        <div className="col-md-6 text-primary text-md-start text-center">
          <h1>Exclusive offer</h1>
          <p>
            Upgrade your collections with our exclusive offer. Enjoy savings of
            up to 50% off on our latest New arrivals.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-4 justify-content-between justify-content-md-start">
            <ExclusiveTime quantifier={"Days"} number={"10"} />
            <ExclusiveTime quantifier={"Hours"} number={"18"} />
            <ExclusiveTime quantifier={"Mins"} number={"23"} />
          </div>

          <Button className="bg-primary py-2 px-5 mt-5">
            SHOP NOW
          </Button>
        </div>
      </div>
    </>
  );
};

export default exclusiveOfferOnProductPage;
