import ArticlesRow from "../../components/ArticlesRow/ArticlesRow";
import NavLink from "../../components/common/NavLink/NavLink";

const LastArticles = () => {
  return (
    <div>
      <NavLink title="آخرین مقالات سایت" path="مشاهده همه مقالات" />
      <ArticlesRow />
    </div>
  );
};

export default LastArticles;
