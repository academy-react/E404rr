import React from "react";
import FilterRange from "./FilterRange";
import ExistFilter from "./ExistFilter";
import CategoryFilter from "./CategoryFilter";

const CourseFilter = () => {
  return (
    <div  data-aos="fade-up" className="w-[300px] block ">
      <FilterRange />
      <ExistFilter />
      <CategoryFilter />
    </div>
  );
};

export default CourseFilter;
