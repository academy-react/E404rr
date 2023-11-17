import React from "react";
import TeachersAvatar from "./TeachersAvatar";
import TeachersInfo from "./TeachersInfo";

const TeachersContainer = ({Name , id}) => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between mb-20 border-b pb-10" data-aos="fade-up">
      <TeachersAvatar />
      <TeachersInfo  Name={Name}  id={id}/>
    </div>
  );
};

export default TeachersContainer;
