import React from 'react'
import { PishKhanItems } from '../../components/Sidebar/PishKhan/PishKhanItems'
import { FaCreditCard } from 'react-icons/fa';

const PishKhan = () => {
  return (
        <>
            <PishKhanItems/>
            <div className='w-[461px] h-[140px] border border-transparent rounded-xl  mr-[30px] mt-[30px] bg-white  '>

                    <div className='w-[90%] border-b mx-auto'>
                       <h3 className='text-[20px] mt-[15px] pb-4'>پرسش های اخیر</h3>
                        
                    </div>
                    <div className='flex  justify-center items-center border border-transparent  h-[77px]'>
                      <p>تا به حال پرسشی ارسال نکردید!</p>
                    </div>
            </div>
            
        </>
  )
}

export default PishKhan