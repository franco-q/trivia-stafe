import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import cn from "classnames";
import NextArrow from "../assets/arrow-right.svg";
import Quiz from "../components/Quiz";
import Pagination from "../components/Pagination";
import UIfx from "uifx";
import tapAudio from "../assets/TAP.mp3";
import wrongAudio from "../assets/ERROR.mp3";
import correctAudio from "../assets/ACIERTO.mp3";

const mp3_tap = new UIfx(tapAudio);
const mp3_wrong = new UIfx(wrongAudio);
const mp3_correct = new UIfx(correctAudio);

const quizes = [
  {
    quiz: "¿Para qué sirve el Sello Empresa Propiedad de Mujeres?",
    correct:
      "Reconocer y visibilizar a aquellas empresas constituidas por mujeres.",
    options: [
      "Brindar capacitaciones sobre economía.",
      "Reconocer y visibilizar a aquellas empresas constituidas por mujeres.",
      "Generar igualdad de oportunidades.",
    ],
    definition: (
      <>
        Con el Sello Empresa Propiedad de mujeres se busca reconocer y
        visibilizar a aquellas empresas constituidas por mujeres, generando
        acciones que ayuden a definir políticas para fomentar su crecimiento y
        desarrollo.
      </>
    ),
  },
  {
    quiz: "¿Cuántos Puntos Violetas serán construidos en todo el territorio provincial?",
    correct: "40",
    options: ["40", "50", "60"],
    definition: (
      <>
        En cada uno de los 40 Puntos Violetas, distribuidos estratégicamente en
        todo el territorio provincial, funcionarán espacios de contención y
        asesoramiento, de articulación con organizaciones y asociaciones para
        proveer de herramientas teóricas y prácticas para el acceso al trabajo,
        la producción, el empleo y la autonomía económica de mujeres y
        disidencias.
      </>
    ),
  },

  {
    quiz: "¿Cuántas personas recibieron la capacitación de Ley Micaela hasta el día de la fecha?",
    correct: "Más de 8000",
    options: ["Menos de 5000", "Más de 8000", "Aproximadamente 6000"],
    definition: (
      <>
        Hasta hoy ya se capacitaron más de 8000 estatales, incluyendo policía y
        más de 1500 personas de más de 300 municipios y comunas, ampliando la
        convocatoria a clubes, federaciones y sindicatos.
      </>
    ),
  },

  {
    quiz: "¿Sabías que hay un espacio destinado a los y las jóvenes?",
    correct: "SI",
    options: ["SI", "NO"],
    definition: (
      <>
        A través de ATR Juventudes Santa Fe, el Ministerio de Igualdad, Género y
        Diversidad se encarga de generar políticas públicas orientadas a los y
        las jóvenes de la provincia de Santa Fe con la importancia de que
        encuentren, con el acompañamiento del Estado, las herramientas para
        desarrollar sus proyectos de vida, expresar sus ideas y construir sus
        sueños.
      </>
    ),
  },

  {
    quiz: (
      <>
        La <strong>"Ley Micaela"</strong> obliga a capacitarse en género y
        violencia contra las mujeres a:
      </>
    ),
    correct:
      "Es obligatoria para todas las personas que integran los tres poderes del Estado.",
    options: [
      "Es obligatoria para todas las personas que integran los tres poderes del Estado.",
      "Es obligatoria para algunas personas que trabajan en el Estado",
      "Quienes quieran realizar la capacitación",
    ],
    definition: null,
  },

  {
    quiz: "A través del programa Cuidar Santa Fe se busca:",
    correct:
      "Contribuir a la promoción de la distribución  de las tareas de cuidado",
    options: [
      "Brindar cuidado a quienes lo soliciten",
      "Contribuir a la promoción de la distribución  de las tareas de cuidado",
    ],
    definition: (
      <>
        La finalidad es crear un Sistema Integral de Cuidados, para garantizar
        el derecho a recibir cuidado, cuidarse y a cuidar en condiciones de
        calidad e igualdad en toda la provincia de Santa Fe. Este programa está
        destinado a primera infancia, personas con discapacidad, personas que
        requieran asistencia, personas adultas mayores dependientes y cuidadores
        y cuidadoras. Para inscribirte, podes ingresar a la web del Ministerio
        de Igualdad, Género y Diversidad.
      </>
    ),
  },
].sort(() => 0.5 - Math.random());

const Page3 = () => {
  let history = useHistory();
  const [active, setActive] = useState(0);
  const [wrong, setWrong] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const _quizes = useMemo(
    () => quizes.sort(() => 0.5 - Math.random()),
    [quizes]
  );

  return (
    <div className="h-screen w-screen flex justify-between items-center flex-col p-12 relative">
      <Pagination length={quizes.length} active={active} />
      <div></div>
      <div className="relative w-full max-w-md">
        {_quizes.map((opts, i) => (
          <Quiz
            key={i}
            className={cn(
              "absolute transform scale-0 transition-all duration-300 ease-in-out -translate-y-3/4",
              active === i && (correct ? "scale-105" : "scale-125"),
              active === i && wrong && "shake"
            )}
            onCorrectAnswer={(real) => {
              setCorrect(true);
              real && setCorrectAnswers((v) => v + 1);
              mp3_correct.play();
            }}
            onWrongAnswer={() => {
              setWrong(true);
            }}
            onAnimationEnd={() => setWrong(false)}
            {...opts}
          />
        ))}
      </div>
      <div>
        {correct && (
          <>
            <div className="rounded-3xl shadow-lg bg-opacity-70 blur-lg p-7 bg-gray-200 max-w-screen-lg puff-in-center text-black text-3xl">
              <strong className="block mb-4">{_quizes[active].correct}</strong>
              <p className="m-0">{_quizes[active].definition}</p>
            </div>
            <div className="fixed bottom-14 right-14">
              <button
                className="text-center"
                onClick={() => {
                  if (active === _quizes.length - 1) {
                    history.push("/3", { correctAnswers });
                  } else {
                    setActive((v) => v + 1);
                    setCorrect(false);
                  }
                  mp3_tap.play();
                }}
              >
                <div className="flex justify-center items-center bg-white rounded-full h-24 w-24 mb-6 text-gray-500">
                  <NextArrow />
                </div>
                Siguiente
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page3;
