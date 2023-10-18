import { useState } from 'react'
import openEye from '../../assets/img/openEye.png'
import closedEye from '../../assets/img/closedEye.png'
import FormInput from '../common/FormInput'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const RegisterEmail = ({ handlePhone }) => {
  const validation = yup.object({
    email: yup.string().email("ایمیل وارد شده نادرست است.").required("لطفا پر کنید."),
    password: yup.string()
    .required("لطفا پر کنید.")
    .min(8, "اندازه رمز کوتاه است, حداقل ۸ حرف باشد.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "رمز باید شامل حداقل یک حرف کوچک, یک حرف بزرگ, یک عدد و یک حرف خاص باشد."
    ),
    passRepeat: yup.string()
    .required("لطفا پر کنید.")
    .oneOf([yup.ref('password'), null], 'رمز و تکرار رمز باید یکی باشند.')
  })

  const [passVisible1, setPassVisible1] = useState(false)
  const [passVisible2, setPassVisible2] = useState(false)

  const togglePass1 = () => {
    setPassVisible1(!passVisible1)
  }
  const togglePass2 = () => {
    setPassVisible2(!passVisible2)
  }

  return (
    <Formik 
      initialValues={{ email: '', password: '', passRepeat: '' }}
      onSubmit={handlePhone}
      validationSchema={validation}>

        <Form>
          <p className="m-9 text-xl">حساب کاربری خود را ایجاد کنید</p>

          <div className="relative pb-4 lg:w-[25rem]">
            <Field name='email' type="email" placeholder='ایمیل' component={FormInput} />
            <div className="relative">
              <ErrorMessage name='email' component={'p'} className='absolute -top-4 text-center text-danger w-full' />
            </div>
          </div>

          <div className='relative pb-4 lg:w-[25rem]'>
            <div className="relative">
              <Field name='password' type={passVisible1?'text':'password'} placeholder='رمز' component={FormInput} />
              <span onClick={togglePass1} className='absolute left-2 top-1/2 -translate-y-1/2'>
                <img src={passVisible1?closedEye:openEye} alt="" className='w-6 h-6' />
              </span>
            </div>
            <div className="relative">
              <ErrorMessage name='password' component={'p'} className='absolute -top-4 text-center text-danger w-full' />
            </div>
          </div>

          <div className='relative pb-4 lg:w-[25rem]'>
            <div className="relative">
              <Field name='passRepeat' type={passVisible2?'text':'password'} placeholder='تکرار رمز' component={FormInput} />
              <span onClick={togglePass2} className='absolute left-2 top-1/2 -translate-y-1/2'>
                <img src={passVisible2?closedEye:openEye} alt="" className='w-6 h-6' />
              </span>
            </div>
            <div className="relative">
              <ErrorMessage name='passRepeat' component={'p'} className='absolute -top-4 text-center text-danger w-full' />
            </div>
          </div>

          <button type='submit' className='bg-[rgba(130,216,185,.65)] w-24 mx-auto mt-12 py-2 rounded-lg' >بعدی</button>
        </Form>
    </Formik>
  )
}

export default RegisterEmail
