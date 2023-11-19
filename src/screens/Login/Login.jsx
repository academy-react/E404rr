import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import loginImg from "../../assets/img/loginImg.png";
import LoginEmail from "../../components/Login/LoginEmail";
import LoginPhone from "../../components/Login/LoginPhone";
import { loginAPI } from "../../core/services/api/auth";
import { useEffect } from "react";
import { setItem } from "../../core/services/common/storage.services.js";
import { getProfile } from "../../core/services/api/user.js";
import openEye from "../../assets/img/openEye.png";
import closedEye from "../../assets/img/closedEye.png";
import FormInput from "../../components/common/FormInput.jsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [phone, setPhone] = useState(false);
  const handlePhone = () => {
    setPhone(!phone);
  };

  const loginUser = async (values) => {
    console.log(values);
    const userObj = {
      phoneOrGmail: values.phoneOrGmail,
      password: values.password,
      rememberMe: true,
    };

  
    const user = await loginAPI(userObj);

    console.log(user.token);
    setItem("token", user.token);
    if (user.success === true) {
      toast.success('! ورود موفق آمیز', { position: toast.POSITION.TOP_RIGHT });
       setTimeout(() => {
        navigate("/")
       }, 1500);
    }
    else{
        // alert("وارد نشدین")
        toast.error('! ورود ناموفق ', { position: toast.POSITION.TOP_RIGHT });
    }
  };

  const navigate = useNavigate();

  // const getProfileFunc = async () => {
  //   const user = await getProfile(user);
  //   console.log(user);
  // };
  // useEffect(() => {
  //   loginUser();
  //   getProfileFunc();
  // }, []);



  const validation = yup.object({
    phoneOrGmail: yup
      .string()
      .email("ایمیل وارد شده نادرست است.")
      .required("لطفا پر کنید."),
    password: yup
      .string()
      .required("لطفا پر کنید.")
      .min(8, "اندازه رمز کوتاه است, حداقل ۸ حرف باشد."),
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //   "رمز باید شامل حداقل یک حرف کوچک, یک حرف بزرگ, یک عدد و یک حرف خاص باشد."
    // )
  });

  const [passVisible, setPassVisible] = useState(false);
  const togglePass = () => {
    setPassVisible(!passVisible);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (

    
      <>

            <ToastContainer />
            <div className="flex items-center justify-center mx-auto h-screen font-vazir text-dark-blue"   data-aos="fade-up">
      <div className="w-full md:w-max bg-[url('assets/img/background.png')] bg-cover p-4 mx-6 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row lg:gap-16 mx-6">
          <div className="flex flex-col justify-center text-center min-w-[15rem]">
            <div className="bg-lighter-green/[.65] flex flex-row gap-4 mx-auto my-4 px-2 py-2 rounded-3xl">
              <NavLink to="/register" className="px-5 py-1 rounded-2xl">
                ثبت نام
              </NavLink>
              <NavLink
                to="/login"
                className="bg-white shadow-md shadow-gray-300 px-5 py-1 rounded-2xl"
              >
                ورود کاربر
              </NavLink>
            </div>

            {phone ? (
              <LoginPhone />



          // login with email 
            ) : (


              // <LoginEmail handlePhone={handlePhone} onSubmit={loginUser} />

                  <Formik
      initialValues={{ phoneOrGmail: "", password: "" , rememberMe: "" }}
      onSubmit={loginUser}
      validationSchema={validation}
    >
      <Form>
        <p className="m-9 text-xl">وارد حساب کاربری خود شوید</p>
        <div className="relative pb-4 lg:w-[25rem]">
          <Field
            name="phoneOrGmail"
            type="text"
            placeholder="ایمیل"
            // component={FormInput}
            // value={Formik.value.phoneOrGmail}
            className="focus:outline-none focus:placeholder:opacity-0 w-full mx-2 my-4 px-6 py-2 shadow-md shadow-gray-200 rounded-lg placeholder-darker-green"

          />
          <ErrorMessage
            name="phoneOrGmail"
            component={"p"}
            className="absolute bottom-0 right-1/2 translate-x-1/2 text-danger max-w-[25rem]"
          />
        </div>

        <div className="relative pb-4 lg:w-[25rem]">
          <div className="relative">
            <Field
              name="password"
              type={passVisible ? "text" : "password"}
              placeholder="رمز"
              // component={FormInput}
              className="focus:outline-none focus:placeholder:opacity-0 w-full mx-2 my-4 px-6 py-2 shadow-md shadow-gray-200 rounded-lg placeholder-darker-green"

              // value={Formik.value.password}
            />
            <span
              onClick={togglePass}
              className="absolute left-2 top-1/2 -translate-y-1/2"
            >
              <img
                src={passVisible ? closedEye : openEye}
                alt=""
                className="w-6 h-6"
              />
            </span>
          </div>
          <div className="relative">
            <ErrorMessage
              name="password"
              component={"p"}
              className="absolute -top-4 text-center text-danger w-full"
            />
          </div>
        </div>

        <div className="flex justify-between mt-5 text-darker-green font-semibold">
          <span onClick={handlePhone} className="cursor-pointer">
            ورود با شماره تلفن
          </span>
          <NavLink to="/forget">پسورد را فراموش کردم</NavLink>
        </div>

        <button
          type="submit"
          className="bg-lighter-green/[.65] w-24 mx-auto mt-12 py-2 rounded-lg"
        >
          ورود
        </button>
      </Form>
    </Formik>



            )}

            <div className="flex justify-between mt-5 text-darker-green underline font-semibold">
              <NavLink to="/">بازگشت به صفحه اصلی</NavLink>
              <NavLink to="/">ورود کارمندان</NavLink>
            </div>
          </div>
          <div className="image-container shrink-0">
            <img
              src={loginImg}
              alt="image not found"
              className="hidden md:scale-75 lg:scale-100 md:block"
            />
          </div>
        </div>
      </div>
    </div>
      </>
  );
};

export default Login;
