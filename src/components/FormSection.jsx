import React from "react";
import Container from "./Container";
import InputText from "./InputText";

const FormSection = () => {
  return (
    <Container>
      <div className="sm:basis-1/4 lg:basis-1/3">
        <img src="/public/images/Reserve Img.png" className="w-32 sm:w-full" alt="" />
      </div>
      <form
        action=""
        className="w-full sm:basis-4/5 lg:basis-3/5  sm:flex sm:flex-wrap sm:justify-center sm:gap-5"
      >
        <InputText
          placeholder={"Date"}
          icon={"material-symbols:calendar-today-outline-rounded"}
          basis={"basis-[85%] lg:basis-[70.5%]"}
        />
        <InputText
          placeholder={"Time"}
          icon={"ic:round-access-time"}
          basis={"sm:basis-[40%] lg:basis-[34%]"}
        />
        <InputText
          placeholder={"Guest"}
          basis={"sm:basis-[40%] lg:basis-[34%]"}
          icon={"material-symbols:supervisor-account-outline"}
        />
        <InputText placeholder={"Your name"} basis={"basis-[85%] lg:basis-[70.5%]"} />
        <InputText placeholder={"Your phone"} basis={"sm:basis-[40%] lg:basis-[34%]"} />
        <InputText placeholder={"Your email"} basis={"sm:basis-[40%] lg:basis-[34%]"} />
      </form>
    </Container>
  );
};

export default FormSection;
