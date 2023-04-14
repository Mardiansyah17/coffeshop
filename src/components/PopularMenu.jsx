import React from "react";
import LineMenu from "../../public/images/LineMenuLeft";
import PopularMenuItem from "./PopularMenuItem";
const PopularMenu = () => {
  return (
    <div className="mt-32">
      <h1 className="text-center dancing text-3xl ">Popular menu</h1>
      <div
        className={`bg-[url('/public/images/Popularmenu-Img.png')]  bg-no-repeat w-full sm:w-3/5 h-72 bg-center mx-auto relative popular-menu`}
      >
        <PopularMenuItem
          position={"top-[5rem] left-[0.3rem] "}
          price={"$40.00"}
          name={"Chocolate"}
        />
        <PopularMenuItem
          position={"top-[8rem] left-[0.5rem] "}
          price={"$25.00"}
          name={"Double es"}
        />
        <PopularMenuItem position={"top-[11rem] left-[1rem] "} price={"$45.00"} name={"Caramel"} />
        <PopularMenuItem position={"top-[14rem] left-[1.5rem] "} price={"$50.00"} name={"Doppio"} />
        <PopularMenuItem
          position={"top-[14rem] right-[1.5rem] "}
          price={"$25.00"}
          name={"Latte"}
          left={false}
        />
        <PopularMenuItem
          position={"top-[11rem] right-[1rem] "}
          price={"$25.00"}
          name={"Mocha"}
          left={false}
        />
        <PopularMenuItem
          position={"top-[8rem] right-[0.5rem] "}
          price={"$25.00"}
          name={"Cappuccino"}
          left={false}
        />
        <PopularMenuItem
          position={"top-[5rem] right-[0.3rem] "}
          price={"$30.00"}
          name={"Espersso"}
          left={false}
        />
      </div>
    </div>
  );
};

export default PopularMenu;
