import ArticleAction from "./ArticleAction";
import ArticleImg from "./ArticleImg";
import ArticleInfo from "./ArticleInfo";
import styles from "./ArticlesCard.module.css";

const ArticlesCard = () => {
  return (
    <div
      className={`${styles.articleCard} w-[380px] h-[434px] max-lg:mx-10 max-xl:my-10 rounded text-right  mb-16 `}
    >
      <ArticleImg />
      <ArticleInfo />
      <ArticleAction />
    </div>
  );
};

export default ArticlesCard;
