import ArticleImg from "./ArticleImg";
import ArticleOpinion from "./ArticleOpinion";
import ArticleBody from "./ArticleBody";
import Footer from "../../components/common/footer/Footer";
import ArticleCategory from "./ArticleCategory";
import ArticlesLast from "./ArticlesLast";

const ArticleDetails = () => {
  return (
    <>
      <div className="container max-w-[1366px] mx-auto flex items-start justify-between mb-10" data-aos="fade-up">
        <div className="w-[65%]" data-aos="fade-up">
          <ArticleImg />
          <ArticleBody />
          <ArticleOpinion />
        </div>
        <div className="w-[30%]" data-aos="fade-up">
          <ArticleCategory />
          <ArticlesLast />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleDetails;
