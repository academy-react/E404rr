import React from "react";
import img from "../../assets/img/Landing/02.png";
import { NavLink } from "react-router-dom";

const LastArticleCard = ({id , title , insertDate}) => {
  return (
    <div className="flex items-center justify-between py-3 my-2">
      <div className="w-24">
        <img className="rounded-2xl" src={img} alt="" />
      </div>
      {/* <div> */}
          <NavLink to={`/ArticalePage/${id}`}>
          {/* <p className="text-lg font-bold flex flex-nowrap">الگوریتم چیست</p> */}
          <p className="text-lg font-bold flex flex-nowrap">{title.slice(length , 16)}...</p>

        {/* <p className="text-sm">10 خرداد 1399</p> */}
        <p className="text-sm">{insertDate.slice(length , 12)}</p>
          </NavLink>
      {/* </div> */}
    </div>
  );
};

export default LastArticleCard;
