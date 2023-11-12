import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCart from "./SliderCart";
import { getTeachers } from "../../core/services/api/Teachers";
import { useState } from "react";
import { useEffect } from "react";

export default function Slider() {
  const [teachersList , setTeachersList] = useState([]);
  const getList = async () => {
    const teachers = await getTeachers(5);
    setTeachersList(teachers)  
  } 
  useEffect(() =>{
      getList();
  },[]);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        autoPlay="true"
        arrows="false"
        renderArrowsWhenDisabled="false"
        removeArrowOnDeviceType={[
          "superLargeDesktop",
          "desktop",
          "tablet",
          "mobile",
        ]}
      >
        
        {teachersList.map((item , index) => {
          return(
            <SliderCart  Name={item.fullName}/>
          )
        })}
      </Carousel>
    </>
  );
}
