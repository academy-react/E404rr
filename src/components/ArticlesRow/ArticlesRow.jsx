import ArticlesCard from "../ArticlesCard/ArticlesCard";

const ArticlesRow = () => {
  return (
    <div className="flex container max-w-[1366px] mx-auto justify-between items-center flex-wrap max-lg:justify-center mb-16">
      <ArticlesCard />
      <ArticlesCard />
      <ArticlesCard />
      <ArticlesCard />
      <ArticlesCard />
      <ArticlesCard />
    </div>
  );
};

export default ArticlesRow;
