import { NavLink } from "react-router-dom";
import styles from "./footer.module.css";

const Common = () => {
  return (
    <div className="max-md:mx-auto  max-md:my-8">
      <h3 className={` ${styles.title} max-w-xs `}>متداول</h3>
      <NavLink to="/consultation-req">
        <p className="m-1 mt-3">درخواست مشاوره</p>
      </NavLink>
      <NavLink to="/login">
        <p className="mt-1 mr-1">ورود</p>
      </NavLink>
    </div>
  );
};

export default Common;
