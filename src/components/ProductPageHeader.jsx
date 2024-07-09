import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="">
        <div className="text-center d-lg-flex d-none flex-column align-items-center mt-4">
          <h1>Best Selling</h1>
          <p>
            Select from Our of quality and Trending bags tailored to your
            Elegant taste.
          </p>
        </div>

        <div className="border py-2 px-3 rounded-pill border-dark d-flex d-lg-none align-items-center gap-4 w-75 mx-auto my-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <form action="">
            <input
              type="text"
              placeholder="Search"
              name="search"
              className="border-0 input-on-focus w-100"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
