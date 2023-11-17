import ArticleImg from "./ArticleImg";
import ArticleOpinion from "./ArticleOpinion";
import ArticleBody from "./ArticleBody";
import Footer from "../../components/common/footer/Footer";
import ArticleCategory from "./ArticleCategory";
import ArticlesLast from "./ArticlesLast";
import { GetNewsById } from "../../core/services/api/getNewsTopById";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ArticleDetails = () => {
  const [data, setData] = useState([]);
  const UserId = useParams().id;
  const GetNewsApiById = async () => {
    const items = await GetNewsById(UserId);
    setData(items);
    console.log("see course: " + data);
  };
  useEffect(() => {
    GetNewsApiById();
  }, [UserId]);
  return (
    <>
      <div className="container max-w-[1366px] mx-auto flex items-start justify-between mb-10" data-aos="fade-up">
        <div className="w-[65%]" data-aos="fade-up">
          <p> id: {data.id}</p>
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
