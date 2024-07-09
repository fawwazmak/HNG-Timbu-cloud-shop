import React from "react";

const ExclusiveTime = ({ number, quantifier }) => {
  return (
    <div className="bg-white rounded-2 text-primary py-1 px-4 fw-bold">
      <h1>{number}</h1>
      <p>{quantifier}</p>
    </div>
  );
};

export default ExclusiveTime;
