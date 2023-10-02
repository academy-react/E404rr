import Access from "./Access";
import Common from "./Common";
import Contact from "./Contact";
import Trust from "./Trust";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <footer
        className={` ${style.footer} container-xl flex mx-auto items-stretch	justify-between	 pt-8`}
      >
        <Access />
        <Common />
        <Contact />
        <Trust />
      </footer>
    </div>
  );
};

export default Footer;
