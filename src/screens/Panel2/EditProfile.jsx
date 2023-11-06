import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import emptyprofile from "../../assets/img/emptyprofile.png"
const EditProfile = () => {
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
    
    </>
  )
}

export  {EditProfile}