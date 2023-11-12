import img1 from "../../assets/img/Landing/test_1.svg";
import img2 from "../../assets/img/Landing/test_2.svg";

export default function SliderCart({Name}) {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <img src={img1} alt="" />
      <p className="m-2"> {Name}</p>
    </div>
  );
}
