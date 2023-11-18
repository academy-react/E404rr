import React from 'react'
import { NavLink } from 'react-router-dom'
const activeClass = ({ isActive}) => 
isActive ? "  text-2xl text-green-600 font-black" : "text-2xl text-[#323E73] font-black" ;


const Tab = ({active , onClick , label}) => {
  return (
        <>
                <div 
            className={`text-2xl text-[#323E73] font-black ${active ? 'text-green-600' : ''}`}
            onClick={onClick}
            >
                        {label}
                        
            </div>
        
        </>



  )
}

export  {Tab}



