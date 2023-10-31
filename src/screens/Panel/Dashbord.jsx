import React from 'react'
import { Taghvim } from '../../components/Panel/Dashbord/Taghvim'
import { Charts } from '../../components/Panel/Dashbord/Charts'
import { DashbordSlider } from '../../components/Panel/Dashbord/DashbordSlider'

const Dashbord = () => {
  return (
    <div className='border border-transparent shadow-xl  xl:w-[955px]    lg:w-[700px] md:w-[490px] w-[405px] h-[722px] mt-[23px] mr-[34px] bg-[#f3fcf8] rounded-lg'>
         <h3 className='text-gray-600 text-[22px] before:content-["*"] before:text-green-600  mt-[18.5px] mr-4' >داشبورد</h3>

          <Charts/>
          <div className='flex'>
          <Taghvim/>
          <DashbordSlider/>
          </div>
    </div>
  )
}

export  {Dashbord}