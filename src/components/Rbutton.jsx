import React from "react";
import { Button } from "react-bootstrap";

const Rbutton = ({ btnText, classname }) => {
  return (
    <>
      <div>
        <Button
          className={classname} style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          {btnText}
        </Button>
      </div>
    </>
  );
};

export default Rbutton;
