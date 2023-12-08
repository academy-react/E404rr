import ArticleAction from "./ArticleAction";
import ArticleImg from "./ArticleImg";
import ArticleInfo from "./ArticleInfo";
import styles from "./ArticlesCard.module.css";

const ArticlesCard = ({
  img,
  title,
  id,
  miniDescribe,
  insertDate,
  currentLikeCount,
  currentDissLikeCount,addUserProfileImage
}) => {
  return (
    <div
      className={`${styles.articleCard} w-[380px] h-[500px] max-lg:mx-10 max-xl:my-10 rounded text-right  mb-16 `}
      data-aos="fade-up"
    >
      <ArticleImg img={addUserProfileImage} />
      <ArticleInfo
        title={title}
        id={id}
        miniDescribe={miniDescribe}
        currentLikeCount={currentLikeCount}
        currentDissLikeCount={currentDissLikeCount}
      />
      <ArticleAction id={id} insertDate={insertDate} />
    </div>
  );
};

export default ArticlesCard;
