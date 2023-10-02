import styles from "./footer.module.css";

const Common = () => {
  return (
    <div>
      <h3 className={styles.title}>متداول</h3>
      <p className="m-1 mt-3">پرسش و پاسخ </p>
      <p className="m-1">درخواست مشاوره</p>
      <p className="m-1">ورود</p>
    </div>
  );
};

export default Common;
