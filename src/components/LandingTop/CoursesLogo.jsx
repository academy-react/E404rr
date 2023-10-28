import vue from "../../assets/img/vue.png";
import bootstrap from "../../assets/img/bootstrap.png";
import nodejs from "../../assets/img/nodejs.png";
import react from "../../assets/img/react.png";
import pyton from "../../assets/img/pyton.png";
import angular from "../../assets/img/angular.png";
import narnji from "../../assets/img/narnji.png";
import netcore from "../../assets/img/netcore.png";
import abi from "../../assets/img/abi.png";
import styles from "./CoursesLogo.module.css";
const CoursesLogo = () => {
  return (
    <>
      <div
        className={`${styles.CoursesLogo} max-w-[1250px] mx-auto xl:w-full xl:block hidden md:w-[768px] lg:w-[1024px] xl:h-35 h-[420px] border border-transparent rounded xl:mt-10 mt-5 bg-[#f3fcf8] `}
      >
        <div className="xl:flex xl:flex-wrap hidden xl:gap-x-5 md:gap-x-[85px] gap-x-10 xl:mt-4 mt-10 xl:justify-center items-center xl:w-full w-[520px] xl:mx-auto md:mx-auto mr-[80px]">
          <div className="w-25 h-25 border border-transparent xl:mr-5  hover:scale-110">
            <img src={vue} alt="" />
          </div>
          <div className="w-25 h-25 border border-transparent  hover:scale-110">
            <img src={bootstrap} alt="" />
          </div>
          <div className="w-25 h-25 border border-transparent  hover:scale-110">
            <img src={nodejs} alt="" />
          </div>
          <div className="w-25 h-25 border border-transparent  hover:scale-110">
            <img src={react} alt="" />
          </div>
          <div className="w-25 h-25 border border-transparent  hover:scale-110">
            <img src={pyton} alt="" />
          </div>
          <div className="w-25 h-25 border border-transparent  hover:scale-110">
            <img src={angular} alt="" />
          </div>
          <div className="w-25 h-25 border border-transparent  hover:scale-110">
            <img src={narnji} alt="" />
          </div>
          <div className="w-25 h-25 border border-transparent  hover:scale-110">
            <img src={netcore} alt="" />
          </div>
          <div className="w-25 h-25 border border-transparent  hover:scale-110">
            <img src={abi} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesLogo;
