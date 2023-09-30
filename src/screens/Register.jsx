const Register = () => {
  return (
    <div className='flex items-center justify-center container h-screen'>
        <div className="bg-[url('/images/background.png')] p4 mx-6 rounded-2xl">
            <div className="flex flex-col md:flex-row mx-6">
                <div className="flex flex-col justify-center text-center">
                    <p className="m-5 text-xl text-slate-700 font-semibold">حساب کاربری خود را ایجاد کنید</p>
                    <input type="text" placeholder='نام کامل خود را وارد کنید' className='mx-2 my-2 px-6 py-2 shadow-xl shadow-gray-100 rounded-lg' />
                    <input type="text" placeholder='کد ملی خود را وارد کنید' className='mx-2 my-2 px-6 py-2 shadow-md shadow-gray-100 rounded-lg' />
                    <input type="text" placeholder='تاریخ تولد خود را وارد کنید' className='mx-2 my-2 px-6 py-shadow-md 2 shadow-gray-100 rounded-lg' />
                </div>
                <img src="/images/registerImg.png" alt="image not found" className='object-fit' />
            </div>
        </div>
    </div>
  )
}

export default Register
