import React from "react";
import styles from "./Courses.module.css";

const ExistFilter = () => {
  return (
    <div className={`${styles.existFilter} mt-10 px-5 py-3 rounded-lg `}>
      <p className="text-lg font-bold text-[#323E73]">موجودی دوره</p>
      <div className="flex items-center my-3 text-[#323E73]">
        <input id="end" className="checked:accent-[#198643]" type="checkbox" />
        <label htmlFor="end" className="mr-4">به اتمام رسیده</label>
      </div>
      <div className="flex items-center my-3 text-[#323E73]">
        <input id="live" className="checked:accent-[#198643]" type="checkbox" />
        <label htmlFor="live" className="mr-4">در حال برگزاری</label>
      </div>
      <div className="flex items-center my-3 text-[#323E73]">
        <input id="all" className="checked:accent-[#198643]" type="checkbox" />
        <label htmlFor="all" className="mr-4">همه</label>
      </div>
    </div>
  );
};

export default ExistFilter;
