import learn from "../../assets/img/learn.png";
import teacher from "../../assets/img/teacher.png"
import gift from "../../assets/img/gift.png"
import support from "../../assets/img/support.png"
const Part2 = () => {
  return (
        <>
            {/* part 2 */}
    <div className=" w-312.5 h-100 border  rounded mt-9 flex flex-row">
      <div className="basis-1/2">
        <h2 className="font-bold text-xl">  آموزش برنامه نویسی,خود آموزیو ورود به بازار کار </h2>
        <p>حرفه ای شدن را از امروز شروع کن</p>
        <input className="border  placeholder-green-600" type="search" placeholder="جستوجو دوره های مختلف" />
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