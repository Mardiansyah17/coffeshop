import { Icon } from "@iconify/react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-lg px-5 absolute z-10 left-0 right-0 top-0 ">
      <img src="/public/images/logo.png" className="w-12 " alt="" />
      <Icon icon="octicon:three-bars-16" className="sm:hidden" />
      <ul className="sm:flex items-center space-x-11 hidden">
        <div className="flex space-x-2">
          <Icon icon={"mdi-light:account"} className="" />
          <Icon icon={"ph:shopping-cart-light"} />
        </div>
        <li className="active h-[75px] w-[85px] justify-center flex items-center">Home</li>
        <li>Menu</li>
        <li>Services</li>
        <li>Product</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
