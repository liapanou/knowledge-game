import { useSettings } from "@/providers";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export default function GameOver() {
  const router = useRouter();
  const { flips, score, time } = router.query;

  return (
    <div
      className={clsx(
        " flex justify-center items-center lg:py-32 xl:py-64 2xl:py-80 bg-lose object-contain w-screen h-screen"
      )}
    >
      <div>
        <h1
          className={clsx(
            "xs:text-5xl md:text-8xl lg:text-9xl  uppercase text-red-700 font-extrabold mb-16 text-center blink"
          )}
        >
          Game Over
        </h1>

        <div
          className={clsx(
            "xs:text-3xl md:text-5xl text-red-700  font-extrabold text-center  "
          )}
        >
          <h2 className="mb-4"> Score : {score} </h2>
          <h2 className="mb-4"> Flips : {flips}</h2>
          <h2>Time : {time}</h2>
        </div>
        <div className="flex justify-center items-center xs:mt-16 md:mt-20 lg:mt-6">
          <button
            onClick={() => router.back()}
            className={clsx(
              "bg-red-700 w-60 h-14 rounded-xl xs:w-60 xs:h-14 md:w-1/2 md:h-20 lg:w-60 lg:h-14 xs:text-lg md:text-2xl lg:text-lg font-extrabold text-center xs:py-4 md:py-6 lg:py-4  text-slate-50 hover:text-black "
            )}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
