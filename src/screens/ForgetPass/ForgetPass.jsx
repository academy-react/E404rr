import React from 'react'
import forgetImg from '../../assets/img/forgetImg.png'
import FormInput from '../../components/common/FormInput'

import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { NavLink } from 'react-router-dom'
import { ForgetAPISetFirst } from '../../core/services/api/ForGetPassword'

const ForgetPass = () => {
  const validation = yup.object({
    email: yup.string().email("ایمیل وارد شده نادرست است.").required("لطفا پر کنید."),
  })



  const ForgetPassword = async (values) => {

    const userObj = {
      email: values.email,
      baseUrl : "http://localhost:5173/forget"
    }
    const user = await ForgetAPISetFirst(userObj)
}

// const SignUser = async (values) => {

//   const userObj = {
 
//     phoneNumber: values.phone 
  

// };
//   setPhoneNumber(values.phone)
// }



// const SignUser = async (values) => {

//   const userObj = {
 
//     phoneNumber: values.phone 
  

// };

  return (
    <div className='flex items-center justify-center mx-auto h-screen font-vazir text-dark-blue'>
      <Formik 
        initialValues={{ email: '' }}
        onSubmit={ForgetPassword}
        validationSchema={validation}>
        <Form>
          <div className="w-full md:w-max bg-[url('assets/img/backgroundForget.png')] bg-cover flex flex-col text-center p-4 mx-6 rounded-2xl overflow-hidden">
            <div className="image-container mt-32">
              <img src={forgetImg} alt="" className='mx-auto' />
            </div>

            <p className="m-12 text-3xl font-semibold">فراموشی رمز عبور</p>
            <div className="relative">
              <Field name='email' type="email" placeholder='ایمیل خود را وارد کنید' component={FormInput} />
              <ErrorMessage name='email' component={'p'} className='absolute text-center text-danger w-full' />
            </div>

            <button type='submit' className='bg-lighter-green/[.65] text-dark-blue/95 mx-auto mt-16 px-6 py-2 rounded-lg' > ثبت</button>

            <NavLink to="/" className='block mt-10 text-darker-green underline font-semibold'>بازگشت به صفحه اصلی</NavLink>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default ForgetPass
