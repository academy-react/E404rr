import ArticleBtn from "./ArticleBtn";

const ArticleAction = ({id , insertDate}) => {
  return (
    <div className="flex items-center justify-between mx-4 px-6 py-8 border-t-2">
      <div>
        <ArticleBtn path="مطالعه"  id={id}/>
      </div>
      {/* <div className="flex text-sm">30 آذر 1397</div> */}
      <div className="flex text-sm">{insertDate.slice(length , 10)}</div>

    </div>
  );
};

export default ArticleAction;
