import { Item } from "./Items/item"

 const Part4 = () => {
  return (
    <>
                {/* part 4 */}
                <div className="w-312.5  h-auto min-h-400 border mt-28">
          <div className="w-312.5 h-16 border flex">
              <div className=" basis-10/12">
                  <h2 className="inline-block text-xl pb-2 text-green-600 border-b-2 border-green-700 mt-2">آخرین دوره های مجموعه</h2>
              </div>
              <div className=" basis-2/12">
              <button className="border rounded p-3 inline-block "><a href="#">مشاهده همه دوره ها</a></button>
              </div>
          </div>
          {/* Items */}
          <div className="flex flex-wrap">
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