import React, { useEffect, useState } from "react";
import {
  GetProfileInfo,
  SelectProfile,
} from "../../core/services/api/UserPanel/GetProfileInfo";
import { loginAPI } from "../../core/services/api/auth";
import { NavLink, useNavigate } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Gallery = () => {
  const [data, setData] = useState([]);

  const getList = async () => {
    const item = await GetProfileInfo();
    setData(item.userImage);
  };
  useEffect(() => {
    getList();
  }, []);

  const [id, setId] = useState([""]);

  const SaveID = async (values) => {
    console.log(values, "values");
    setId(values);
    console.log(id, "id");
  };

  const AddSelectProfile = async (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("ImageId", id);

    const user = await SelectProfile(formData);

    if (user.success === true) {
        toast.success('!   پروفایل با موفقیت اضافه شد', { position: toast.POSITION.TOP_RIGHT });
         setTimeout(() => {
            navigate("/panel/editprofile")
         }, 1500);
      }
      else{
          // alert("وارد نشدین")
          toast.error('!  پروفایل با موقیت اضافه نشد ', { position: toast.POSITION.TOP_RIGHT });
      }
  };

  const navigate = useNavigate();

  return (
    <>
      <NavLink to={"/panel/editprofile"} className="mr-10 mt-5">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
        
      </NavLink>
      <div className="grid grid-cols-2 gap-4 mt-[50px]">
        {data.map((img, index) => (
          <div key={index} className="mb-4">
            <img
              src={img.puctureAddress}
              alt={img.id}
              className="w-full h-auto"
            />
            <p
              className="block mt-2 text-center"
              onClick={() => SaveID(img.id)}
            >
              {img.id}
            </p>
          </div>
        ))}
      </div>

      <form onSubmit={AddSelectProfile}>
        <div className="border flex border-transparent justify-center items-center mt-5 mb-10 relative">
        <ToastContainer className={"top-[-500px] right-[-300px] absolute"} position="" /> 

          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            ثبت برای پروفایل
          </button>
        </div>
      </form>
    </>
  );
};

export { Gallery };
