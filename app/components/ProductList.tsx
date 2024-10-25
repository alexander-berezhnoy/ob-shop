import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProductListItem, { TProductListItem } from "./ProductListItem";

// temporary mock
const productItems: TProductListItem = [
  {
    name: "Product Name",
    price: 49,
    description: "My description",
    img1: "https://images.pexels.com/photos/28678619/pexels-photo-28678619.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img2: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Product Name",
    price: 49,
    description: "My description",
    img1: "https://images.pexels.com/photos/28678619/pexels-photo-28678619.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img2: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Product Name",
    price: 49,
    description: "My description",
    img1: "https://images.pexels.com/photos/28678619/pexels-photo-28678619.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img2: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Product Name",
    price: 49,
    description: "My description",
    img1: "https://images.pexels.com/photos/28678619/pexels-photo-28678619.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    img2: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const ProductList = () => {
  return (
    <div className="mt-24 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {productItems.map((product, index) => (
        <ProductListItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
