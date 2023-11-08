import Brand from "./Brand";
import ContactMethod from "./ContactMethod";
import FooterLinks from "./FooterLinks";
import WorkingTime from "./WorkingTime";

const Footer = () => {
  return (
    <div className="bg-[#3c6e71] pb-10 ">
      <footer className="container flex  flex-col md:flex-row   mx-auto items-stretch	justify-between	 pt-8 max-w-[1100px] mb-14 text-[#f2fcf8]">
        <ContactMethod />
        <FooterLinks />
        <WorkingTime />
      </footer>
      <Brand />
    </div>
  );
};

export default Footer;
