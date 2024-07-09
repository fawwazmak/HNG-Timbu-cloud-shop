import React from "react";
import BagCard from "../../components/bagsInProductPage/BagCard";
import test from "/categoryPageImages/diorPeachBag.png";
import AllBags from "../../components/bagsInProductPage/AllBags";
import ProductPageSubNav from "../../components/ProductPageSubNav";
import ExclusiveOfferOnProductionPage from "../../components/exclusiveOfferOnProductPage/ExclusiveOfferOnProductPage"

const ProductPage = () => {
  return (
    <>
      <div className="px-5 pt-5 pb-3">
        <ProductPageSubNav />
        <AllBags />
        <ExclusiveOfferOnProductionPage />
      </div>
    </>
  );
};

export default ProductPage;
