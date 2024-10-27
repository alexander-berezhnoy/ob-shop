import React from "react";

import { TOption } from "@/app/components/CustomizeProducts";

type OptionButtonsProps = {
  title: string;
  options: Array<TOption>;
};

const OptionButtons = ({ title, options }: OptionButtonsProps) => {
  return (
    <>
      <h4 className="font-medium">{title}</h4>
      <ul className="flex items-center gap-3">
        {options.map(({ value, selected = false, disabled = false }) => (
          <li
            key={value}
            className={` rounded-md py-1 px-4 text-sm ${
              disabled
                ? "cursor-not-allowed ring-none"
                : "cursor-pointer ring-1 ring-warn"
            } ${!selected && !disabled ? "text-warn" : "text-white"} ${
              disabled ? "bg-pink-200" : selected ? "bg-warn" : ""
            }`}
          >
            {value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default OptionButtons;
