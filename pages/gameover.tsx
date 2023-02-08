import { useT } from "@/Hooks/useT";
import { useSettings } from "@/providers";
import clsx from "clsx";
import { useRouter } from "next/router";

export default function GameOver() {
  const settings = useSettings();
  const router = useRouter();
  const { flips, match, time } = settings;
  const t = useT();
  return (
    <div
      className={clsx(
        " bg-lose flex h-screen w-screen items-center justify-center object-contain lg:py-32 xl:py-64 2xl:py-80"
      )}
    >
      <div>
        <h1
          className={clsx(
            "blink mb-16 text-center  font-extrabold uppercase text-red-700 xs:text-5xl md:text-8xl lg:text-9xl"
          )}
        >
          {t("gameOver")}
        </h1>

        <div
          className={clsx(
            "text-center font-extrabold text-red-700  xs:text-3xl md:text-5xl  "
          )}
        >
          <h2 className="mb-4">
            {t("score")} : {match.length}
          </h2>
          <h2 className="mb-4">
            {t("flips")} : {flips}
          </h2>
          <h2>
            {t("time")} : {time}
          </h2>
        </div>
        <div className="flex items-center justify-center xs:mt-16 md:mt-20 lg:mt-6">
          <button
            onClick={(evt) => router.push("/")}
            className={clsx(
              "h-14 w-60 rounded-xl bg-red-700 text-center font-extrabold text-slate-50 hover:text-black xs:h-14 xs:w-60 xs:py-4 xs:text-lg md:h-20 md:w-1/2 md:py-6 md:text-2xl lg:h-14 lg:w-60  lg:py-4 lg:text-lg "
            )}
          >
            {t("tryAgain")}
          </button>
        </div>
      </div>
    </div>
  );
}
