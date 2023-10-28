import img from "../../assets/img/Landing/why.png";
import SliderBox from "./SliderBox";

const Teachers = () => {
  return (
    <section className="max-lg:hidden container mx-auto max-w-[1250px] bg-[#F3FCF8] h-[300px] flex items-center lg:justify-between justify-center rounded-2xl">
      <SliderBox />
      <div className="ml-20 hidden lg:block">
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Teachers;
