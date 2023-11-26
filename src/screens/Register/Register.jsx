import { useState , useEffect } from 'react'
import registerImg from '../../assets/img/registerImg.png'
import RegisterEmail from '../../components/Register/RegisterEmail'
import RegisterPhone from '../../components/Register/RegisterPhone'
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { Field , Form , Formik ,ErrorMessage } from 'formik';
import { SignAPISetFirst } from '../../core/services/api/signSetFirst';
import { SignAPISetTwo } from '../../core/services/api/signsettwo';
import { SignAPISetThere } from '../../core/services/api/signSetThere';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup'


const Register = () => {
  const [phone, setPhone] = useState(true)
  const [phoneNumber, setPhoneNumber] = useState("")
  const handlePhone = () => {
    setPhone(!phone)
    console.log("hello")
  }


  // const SignUser = async (values) => {

  //   console.log(values);
  //   const userObj = {
   
  //       phoneNumber: values.phone 
      
  
  //   };
  //     setPhoneNumber(values.phone)
   
  //   const user = await SignAPISetFirst(userObj); 

  //   console.log(user , "userrr");


  // }

  // const SignTwo = async (values) => {
  //   const CodeObj = {
  
  //        phoneNumber : phoneNumber ,
  //        verifyCode: values.code
  
  //   }


  //   const user2 = await SignAPISetTwo(CodeObj) 


  //   console.log(user2 , "user doooo");
  // }


  // const SignThery = async (values) => {
  //   const CodeObj = {
  
  //     password: values.password ,
  //     gmail: values.gmail,
  //     phoneNumber : phoneNumber ,
  
  //   }


  //   const user3 = await SignAPISetThere(CodeObj) 


  //   console.log(user3 , "user doooo");
  // }
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const navigate = useNavigate();


  const [currentStep, setCurrentStep] = useState(1);

  const SignUser = async (values, { setSubmitting }) => {

    const userObj = {
   
      phoneNumber: values.phone 
    

  };
    setPhoneNumber(values.phone)
 
  const user = await SignAPISetFirst(userObj); 

  console.log(user , "userrr");

    // لاگیک مربوط به ثبت اطلاعات فرم اول
    setCurrentStep(2);
    setSubmitting(false);
  };

  const SignTwo = async (values, { setSubmitting }) => {

    const CodeObj = {
  
      phoneNumber : phoneNumber ,
      verifyCode: values.code

 }


 const user2 = await SignAPISetTwo(CodeObj) 


 console.log(user2 , "user doooo");
    // لاگیک مربوط به ثبت اطلاعات فرم دوم
    setCurrentStep(3);
    setSubmitting(false);
  };

  const SignThree = async(values, { setSubmitting }) => {
    // لاگیک مربوط به ثبت اطلاعات فرم سوم

    const CodeObj = {
  
      password: values.password ,
      gmail: values.gmail,
      phoneNumber : phoneNumber ,
  
    }


    const user = await SignAPISetThere(CodeObj) 


    console.log(user , "user doooo");
    setSubmitting(false);
    // می‌توانید اینجا کدی برای پس از ثبت نهایی انجام دهید

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


  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validation = yup.object({
    phone: yup.string().required("لطفا پر کنید.").matches( phoneRegExp ,'.شماره تلفن نادرست است.'),

  })

  const validation2 = yup.object({
    code: yup.string().required("لطفا پر کنید.")

  })

  const validation3 = yup.object({
    gmail: yup.string()
    .email("ایمیل وارد شده نادرست است.")
    .required("لطفا پر کنید."),
     password: yup.string()
    .required("لطفا پر کنید.")
    .min(8, "اندازه رمز کوتاه است, حداقل ۸ حرف باشد.")
   .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "رمز باید شامل حداقل یک حرف کوچک, یک حرف بزرگ, یک عدد و یک حرف خاص باشد."
  )

  })


  return (
    <div className='flex items-center justify-center mx-auto h-screen font-vazir text-dark-blue ' data-aos="fade-up">
         <ToastContainer /> 
      <div className="w-full md:w-max bg-[url('assets/img/background.png')] bg-cover p-4 mx-6 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:gap:5 lg:gap-12 md:flex-row mx-6">
          <div className="flex flex-col justify-center text-center min-w-[15rem]">
            <div className="bg-lighter-green/[.65] flex flex-row gap-4 mx-auto my-4 px-2 py-2 rounded-3xl">
              <NavLink to='/register' className='bg-white shadow-md shadow-gray-300 px-5 py-1 rounded-2xl'>ثبت نام</NavLink>
              <NavLink to='/login' className='px-5 py-1 rounded-2xl'>ورود کاربر</NavLink>
            </div>
            {/* {phone? 
            
            
            
            
            
              // <Formik      initialValues={{ phone: '' }}  onSubmit={SignTwo}>
              //   <Form>

              //     <>
                  
              //     <Field 
              //   name="phone"
              //   type="text"
              //   placeholder="شماره تلفن همراه" 
              // />

              //   <button type="submit" className='border'> submit</button>
              //     </>

         
              //   </Form>

                  
              // </Formik>
            
            //  <RegisterPhone handlePhone={handlePhone}  SignUser={SignUser} /> 
            
            
            
            
            
            
            
            
            
            
            
            
            
            : <RegisterEmail/>} */}

        {/* <Formik  onSubmit={SignUser}    initialValues={{ phone: '' }} >
                <Form>
                  <p>hi : </p>
                  <label htmlFor="phoneNumber">شماره تلفن:</label>
                  <Field type="tel" id="phoneNumber" name="phone" />
                  <ErrorMessage name="phoneNumber" component="div" />

                  <button type="submit">ثبت</button>
                </Form>
              </Formik>


              <Formik  onSubmit={SignTwo}    initialValues={{ code: '' , phone: phoneNumber}} >
                <Form>
                  <label htmlFor="code"> کد تایید:</label>
                  <Field type="tel" id="code" name="code" />
                  <ErrorMessage name="code" component="div" />

                  <button type="submit">ثبت</button>
                </Form>
              </Formik>

              <Formik  onSubmit={SignThery}    initialValues={{ code: '' , gmail: "" , phone: phoneNumber }} >
                <Form>
                  <label htmlFor="gmail"> جیمیل</label>
                  <Field type="tel" id="gmail" name="gmail" />
                  <ErrorMessage name="gmail" component="div" />

                  <label htmlFor="password"> رمز</label>
                  <Field type="tel" id="password" name="password" />
                  <ErrorMessage name="password" component="div" />

                  <button type="submit">ثبت</button>
                </Form>
              </Formik> */}

<div>
{/* //  <RegisterPhone handlePhone={handlePhone}  SignUser={SignUser} />  */}
      {currentStep === 1 && (
        <Formik onSubmit={SignUser} initialValues={{ phone: '' }}    validationSchema={validation}>
          <Form>
            <label htmlFor="phoneNumber">شماره تلفن:</label>
            <Field type="tel" id="phoneNumber" name="phone"  placeholder="شماره تلفن خود را وارد کنید..."   dir="rtl"     
             className="focus:outline-none caret-green-600   focus:placeholder:opacity-0 w-full mx-2 my-4 px-6 py-2 shadow-md shadow-gray-200 rounded-lg placeholder-darker-green"
            />
            <ErrorMessage name="phone" component="p"
              className='absolute  text-danger max-w-[25rem]' />
            <button type="submit" className='bg-lighter-green/[.65] w-24 mx-auto mt-12 py-2 rounded-lg'>ثبت</button>
          </Form>
        </Formik>
      )}

      {currentStep === 2 && (
        <Formik onSubmit={SignTwo} initialValues={{ code: '', phone: phoneNumber }}  validationSchema={validation2}>
          <Form>
            <label htmlFor="code"> کد تایید:</label>
            <Field type="tel" id="code" name="code" dir="rtl" placeholder={"کد تایید را وارد کنید"}        
            className="focus:outline-none focus:placeholder:opacity-0 w-full mx-2 my-4 px-6 py-2 caret-green-600 shadow-md shadow-gray-200 rounded-lg placeholder-darker-green"
              />
            <ErrorMessage name="code" component="p" 
              className='absolute  text-danger max-w-[25rem]' />
            <button type="submit"  className='bg-lighter-green/[.65] w-24 mx-auto mt-12 py-2 rounded-lg'>ثبت</button>
          </Form>
        </Formik>
      )}

      {currentStep === 3 && (
        <Formik onSubmit={SignThree}  validationSchema={validation3} initialValues={{ password: '', gmail: '', phone: phoneNumber }}>
          <Form>
          <label htmlFor="gmail"> جیمیل</label>
            <Field type="tel" id="gmail" name="gmail"  dir="rtl" placeholder={"ایمیل خود را وارد کنید"}
             className="focus:outline-none caret-green-600 block focus:placeholder:opacity-0 w-full mx-2 my-4 px-6 py-2 shadow-md shadow-gray-200 rounded-lg placeholder-darker-green"
           />
            <ErrorMessage name="gmail" component="p" 
              className='absolute  text-danger max-w-[25rem]' />

            <label htmlFor="password"> رمز</label>
            <Field type="tel" id="password" name="password" placeholder={"رمز خود را وارد کنید"} dir="rtl"      
             className="focus:outline-none caret-green-600 focus:placeholder:opacity-0 w-full mx-2 my-4 px-6 py-2 shadow-md shadow-gray-200 rounded-lg placeholder-darker-green"
            />
            <ErrorMessage name="password" component="p"
              className='absolute  text-danger max-w-[25rem]'  />

            <button type="submit "  className='bg-lighter-green/[.65] w-24 mx-auto mt-12 py-2 rounded-lg'>ثبت</button>
          </Form>
        </Formik>
      )}
    </div>



              <div className='flex justify-between mt-5 text-darker-green underline font-semibold'>
              <NavLink to="/">بازگشت به صفحه اصلی</NavLink>
              </div>
            </div>

          <div className="image-container shrink-0">
            <img src={registerImg} alt="image not found" className='hidden md:scale-75 lg:scale-100 md:block' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register