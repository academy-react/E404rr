import React from 'react'
import { NavLink } from 'react-router-dom'
const activeClass = ({ isActive}) => 
isActive ? "  text-2xl text-green-600 font-black" : "text-2xl text-[#323E73] font-black" ;


const Tab2 = ({active , onClick , label }) => {
  return (
        <>
                <div 
            className={`py-2 border-b-2  border-transparent" ${active ? ' border-[#323E73]' : ' border-transparent'}`}
            onClick={onClick}
            >
                        {label}
                        
            </div>
        
        </>



  )
}

export  {Tab2}



