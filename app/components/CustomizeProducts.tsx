import React from "react";
import ColorPicker from "./ColorPicker";
import OptionButtons from "./OptionButtons";

export type TOption = {
  value: string;
  selected?: boolean;
  disabled?: boolean;
};

const colorOptions = [
  {
    value: "bg-red-500",
    selected: true,
    disabled: false,
  },
  {
    value: "bg-blue-500",
    selected: false,
    disabled: false,
  },
  {
    value: "bg-green-500",
    selected: false,
    disabled: true,
  },
];

const sizeOptions = [
  { value: "Small" },
  { value: "Medium", selected: true },
  { value: "Large", disabled: true },
];

const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <ColorPicker title="Choose a color" options={colorOptions} />
      <OptionButtons title="Choose a size" options={sizeOptions} />
    </div>
  );
};

export default CustomizeProducts;
