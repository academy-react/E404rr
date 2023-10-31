/* eslint-disable react/prop-types */
import {
  useNavigate,
} from "react-router-dom";

const ArticleBtn = ({ path }) => {
  const navigate = useNavigate();
  const goArt = () =>{
      navigate("/ArticalePage")
    }
  return (
    <button onClick={goArt} className="bg-[#f3fcf8] rounded-lg text-[12px] py-1 px-5 text=[#323E73] hover:cursor-pointer hover:scale-105 transition-[0.5s]">
      {path}
    </button>
  );
};

export default ArticleBtn;
