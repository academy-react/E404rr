import img from "../../assets/img/ArticleDetails/Article.png";

const ArticleImg = () => {
  return (
    <div className="rounded-xl my-10">
      <img className="w-[100%] h-[30%] rounded-xl" src={img} alt="" />
    </div>
  );
};

export default ArticleImg;
