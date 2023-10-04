import LinkButton from "../LinkButton/LinkButton";
import Title from "../Title/Title";

const NavLink = () => {
  return (
    <div className="container flex mx-auto max-w-[1366px]  m-16 items-center justify-between max-xl:px-10">
      <Title title="دوره های محبوب" />
      <LinkButton path="مشاهده همه دوره ها" />
    </div>
  );
};

export default NavLink;
