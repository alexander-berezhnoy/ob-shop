import React from "react";
import CategoryListItem, { TCategoryItem } from "./CategoryListItem";

//mock
const categoryItems: Array<TCategoryItem> = [
  {
    id: "test",
    name: "Category Name",
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "test",
    name: "Category Name",
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "test",
    name: "Category Name",
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "test",
    name: "Category Name",
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "test",
    name: "Category Name",
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "test",
    name: "Category Name",
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "test",
    name: "Category Name",
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const CategoryList = () => {
  return (
    <div className="mt-24 px4 overflow-x-scroll scrollbar-hidden">
      <div className="flex gap-4 md:gap-8">
        {categoryItems.map((category) => (
          <CategoryListItem category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
