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
        " flex justify-center items-center py-80 bg-lose-pattern"
      )}
    >
      <div>
        <h1
          className={clsx(
            "text-9xl  uppercase text-red-700 font-extrabold mb-16 text-center blink"
          )}
        >
          Game Over
        </h1>

        <div
          className={clsx(
            "text-5xl text-red-700  font-extrabold text-center  "
          )}
        >
          <h2 className="mb-4"> Score : {score} </h2>
          <h2 className="mb-4"> Flips : {flips}</h2>
          <h2>Time : {time}</h2>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={() => router.back()}
            className={clsx(
              "bg-red-700 w-60 h-14 rounded-xl font-extrabold text-center py-4 text-slate-50 hover:text-black "
            )}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
