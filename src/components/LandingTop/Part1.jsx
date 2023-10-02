import logo from "../../assets/img/logo.png"
const Part1 = () => {
  return (
    <>
                  {/* part 1 */}
      <nav className=" w-78.125rem h-17.5  border mx-auto my-5 flex leading-17.5 rounded bg-[#f3fcf8]">
      <div className=" w-[40px] h-[35.33px] inline-block mt-[3.75px] mr-[23px] ">
        <img src={logo} alt="" className="mt-[15px]" />
      </div>
        <ul className="flex gap-x-10 mr-[23px]">
            <li className=""><a href="#">خانه</a></li>
            <li className=""><a href="#">دوره ها</a></li>
            <li className=""><a href="#">معرفی مدرسین</a></li>
            <li className=""><a href="#">بلاگ</a></li>
            <li className=""><a href="#">پرسش و پاسخ</a></li>
            <li className=""><a href="#">درخواست مشاوره</a></li>
            <li className=""><a href="#">تماس با ما</a></li>
            <li className=""><a href="#">درباره ما</a></li>
        </ul>
          {/* icon2 */}
        <div className=" w-[45px] h-[45px]  mr-24 mt-[11px]  rounded-full bg-green-700 flex items-center justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        </div>

        {/* icon 3 */}
        <div className=" w-[45px] h-[45px]  mr-6 mt-[10px] rounded-full bg-green-700 flex items-center justify-center "> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-white fill-white ">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>

        </div>
    </nav>
    </>
  )
}

export  {Part1}