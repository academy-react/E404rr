import learn from "../../assets/img/learn.png";
import teacher from "../../assets/img/teacher.png"
import gift from "../../assets/img/gift.png"
import support from "../../assets/img/support.png"
const Part2 = () => {
  return (
        <>
            {/* part 2 */}
    <div className=" w-312.5 h-100 border  rounded mt-9 flex flex-row bg-[#f3fcf8] ">
      <div className="basis-1/2 border">
        <h2 className="font-bold text-xl mt-10 mr-16">  آموزش برنامه نویسی,خود آموزیو ورود به بازار کار </h2>
        <p className=" mt-5 mr-32">حرفه ای شدن را از امروز شروع کن</p>
        <div className="w-96 h-12 rounded border border-transparent mr-16 mt-5 mb-5 relative">
        <input className="border  placeholder-green-600 w-full h-full" type="search" placeholder="جستوجو دوره های مختلف..." />
          <div className="absolute top-[10px] left-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>
        <div className="flex">
          <div className="w-25 h-25 border ">
            <div className="w-[65px] h-[65px] border mx-auto">
              {/* learn */}
              <img src={learn} alt="" />
            </div>
            <p>دوره های رایگان</p>
          </div>
          <div className="w-25 h-25 border ">
          <div className="w-[65px] h-[65px] border mx-auto">
            {/* teacher */}
            <img src={teacher} alt="" />
          </div>
          <p>مدرسین مجرب</p>
          </div>
          <div className="w-25 h-25 border ">
          <div className="w-[65px] h-[65px] border mx-auto">
            {/* gift */}
            <img src={gift} alt="" />
          </div>
          <p>کد های تخفیف</p>
          </div>
          <div className="w-25 h-25 border ">
          <div className="w-[65px] h-[65px] border mx-auto">
            {/* support */}
            <img src={support} alt="" />
          </div>
          <p>پشتیبانی 24/7</p>
          </div>
        </div>
      </div>
      <div className="basis-1/2">h</div>
    </div>
        </>
  )
}

export  {Part2}