
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react';
import emptyprofile from "../../assets/img/emptyprofile.png"
const EditProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);



  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
                            {/* <Formik>
                        <Form>
                           
                            <Field placeholder="نام کاربری خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[30px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
                            <Field type="email" placeholder=" ایمیل خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[60px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
                            <Field placeholder=" شماره تلفن خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[30px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
                            <Field placeholder=" کد ملی خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[60px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>  
                        </Form>
                    </Formik> */}

                    <div className="flex flex-wrap border border-transparent pb-5">
                        
                          <div className='flex w-[80%] h-auto border mx-auto mt-[50px] border-transparent '>
                            <div className='border border-transparent rounded-full w-[120px] h-[120px] '>
                              <img src={emptyprofile} alt="" className='rounded-full w-full h-full' />
                            </div>
                            <div className='border border-transparent  p-3'>
                              <input type="file" id='file-profile-edit' className='hidden' accept='.jpg , .jpeg , .png'/>
                                  <label className='border  flex items-center bg-white justify-center  px-[20px] py-[7px] rounded-xl' htmlFor='file-profile-edit'>
                                      <p className=''>عکس جدید خود را اضافه کنید</p>
                                  </label>
                                      <div className='flex justify-center items-center text-center border mt-[10px] border-transparent'>
                                        
                                      <p className='text-[12px]'>لطفا عکس واضح و با کیفیت انتخاب کنید  <br /> <span className='text-[10px]'>تنها فرمت های jpg و png قابل استفاده اند</span> </p>
        
                                      </div>                            
                            </div>
                          </div>



                          <div className='border w-[80%]  bg-white mt-[30px] pb-10 mx-auto border-transparent rounded-xl'>
                              <div className='flex'>
                                    <div className='basis-1/2'>
  
                                    <h3 className='text-[18px] mr-5 mt-5'>
                                              اطلاعات شخصی
                                          </h3>


                                      {isModalOpen && (
                                    <>
                                          <div className='fixed top-0 left-0 w-full h-full backdrop-blur-sm backdrop-filter  backdrop-grayscale-[0.5] bg-black bg-opacity-10   '></div>
                                          <div className='absolute border w-[400px] rounded-xl h-auto pb-10 top-[140px] right-[550px] bg-white'>
                                                <div className="relative ">
                                          <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute left-5 top-2  text-gray-700">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                          </svg>
                                              <h3 className='text-[20px] mt-[10px] mr-[15px] pb-4'> ویرایش پروفایل</h3>
                                              <div className='border-b w-[90%] mx-auto'></div>
                                          </div>
                                          <Formik>
                                            <Form>
                                                <div className='grid border border-transparent mt-5 '>
                                                            <p className='mr-5'> نام و نام خانوادگی</p>
                                                            <Field placeholder="نام خود را وارد کنید" 
                                                              className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                                                            />
                                                </div>
                                                <div className='grid border border-transparent mt-5'>
                                                            <p className='mr-5'>   شماره تلفن </p>
                                                            <Field placeholder="شماره تلفنn خود را وارد کنید" 
                                                              className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                                                            />
                                                </div>

                                                <div className='grid border border-transparent mt-5 '>
                                                            <p className='mr-5'>  ایمیل  </p>
                                                            <Field type="email" placeholder="ایمیل خود را وارد کنید" 
                                                              className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                                                            />
                                                </div>


                                                <button className='block border bg-green-600 rounded py-2 px-2 mx-auto mt-5 text-white ' type="submit">
                                                  ثبت تغییرات
                                                  
                                                </button>
                                            </Form>
                                          </Formik>

                                          </div>
     
                                    </>
        
                                 )}
                                    </div>
                                      <div className='basis-1/2 border border-transparent flex justify-end items-center'>

                                          <button  className='block border border-transparent  px-5 py-3 bg-[#f3fcf8] rounded mt-2 ml-2' onClick={openModal}>
                                            ویرایش کنید
                                      </button>

                                      </div>
                              </div>



                              <div className='flex flex-wrap w-[70%]  border border-transparent mx-auto mt-5'>

                                  <div className='border border-transparent mr-10'>
                                      <p>نام   </p>
                                      <p className='mt-2'> 
                                          نام کاربر
                                      </p>
                                  </div>

                                  
                                  <div className='border border-transparent mr-32 '>
                                      <p> ایمیل</p>
                                      <p className='mt-2'>
                                          ایمیل کاربر
                                      </p>
                                  </div>



                                  <div className='border border-transparent mr-32 '>
                                      <p> شماره تلفن  </p>
                                      <p className='mt-2'>
                                          شماره کاربر
                                      </p>
                                  </div>
                                  <div className='border border-transparent mr-10 mt-10 '>
                                      <p>  نام خانوادگی  </p>
                                      <p className='mt-2'>
                                          نام خانوادگی کاربر
                                      </p>
                                  </div>

                                  <div className='border border-transparent mr-16 mt-10 '>
                                      <p>   کد ملی  </p>
                                      <p className='mt-2'>
                                            123456789011
                                      </p>
                                  </div>


                                  <div className='border border-transparent mr-24 mt-10 '>
                                      <p>    رمز عبور   </p>
                                      <p className='mt-2'>
                                              ********
                                      </p>
                                  </div>

                           

                              </div>
                         
                          </div>


  


                    </div>
    
    </>
  )
}

export  {EditProfile}