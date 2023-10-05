import bgitem1 from "../../../assets/img/bgitem1.png"
const Item = () => {
  return (
        <>
            <div className="w-[287.5px] h-[340px]  rounded last:mb-20 shadow-md  xl:mx-0 lg:mx-0 md:mx-auto  ">
              <div className="h-45 w-full mb-5">
                <img  src={bgitem1} alt="" className="w-full h-full" />
                </div>
              <div className="">
                <h3 className="text-gray-700 mr-4">آموزش جامع زبان پایتون از صفر تا صد</h3>
                <div className="relative mt-2 w-64 mx-auto border border-transparent border-b border-b-gray-400">
                <p className="text-gray-400 mr-6 mb-3">حسامی</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 absolute top-[2px] right-[-7px] fill-gray-200">
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                </svg>

                </div>
              <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 fill-gray-200 absolute top-[20px] right-[14px]">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
              </svg>

                <span className="text-gray-500 inline-block mr-8 mt-4">07:28:03 </span>
                <span className="text-green-600 inline-block mr-[80px]">500,000 تومان   </span>


              </div>
              </div>
            </div>
        </>
  )
}

export  {Item}