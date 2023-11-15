import NavLink from "../../components/common/NavLink/NavLink";
import CoursesRow from "../common/CoursesRow/CoursesRow";

const LastCourses = () => {

  return (
    <section>
          <div   data-aos="fade-up"  >
          <NavLink title="آخرین دوره ها" path="مشاهده همه دوره ها" url="/Course" />
          <CoursesRow />
          </div>
    </section>
  );
};

export default LastCourses;
