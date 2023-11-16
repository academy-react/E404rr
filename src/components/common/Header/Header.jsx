import { NavLink, Outlet, useParams, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import HeaderNav from "./HeaderNav";
import HeaderLeft from "./HeaderLeft";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";
import tw from "tailwind-styled-components";

const YourDiv = tw.div`
  fixed
  z-50
  bottom-8
  left-8
  bg-green-600
  rounded-xl
  text-white
  p-4
  cursor-pointer
  transition-all
   
`;

const Header = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDiv, setShowDiv] = useState(false);
  const ColorRgb = "rgb(22, 163 ,74)";
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const result = { id, otherData: "..." };
        setData(result);
      } catch (error) {
        console.error("خطا در دریافت داده:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, location.key]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 600 ) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
      
        className="container   max-w-[1250px] mx-auto mt-3 h-[70px] flex items-center justify-between px-14 mb-10 rounded-lg bg-[#f3fcf8]"
      >
        <MobileNav />
        <Logo />
        <HeaderNav />
        <HeaderLeft />
      </nav>

      <YourDiv    data-aos="fade-up" show={showDiv} onClick={scrollToTop} className={showDiv ? ``  : `  hidden transition-all
  z-50
  bottom-8
  right-8
  bg-green-500
  text-white
  p-4
  cursor-pointer`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
</svg>

      </YourDiv>
      {loading ? (
        <div className="flex items-center justify-center h-[70vh]">
          <BeatLoader size={25} color={ColorRgb} loading={true} className="" />
        </div>
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};

export default Header;
