import React from "react";
import BagCard from "./BagCard";
import fendiBag from "/categoryPageImages/fendiRedBag.png";
import christaBag from "/categoryPageImages/christaGoldBag.png";
import zaraBag from "/categoryPageImages/zaraOrangeBag.png";
import channelBag from "/categoryPageImages/channelAshBag.png";
import diorBag from "/categoryPageImages/diorPeachBag.png";
import vittionBag from "/categoryPageImages/viitonBrownBag.png";
import choelBag from "/categoryPageImages/choelBrownBag.png";
import pradaBlueBag from "/categoryPageImages/pradaBlueBag.png";
import gucciBag from "/categoryPageImages/gucciBrownBag.png";
const images = [
  {
    id: 0,
    url: fendiBag,
    title: "Fendi Bag",
    review: "11.6k Reviews",
    category: " ",
  },
  {
    id: 1,
    url: christaBag,
    title: "Christa Paris",
    review: "11.6k Reviews",
    category: " ",
  },
  {
    id: 2,
    url: zaraBag,
    title: "Zara Bag",
    review: "11.6k Reviews",
    category: " ",
  },
  {
    id: 3,
    url: channelBag,
    title: "Channel Bag",
    review: "11.6k Reviews",
    category: "For You",
  },
  {
    id: 4,
    url: diorBag,
    title: "Christian Dior",
    review: "11.6k Reviews",
    category: "For You",
  },
  {
    id: 5,
    url: vittionBag,
    title: "Lious Vittion",
    review: "11.6k Reviews",
    category: "For You",
  },
  {
    id: 6,
    url: choelBag,
    title: "Choel Bag",
    review: "11.6k Reviews",
    category: "You May Like This",
  },
  {
    id: 7,
    url: pradaBlueBag,
    title: "Prada Bag",
    review: "11.6k Reviews",
    category: "You May Like This",
  },
  {
    id: 8,
    url: gucciBag,
    title: "Gucci Bag",
    review: "11.6k Reviews",
    category: "You May Like This",
  },
];

const AllBags = () => {
  const noHeadingBags = images.filter((image) => image.category === " ");
  return (
    <>
      <div className="bg-light row gx-4 gy-lg-0 gy-4 px-5 mb-5">
        {noHeadingBags.map((image, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <BagCard
              bagCompany={image.title}
              reviewCount={image.review}
              bagUrl={image.url}
            />
          </div>
        ))}
      </div>
    </>
  );
};

<div className="bg-light row gx-4 gy-lg-0 gy-4 px-5">
  <div className=""></div>
</div>;

export default AllBags;
