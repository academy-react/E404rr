import styles from "./footer.module.css";

const Access = () => {
  return (
    <div className="max-md:mx-auto  max-md:my-8">
      <h3 className={` ${styles.title} max-w-xs `}>دسترسی</h3>
      <p className="m-1 mt-3">دوره ها</p>
      <p className="m-1">معرفی مدرسین</p>
      <p className="m-1">بلاگ</p>
    </div>
  );
};

export default Access;
