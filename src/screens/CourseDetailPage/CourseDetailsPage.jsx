import CourseDescription from "./CourseDescription";
import CourseSummary from "./CourseSummary";

const CourseDetailsPage = () => {
  return (
    <div>
      <div className="text-center my-10">Header</div>
      <div className="container max-w-[1366px] mx-auto flex justify-between items-start">
        <CourseSummary />
        <CourseDescription />
      </div>
    </div>
  );
};

export default CourseDetailsPage;
