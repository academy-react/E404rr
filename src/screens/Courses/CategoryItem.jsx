import React from "react";

const CategoryItem = ({id , HtmlFor , Name}) => {
  return (
    <div className="flex items-center my-2 text-[#323E73]">
      <input id={id} className="checked:accent-[#198643]" type="checkbox" />
      <label htmlFor={HtmlFor} className="mr-2">{Name} </label>
    </div>
  );
};

export default CategoryItem;
