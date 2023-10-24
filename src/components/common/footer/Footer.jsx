import Access from "./Access";
import Address from "./Address";
import Brand from "./Brand";
import Common from "./Common";
import Contact from "./Contact";
import Trust from "./Trust";

const Footer = () => {
  return (
    <div className="bg-[#3c6e71] ">
      <footer className="container flex  flex-col md:flex-row   mx-auto items-stretch	justify-between	 pt-8 max-w-[1366px] min-h-[420px] text-[#f2fcf8]">
        <Access />
        <Common />
        <Contact />
        <Trust />
      </footer>
      <Address />
      <Brand />
    </div>
  );
};

export default Footer;
