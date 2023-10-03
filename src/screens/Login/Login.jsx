import { useState } from 'react'
import loginImg from '../../assets/img/loginImg.png'
import openEye from '../../assets/img/openEye.png'
import closedEye from '../../assets/img/closedEye.png'
import FormInput from '../../components/common/FormInput'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Login = () => {
  const [passVisible, setPassVisible] = useState(false)
  const togglePass = () => {
    setPassVisible(!passVisible)
  }

  const validation = yup.object({
    email: yup.string().email("ایمیل وارد شده نادرست است.").required("Required"),
    password: yup.string()
    .required("Required")
    .min(8, "اندازه رمز کوتاه است, حداقل ۸ حرف باشد.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "رمز باید شامل حداقل یک حرف کوچک, یک حرف بزرگ, یک عدد و یک حرف خاص باشد."
    )
  })

  return (
    <div className='flex items-center justify-center mx-auto h-screen font-vazir text-dark-blue'>
      <div className="w-full md:w-max bg-[url('assets/img/background.png')] bg-cover p-4 mx-6 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row lg:gap-16 mx-6">
          <Formik 
            initialValues={{ email: '', password: '' }}
            onSubmit={() => alert('form submited')}
            validationSchema={validation}>
            <div className="flex flex-col justify-center text-center min-w-[15rem]">
              <div className="bg-lighter-green/[.65] flex flex-row gap-4 mx-auto my-4 px-2 py-2 rounded-3xl">
                <a href='register' className='px-5 py-1 rounded-2xl'>ثبت نام</a>
                <a href='login' className='bg-white shadow-md shadow-gray-300 px-5 py-1 rounded-2xl'>ورود کاربر</a>
              </div>

              <p className="m-9 text-xl">وارد حساب کاربری خود شوید</p>

              <Form>
                <div className="relative lg:w-[25rem]">
                  <Field name='email' type="text" placeholder='ایمیل' component={FormInput} />
                </div>
                <ErrorMessage name='email' component={'p'} className='text-danger max-w-[25rem]' />

                <div className='relative lg:w-[25rem]'>
                  <Field name='password' type={passVisible?'text':'password'} placeholder='رمز' component={FormInput} />
                  <span onClick={togglePass} className='absolute left-2 top-1/2 -translate-y-1/2'>
                    <img src={passVisible?closedEye:openEye} alt="" className='w-6 h-6' />
                  </span>
                </div>
                <ErrorMessage name='password' component={'p'} className='text-danger max-w-[25rem]' />

                <div className='flex justify-end mt-5 text-darker-green underline font-semibold'>
                  <a href="#">پسورد را فراموش کردم</a>
                </div>

                <button type='submit' className='bg-lighter-green/[.65] w-24 mx-auto mt-12 py-2 rounded-lg' >ورود</button>
              </Form>

              <div className='flex justify-between mt-5 text-darker-green underline font-semibold'>
                <a href="#">بازگشت به صفحه اصلی</a>
                <a href="#">ورود کارمندان</a>
              </div>

            </div>
          </Formik>

          <div className="image-container shrink-0">
            <img src={loginImg} alt="image not found" className='hidden md:scale-75 lg:scale-100 md:block' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
