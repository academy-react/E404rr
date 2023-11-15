import { NavLink, Outlet, useParams, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import HeaderNav from "./HeaderNav";
import HeaderLeft from "./HeaderLeft";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const Header = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
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

  return (
    <>
      <nav className="container max-w-[1250px] mx-auto mt-3 h-[70px] flex items-center justify-between px-14 mb-10 rounded-lg bg-[#f3fcf8]">
        <MobileNav />
        <Logo />
        <HeaderNav />
        <HeaderLeft />
      </nav>

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