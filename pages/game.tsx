import { CardGame } from "@/components/CardGame";
import Head from "next/head";
import { useCountdown } from "usehooks-ts";
import { clsx } from "clsx";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSettings } from "@/providers";

export default function Game() {
  const router = useRouter();
  const level = router.query.level;

  const settings = useSettings();

  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: settings.time ?? 30,
      intervalMs: 1000,
    });

  function getFlip() {
    if (level === "easy") return 40;
    else if (level === "medium") return 30;
    else if (level === "hard") return 20;
    return 0;
  }

  function getScores() {
    if (level === "easy") return 3;
    else if (level === "medium") return 5;
    else if (level === "hard") return 6;
    return 0;
  }
  const getScore = getScores();
  const getFlips = getFlip();

  const [flips, setFlips] = useState<number>(1);
  const [score, setScore] = useState<number>(0);

  return (
    <div className=" w-screen h-screen overflow-hidden">
      <Head>
        <title>Memory Game</title>
      </Head>
      <div>
        <div>
          {count === 0 ||
          score === 8 ||
          (count === 0 && score >= getScore && flips <= getFlips) ||
          flips > getFlips ||
          (score >= getScore && flips <= getFlips) ? (
            <div
              onAnimationStart={stopCountdown}
              className="bg-teal-900 flex justify-center items-center py-80"
            >
              <div>
                <h1
                  className={clsx(
                    "text-9xl  uppercase text-red-700 font-extrabold mb-16 text-center blink",
                    {
                      "text-yellow-500": score >= getScore && flips <= getFlips,
                    }
                  )}
                >
                  {score >= getScore && flips <= getFlips
                    ? "You Win 🏆"
                    : "Game Over"}
                </h1>
                <div
                  className={clsx(
                    "text-5xl text-red-700  font-extrabold text-center  ",
                    {
                      "text-yellow-500": score >= getScore && flips <= getFlips,
                    }
                  )}
                >
                  <h2 className="mb-4"> Score : {score} </h2>
                  <h2 className="mb-4"> Flips : {flips - 1}</h2>
                  <h2>Time : {count}</h2>
                </div>
              </div>
            </div>
          ) : (
            <div
              onClick={startCountdown}
              className="p-8 bg-gradient-to-r bg-teal-400 w-screen min-h-screen h-full"
            >
              <h1 className="text-5xl text-shadow text-yellow-300 font-extrabold text-center">
                Memory Game 🧠
              </h1>
              <hr className="my-8 w-full opacity-40 "></hr>
              <div className="grid place-items-center  w-full h-full py-6 ">
                <div>
                  <div className="grid grid-cols-3 mb-4 ">
                    <div
                      className={clsx(
                        "flex gap-4 font-bold ",
                        {
                          "text-yellow-300 text-3xl": count >= 10,
                        },
                        {
                          "text-red-700 text-5xl blink": count < 10,
                        }
                      )}
                    >
                      <h2>Time :</h2>
                      <div>{count}</div>
                    </div>

                    <h2 className="text-3xl text-yellow-300 font-bold text-center">
                      Score : {score}
                    </h2>

                    <h2 className="text-3xl text-yellow-300 font-bold ml-auto">
                      Flips : {flips - 1}
                    </h2>
                  </div>

                  <CardGame
                    flips={flips}
                    setFlips={() => setFlips(flips + 1)}
                    score={score}
                    setScore={() => setScore(score + 1)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
