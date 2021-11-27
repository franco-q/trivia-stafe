import React from "react";
import { useHistory } from "react-router-dom";
import Lettering from "components/Lettering";
import UIfx from "uifx";
import Logo1 from "../assets/logo1.svg";
import Logo2 from "../assets/logo2.svg";
import tapAudio from "../assets/TAP.mp3";
const tap = new UIfx(tapAudio);

const Page1 = () => {
  const history = useHistory();
  return (
    <div className="h-screen w-screen flex justify-between flex-col py-14 relative">
      <div className="flex items-center justify-between px-12">
        <Logo1 className="h-14" />
        <Logo2 className="h-24" />
      </div>
      <div className="flex justify-center items-center flex-col">
        <Lettering
          text="TRIVIA"
          loop
          css={{
            title:
              "relative font-bold my-0 text-9xl flex justify-center items-center flex-wrap",
            txt: "relative inline-block overflow-hidden mr-8",
            letter: "inline-block",
            space: "w-8",
          }}
        />
      </div>
      <div className="flex justify-center items-center">
        <button
          className="flex bg-white shadow-lg rounded-full justify-center items-center h-28 w-96"
          onClick={() => {
            tap.play();
            history.push("/2");
          }}
        >
          <span className="text-5xl text-gray-500 leading-none block font-medium mt-3">
            EMPEZAR
          </span>
        </button>
      </div>
    </div>
  );
};

export default Page1;
