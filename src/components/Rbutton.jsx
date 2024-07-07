import React from "react";
import { Button } from "react-bootstrap";

const Rbutton = ({ btnText, btnColor }) => {
  return (
    <>
      <div>
        <Button className={`bg-${btnColor}`}>{btnText}</Button>
      </div>
    </>
  );
};

export default Rbutton;
