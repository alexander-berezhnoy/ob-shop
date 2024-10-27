import React from "react";
import { TOption } from "./CustomizeProducts";

type ColorPickerProps = {
  title: string;
  options: Array<TOption>;
};

const ColorPicker = ({ title, options }: ColorPickerProps) => {
  return (
    <>
      <h4 className="font-medium">{title}</h4>
      <ul className="flex items-center gap-3">
        {options.map(({ value, selected = false, disabled = false }) => (
          <li
            key={value}
            className={`w-8 h-8 rounded-full ring-1 ring-gray-300 relative ${
              disabled ? "cursor-not-allowed" : "cursor-pointer"
            } ${value}`}
          >
            {selected && (
              <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            )}
            {disabled && (
              <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ColorPicker;
