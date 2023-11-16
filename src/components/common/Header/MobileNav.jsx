import React from "react";
import NavItems from "./NavItems";
import styles from "./Header.module.css";

const MobileNav = () => {
  return (
    <div className={`${styles.navMobile} relative text-[14px]  text-[#323E73]`} >
      <input
        className={`${styles.toggleNav} hidden`}
        id="toggle_nav"
        type="checkbox"
      />
      <label
        for="toggle_nav"
        class={`${styles.labelToggleNav} absolute top-[-10px]`}
      >
        <span className={` ${styles.line} ${styles.lineTop} `}></span>
        <span className={` ${styles.line} lineMid `}></span>
        <span className={` ${styles.line} lineBottom `}></span>
      </label>
      <ul className={` ${styles.listNavMobile} `}>
        <NavItems />
      </ul>
    </div>
  );
};

export default MobileNav;
