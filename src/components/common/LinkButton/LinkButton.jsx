/* eslint-disable react/prop-types */
import {
  useNavigate,
} from "react-router-dom";
const LinkButton = ({ path , url }) => {
  const navigate = useNavigate();
  const goCourse = () =>{
      navigate(url)
    }
  return (
    <button onClick={goCourse} className="bg-[#f3fcf8] rounded-md hover:scale-105 transition-[0.5s] hover:font-medium	p-3 px-4 text=[#323E73] hover:cursor-pointer">
       
          {path}
    
    </button>
  );
};

export default LinkButton;
