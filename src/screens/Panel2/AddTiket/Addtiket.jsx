import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
const Addtiket = () => {
  return (
        <>
            <div className='w-[90%] h-auto pb-5  bg-white rounded-2xl mx-auto mt-[60px] ' data-aos="fade-up">
                <div className='w-[95%] mx-auto border-b  h-auto p-3'>
                    <h3 className='text-[22px] mr-[-10px] '> ارسال تیکت</h3>
                </div>


                <div className='grid p-3 border border-transparent mt-6 w-full relative'>
                <h4 className='text-[18px] mr-3'>دپارتمان</h4>
                <select className='w-[100%] h-[67px] text-green-600 mt-[15px] bg-[#f3fcf8] rounded-xl  border border-transparent focus:border-green-600 outline-none pr-[10px] appearance-none ' name="" id="">
                    <option value="">دپارتمان مورد نظر...</option>
                    <option value="">مالی</option>
                    <option value="">ارتباط با مدیریت</option>
                    <option value="">پشتیبانی</option>
                    <option value="">مشاوره</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black absolute left-5 top-[75px] z-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

            <Formik>
                <Form>



            <div className='w-full border border-transparent'>
                    <h3 className='text-[18px] mt-[10px] mr-[15px]'>
                        موضوع تیکت
                    </h3>
                    
                    <Field placeholder="موضوع تیکت خود را وارد کنید..." className="caret-green-600 mt-3 border h-[56px] w-[97%]  focus:border-green-600 placeholder:text-green-600 focus:placeholder:opacity-0 pr-2  rounded-xl border-transparent mx-auto block outline-none bg-[#f3fcf8]"/>
            </div>

            <div className='w-full border border-transparent'>
                    <h3 className='text-[18px] mt-[10px] mr-[15px]'>
                        متن تیکت
                    </h3>

                    <textarea name="" placeholder='متن تیکت را وارد کنید...' id="" cols="30" rows="10" className='caret-green-600 placeholder:text-green-600 focus:placeholder:opacity-0 pr-2 pt-3 w-[96%] rounded-xl border-transparent bg-[#f3fcf8] block mx-auto focus:border-green-600 outline-none border'></textarea>
                    
            </div>


            <div className='border flex flex-row-reverse border-transparent'>
                    <button type="submit" className='border ml-[15px] mt-[30px] border-transparent text-white bg-green-600 rounded-xl w-[71px] h-[40px] '>
                        ارسال
                    </button>

            </div>


            </Form>
            </Formik>
            </div>





        

        </>
  )
}

export  {Addtiket}