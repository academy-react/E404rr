/* eslint-disable react/prop-types */
const ArticleBtn = ({ path }) => {
  return (
    <div className="bg-[#f3fcf8] rounded-lg text-[12px] py-1 px-5 text=[#323E73] hover:cursor-pointer hover:scale-105 transition-[0.5s]">
      {path}
    </div>
  );
};

export default ArticleBtn;
