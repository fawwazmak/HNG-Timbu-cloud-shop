import React from "react";
import darkBag from "/cartImages/blackBag.png";
import redBag from "/cartImages/redBag.png";

const LowerPartLeft = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="border-warning border-2 rounded-3">
          <img src={darkBag} alt="" />
        </div>

        <div className="border-warning border-2 rounded-3">
          <img src={redBag} alt="" />
        </div>
      </div>
    </>
  );
};

export default LowerPartLeft;
