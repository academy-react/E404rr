import styles from "./footer.module.css";

const Common = () => {
  return (
    <div className="max-md:mx-auto  max-md:my-8">
      <h3 className={` ${styles.title} max-w-xs `}>متداول</h3>
      <p className="m-1 mt-3">پرسش و پاسخ </p>
      <p className="m-1">درخواست مشاوره</p>
      <p className="m-1">ورود</p>
    </div>
  );
};

export default Common;
