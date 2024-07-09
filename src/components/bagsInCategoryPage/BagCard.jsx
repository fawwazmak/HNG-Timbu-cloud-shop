import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faSolidHeart,
  faStar as faSolidStar,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faOutlineHeart, faStar as faOutlineStar,} from "@fortawesome/free-regular-svg-icons";

const BagCard = ({ bagCompany, reviewCount, bagUrl }) => {
  return (
    <div className="d-flex flex-column align-items-center bg-secondary-subtle col rounded-4 p-3">
      <FontAwesomeIcon
        icon={faOutlineHeart}
        className="align-self-end text-dark"
      />
      <img src={bagUrl} alt="bag" className="img-fluid" />
      <p className="fw-bold">{bagCompany}</p>
      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between w-100">
        <p className="fw-medium">{reviewCount}</p>
        <div>
          <FontAwesomeIcon icon={faSolidStar} className="text-warning" />
          <FontAwesomeIcon icon={faSolidStar} className="text-warning" />
          <FontAwesomeIcon icon={faSolidStar} className="text-warning" />
          <FontAwesomeIcon icon={faSolidStar} className="text-warning" />
          <FontAwesomeIcon icon={faSolidStar} className="text-warning" />
        </div>
      </div>
    </div>
  );
};

export default BagCard;
