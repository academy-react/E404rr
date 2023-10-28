import React from 'react'
import emptyprofile from '../../assets/img/emptyprofile.png'
import { Navbar } from '../../components/common/navbar/Navbar.jsx'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Panel = () => {
  return (
        <>
      
    
            {/* panel */}
            <div className='border border-transparent shadow-xl xl:w-[955px] lg:w-[700px] md:w-[490px] sm:w-[405px] h-[722px] mt-[23px] mr-[34px] rounded-lg'>
                    
                    <h3 className='text-green-600 text-[22px] before:content-["*"]  mt-[18px] md:mr-4 sm:mr-1' >اطلاعات شخصی کاربر</h3>
                    <Formik>
                        <Form>
                           
                            <Field placeholder="نام کاربری" className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[30px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
                            <Field type="email" placeholder="ایمیل خود را وارد کنید " className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] xl:mr-[116px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
                            <Field  placeholder="سن خود را وارد کنید" className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[38px] xl:mr-[30px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
                            <div className='inline-block  relative'>
                            <select id='select' className=' border border-[#DEC9E9] pr-3 rounded  xl:w-[380px] lg:w-[300px] md:w-[197px] sm:w-[197px] h-[50px] xl:mr-[116px] lg:mr-[30px] md:mr-[30px] sm:mr-1   outline-none text-[#aaa9a9]  appearance-none'>
                            <option>    وظیفه در سایت</option>
                            <option>قدیمی ترین ها</option>
                            <option>جدید ترین ها</option>
                            <option>پرطرفدار ترین ها</option>
                            </select>
                            <div className='absolute top-[13px] left-2 text-[#6247AA]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            </div>
                            </div>
                            <Field placeholder="توضیحات ..." className="xl:w-[875px] lg:w-[630px] md:w-[422.5px] sm:w-[397px] h-[150px] pr-3 rounded focus:placeholder:opacity-0  outline-none border border-[#DEC9E9] hover:border-green-600 text-[#6247AA] md:mr-[30px] sm:mr-1 mt-[30px]"/>
                        </Form>
                    </Formik>

                    <Formik>
                        <Form>
                                <div className='flex border border-transparent mt-[47px] '>
                                   <div className='w-[60px] h-[60px] border border-transparent rounded-full md:mr-[50px] sm:mr-1'>
                                  <img src={emptyprofile} alt="" className='w-full h-full rounded-full' />
                                  </div>
                                    <Field type="file" id="profile-select" className="hidden" />
                                    <label htmlFor="profile-select" className='md:mr-[10px] sm:mr-1 mt-1 '>
                                    <div className='w-[140px] h-[55px] border relative hover:border-green-700 rounded md:pl-5 sm:pl-1'>
                                        <span className='leading-[50px] mr-5 text-green-600'>
                                            آپلود آواتار
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute left-3 top-3 text-green-600 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                        </svg>

                                    </div>
                                    </label>
                                    <span className='mt-5 text-green-600 md:mr-[15px] sm:mr-1'>  تصویر خود را بارگذاری کنید ...  </span>
                                </div>
                                <div className='mt-[64px] text-white'>
                                    <button type='submit' className='border w-[138px] h-[40px] lg:mr-[30px] md:mr-[30px] md:inline-block sm:block sm:mx-auto bg-[#37AF7E] rounded-3xl'>ثبت </button>
                                    <button type='submit' className='border w-[138px] h-[40px] lg:mr-[30px] md:mr-[5px]  md:inline-block sm:block sm:mx-auto bg-[#B63356]  rounded-3xl'> حذف</button>
                                    <button type='submit' className='border w-[138px] h-[40px] lg:mr-[30px] md:mr-[5px]  md:inline-block sm:block sm:mx-auto bg-[#E79037]  rounded-3xl'> ویرایش</button>

                                </div>
                        </Form>
                    </Formik>
            </div>
            
        </>
  )
}

export  {Panel}