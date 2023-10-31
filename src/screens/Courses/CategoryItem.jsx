import React from "react";

const CategoryItem = () => {
  return (
    <div className="flex items-center my-2 text-[#323E73]">
      <input id="react-check" className="checked:accent-[#198643]" type="checkbox" />
      <label htmlFor="react-check" className="mr-2">ری اکت</label>
    </div>
  );
};

export default CategoryItem;
