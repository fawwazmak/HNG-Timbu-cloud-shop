import React from "react";
import NoHeadingBags from "./NoHeadingBags";
import DiscoverForYouBags from "./DiscoverForYouBags";
import MayLikeBags from "./MayLikeBags";

const AllBags = () => {
  return (
    <>
      <div className="">
        <NoHeadingBags  />
        <DiscoverForYouBags  />
        <MayLikeBags  />
      </div>
    </>
  );
};

export default AllBags;
