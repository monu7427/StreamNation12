import React, { useState } from "react";
import ProductCard from "./ProductCard";

const AllPlatforms = ({ Products }) => {
  const [CategorySelected, setCategorySelected] = useState("all");

  const filterProducts = () => {
    if (CategorySelected === "all") {
      return Products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ));
    } else {
      const filteredProducts = Products.filter(
        (product) => product.category === CategorySelected
      );
      return filteredProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ));
    }
  };

  return (
    <div className="all-platforms">
      <h1 className="text-2xl font-black text-center">All Platforms</h1>
      <ul className="filters flex justify-center mt-4   p-10  rounded-lg bg-black">
        <li
          className={`filter-item cursor-pointer ${
            CategorySelected === "all" && "active"
          }`}
          onClick={() => setCategorySelected("all")}
        >
          All
        </li>
        <li
          className={`filter-item cursor-pointer ${
            CategorySelected === "ott" && "active"
          }`}
          onClick={() => setCategorySelected("ott")}
        >
          OTT
        </li>
        <li
          className={`filter-item cursor-pointer ${
            CategorySelected === "music" && "active"
          }`}
          onClick={() => setCategorySelected("music")}
        >
          Music
        </li>
        <li
          className={`filter-item cursor-pointer ${
            CategorySelected === "professional" && "active"
          }`}
          onClick={() => setCategorySelected("professional")}
        >
          Professional
        </li>
        <li
          className={`filter-item cursor-pointer ${
            CategorySelected === "oyn" && "active"
          }`}
          onClick={() => setCategorySelected("oyn")}
        >
          On Your Number
        </li>
      </ul>
      <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {filterProducts()}
      </div>
    </div>
  );
};

export default AllPlatforms;
