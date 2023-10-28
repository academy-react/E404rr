import React from "react";

const TextInput = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="focus:outline-none w-full px-6 py-2 shadow-md focus:placeholder:opacity-0 shadow-gray-200 rounded-lg placeholder-darker-green"
    />
  );
};

export default TextInput;
