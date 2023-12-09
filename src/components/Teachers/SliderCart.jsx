import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img/Landing/test_1.svg";
import img2 from "../../assets/img/Landing/test_2.svg";

export default function SliderCart({ Name, pictureAddress, teacherId }) {
  const navigate = useNavigate();
  const go = () => {
    navigate(`/teachers/profile/${teacherId}`);
  };

  return (
    <>
            {pictureAddress ? (
                    <div className="text-center flex flex-col justify-center items-center">

                    <img src={pictureAddress} alt="" className="w-[82px] h-[82px] rounded-[100%]  " />
                    <p className="m-2" onClick={go}>
                      {" "}
                      {Name}
                    </p>
                  </div>
            ) : (
              <div className="text-center flex flex-col justify-center items-center">

              <img src={img1} alt="" className="w-[82px] h-[82px]" />
              <p className="m-2" onClick={go}>
                {" "}
                {Name}
              </p>
            </div>
            )}

    </>
  );
}
