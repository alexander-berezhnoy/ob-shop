import React from "react";
Select;
import Select from "@/app/components/Select";

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <Select
          name="type"
          placeholder="Type"
          options={[
            { label: "Physical", value: "physical" },
            { label: "Digital", value: "digital" },
          ]}
        />
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-sm rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-sm rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <Select
          name="size"
          placeholder="Size"
          options={[{ label: "Size", value: "" }]}
        />
        <Select
          name="color"
          placeholder="Color"
          options={[{ label: "Test", value: "" }]}
        />
        <Select
          name="cat"
          placeholder="Category"
          options={[
            { label: "New Arrivals", value: "newarrivals" },
            { label: "Popular", value: "popular" },
          ]}
        />
        <Select name="all" placeholder="All Filters" options={[]} />
      </div>
      <div className="">
        <Select
          name="sort"
          placeholder="Sort By"
          options={[
            { label: "Price (low to high)", value: "asc price" },
            { label: "Price (high to low)", value: "desc price" },
            { label: "Newest", value: "asc lastUpdated" },
            { label: "Oldest", value: "desc lastUpdated" },
          ]}
          selectStyle="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
        />
      </div>
    </div>
  );
};

export default Filter;
