import React from "react";
import python from "../../assets/img/python.png";

const ArticleCategory = () => {
  return (
    <div>
      <div className="flex items-center text-white bg-[#23A455] text-xl max-w-[300px] font-bold py-4 px-6 rounded-3xl">
        دسته بندی
      </div>
      <div className="mt-5 bg-gradient-to-bl from-[#f3fcf8] to-white rounded-3xl px-6 py-4 max-w-[300px] text-[#323E73]">
        <div className="my-2 flex gap-2">
          <input
            className="checked:accent-[#23a455]"
            type="checkbox"
            name=""
            id="react"
          />
          <label htmlFor="react">ری اکت</label>
        </div>
        <div className="my-2 flex gap-2">
          <input type="checkbox" name="" id="php" />
          <label htmlFor="php">php</label>
        </div>
        <div className="my-2 flex gap-2">
          <input type="checkbox" name="" id="python" />
          <label htmlFor="python">پایتون</label>
        </div>
        <div className="my-2 flex gap-2">
          <input type="checkbox" name="" id="js" />
          <label htmlFor="js">جاوا اسکریپت</label>
        </div>
      </div>
    </div>
  );
};

export default ArticleCategory;
