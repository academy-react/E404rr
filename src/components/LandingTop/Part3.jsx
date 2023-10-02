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
    <div className=" w-312.5 h-35 border border-transparent rounded mt-10 bg-[#f3fcf8]">
    <div className="flex  gap-x-5 mt-4 justify-center items-center ">
        <div className="w-25 h-25 border border-transparent mr-5">
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