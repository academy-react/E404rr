import React from "react";
import avatar from "../../assets/img/Teachers/teacher1.png";
import styles from "./TeachersPage.module.css";

const TeachersAvatar = () => {
  return (
    <div
      className={` ${styles.avatar} border-2 border-[#23A455] max-w-[370px] h-auto max-lg:h-[300px] max-lg:w-[300px]  rounded-xl `}
    >
      <img
        src={avatar}
        className="p-8 hover:scale-105 cursor-pointer rounded-xl"
        alt=""
      />
    </div>
  );
};

export default TeachersAvatar;
