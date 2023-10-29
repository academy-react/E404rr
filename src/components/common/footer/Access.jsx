import { NavLink } from "react-router-dom";
import styles from "./footer.module.css";

const Access = () => {
  return (
    <div className="max-md:mx-auto  max-md:my-8">
      <h3 className={` ${styles.title} max-w-xs `}>دسترسی</h3>
      <NavLink to="/course">
        <p className="m-1 mt-3">دوره ها</p>
      </NavLink>
      <NavLink to="/introducing-teachers">
        <p className="m-1">معرفی مدرسین</p>
      </NavLink>
      <NavLink to="/blog">
        <p className="m-1">بلاگ</p>
      </NavLink>
    </div>
  );
};

export default Access;
