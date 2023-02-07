import { CardGame } from "@/components/CardGame";
import Head from "next/head";
import { useCountdown } from "usehooks-ts";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSettings } from "@/providers";
import Link from "next/link";
import { useT } from "@/Hooks/useT";

export default function Game() {
  const router = useRouter();
  const level = router.query.level;

  const settings = useSettings();
  const t = useT();

  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: settings.ltime ?? 30,
      intervalMs: 1000,
    });

  const getFlips = settings.lflips;

  const getScore = settings.lscores;
  let score = settings.scores;

  const [flips, setFlips] = useState<number>(1);

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
            <div className="grid xs:grid-cols-[70px_250px_70px] md:grid-cols-[200px_400px_220px] lg:grid-cols-[300px_400px_320px] xl:grid-cols-[300px_700px_320px] 2xl:grid-cols-[300px_1fr_320px]">
              <div className=" w-full">
                <Link
                  role="button"
                  href={`/level`}
                  className="  xs:text-2xl md:text-4xl md:w-10 md:h-12 lg:text-2xl xs:ml-9 md:ml-20 lg:ml-48"
                >
                  ⬅️
                </Link>
              </div>

              <div className="flex justify-center items-center ">
                <h1 className="xs:text-2xl md:text-4xl lg:text-4xl xl:text-5xl text-shadow text-yellow-300 font-extrabold text-center  w-fit h-fit  ">
                  Memory Game 🧠
                </h1>
              </div>
              <div className=" w-full">
                <button
                  className={clsx(
                    "border shadow bg-yellow-300 xs:w-fit xs:h-fit md:w-10 md:h-12 lg:w-fit lg:h-fit rounded-lg xs:mr-1 md:ml-20  text-xl",
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
            </div>

            <hr className="xs:my-8 md:my-8 lg:my-3 2xl:my-8 w-full opacity-40 "></hr>
            <div className="grid place-items-center  w-full h-full xs:py-6 md:py-6 lg:py-3 2xl:py-6  ">
              <div className="grid grid-cols-3 mb-4 ">
                <div
                  className={clsx(
                    "flex gap-4 font-bold  ",
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
                  <h2>{t("time")} :</h2>
                  <div>{count}</div>
                </div>

                <h2 className="xs:text-lg md:text-3xl lg:text-2xl 2xl:text-3xl text-yellow-300 font-bold text-center">
                  {t("score")} : {score}
                </h2>

                <h2 className="xs:text-lg md:text-3xl  lg:text-2xl  w-full  2xl:text-3xl text-yellow-300 font-bold ml-auto">
                  {t("flips")} : {flips - 1}
                </h2>
              </div>
              <div onClick={startCountdown}>
                <CardGame
                  flips={flips}
                  setFlips={() => setFlips(flips + 1)}
                  score={score}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
