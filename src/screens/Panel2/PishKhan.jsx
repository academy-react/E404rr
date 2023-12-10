import React from 'react'
import { PishKhanItems } from '../../components/Sidebar/PishKhan/PishKhanItems'
import { FaCreditCard } from 'react-icons/fa';
import { Pishkhanqus } from '../../components/Sidebar/PishKhan/Pishkhanqus';

const PishKhan = () => {
  return (
        <>
         
          <PishKhanItems  title={"مجموع دوره ها"} title2={"مجموع خبر  ها"}/>
            <Pishkhanqus/>
      
            
        </>
  )
}

export default PishKhan