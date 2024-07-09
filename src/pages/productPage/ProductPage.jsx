import React from "react";
import BagCard from "../../components/bagsInProductPage/BagCard";
import test from "/categoryPageImages/diorPeachBag.png";
import AllBags from "../../components/bagsInProductPage/AllBags";
import ProductPageSubNav from "../../components/ProductPageSubNav";

const ProductPage = () => {
  return (
    <>
      <div className="px-5 pt-5 pb-3">
        <ProductPageSubNav />
        <AllBags />
      </div>
    </>
  );
};

export default ProductPage;
