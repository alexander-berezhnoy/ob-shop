"use client";
import React from "react";
import { TSlide } from "./Slide";

type SliderPointsProps = {
  slides: TSlide[];
  current: number;
  setCurrent: (newCurrent: number) => void;
};

const SliderPoints = ({ slides, current, setCurrent }: SliderPointsProps) => {
  return (
    <div className="absolute m-auto left-1/2 bottom-8 flex gap-8">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
            current === index ? "scale-150" : ""
          }`}
          onClick={() => setCurrent(index)}
        >
          {current === index && (
            <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SliderPoints;
