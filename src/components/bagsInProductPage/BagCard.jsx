import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const BagCard = ({ bagCompany, reviewCount, bagUrl }) => {

  return (
    <>
      <div className="d-flex flex-column align-items-center bg-secondary-subtle col rounded-4 p-3">
        <FontAwesomeIcon icon={faHeart} className="align-self-end" />
        <img src={bagUrl} alt="bag" className="img-fluid" />
        <p className="fw-bold">{bagCompany}</p>
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between w-100">
          <p className="fw-medium">{reviewCount}</p>
          <div>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BagCard;
