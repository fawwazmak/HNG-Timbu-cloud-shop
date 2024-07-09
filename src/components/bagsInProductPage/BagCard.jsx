import React from "react";
import { Card, Button } from "react-bootstrap";

const BagCard = ({ imageUrl, title, price }) => {
  return (
    <Card className="">
      <div className="h-75 w-75 d-flex align-items-center justify-content-center mx-auto">
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={title}
          className="img-fluid"
        />
      </div>
      <Card.Body className="d-flex flex-column text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="fw-bold">{price}</Card.Text>
        <div className="mt-auto d-flex justify-content-between">
          <Button variant="outline-info" className="text-dark">
            View Details
          </Button>
          <Button variant="warning" className="text-light">
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BagCard;
