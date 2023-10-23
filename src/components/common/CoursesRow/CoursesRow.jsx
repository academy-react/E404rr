import CourseCard from "../CourseCard/CourseCard";

const CoursesRow = () => {
  return (
    <div className="flex container max-w-[1366px] mx-auto justify-between items-center flex-wrap max-lg:justify-center mb-16">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
};

export default CoursesRow;
