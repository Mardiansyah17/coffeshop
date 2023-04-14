import React from "react";
import Container from "./Container";

export const Discount = () => {
  return (
    <Container>
      <div className="">
        <h1 className="text-2xl sm:text-3xl mb-4 text-2">up to 50% off </h1>
        <p className="text-white">
          At our cafe, we take pride in providing our customers with the best coffee around. Our
          carefully-selected coffees come from some of the most renowned coffee growing regions in
          the world, ensuring that each cup is unrivaled in flavor and freshness.{" "}
        </p>
      </div>
      <img className="order-first sm:order-last sm:w-56" src="/public/images/packet.png" alt="" />
    </Container>
  );
};
