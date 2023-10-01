import { useState } from 'react'
import loginImg from '../assets/img/loginImg.png'
import openEye from '../assets/img/openEye.png'
import closedEye from '../assets/img/closedEye.png'

const Login = () => {
  const [passVisible, setPassVisible] = useState(false)
  const togglePass = () => {
    setPassVisible(!passVisible)
  }

  return (
    <div className='flex items-center justify-center mx-auto h-screen font-vazir text-[rgb(50, 62, 115)]'>
        <div className="w-full md:w-max bg-[url('assets/img/background.png')] bg-cover p-4 mx-6 rounded-2xl overflow-hidden">
            <div className="flex flex-col md:gap:5 lg:gap-12 md:flex-row mx-6">
                <div className="flex flex-col justify-center text-center min-w-[15rem]">
                    <div className="bg-[rgba(130,216,185,.65)] flex flex-row gap-4 mx-auto my-4 px-2 py-2 rounded-3xl">
                        <a href='register' className='px-5 py-1 rounded-2xl'>ثبت نام</a>
                        <a href='login' className='bg-white shadow-md shadow-gray-300 px-5 py-1 rounded-2xl'>ورود کاربر</a>
                    </div>
                    <p className="m-9 text-xl">وارد حساب کاربری خود شوید</p>
                    <div className="relative">
                      <input type="text" placeholder='ایمیل' className='focus:outline-none w-full lg:w-[25rem] mx-2 my-3 px-6 py-2 shadow-md shadow-gray-200 rounded-lg' />
                    </div>
                    <div className='relative'>
                        <input type={passVisible?'text':'password'} placeholder='رمز' className='focus:outline-none w-full lg:w-[25rem] mx-2 my-3 px-6 py-2 shadow-md shadow-gray-200 rounded-lg' />
                        <span onClick={togglePass} className='absolute left-4 top-1/2 -translate-y-1/2'>
                          <img src={passVisible?closedEye:openEye} alt="" className='w-6 h-6' />
                        </span>
                    </div>
                    <div className='flex justify-end mt-5 text-[rgb(35,164,85)] underline font-semibold'>
                        <a href="#">پسورد را فراموش کردم</a>
                    </div>
                    <button type='submit' className='bg-[rgba(130,216,185,.65)] w-24 mx-auto mt-12 py-2 rounded-lg' >ورود</button>
                    <div className='flex justify-between mt-5 text-[rgb(130,216,185)] underline font-semibold'>
                        <a href="#">بازگشت به صفحه اصلی</a>
                        <a href="#">ورود کارمندان</a>
                    </div>
                </div>
                <div className="image-container shrink-0">
                    <img src={loginImg} alt="image not found" className='hidden md:scale-75 lg:scale-100 md:block' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
