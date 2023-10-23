import { NavLink, Outlet } from "react-router-dom";
import { useState } from 'react'
import registerImg from '../../assets/img/registerImg.png'
import RegisterEmail from '../../components/Register/RegisterEmail'
import RegisterPhone from '../../components/Register/RegisterPhone'

const Register = () => {
  const [phone, setPhone] = useState(false)
  const handlePhone = () => {
    setPhone(!phone)
  }

  return (
    <div className='flex items-center justify-center mx-auto h-screen font-vazir text-dark-blue'>
      <div className="w-full md:w-max bg-[url('assets/img/background.png')] bg-cover p-4 mx-6 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:gap:5 lg:gap-12 md:flex-row mx-6">
          <div className="flex flex-col justify-center text-center min-w-[15rem]">
            <div className="bg-lighter-green/[.65] flex flex-row gap-4 mx-auto px-2 py-2 rounded-3xl">
              <NavLink to='/register' className='shadow-md shadow-gray-300 bg-white px-5 py-1 rounded-2xl'>ثبت نام</NavLink>
              <NavLink to='/login' className='px-5 py-1 rounded-2xl'>ورود کاربر</NavLink>
            </div>
              {phone? <RegisterPhone /> : 
                    <RegisterEmail handlePhone={handlePhone} />}
              <div className='flex justify-between mt-5 text-darker-green underline font-semibold'>
                <NavLink to="/">بازگشت به صفحه اصلی</NavLink>
                <NavLink to="/">ورود کارمندان</NavLink>
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
