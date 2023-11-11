import { NavLink } from "react-router-dom"


const E404ror = () => {

  return (
        <div className="mx-auto w-[500px] h-10 mt-[200px] text-center" >
 
            <p className="text-[30px]">متاسفانه صفحه مورد نظر یافت نشد</p>
            <p className="text-red-600 block mb-5 text-[25px]">404</p>
            <NavLink to="/" className="border border-green-600 p-3 rounded">    بازگشت به خانه</NavLink>
      
        </div>
  )
}

export  {E404ror}