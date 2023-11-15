import img from "../../assets/img/Landing/why.png";
import SliderBox from "./SliderBox";

const Teachers = () => {
  return (
      <>
      
            <section
                data-aos="fade-up"  
            className="max-lg:hidden container mx-auto max-w-[1250px] bg-[#F3FCF8] relative h-[300px] flex items-center lg:justify-between justify-center rounded-2xl">
            <h3 className="absolute top-3 right-[190px] text-[23px] font-medium">
                مدرسین نمونه مجموعه  اموزشی ما
            </h3>
      <SliderBox />
      <div className="ml-20 hidden lg:block">
        <img src={img} alt="" />
      </div>
    </section>
      
      </>
  );
};

export default Teachers;
