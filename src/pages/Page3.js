import React, { useState, useEffect } from "react";
import NextArrow from "../assets/refresh-cw.svg";
import { useHistory } from "react-router-dom";
import Confetti from "react-confetti";
import Lettering from "../components/Lettering";
import UIfx from "uifx";
import tapAudio from "../assets/TAP.mp3";
import winAudio from "../assets/WIN.mp3";

const mp3_tap = new UIfx(tapAudio);
const mp3_win = new UIfx(winAudio);

const Page3 = () => {
  let history = useHistory();
  const [step, setStep] = useState(0);

  useEffect(() => {
    mp3_win.play();
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center item-center flex-col p-12 relative">
      <Confetti
        width={1920}
        height={1080}
        numberOfPieces={1000}
        tweenDuration={10000}
        recycle={false}
        gravity={0.05}
      />
      <Lettering
        text="Completaste la consigna"
        loop
        css={{
          title:
            "relative font-bold my-0 text-9xl flex justify-center items-center flex-wrap",
          txt: "relative inline-block overflow-hidden mr-8",
          letter: "inline-block",
          space: "w-8",
        }}
      />
      {history.location.state.correctAnswers && (
        <h2 className="{css.subtitle} text-center text-6xl mb-6 mt-4">
          Contestaste {history.location.state.correctAnswers} preguntas
        </h2>
      )}
      <div className="fixed bottom-14 right-14">
        <button
          className="text-center"
          onClick={() => {
            mp3_tap.play();
            history.push("/");
          }}
        >
          <div className="flex justify-center items-center bg-white rounded-full h-24 w-24 mb-6 text-gray-500">
            <NextArrow />
          </div>
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default Page3;
