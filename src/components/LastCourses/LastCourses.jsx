import NavLink from "../../components/common/NavLink/NavLink";
import CoursesRow from "../common/CoursesRow/CoursesRow";

const LastCourses = () => {

  return (
    <section>
      <NavLink title="آخرین دوره ها" path="مشاهده همه دوره ها" url="/Course" />
      <CoursesRow />
    </section>
  );
};

export default LastCourses;
