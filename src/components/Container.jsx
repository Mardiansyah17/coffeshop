import React from "react";

const Container = ({ children }) => {
  return (
    <div className="sm:w-[90%] md:mx-auto bg-[#AD714A] text-white mt-40 text-center mx-8 p-3 rounded-md flex flex-col items-center bg-opacity-30 sm:flex-row sm:text-start justify-between">
      {children}
    </div>
  );
};

export default Container;
