import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import openEye from '../../assets/img/openEye.png'
import closedEye from '../../assets/img/closedEye.png'
import FormInput from '../common/FormInput'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const LoginEmail = ({ handlePhone }) => {
  const validation = yup.object({
    email: yup.string().email("ایمیل وارد شده نادرست است.").required("لطفا پر کنید."),
    password: yup.string()
    .required("لطفا پر کنید.")
    .min(8, "اندازه رمز کوتاه است, حداقل ۸ حرف باشد.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "رمز باید شامل حداقل یک حرف کوچک, یک حرف بزرگ, یک عدد و یک حرف خاص باشد."
    )
  })

  const [passVisible, setPassVisible] = useState(false)
  const togglePass = () => {
    setPassVisible(!passVisible)
  }

  return (
    <Formik 
    initialValues={{ email: '', password: '' }}
    onSubmit={() => alert('form submited')}
    validationSchema={validation}>


      <Form>
        <p className="m-9 text-xl">وارد حساب کاربری خود شوید</p>
        <div className="relative pb-4 lg:w-[25rem]">
          <Field name='email' type="text" placeholder='ایمیل' component={FormInput} />
          <ErrorMessage name='email' component={'p'} className='absolute bottom-0 right-1/2 translate-x-1/2 text-danger max-w-[25rem]' />
        </div>

        <div className='relative pb-4 lg:w-[25rem]'>
          <div className="relative">
            <Field name='password' type={passVisible?'text':'password'} placeholder='رمز' component={FormInput} />
            <span onClick={togglePass} className='absolute left-2 top-1/2 -translate-y-1/2'>
              <img src={passVisible?closedEye:openEye} alt="" className='w-6 h-6' />
            </span>
          </div>
          <div className="relative">
            <ErrorMessage name='password' component={'p'} className='absolute -top-4 text-center text-danger w-full' />
          </div>
        </div>

        <div className='flex justify-between mt-5 text-darker-green font-semibold'>
          <span onClick={handlePhone} className='cursor-pointer'>ورود با شماره تلفن</span>
          <NavLink to="/forget">پسورد را فراموش کردم</NavLink>
        </div>

        <button type='submit' className='bg-lighter-green/[.65] w-24 mx-auto mt-12 py-2 rounded-lg' >ورود</button>
      </Form>
    </Formik>
  )
}

export default LoginEmail
