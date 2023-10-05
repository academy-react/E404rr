import learn from "../../assets/img/learn.png";
import teacher from "../../assets/img/teacher.png"
import gift from "../../assets/img/gift.png"
import support from "../../assets/img/support.png";
import bg from "../../assets/img/bg-1.png";
const Part2 = () => {
  return (
        <>
            {/* part 2 */}
    <div className=" xl:w-[1250px] w-full h-[400px] border border-transparent  rounded-lg xl:mt-9 mt-5 flex flex-row bg-[#f3fcf8] ">
      <div className="xl:basis-1/2 w-[768px] border border-transparent md:text-center xl:text-right">
        <h2 className=" text-gray-600 text-[24px] mt-10 xl:mr-16 md:mr-[0] mr-16">  آموزش برنامه نویسی,خود آموزیو ورود به بازار کار </h2>
        <p className=" mt-4 mr-[142px] md:mr-[0px] xl:mr-[142px] text-gray-500 text-[21px]">حرفه ای شدن را از امروز شروع کن</p>
        <div className="w-[510px] h-[50px]  border border-transparent mr-[60px] mt-5 mb-5 relative">
        <input className="border border-transparent pr-5  placeholder-green-600 w-full h-full outline-none rounded-xl md:mr-[60px]  xl:mr-0 " type="search" placeholder="جستوجو دوره های مختلف..." />
          <div className="absolute top-[10px] left-[10px] md:left-[-40px] xl:left-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>
        <div className="flex mt-10  mr-16 md:mr-[125px] xl:mr-16  gap-4">
          <div className="w-25 h-25 border border-transparent ">
            <div className="w-[65px] h-[65px] border border-transparent mx-auto">
              {/* learn */}
              <img src={learn} alt="" />
            </div>
            <p className="text-[15px] mt-[16.5px] mr-2 text-gray-600">دوره های رایگان</p>
          </div>
          <div className="w-25 h-25 border border-transparent ">
          <div className="w-[65px] h-[65px] border border-transparent mx-auto">
            {/* teacher */}
            <img src={teacher} alt="" />
          </div>
          <p className="text-[15px] mt-[16.5px] text-gray-600 mr-2">مدرسین مجرب</p>
          </div>
          <div className="w-25 h-25  border border-transparent ">
          <div className="w-[65px] h-[65px] border border-transparent mx-auto">
            {/* gift */}
            <img src={gift} alt="" />
          </div>
          <p className="text-[15px] mt-[16.5px] text-gray-600 mr-2">کد های تخفیف</p>
          </div>
          <div className="w-25 h-25 border border-transparent ">
          <div className="w-[65px] h-[65px] border border-transparent mx-auto">
            {/* support */}
            <img src={support} alt="" />
          </div>
          <p className="text-[15px] mt-[16.5px] text-gray-600 mr-2">پشتیبانی 24/7</p>
          </div>
        </div>
      </div>
      <div className="xl:basis-1/2 xl:opacity-100 xl:block border border-transparent hidden opacity-0">
        <img src={bg} alt=""  className="float-left"/>
      </div>
    </div>
        </>
  )
}

export  {Part2}