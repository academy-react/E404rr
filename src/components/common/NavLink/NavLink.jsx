/* eslint-disable react/prop-types */
import LinkButton from "../LinkButton/LinkButton";
import Title from "../Title/Title";

const NavLink = ({ title, path }) => {
  return (
    <div className="container flex mx-auto max-w-[1250px]  m-16 items-center justify-between max-xl:px-10">
      <Title title={title} />
      <LinkButton path={path} />
    </div>
  );
};

export default NavLink;
