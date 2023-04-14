import { Icon } from "@iconify/react";
import React from "react";

const InputText = ({ placeholder, icon, basis }) => {
  return (
    <div className={`relative mt-5 ${basis}`}>
      <input type="text" placeholder={placeholder} className={`rounded-md pl-8 w-full py-2 `} />
      <Icon icon={icon} className="absolute top-3 left-2 z-10 " color="#A4663C" />
    </div>
  );
};

export default InputText;
