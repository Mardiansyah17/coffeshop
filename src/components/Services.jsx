import React from "react";
import { ServiceItem } from "./ServiceItem";

export const Services = () => {
  return (
    <>
      <h1 className="dancing text-center text-6xl mt-28">Services</h1>
      <div className=" mt-16 grid grid-cols-2 gap-5 px-4 md:grid-cols-5 md:px-10">
        <ServiceItem icon={"/public/icon/equipment.png"} title={"Equipment"} />
        <ServiceItem icon={"/public/icon/coffee.png"} title={"type of coffee"} />
        <ServiceItem icon={"/public/icon/cup.png"} title={"take a way "} />
        <ServiceItem icon={"/public/icon/bijikopi.png"} title={"beans variant"} />
        <ServiceItem icon={"/public/icon/brad.png"} title={"pastry"} />
      </div>
    </>
  );
};
