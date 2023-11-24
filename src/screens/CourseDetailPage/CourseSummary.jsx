import React from "react";
import { PostAddFiver } from "../../core/services/api/PostAddFaiverit";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CourseSummary = () => {

  const UserId = useParams().id;

  const AddFai = async () => {
    const userObj = {
      
        courseId: UserId
      
    }
    const user = await PostAddFiver(userObj);
    if (user.success === 200) {
      toast.success('! با موفقیت اضافه شد', { position: toast.POSITION.TOP_RIGHT });
    }
    else{
        // alert("وارد نشدین")
        toast.error( '!  اضافه نشد : ', { position: toast.POSITION.TOP_RIGHT });
    }
  };

  return (
    <>
               <ToastContainer  className="absolute"/> 
               <div>
  
  <div className="leading-10 border-2 border-[#ccc] rounded-3xl px-8 py-6 mt-8">
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
    از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
    سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
    متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
    درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
    نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
    خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
    داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
    رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
    پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
  </div>
  <button onClick={AddFai} type="submit" className="flex items-center gap-2 mt-6 bg-[#609fa2] px-6 py-4 rounded-2xl w-[250px] mr-10">
    <svg
      className="w-7"
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
          d="M14.5 10.6499H9.5"
          stroke="#fff"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <path
          d="M12 8.20996V13.21"
          stroke="#fff"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <path
          d="M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z"
          stroke="#fff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>
    </svg>
    <p className="text-white">افزودن به علاقه مندی ها</p>
  </button>
</div>
    </>

  );
};

export default CourseSummary 
