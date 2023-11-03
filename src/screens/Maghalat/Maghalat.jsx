import { useState } from "react";

import Pagination from "../../components/Maghalat/Pagination";
import TextInput from "../../components/common/TextInput";
import Footer from "../../components/common/footer/Footer";
import maghaleImg from "../../assets/img/maghaleImg.png";
import searchImg from "../../assets/img/search.svg";
import ArticlesCard from "../../components/ArticlesCard/ArticlesCard";
import ArticleCategory from "../ArticleDetails/ArticleCategory";
import ArticlesLast from "../ArticleDetails/ArticlesLast";

const Maghalat = () => {
  const [items, setItems] = useState([
    { title: "مقاله", date: "1400/03/11" },
    { title: "مقاله", date: "1400/03/11" },
    { title: "مقاله", date: "1400/03/11" },
    { title: "مقاله", date: "1400/03/11" },
    { title: "مقاله", date: "1400/03/11" },
    { title: "مقاله", date: "1400/03/11" },
    { title: "مقاله", date: "1400/03/11" },
    { title: "مقاله", date: "1400/03/11" },
    { title: "مقاله", date: "1400/03/11" },
    { title: "مقاله", date: "1400/03/11" },
    { title: "مقاله", date: "1400/03/11" },
    { title: "مقاله", date: "1400/03/11" },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== Math.ceil(items.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div className="container font-vazir mx-auto px-10 text-center">
        <div className="flex flex-col max-w-[1250px] mx-auto lg:flex-row gap-5 justify-between items-center my-6 px-8 py-2 rounded-lg bg-lighter-green/10">
          <div className="relative w-full md:w-[450px]">
            <TextInput type="text" placeholder="جستجو مقاله های مختلف..." />
            <img
              src={searchImg}
              onClick={(v) => console.log(v)}
              className="absolute left-0 top-1/2 w-[20px] ml-4 -translate-y-1/2 rounded-md cursor-pointer"
            />
          </div>
        </div>
        <div className="flex container max-w-[1250px] mx-auto justify-between items-start  mb-16 mt-10">
          <div className="flex max-w-[65%] justify-between items-start flex-wrap max-lg:justify-center">
            <ArticlesCard />
            <ArticlesCard />
            <ArticlesCard />
            <ArticlesCard />
            <ArticlesCard />
            <ArticlesCard />
            <ArticlesCard />
            <ArticlesCard />
            <ArticlesCard />
            <ArticlesCard />
          </div>
          <div className="w-[30%]">
            <ArticleCategory />
            <ArticlesLast />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Maghalat;
