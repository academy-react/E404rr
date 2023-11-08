import React from "react";
import LastArticleCard from "./LastArticleCard";

const ArticlesLast = () => {
  return (
    <div>
      <div className="flex items-center text-white bg-[#23A455] text-xl max-w-[300px] font-bold py-4 px-6 rounded-3xl">
        آخرین مقالات
      </div>
      <div className="mt-5 bg-gradient-to-bl from-[#f3fcf8] to-white rounded-3xl px-6 py-4 max-w-[300px] text-[#323E73]">
        <LastArticleCard />
        <LastArticleCard />
        <LastArticleCard />
      </div>
    </div>
  );
};

export default ArticlesLast;
