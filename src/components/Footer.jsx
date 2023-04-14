import React from "react";
const Footer = () => {
  return (
    <footer
      className={`bg-[url('../public/images/bg-footer.png')]  bg-[#533529] bg-contain mt-40 flex flex-col items-center sm:flex-row sm:items-center sm:justify-center relative lg:h-[230px]`}
    >
      <div className="bg-red-500  h-32 sm:h-0 sm:w-36">
        <img
          src="/public/images/Footer Img.png"
          className="w-20 absolute -top-5 left-[40%] sm:left-3 sm:w-32  lg:w-40 lg:left-5 lg:-top-7"
          alt=""
        />
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-4 justify-center text-center gap-5">
        <li>About</li>
        <li>our story</li>
        <li>FAQ</li>
        <li>careers</li>
        <li>customer recourses</li>
        <li>menu</li>
        <li>locations</li>
        <li>support</li>
        <li>services</li>
        <li>payment options</li>
        <li>refunds & exchanges</li>
        <li>limitation of liability</li>
      </ul>
    </footer>
  );
};

export default Footer;
