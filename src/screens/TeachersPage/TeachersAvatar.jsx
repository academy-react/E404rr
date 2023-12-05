import React from "react";
import avatar from "../../assets/img/Teachers/teacher1.png";
import nono from "../../assets/img/moimage.png";
import styles from "./TeachersPage.module.css";

const TeachersAvatar = ({pictureAddress , linkdinProfileLink}) => {
  return (
    <div
      className={` ${styles.avatar} border-2 border-[#23A455] xl:w-[366px] xl:h-[366px] max-w-[370px] h-auto max-lg:h-[300px] max-lg:w-[300px] rounded-xl `}
      data-aos="fade-up"
    >
      {pictureAddress ? (
        <img
          src={pictureAddress}
          className="p-8 hover:scale-105 cursor-pointer xl:w-[360px]  xl:h-[360px] rounded-xl"
          alt=""
          data-aos="fade-up"
        />
      ) : (
        <img
          src={nono}
          className="p-8 hover:scale-105 cursor-pointer xl:w-[360px]  xl:h-[360px] rounded-xl"
          alt=""
          data-aos="fade-up"
        />
      )}
    </div>
  );
};

export default TeachersAvatar;
