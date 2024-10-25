import React from "react";

import Image from "next/image";
import Link from "next/link";

export type TCategoryItem = {
  id: string;
  name: string;
  img: string;
};

type CategoryListItemProps = {
  category: TCategoryItem;
};

const CategoryListItem = ({ category }: CategoryListItemProps) => {
  return (
    <Link
      href={`/list?cat=${category.id}`}
      className="flex-shrink-0 w-full sm:w/12 lg:w-1/4 xl:w-1/6"
    >
      <div className="relative bg-slate-100 w-full h-96">
        <Image
          src={category.img}
          alt=""
          fill
          sizes="20vw"
          className="object-cover"
        />
      </div>
      <h2 className="mt-8 font-light text-clip tracking-wide ">
        {category.name}
      </h2>
    </Link>
  );
};

export default CategoryListItem;
