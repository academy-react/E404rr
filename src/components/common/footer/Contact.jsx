import { NavLink } from "react-router-dom";
import styles from "./footer.module.css";

const Contact = () => {
  return (
    <div className="max-md:mx-auto max-md:my-8">
      <h3 className={` ${styles.title} max-w-xs `}>ارتباط با ما</h3>
      <NavLink to="/contact-us">
        <p className="m-1 mt-3">تماس با ما</p>
      </NavLink>
      <NavLink to="/about-us">
        <p className="m-1">درباره ما</p>
      </NavLink>
    </div>
  );
};

export default Contact;
