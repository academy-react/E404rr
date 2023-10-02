import { Item } from "../common/Items/Item"

 const Part4 = () => {
  return (
    <>
                {/* part 4 */}
                <div className="w-312.5  h-auto min-h-400 border border-transparent mt-28">
          <div className="w-312.5 h-16 border border-transparent flex">
              <div className=" basis-10/12  mt-2">
               <div className="border-b-2 border-green-700 w-[200px]">
               <h2 className="inline-block text-xl pb-2 text-green-600 mb-[12px]">آخرین دوره های مجموعه</h2>
               </div>
              </div>
              <div className=" basis-2/12">
              <button className="border rounded-xl text-gray-700 p-3 inline-block bg-[#f3fcf8] border-transparent w-[180px] h-[50px]">
               <a href="#">مشاهده همه دوره ها</a>
              </button>
              </div>
          </div>
          {/* Items */}
          <div className="flex flex-wrap gap-x-5 gap-y-[62px] mt-[92px]">
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
          </div>
        </div>
    </>
  )
}
export {Part4}