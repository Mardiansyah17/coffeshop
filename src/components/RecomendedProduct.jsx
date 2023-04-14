import { Icon } from "@iconify/react";
import React from "react";

export const RecomendedProduct = ({ img, name }) => {
  return (
    <div className="bg-[#AD714A] bg-opacity-30 rounded-xl relative min-w-[200px] flex flex-col items-center justify-center lg:w-80">
      <Icon icon={"ph:info"} className="absolute top-5 left-5" />
      <img src={img} className="w-40 lg:w-60" alt="" />
      <div className="flex justify-end px-5 w-full ">
        <Icon icon={"ph:shopping-cart-simple-thin"} width={"26"} />
      </div>
      <div className="bg-white bg-opacity-10  h-16 flex items-center justify-center w-full">
        <span>{name}</span>
        <img src="/public/images/Vector 3.png" className="mx-3" alt="" />
        <span>Dark roast</span>
      </div>
    </div>
  );
};
