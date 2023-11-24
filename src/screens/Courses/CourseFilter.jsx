import React from "react";
import FilterRange from "./FilterRange";
import ExistFilter from "./ExistFilter";
import CategoryFilter from "./CategoryFilter";

const CourseFilter = () => {
  return (
    <div className="w-[300px] block z-10" data-aos="fade-up">
      <FilterRange />
      <ExistFilter />
      <CategoryFilter />
    </div>
  );
};

export default CourseFilter;
