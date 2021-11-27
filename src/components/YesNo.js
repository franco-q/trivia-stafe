import React from "react";

const YesNo = ({ onNo, onYes }) => {
  return (
    <div className="bg-white text-4xl text-center flex max-w-xs rounded-xl mx-auto shadow-lg">
      <button
        className="block text-red-500 w-1/2 border-1 h-20 border-gray-500 border-t-0 border-b-0 border-l-0 border-solid"
        onClick={onYes}
      >
        <span className="leading-none inline-block font-bold align-bottom">
          SI
        </span>
      </button>
      <button
        className="block text-green-500 w-1/2 border-1 h-20"
        onClick={onNo}
      >
        <span className="leading-none inline-block font-bold align-bottom">
          NO
        </span>
      </button>
    </div>
  );
};

export default YesNo;
