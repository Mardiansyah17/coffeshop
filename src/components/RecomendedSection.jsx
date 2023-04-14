import React from "react";
import { RecomendedProduct } from "./RecomendedProduct";
import { Icon } from "@iconify/react";

const RecomendedSection = () => {
  return (
    <div className="mt-36 ">
      <h1 className="dancing text-3xl font-bold text-center mb-16">Recommended </h1>
      <div className="flex overflow-x-auto px-3 sm:justify-center  space-x-3">
        <RecomendedProduct img={"/public/images/coffee-recomend1.png"} name={"Arabica"} />
        <RecomendedProduct img={"/public/images/coffee-recomend2.png"} name={"House Blend"} />
        <RecomendedProduct img={"/public/images/coffee-recomend3.png"} name={"Robusta"} />
      </div>
      <div className="flex justify-center mt-12 ">
        <Icon fontSize={"40"} icon={"material-symbols:arrow-circle-left-outline-rounded"} />
        <Icon fontSize={"40"} icon={"material-symbols:arrow-circle-right-outline-rounded"} />
      </div>
    </div>
  );
};

export default RecomendedSection;
