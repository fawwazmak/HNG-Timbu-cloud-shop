import React from "react";

const LeftSideCheckout = () => {
  return (
    <div>
      <h1>Billing Information</h1>
      <form action="">
        <div>
          <p className="fw-medium fs-5">Full Name</p>
          <div className="d-flex justify-content-between">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
        </div>

        <div>
          <p className="fw-medium fs-5">Address</p>
          <input type="text" />
        </div>

        <div className="d-flex justify-content-between">
          <div>
            <p className="fw-medium fs-5">E-mail</p>
            <input type="email" />
          </div>

          <div>
            <p className="fw-medium fs-5">Phone Number</p>
            <input type="text" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LeftSideCheckout;
