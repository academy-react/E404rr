import CourseSharing from "./CourseSharing";
import CourseSupport from "./CourseSupport";
import Summary from "./Summary";

const CourseSummary = () => {
  return (
    <div className="w-1/2 rounded-xl">
      <Summary />
      <CourseSupport />
      <CourseSharing />
    </div>
  );
};

export default CourseSummary;
