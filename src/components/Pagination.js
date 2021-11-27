import React from "react";
import cn from "classnames";
import { useHistory } from "react-router-dom";

const Pagination = ({ length, active, className }) => {
  let history = useHistory();
  return (
    <div className="w-full flex justify-between items-center h-14">
      <ul className="list-none w-full flex justify-between items-center">
        {Array.from({ length }, (item, index) => (
          <li
            key={index}
            className={cn(
              "h-2 w-full bg-white mr-2 rounded-md shadow-lg blur-md",
              index <= active ? "bg-opacity-50" : "bg-opacity-30"
            )}
          ></li>
        ))}
      </ul>
      <button
        onClick={() => history.push({ pathname: "/" })}
        className="text-white opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M4.99 3.99a1 1 0 00-.697 1.717L10.586 12l-6.293 6.293a1 1 0 101.414 1.414L12 13.414l6.293 6.293a1 1 0 101.414-1.414L13.414 12l6.293-6.293a1 1 0 00-.727-1.717 1 1 0 00-.687.303L12 10.586 5.707 4.293a1 1 0 00-.717-.303z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
