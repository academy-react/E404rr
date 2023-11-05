import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
const EditProfile = () => {
  return (
    <>
                            <Formik>
                        <Form>
                           
                            <Field placeholder="نام کاربری خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[30px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
                            <Field type="email" placeholder=" ایمیل خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[60px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
                            <Field placeholder=" شماره تلفن خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[30px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
                            <Field placeholder=" کد ملی خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[60px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>  
                        </Form>
                    </Formik>
    
    </>
  )
}

export  {EditProfile}