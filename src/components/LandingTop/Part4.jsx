import { useNavigate } from "react-router-dom"
import { Item } from "../common/Items/Item"

 const Part4 = () => {
  const navigate = useNavigate()
  const goToCourses = () =>{
    navigate("/course")
  }
  return (
    <>
                {/* part 4 */}
                <div className="xl:w-[1250px]   w-[100%]  h-auto min-h-400 border border-transparent mt-28">
          <div className="xl:w-[1250px] lg:w-[100%] md:w-[100%] lg:mx-auto xl:mx-0 w-[50%] h-16 border border-transparent flex  ">
              <div className=" xl:basis-10/12 basis-6/12 xl:mt-2">
               <div className="border-b-2 border-green-700 w-[200px] xl:mr-0 lg:mr-[37px] md:mr-[35px]">
               <h2 className="inline-block text-xl pb-2 text-green-600 mb-[12px] ">آخرین دوره های مجموعه</h2>
               </div>
              </div>
              <div className=" xl:basis-2/12 basis-6/12">
              <button onClick={goToCourses} className="border rounded-xl text-gray-700 p-3 inline-block bg-[#f3fcf8] border-transparent mr-[130%] md:mr-[46%] lg:mr-[300px] xl:mr-[40px]  w-[180px] h-[50px]">
               مشاهده همه دوره ها
              </button>
              </div>
          </div>
          {/* Items */}
          <div className="flex flex-wrap xl:gap-x-[31.90px] xl:gap-y-[62px] lg:gap-x-[46px] lg:gap-y-[30px] md:gap-x-[16.7%] lg:mr-[0] xl:mr-auto l mt-[92px] border border-transparent xl:w-full lg:w-full  md:w-full w-[600px] gap-x-5 gap-y-10">
            {/* item */}
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
                        <Item/>
            <Item/>            <Item/>
            <Item/>
            <Item/>
            <Item/>

          </div>
        </div>
    </>
  )
}
export {Part4}