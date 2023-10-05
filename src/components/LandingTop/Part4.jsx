import { Item } from "../common/Items/Item"

 const Part4 = () => {
  return (
    <>
                {/* part 4 */}
                <div className="xl:w-[1260px] md:w-[768px] w-[100%]  h-auto min-h-400 border border-transparent mt-28">
          <div className="xl:w-[1250px] md:w-[90%] md:mx-auto xl:mx-0 w-[50%] h-16 border border-transparent flex  ">
              <div className=" xl:basis-10/12 basis-6/12 xl:mt-2">
               <div className="border-b-2 border-green-700 w-[200px]">
               <h2 className="inline-block text-xl pb-2 text-green-600 mb-[12px]">آخرین دوره های مجموعه</h2>
               </div>
              </div>
              <div className=" xl:basis-2/12 basis-6/12">
              <button className="border rounded-xl text-gray-700 p-3 inline-block bg-[#f3fcf8] border-transparent mr-[80px] md:mr-[200px] xl:mr-[40px]  w-[180px] h-[50px]">
               <a href="#">مشاهده همه دوره ها</a>
              </button>
              </div>
          </div>
          {/* Items */}
          <div className="flex flex-wrap xl:gap-x-[31.75px] xl:gap-y-[62px] mt-[92px] border border-transparent xl:w-full md:w-[769px] w-[600px] gap-x-3 gap-y-10">
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
            <Item/>
            <Item/>
          </div>
        </div>
    </>
  )
}
export {Part4}