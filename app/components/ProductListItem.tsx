import React from "react";

import Image from "next/image";
import Link from "next/link";

export type TProductListItem = {
  name: string;
  price: number;
  description?: string;
  img1: string;
  img2: string;
};

export type ProductListItemProps = {
  product: TProductListItem;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link
      href="/test"
      className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] "
    >
      <div className="relative w-full h-80">
        <Image
          src={product.img1}
          alt="external image"
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
        />
        <Image
          src={product.img2}
          alt="external image"
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-medium">{product.name}</span>
        <span className="font-semibold">{`$${product.price}`}</span>
      </div>
      <div className="text-sm text-gray-500">{product.description}</div>
      <button className="rounded-2xl ring-1 ring-warn text-warn w-max py-2 px-4 text-xs hover:bg-warn hover:text-white">
        Add to Cart
      </button>
    </Link>
  );
};

export default ProductListItem;
