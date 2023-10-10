
import { NavLink, Outlet } from "react-router-dom";
import logo3 from "../../assets/img/logo3.png";
const Header = () => {
  return (
    <>
                  {/* part 1 */}
      <nav className="w-full  xl:w-[1250px] h-[70px]  border border-transparent lg:w-[1024px] xl:mx-auto xl:my-5 flex  leading-17.5 rounded bg-[#f3fcf8]">
      <div className="mt-4  xl:opacity-0 xl:hidden lg:opacity-0 lg:hidden mr-[30px] ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 fill-green-700">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
      </div>
      <div className=" w-[40px] h-[35.33px] inline-block xl:mt-[3.75px] mt-[4px] mr-[10px] lg:mr-[30px] xl:mr-[23px] ">
        <img src={logo3} alt="" className="xl:mt-[15px] mt-[8px] xl:h-[38px] xl:w-[40px] h-[50px] w-[50px]" />
      </div>
        <ul className="hidden xl:gap-x-10 lg:gap-x-7  xl:w-auto mr-[23px] lg:flex xl:flex">
            <li className=""><NavLink to = "/">خانه</NavLink></li>
            <li className=""><NavLink to="/course">دوره ها</NavLink></li>
            <li className=""><NavLink to="/introducing-teachers">معرفی مدرسین</NavLink></li>
            <li className=""><NavLink to="/blog">بلاگ</NavLink></li>
            <li className=""><NavLink to="/Q&A">پرسش و پاسخ</NavLink></li>
            <li className=""><NavLink to="/consultation-request">درخواست مشاوره</NavLink></li>
            <li className=""><NavLink to="/contact-us">تماس با ما</NavLink></li>
            <li className=""><NavLink to="/about-we">درباره ما</NavLink></li>
        </ul>
          {/* icon2 */}
        <div className="xl:w-[45px] w-[40px]  xl:h-[45px] h-[40px] md:mr-[530px] lg:mr-16  xl:mr-48 mr-[355px] mt-[12.5px]  rounded-full bg-green-700 flex items-center justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        </div>

        {/* icon 3 */}
      <NavLink to="/login">
      <div className=" xl:w-[45px] w-[40px]  xl:h-[45px] h-[40px]  mr-[15px] mt-[12.5px] rounded-full bg-green-700 flex items-center justify-center "> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-white fill-white ">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>

        </div>
      </NavLink>
    </nav>
    <Outlet/>

    </>
  )
}

export  {Header}