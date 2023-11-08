import React from "react";
import lamp from "../../../assets/img/lamp.png";

const FooterLinks = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-lg">
      <div className="flex items-center gap-3">
        <img className="w-[50px]" src={lamp} alt="" />
        <p className="text-4xl font-black">پیوندها</p>
      </div>
      <p>صفحه اصلی</p>
      <p> دوره ها</p>
      <p>درباره ما</p>
      <p>تماس با ما</p>
    </div>
  );
};

export default FooterLinks;
