import styles from "./CourseDetails.module.css";

const CourseSupport = () => {
  return (
    <div
      className={` bg-[#E1F7ED] max-w-[442px] mt-20 flex justify-center py-5 rounded-xl text-[#323E73] font-extralight ${styles.support} `}
    >
      سوالات خود را می توانید در
      <span className="inline-block mx-1 text-[#61CE70]">اینجا</span> مطرح کنید
    </div>
  );
};

export default CourseSupport;
