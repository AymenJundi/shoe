import React from 'react';
import { products } from "../constants";
import { star } from "../assets/icons";
import SectionWrapper from "../hoc/SectionWrapper";

// Function to repeat products until there are 15 items
const getRepeatedProducts = (products, count) => {
  const repeated = [];
  while (repeated.length < count) {
    repeated.push(...products);
  }
  return repeated.slice(0, count);
};

const Products = () => {
  const PopularProductCard = ({ imgURL, name, price }) => {
    return (
      <div className="flex flex-1 flex-col w-full max-sm:w-full bg-transparent rounded-xl">
        <img src={imgURL} alt={name} className="w-[200px] h-[200px] object-cover" />
        <div className="mt-4 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-areal text-xl leading-normal text-black">(4.5)</p>
        </div>
        <h3 className="mt-2 text-xl leading-normal font-bold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-areal text-customOrange text-lg leading-normal">{price}</p>
      </div>
    );
  };

  const repeatedProducts = getRepeatedProducts(products, 16); // Get 15 products

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-customOrange">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-areal text-black text-xl">
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {repeatedProducts.map((product, index) => (
          <PopularProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Products, "products");