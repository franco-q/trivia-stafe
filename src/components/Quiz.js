import React, { useState, useMemo } from "react";
import cn from "classnames";
import Correct from "../assets/correct.svg";
import Wrong from "../assets/wrong.svg";

const indexes = ["A", "B", "C", "D"];
const Quiz = ({
  quiz,
  options,
  correct,
  className,
  onCorrectAnswer,
  onWrongAnswer,
  onAnimationEnd,
  onAnswer,
}) => {
  const [answers, setAnswers] = useState([]);
  const _options = useMemo(
    () =>
      options
        .filter((opt) => opt !== correct)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .concat([correct])
        .filter(Boolean)
        .sort(() => 0.5 - Math.random()),
    [options]
  );
  return (
    <div
      className={cn("bg-white rounded-3xl overflow-hidden w-full", className)}
      onAnimationEnd={onAnimationEnd}
    >
      <div className="bg-purple-900 p-4 text-center text-2xl">{quiz}</div>
      <ul className="list-none m-0 px-4 py-1">
        {_options.map((opt, i) => (
          <li
            key={i}
            className={cn(
              "rounded-full border border-gray-500 my-3 p-3 text-black leading-none flex items-center",
              answers.includes(opt) &&
                opt !== correct &&
                "bg-red-500 border-red-500 text-white",
              answers.includes(opt) &&
                opt === correct &&
                "bg-green-500 border-green-500 text-white"
            )}
            onClick={() => {
              if (
                correct &&
                !answers.includes(correct) &&
                !answers.includes(opt)
              ) {
                opt === correct
                  ? onCorrectAnswer && onCorrectAnswer(true)
                  : (() => {
                      setAnswers((a) => a.concat([opt]));
                      onWrongAnswer && onWrongAnswer();
                      opt = correct;
                      onCorrectAnswer && onCorrectAnswer();
                    })();
                setAnswers((a) => a.concat([opt]));
              }
              onAnswer && onAnswer(opt);
            }}
          >
            <span
              className={cn(
                "h-7 w-7 inline-block rounded-full leading-7 border-black border-2 text-center mr-2 bg-white flex-shrink-0",
                !answers.includes(opt) && "border-black",
                answers.includes(opt) && opt === correct && "border-green-500",
                answers.includes(opt) && opt !== correct && "border-red-500"
              )}
            >
              {!answers.includes(opt) && indexes[i]}
              {answers.includes(opt) && opt === correct && (
                <Correct className="inline-block m-0 h-7 w-7 text-green-500" />
              )}
              {answers.includes(opt) && opt !== correct && (
                <Wrong className="inline-block m-0 h-7 w-7 text-red-500" />
              )}
            </span>
            <span>{opt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
