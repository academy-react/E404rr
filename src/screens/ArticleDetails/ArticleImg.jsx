import React from "react";
import img from "../../assets/img/ArticleDetails/Article.png";
import { PostAddFiverNews } from "../../core/services/api/PostAddFaiverit";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ArticleImg = ({title , currentView , id , currentImageAddressTumb}) => {

  const UserId = useParams().id;
  const AddFaiNews = async () => {
    console.log();
    const userObj = {
      NewsId: UserId
    };

  
    const user = await PostAddFiverNews(userObj);
    if (user.success === true) {
      toast.success('! ثبت موفق آمیز', { position: toast.POSITION.TOP_RIGHT });
       setTimeout(() => {
        navigate("/")
       }, 1500);
    }
    else{
        // alert("وارد نشدین")
        toast.error('! ثبت ناموفق ', { position: toast.POSITION.TOP_RIGHT });
    }
  }
  return (
    <div className="text-[#323E73]" data-aos="fade-up">
      <div>
        <ToastContainer/>
        <img className="rounded-3xl max-w-[888px] h-[350px] " src={img} alt="" />
        <div className="flex items-center justify-between px-14 mt-8  bg-gradient-to-bl from-[#f3fcf8] to-white rounded-2xl   ">
          {/* <p className="text-lg  px-6 py-4 font-bold ">الگوریتم چیست ؟</p> */}
          <p className="text-lg  px-6 py-4 font-bold ">{title}</p>

          <p className="flex items-center  px-6 py-4  ">
            {/* <p className="mx-2">300</p> */}
            <p className="mx-2">{currentView}</p>

            <svg
              className="w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </p>
        </div>
      </div>
      <div className="border rounded-lg  w-[180px] text-center mx-auto mt-5 py-3" onClick={AddFaiNews}>
              افزودن به خبر مورد علاقه
      </div>
    </div>
  );
};

export default ArticleImg;
