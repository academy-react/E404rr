import { useState , useEffect } from 'react'
import registerImg from '../../assets/img/registerImg.png'
import RegisterEmail from '../../components/Register/RegisterEmail'
import RegisterPhone from '../../components/Register/RegisterPhone'
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from 'react-router-dom';
import { Field , Form , Formik ,ErrorMessage } from 'formik';
import { SignAPISetFirst } from '../../core/services/api/signSetFirst';
import { SignAPISetTwo } from '../../core/services/api/signsettwo';
import { SignAPISetThere } from '../../core/services/api/signSetThere';

const Register = () => {
  const [phone, setPhone] = useState(true)
  const [phoneNumber, setPhoneNumber] = useState()
  const handlePhone = () => {
    setPhone(!phone)
    console.log("hello")
  }


  const SignUser = async (values) => {
    console.log(values);
    const userObj = {
   
        phoneNumber: values.phone 
      
  
    };
    setPhoneNumber(values.phone)
  
    const user = await SignAPISetFirst(userObj); 

    console.log(user , "userrr");


  }

  const SignTwo = async (values) => {
    const CodeObj = {
  
         phoneNumber : values.phone ,
         verifyCode: values.code
  
    }


    const user2 = await SignAPISetTwo(CodeObj) 


    console.log(user2 , "user doooo");
  }


  const SignThery = async (values) => {
    const CodeObj = {
  
      password: values.password ,
      gmail: values.gmail,
      phoneNumber: values.phone
  
    }


    const user3 = await SignAPISetThere(CodeObj) 


    console.log(user3 , "user doooo");
  }
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);



  return (
    <div className='flex items-center justify-center mx-auto h-screen font-vazir text-dark-blue' data-aos="fade-up">
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
            
             <RegisterPhone handlePhone={handlePhone}  SignUser={SignUser} /> 
            
            
            
            
            
            
            
            
            
            
            
            
            
            : <RegisterEmail/>} */}

        <Formik  onSubmit={SignUser}    initialValues={{ phone: '' }} >
                <Form>
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
              </Formik>




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