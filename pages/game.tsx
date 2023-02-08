import { CardGame } from "@/components/CardGame";
import { useT } from "@/Hooks/useT";
import { useSettings } from "@/providers";
import { clsx } from "clsx";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCountdown } from "usehooks-ts";

export default function Game() {
  const router = useRouter();
  const settings = useSettings();

  const t = useT();

  const [count, { startCountdown }] = useCountdown({
    countStart: settings.time ?? 30,
    // countStart: 5,
    intervalMs: 1000,
  });
  // LOSE WHEN TIME IS OVER
  useEffect(() => {
    if (count === 0) {
      settings.setTime(count);
      router.push("/gameover");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  // LOSE IF MAX FLIPS IS REACHED
  useEffect(() => {
    if (settings.flips === settings.maxFlips) {
      settings.setTime(count);
      router.push(`/gameover`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.flips, settings.maxFlips, router]);

  // WIN
  useEffect(() => {
    if (settings.match.length === settings.matchesToWin) {
      settings.setTime(count);
      router.push(`/win`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.match, settings.matchesToWin, router]);

  return (
    <div className=" h-screen w-screen overflow-hidden">
      <Head>
        <title>Memory Game</title>
      </Head>
      <div>
        <div>
          <div className="h-full min-h-screen w-screen bg-teal-400 bg-gradient-to-r xs:py-6 md:py-8 lg:py-4 2xl:py-8">
            <div className="grid xs:grid-cols-[70px_250px_70px] md:grid-cols-[200px_400px_220px] lg:grid-cols-[300px_400px_320px] xl:grid-cols-[300px_700px_320px] 2xl:grid-cols-[300px_1fr_320px]">
              <div className=" w-full">
                <Link
                  role="button"
                  href={`/level`}
                  className="  xs:ml-9 xs:text-2xl md:ml-20 md:h-12 md:w-10 md:text-4xl lg:ml-48 lg:text-2xl"
                >
                  ⬅️
                </Link>
              </div>

              <div className="flex items-center justify-center ">
                <h1 className="text-shadow h-fit w-fit text-center font-extrabold text-yellow-300 xs:text-2xl md:text-4xl  lg:text-4xl xl:text-5xl  ">
                  Memory Game 🧠
                </h1>
              </div>
              <div className=" w-full">
                <button
                  className={clsx(
                    "rounded-lg border bg-yellow-300 text-xl shadow xs:mr-1 xs:h-fit xs:w-fit md:ml-20 md:h-12 md:w-10 lg:h-fit  lg:w-fit",
                    {
                      "link-error line-through": settings.muted,
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

            <hr className="w-full opacity-40 xs:my-8 md:my-8 lg:my-3 2xl:my-8 "></hr>
            <div className="grid h-full  w-full place-items-center xs:py-6 md:py-6 lg:py-3 2xl:py-6  ">
              <div className="mb-4 grid grid-cols-3 ">
                <div
                  className={clsx(
                    "flex gap-4 font-bold  ",
                    {
                      "text-yellow-300 xs:text-lg md:text-3xl lg:text-2xl 2xl:text-3xl":
                        count >= 10,
                    },
                    {
                      "blink text-red-700 xs:text-lg md:text-5xl lg:text-4xl 2xl:text-5xl":
                        count < 10,
                    }
                  )}
                >
                  <h2>{t("time")} :</h2>
                  <div>{count}</div>
                </div>

                <h2 className="text-center font-bold text-yellow-300 xs:text-lg md:text-3xl lg:text-2xl 2xl:text-3xl">
                  {t("score")} : {settings.match.length}
                </h2>

                <h2 className="ml-auto w-full  font-bold  text-yellow-300  xs:text-lg md:text-3xl lg:text-2xl 2xl:text-3xl">
                  {t("flips")} : {settings.flips}
                </h2>
              </div>
              <div onClick={startCountdown}>
                <CardGame />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
