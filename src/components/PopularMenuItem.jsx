import React from "react";
import LineMenuLeft from "../../public/images/LineMenuLeft";
import LineMenuRight from "../../public/images/LineMenuRight";

const PopularMenuItem = ({ position, price, name, left = true }) => {
  return (
    <div className={`absolute dancing ${position} `}>
      <div className="flex justify-between">
        <span>{price}</span>
        <span>{name}</span>
      </div>
      {left ? <LineMenuLeft /> : <LineMenuRight />}
    </div>
  );
};

export default PopularMenuItem;
