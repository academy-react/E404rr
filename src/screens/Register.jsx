import { useState } from 'react'
import registerImg from '../assets/img/registerImg.png'
import openEye from '../assets/img/openEye.png'
import closedEye from '../assets/img/closedEye.png'

const Register = () => {
  const [passVisible1, setPassVisible1] = useState(false)
  const [passVisible2, setPassVisible2] = useState(false)

  const togglePass1 = () => {
    setPassVisible1(!passVisible1)
  }
  const togglePass2 = () => {
    setPassVisible2(!passVisible2)
  }

  return (
    <div className='flex items-center justify-center mx-auto h-screen font-vazir text-dark-blue'>
      <div className="w-full md:w-max bg-[url('assets/img/background.png')] bg-cover p-4 mx-6 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:gap:5 lg:gap-12 md:flex-row mx-6">
          <div className="flex flex-col justify-center text-center min-w-[15rem]">
            <div className="bg-lighter-green/[.65] flex flex-row gap-4 mx-auto my-4 px-2 py-2 rounded-3xl">
              <a href='register' className='bg-white shadow-md shadow-gray-300 px-5 py-1 rounded-2xl'>ثبت نام</a>
              <a href='login' className='px-5 py-1 rounded-2xl'>ورود کاربر</a>
            </div>
            <p className="m-9 text-xl">حساب کاربری خود را ایجاد کنید</p>
            <div className="relative">
              <input type="email" placeholder='ایمیل' className='focus:outline-none w-full lg:w-[25rem] mx-2 my-3 px-6 py-2 shadow-md shadow-gray-200 rounded-lg placeholder-darker-green' />
            </div>
            <div className='relative'>
              <input type={passVisible1?'text':'password'} placeholder='رمز' className='focus:outline-none w-full lg:w-[25rem] mx-2 my-3 px-6 py-2 shadow-md shadow-gray-200 rounded-lg placeholder-darker-green' />
              <span onClick={togglePass1} className='absolute left-4 top-1/2 -translate-y-1/2'>
                <img src={passVisible1?closedEye:openEye} alt="" className='w-6 h-6' />
              </span>
            </div>
            <div className='relative'>
              <input type={passVisible2?'text':'password'} placeholder='تکرار رمز' className='focus:outline-none w-full lg:w-[25rem] mx-2 my-3 px-6 py-2 shadow-md shadow-gray-200 rounded-lg placeholder-darker-green' />
              <span onClick={togglePass2} className='absolute left-4 top-1/2 -translate-y-1/2'>
                <img src={passVisible2?closedEye:openEye} alt="" className='w-6 h-6' />
              </span>
            </div>
            <button type='submit' className='bg-[rgba(130,216,185,.65)] w-24 mx-auto mt-12 py-2 rounded-lg' >ثبت نام</button>
            <div className='flex justify-between mt-5 text-darker-green underline font-semibold'>
              <a href="#">بازگشت به صفحه اصلی</a>
              <a href="#">ورود کارمندان</a>
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
