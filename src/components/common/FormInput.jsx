import React from "react";

const FormInput = ({ field, type, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="focus:outline-none focus:placeholder:opacity-0 w-full mx-2 my-4 px-6 py-2 shadow-md shadow-gray-200 rounded-lg placeholder-darker-green"
        {...field}
      />
    </div>
  );
};

export default FormInput;
