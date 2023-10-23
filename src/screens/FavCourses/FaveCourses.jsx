import CoursesRow from "../../components/common/CoursesRow/CoursesRow";
import NavLink from "../../components/common/NavLink/NavLink";

const FaveCourses = () => {
  return (
    <section>
      <NavLink title="دوره های محبوب" path="مشاهده همه دوره ها" />
      <CoursesRow />
    </section>
  );
};

export default FaveCourses;
