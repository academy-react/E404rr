import React from "react";
import img from "../../assets/img/Landing/02.png";

const LastArticleCard = () => {
  return (
    <div className="flex items-center justify-between py-3 my-2">
      <div className="w-24">
        <img className="rounded-2xl" src={img} alt="" />
      </div>
      <div>
        <p className="text-lg font-bold flex flex-nowrap">الگوریتم چیست</p>
        <p className="text-sm">10 خرداد 1399</p>
      </div>
    </div>
  );
};

export default LastArticleCard;
