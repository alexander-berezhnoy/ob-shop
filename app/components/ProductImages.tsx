"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/1021709/pexels-photo-1021709.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/833185/pexels-photo-833185.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/2235073/pexels-photo-2235073.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const ProductImages = () => {
  const [mainPhoto, setMainPhoto] = useState<number>(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[mainPhoto].url}
          alt="product"
          fill
          sizes="50vw"
          className="object-contain rounded-md"
        />
      </div>
      <div className="w-full flex justify-between gap-4 mt-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.id}
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
          >
            <Image
              src={image.url}
              alt="product"
              fill
              sizes="50vw"
              className="object-contain rounded-md"
              onClick={() => setMainPhoto(imageIndex)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
