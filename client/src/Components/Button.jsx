import React from "react";

const Button = ({ children, isTransaprent, ...rest }) => {
  return (
    <>
      <div className="flex justify-center items-center" {...rest}>
        <button
          className={
            isTransaprent
              ? "bg-white text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-transparent hover:text-white transition-colors duration-300"
              : "bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
          }
        >
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
