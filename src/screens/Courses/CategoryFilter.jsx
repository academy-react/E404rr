import React, {useState} from "react";
import styles from "./Courses.module.css";
import CategoryItem from "./CategoryItem";

const CategoryFilter = () => {
  const [count,setCount] = useState(1);
  const [CategoryList, setCategoryList] = useState([
    { id : "01" , HtmlFor : "01" , Name : "ری اکت"  },
    { id : "02" , HtmlFor : "02"  , Name : "پایتون"},
    { id : "03" , HtmlFor : "03"   , Name : "سی اس اس"},
    { id : "04" , HtmlFor : "04"  , Name : "فلاتر" },
    { id : "05" , HtmlFor : "05"  , Name : "سی شارپ" },
    { id : "06" , HtmlFor : "06" , Name : "سی پلاس پلاس" },

  
  ]);
  return (
    <div
      className={` ${styles.categoryFilter} rounded-lg  text-[#323E73] mt-10 py-3 px-5`}
    >
      <p className="text-lg font-bold mb-3">دسته بندی</p>
      {CategoryList.map((item , index) => {
        return(
          <CategoryItem  key={index} id={item.id} HtmlFor={item.HtmlFor} Name={item.Name}/>
        )
      })}


    </div>
  );
};

export default CategoryFilter;
