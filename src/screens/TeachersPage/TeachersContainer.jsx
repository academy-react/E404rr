import React from "react";
import TeachersAvatar from "./TeachersAvatar";
import TeachersInfo from "./TeachersInfo";

const TeachersContainer = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between mb-20 border-b pb-10">
      <TeachersAvatar />
      <TeachersInfo />
    </div>
  );
};

export default TeachersContainer;
