import ArticlesRow from "../../components/ArticlesRow/ArticlesRow";
import NavLink from "../../components/common/NavLink/NavLink";

const LastArticles = () => {
  return (
    <div   data-aos="fade-up"  >
      <NavLink title="آخرین مقالات سایت" path="مشاهده همه مقالات" url="/blog" />
      <ArticlesRow />
    </div>
  );
};

export default LastArticles;
