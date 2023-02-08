import { useT } from "@/Hooks/useT";
import { useSettings } from "@/providers";
import Head from "next/head";
import Link from "next/link";

export default function Win() {
  const settings = useSettings();
  const { flips, match, time } = settings;
  const t = useT();

  return (
    <div className=" h-screen w-screen overflow-hidden ">
      <Head>
        <title>Memory Game</title>
      </Head>
      <div>
        <div>
          <div className=" bg-win flex h-screen w-screen items-center justify-center object-contain lg:py-32 xl:py-64 2xl:py-80">
            <div>
              <h1 className=" blink mb-16 text-center  font-extrabold uppercase text-yellow-500 xs:text-5xl md:text-8xl lg:text-9xl">
                {t("youWin")} 🏆
              </h1>

              <div className="text-center font-extrabold text-yellow-500 xs:text-3xl md:text-5xl   ">
                <h2 className="mb-4">
                  {t("score")} : {match.length}
                </h2>
                <h2 className="mb-4">
                  {t("flips")}: {flips}
                </h2>
                <h2>
                  {t("time")} : {time}
                </h2>
              </div>
              <div className="flex items-center justify-center xs:mt-16 md:mt-20 lg:mt-6">
                <Link
                  role="button"
                  href={settings.level === "hard" ? "/" : `/game`}
                  onClick={() => {
                    if (settings.level === "easy") settings.setLevel("medium");
                    if (settings.level === "medium") settings.setLevel("hard");
                  }}
                  className="rounded-xl bg-yellow-500 text-center font-extrabold text-slate-50 hover:text-black xs:h-14 xs:w-60 xs:py-4 xs:text-lg md:h-20 md:w-1/2 md:py-6 md:text-2xl lg:h-14 lg:w-60 lg:py-4 lg:text-lg "
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
