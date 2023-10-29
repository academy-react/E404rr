/* eslint-disable react/prop-types */
const LinkButton = ({ path }) => {
  return (
    <div className="bg-[#f3fcf8] rounded-md hover:scale-105 transition-[0.5s] hover:font-medium	p-3 px-4 text=[#323E73] hover:cursor-pointer">
      {path}
    </div>
  );
};

export default LinkButton;
