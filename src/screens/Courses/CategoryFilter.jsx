import React from "react";
import styles from "./Courses.module.css";
import CategoryItem from "./CategoryItem";

const CategoryFilter = () => {
  return (
    <div
      className={` ${styles.categoryFilter} rounded-lg  text-[#323E73] mt-10 py-3 px-5`}
    >
      <p className="text-lg font-bold mb-3">دسته بندی</p>
      <CategoryItem  />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </div>
  );
};

export default CategoryFilter;
