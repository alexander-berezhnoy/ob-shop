import React from "react";

type SelectProps = {
  name: string;
  placeholder?: string;
  options: Array<{ label: string; value: string }>;
  selectStyle?: string;
};

const Select = ({ name, options, placeholder, selectStyle }: SelectProps) => {
  return (
    <select
      name={name}
      id=""
      className={`${
        selectStyle
          ? selectStyle
          : "py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
      }`}
    >
      {placeholder && <option>{placeholder}</option>}
      {options.map((selOption) => (
        <option value={selOption.value}>{selOption.label}</option>
      ))}
    </select>
  );
};

export default Select;
