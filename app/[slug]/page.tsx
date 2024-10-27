import React from "react";
import ProductImages from "@/app/components/ProductImages";
import CustomizeProducts from "@/app/components/CustomizeProducts";
import Add from "../components/Add";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Bacon ipsum dolor amet jerky culpa frankfurter alcatra tempor id,
          prosciutto short loin dolore swine meatball sint. Strip steak biltong
          id tongue. Dolore velit ribeye, jowl ground round veniam in. Turkey
          dolore bacon ut chicken nisi dolore drumstick rump mollit cillum
          ground round pork. Culpa elit tempor tri-tip pancetta.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4 uppercase">Product Info</h4>
          <p className="">
            Bacon ipsum dolor amet elit consectetur incididunt turducken beef
            ribs dolore eu anim pancetta magna chuck pork loin. Velit short ribs
            ea qui ball tip eu tail labore sirloin turducken non. Short ribs
            shoulder commodo, tail hamburger do ipsum kielbasa. Chislic in
            hamburger bresaola short ribs proident aliqua prosciutto sunt ut
            ribeye.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4 uppercase">Return & Refund Policy</h4>
          <p className="">
            Bacon ipsum dolor amet elit consectetur incididunt turducken beef
            ribs dolore eu anim pancetta magna chuck pork loin. Velit short ribs
            ea qui ball tip eu tail labore sirloin turducken non. Short ribs
            shoulder commodo, tail hamburger do ipsum kielbasa. Chislic in
            hamburger bresaola short ribs proident aliqua prosciutto sunt ut
            ribeye.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4 uppercase">Shipping Info</h4>
          <p className="">
            Bacon ipsum dolor amet elit consectetur incididunt turducken beef
            ribs dolore eu anim pancetta magna chuck pork loin. Velit short ribs
            ea qui ball tip eu tail labore sirloin turducken non. Short ribs
            shoulder commodo, tail hamburger do ipsum kielbasa. Chislic in
            hamburger bresaola short ribs proident aliqua prosciutto sunt ut
            ribeye.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
