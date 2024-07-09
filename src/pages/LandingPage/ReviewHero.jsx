import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewHero = ({ comment, top, start, end, bottom }) => {
  return (
    <>
      <div
        className={`bg-white px-4 shadow position-absolute top-${top} bottom-${bottom} start-${start} end-${end} rounded-3 d-flex flex-column align-items-center`}
      >
        <p className="fw-normal fs-5">{comment}</p>
        <div>
          <FontAwesomeIcon className="text-warning" icon={faStar} />
          <FontAwesomeIcon className="text-warning" icon={faStar} />
          <FontAwesomeIcon className="text-warning" icon={faStar} />
          <FontAwesomeIcon className="text-warning" icon={faStar} />
          <FontAwesomeIcon className="text-warning" icon={faStar} />
        </div>
      </div>
    </>
  );
};

export default ReviewHero;
