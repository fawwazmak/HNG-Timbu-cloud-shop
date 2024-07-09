import React from "react";
import BagCard from "./BagCard";
import fendiBlueBag from "/productPageImages/fendiBlueBag.png";
import christaPinkBag from "/productPageImages/christaPinkBag.png";
import zaraBlueBag from "/productPageImages/zaraBlueBag.png";
import channelBrownBag from "/productPageImages/channelBrownBag.png";
import pradaBlueBag from "/productPageImages/pradaBlueBag.png";
import louisBrownBag from "/productPageImages/louisBrownBag.png";
import channelAshBag from "/productPageImages/channelAshBag.png";
import diorPeachBag from "/productPageImages/diorPeachBag.png";
import louisRedBag from "/productPageImages/louisRedBag.png";
const images = [
  {
    id: 0,
    url: fendiBlueBag,
    title: "Fendi Bag",
    price: "#22,000",
    category: " ",
  },
  {
    id: 1,
    url: christaPinkBag,
    title: "Christa Paris",
    price: "#50,000",
    category: " ",
  },
  {
    id: 2,
    url: zaraBlueBag,
    title: "Zara Bag",
    price: "#42,000",
    category: " ",
  },
  {
    id: 3,
    url: channelBrownBag,
    title: "Channel Bag",
    price: "#22,000",
    category: "For You",
  },
  {
    id: 4,
    url: pradaBlueBag,
    title: "Prada Bag",
    price: "#100,000",
    category: "For You",
  },
  {
    id: 5,
    url: louisBrownBag,
    title: "Lious Vittion",
    price: "#100,000",
    category: "For You",
  },
  {
    id: 6,
    url: channelAshBag,
    title: "Channel Bag",
    price: "#22,000",
    category: "You May Like This",
  },
  {
    id: 7,
    url: diorPeachBag,
    title: "Christian Dior",
    price: "#50,000",
    category: "You May Like This",
  },
  {
    id: 8,
    url: louisRedBag,
    title: "Louis Viiton",
    price: "#100,000",
    category: "You May Like This",
  },
];

const AllBags = () => {
  return (
    <div className="row">
      {images.map((image, index) => (
        <div className="col-lg-4 col-md-6" key={index}>
          <BagCard
            imageUrl={image.url}
            title={image.title}
            price={image.price}
          />
        </div>
      ))}
    </div>
  );
};

export default AllBags;
