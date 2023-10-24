import React from "react";
import NavLink from "../../components/common/NavLink/NavLink";
import CoursesRow from "../common/CoursesRow/CoursesRow";

const LastCourses = () => {
  return (
    <section>
      <NavLink title="آخرین دوره ها" path="مشاهده همه دوره ها" />
      <CoursesRow />
    </section>
  );
};

export default LastCourses;
