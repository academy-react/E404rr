import { NavLink, Outlet } from "react-router-dom";
import Logo from "../Logo/Logo";
import HeaderNav from "./HeaderNav";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
  return (
    <>
      <nav className="container max-w-[1250px] mx-auto mt-3 h-[70px] flex items-center justify-between px-14 mb-10 rounded-lg bg-[#f3fcf8]">
        <Logo />
        <HeaderNav />
        <HeaderLeft />
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
