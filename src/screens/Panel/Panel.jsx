import React from 'react'
import emptyprofile from '../../assets/img/emptyprofile.png'
import { Navbar } from '../../components/common/navbar/Navbar.jsx'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Panel = () => {
  return (
        <>
            <div className='flex'>
            <Navbar/>
            {/* panel */}
            <div className='border border-transparent shadow-xl w-[955px] h-[722px] mt-[23px] mr-[34px] '>
                    
                    <h3 className='text-green-600 text-[22px] before:content-["*"]  mt-[18px] mr-4' >اطلاعات شخصی کاربر</h3>
                    <Formik>
                        <Form>
                            <Field placeholder="نام کاربری" className="outline-none border pr-3 border-[#DEC9E9] hover:border-green-600 w-[380px] h-[50px] mt-[46px] mr-[30px]"/>
                            <Field placeholder="نام کاربری" className="outline-none border pr-3  border-[#DEC9E9] hover:border-green-600 w-[380px] h-[50px] mr-[116px]"/>
                            <Field placeholder="نام کاربری" className="outline-none border pr-3  border-[#DEC9E9] hover:border-green-600 w-[380px] h-[50px] mt-[38px] mr-[30px]"/>
                            <div className='inline-block  relative'>
                            <select id='select' className=' border border-[#DEC9E9] pr-3  w-[380px] h-[50px] mr-[116px]    outline-none text-[#aaa9a9]  appearance-none'>
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
                            <Field placeholder="توضیحات ..." className="w-[875px] h-[150px] pr-3  outline-none border border-[#DEC9E9] hover:border-green-600 text-[#6247AA] mr-[30px] mt-[30px]"/>
                        </Form>
                    </Formik>

                    <Formik>
                        <Form>
                                <div className='flex border border-transparent mt-[47px] '>
                                   <div className='w-[60px] h-[60px] border border-transparent rounded-full mr-[50px]'>
                                  <img src={emptyprofile} alt="" className='w-full h-full rounded-full' />
                                  </div>
                                    <Field type="file" id="profile-select" className="hidden" />
                                    <label htmlFor="profile-select" className='mr-[10px] mt-1 '>
                                    <div className='w-[140px] h-[55px] border relative hover:border-green-700'>
                                        <span className='leading-[50px] mr-5 text-green-600'>
                                            آپلود آواتار
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute left-3 top-3 text-green-600 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                        </svg>

                                    </div>
                                    </label>
                                    <span className='mt-5 text-green-600 mr-[15px]'>  تصویر خود را بارگذاری کنید ...  </span>
                                </div>
                                <div className='mt-[64px] text-white'>
                                    <button type='submit' className='border w-[138px] h-[40px] mr-[30px] bg-[#9676BD] rounded-3xl'>ثبت </button>
                                    <button type='submit' className='border w-[138px] h-[40px] mr-[30px] bg-[#37AF7E]  rounded-3xl'> موفق</button>
                                    <button type='submit' className='border w-[138px] h-[40px] mr-[30px] bg-[#B63356]  rounded-3xl'> حذف</button>
                                    <button type='submit' className='border w-[138px] h-[40px] mr-[30px] bg-[#E79037]  rounded-3xl'> ویرایش</button>
                                    <button type='submit' className='border w-[138px] h-[40px] mr-[30px] bg-[#87A8D8]  rounded-3xl'> جدید</button>
                                </div>
                        </Form>
                    </Formik>
            </div>
            </div>
        </>
  )
}

export  {Panel}