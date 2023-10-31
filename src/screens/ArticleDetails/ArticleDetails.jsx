import ArticleAbout from "./ArticleAbout";
import ArticleImg from "./ArticleImg";
import ArticleNews from "./ArticleNews";
import ArticleText from "./ArticleText";
import ArticleTitle from "./ArticleTitle";

const ArticleDetails = () => {
  return (
    <div className="container max-w-[1366px] mx-auto flex flex-col ">
      <ArticleImg />
      <ArticleNews />
      <ArticleAbout />
      <ArticleTitle />
      <ArticleText />
    </div>
  );
};

export  {ArticleDetails}
