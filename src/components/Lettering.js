import React, { useEffect } from "react";
import anime from "animejs";
import cn from "classnames";

const Lettering = ({ text, css = { letter: "letter" }, loop = false }) => {
  useEffect(() => {
    anime
      .timeline({
        loop,
        direction: "alternate",
        delay: (el, i) => 50 * i + 400,
      })
      .add({
        targets: `.${css.letter.split(" ").join(".")}`,
        translateY: ["1.5em", 0],
        translateZ: 0,
        duration: 750,
      });
  }, [text]);
  return (
    <h1 className={css.title}>
      {text.split(" ").map((w, i) => (
        <span key={i} className={css.txt}>
          {(w.match(/[\s\S]/g) || []).map((l, i) => (
            <span key={i} className={cn(css.letter, l === " " && css.space)}>
              {l}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
};

export default Lettering;
