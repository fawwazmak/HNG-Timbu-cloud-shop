import React from "react";
import BagCard from "./BagCard";
import fendiBag from "/productPageImages/fendiRedBag.png";
import christaBag from "/productPageImages/christaGoldBag.png";
import zaraBag from "/productPageImages/zaraOrangeBag.png";
import channelBag from "/productPageImages/channelAshBag.png";
import diorBag from "/productPageImages/diorPeachBag.png";
import vittionBag from "/productPageImages/viitonBrownBag.png";
import choelBag from "/productPageImages/choelBrownBag.png";
import pradaBlueBag from "/productPageImages/pradaBlueBag.png";
import gucciBag from "/productPageImages/gucciBrownBag.png";

const AllBags = () => {
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

  const mayLikeBags = images.filter(
    (image) => image.category === "You May Like This"
  );

  return (
    <>
      <div className="bg-light px-5 mb-5">
        <h2>You may like this</h2>
        <div className="row gx-4 gy-lg-0 gy-4">
          {mayLikeBags.map((image, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <BagCard
                bagCompany={image.title}
                reviewCount={image.review}
                bagUrl={image.url}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllBags;
