import React from "react";

export const ServiceItem = ({ title, icon }) => {
  return (
    <div className="bg-3 p-5 md:p-10 rounded-3xl flex flex-col justify-center text-center items-center space-y-4">
      <img src={icon} alt="" className="h-20" />
      <span>{title}</span>
    </div>
  );
};
