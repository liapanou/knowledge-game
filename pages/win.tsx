import { useT } from "@/Hooks/useT";
import { SettingsProvider, useSettings } from "@/providers";
import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Win() {
  const router = useRouter();
  const { flips, score, time } = router.query;
  const settings = useSettings();
  const t = useT();

  return (
    <div className=" w-screen h-screen overflow-hidden ">
      <Head>
        <title>Memory Game</title>
      </Head>
      <div>
        <div>
          <div className=" flex justify-center items-center lg:py-32 xl:py-64 2xl:py-80 bg-win object-contain w-screen h-screen">
            <div>
              <h1 className=" xs:text-5xl md:text-8xl lg:text-9xl  uppercase text-yellow-500 font-extrabold mb-16 text-center blink">
                {t("youWin")} 🏆
              </h1>

              <div className="xs:text-3xl md:text-5xl text-yellow-500 font-extrabold text-center   ">
                <h2 className="mb-4">
                  {t("score")} : {score}
                </h2>
                <h2 className="mb-4">
                  {t("flips")}: {flips}
                </h2>
                <h2>
                  {t("time")} : {time}
                </h2>
              </div>
              <div className="flex justify-center items-center xs:mt-16 md:mt-20 lg:mt-6">
                <Link
                  role="button"
                  href={settings.level === "hard" ? "/" : `/game`}
                  onClick={() => {
                    if (settings.level === "easy") settings.setLevel("medium");
                    if (settings.level === "medium") settings.setLevel("hard");
                  }}
                  className="bg-yellow-500 xs:w-60 xs:h-14 md:w-1/2 md:h-20 lg:w-60 lg:h-14 rounded-xl text-center xs:py-4 md:py-6 lg:py-4 font-extrabold xs:text-lg md:text-2xl lg:text-lg text-slate-50 hover:text-black "
                >
                  {settings.level === "hard" ? t("home") : t("nextLevel")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
