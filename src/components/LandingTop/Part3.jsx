import vue from "../../assets/img/vue.png";
import bootstrap from "../../assets/img/bootstrap.png";
import nodejs from "../../assets/img/nodejs.png";
import react from "../../assets/img/react.png";
import pyton from "../../assets/img/pyton.png";
import angular from "../../assets/img/angular.png";
import narnji from "../../assets/img/narnji.png";
import netcore from "../../assets/img/netcore.png";
import abi from "../../assets/img/abi.png";
const Part3 = () => {
  return (
        <>
                {/* part 3 */}
    <div className=" xl:w-[1250px] w-[600px] xl:h-35 h-[420px] border border-transparent rounded xl:mt-10 mt-5 bg-[#f3fcf8]">
    <div className="flex flex-wrap  xl:gap-x-5 gap-x-10 xl:mt-4 mt-10 xl:justify-center items-center xl:w-full w-[520px] xl:mx-auto mr-[80px]">
        <div className="w-25 h-25 border border-transparent xl:mr-5">
          <img src={vue} alt="" />
        </div>
        <div className="w-25 h-25 border border-transparent">
          <img src={bootstrap} alt="" />
        </div>
        <div className="w-25 h-25 border border-transparent">
          <img src={nodejs} alt="" />
        </div>
        <div className="w-25 h-25 border border-transparent">
          <img src={react} alt="" />
        </div>
        <div className="w-25 h-25 border border-transparent">
          <img src={pyton} alt="" />
        </div>
        <div className="w-25 h-25 border border-transparent">
          <img src={angular} alt="" />
        </div>
        <div className="w-25 h-25 border border-transparent">
          <img src={narnji} alt="" />
        </div>
        <div className="w-25 h-25 border border-transparent">
          <img src={netcore} alt="" />
        </div>
        <div className="w-25 h-25 border border-transparent">
          <img src={abi} alt="" />
        </div>
      </div>
    </div>
        </>
  )
}

export  {Part3}