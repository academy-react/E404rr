import  test from "../../../assets/img/1.avif"
const Item = () => {
  return (
        <>
            <div className="w-71.875 h-80.325 border  mt-10 last:mb-20 mr-5 ">
              <div className="h-45 w-full mb-5">
                <img  src={test} alt="" className="" />
                </div>
              <div className="">
                <h3 className="text-gray-700 mr-4">آموزش جامع زبان پایتون از صفر تا صد</h3>
                <p className="text-gray-400 border-b-2 w-64 mx-auto">حسامی</p>
                <span className="text-gray-500 inline-block mr-3 mt-5">07:28:03 </span>
                <span className="text-green-600 inline-block mr-28">500,000 تومان   </span>
              </div>
            </div>
        </>
  )
}

export  {Item}