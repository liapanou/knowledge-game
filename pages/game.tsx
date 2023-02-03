import { CardGame } from "@/components/CardGame";
import Head from "next/head";
import { useCountdown } from "usehooks-ts";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSettings } from "@/providers";
import Link from "next/link";

export default function Game() {
  const router = useRouter();
  const level = router.query.level;

  const settings = useSettings();

  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: settings.time ?? 30,
      intervalMs: 1000,
    });

  const getFlips = settings.flips;

  const getScore = settings.scores;

  const [flips, setFlips] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  let flips1 = flips - 1;
  useEffect(() => {
    if (
      flips1 > getFlips ||
      (count === 0 && flips1 > getFlips) ||
      (count === 0 && score < getScore) ||
      (count === 0 && score < getScore && flips1 > getFlips)
    ) {
      router.push(`/gameover?time=${count}&score=${score}&flips=${flips1}`);
    }

    if (score >= getScore && flips1 <= getFlips) {
      router.push(`/win?time=${count}&score=${score}&flips=${flips1}`);
    }
  }, [count, score, flips1, flips, getScore, getFlips, router]);

  return (
    <div className=" w-screen h-screen overflow-hidden">
      <Head>
        <title>Memory Game</title>
      </Head>
      <div>
        <div>
          <div className="xs:py-6 md:py-8 lg:py-4 2xl:py-8 bg-gradient-to-r bg-teal-400 w-screen min-h-screen h-full">
            <div className="grid xs:grid-cols-[30px_2fr_30px] md:grid-cols-[100px_2fr_100px] ">
              <button
                className="xs:text-2xl md:text-4xl lg:text-2xl xs:ml-10 md:ml-40 "
                onClick={() => router.back()}
              >
                ⬅️
              </button>
              <div className="flex justify-center items-center">
                <h1 className="xs:text-2xl md:text-5xl lg:text-4xl xl:text-5xl text-shadow text-yellow-300 font-extrabold text-center  w-fit h-fit flex xs:ml-10 md:ml-24">
                  Memory Game 🧠
                </h1>
              </div>
              <button
                className={clsx(
                  "border shadow bg-yellow-300 xs:w-fit xs:h-fit md:w-10 md:h-12 lg:w-fit lg:h-fit rounded-lg xs:mr-7 md:mr-10 text-xl",
                  {
                    "line-through link-error": settings.muted,
                  }
                )}
                onClick={() => {
                  settings.setMute(!settings.muted);
                }}
              >
                🔊
              </button>
            </div>

            <hr className="xs:my-8 md:my-8 lg:my-3 2xl:my-8 w-full opacity-40 "></hr>
            <div className="grid place-items-center  w-full h-full xs:py-6 md:py-6 lg:py-3 2xl:py-6 ">
              <div>
                <div className="grid grid-cols-3 mb-4 ">
                  <div
                    className={clsx(
                      "flex gap-4 font-bold ",
                      {
                        "text-yellow-300 xs:text-lg md:text-3xl lg:text-2xl 2xl:text-3xl":
                          count >= 10,
                      },
                      {
                        "text-red-700 xs:text-lg md:text-5xl lg:text-4xl 2xl:text-5xl blink":
                          count < 10,
                      }
                    )}
                  >
                    <h2>Time :</h2>
                    <div>{count}</div>
                  </div>

                  <h2 className="xs:text-lg md:text-3xl lg:text-2xl 2xl:text-3xl text-yellow-300 font-bold text-center">
                    Score : {score}
                  </h2>

                  <h2 className="xs:text-lg md:text-3xl lg:text-2xl 2xl:text-3xl text-yellow-300 font-bold ml-auto">
                    Flips : {flips - 1}
                  </h2>
                </div>
                <div onClick={startCountdown}>
                  <CardGame
                    flips={flips}
                    setFlips={() => setFlips(flips + 1)}
                    score={score}
                    setScore={() => setScore(score + 1)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
