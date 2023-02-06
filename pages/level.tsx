import { useT } from "@/Hooks/useT";
import { useSettings } from "@/providers";
import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Level() {
  const router = useRouter();
  const level = router.query.level as string;
  const settings = useSettings();
  const mute = settings.muted;
  const [play, setPlay] = useState<boolean>(false);
  const audio = () => new Audio("/audio/click.mp3");
  const t = useT();
  return (
    <div className=" w-screen h-screen overflow-hidden">
      <Head>
        <title>Memory Game</title>
      </Head>
      <div className="bg-gradient-to-r bg-teal-400 w-screen min-h-screen h-full">
        <main className="xs:py-16 md:py-16 lg:py-8">
          <div className="grid xs:grid-cols-[70px_150px_70px] md:grid-cols-[200px_350px_220px] lg:grid-cols-[300px_400px_320px] xl:grid-cols-[300px_700px_320px] 2xl:grid-cols-[300px_1fr_320px]">
            <div className=" w-full">
              <Link
                role="button"
                href={`/`}
                className="  xs:text-2xl md:text-4xl md:w-10 md:h-12 lg:text-2xl xs:ml-7 md:ml-20 lg:ml-48"
              >
                ⬅️
              </Link>
            </div>

            <div className="flex justify-center items-center  ">
              <h1 className="xs:text-lg md:text-4xl text-shadow text-yellow-300 font-extrabold text-center  w-fit h-fit flex    ">
                {t("selectLevel")}
              </h1>
            </div>
            <div className=" w-full">
              <button
                className={clsx(
                  "border shadow bg-yellow-300 xs:w-fit xs:h-fit md:w-10 md:h-12 lg:w-fit lg:h-fit rounded-lg text-xl xs:ml-4 md:ml-20",
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

          <hr className="xs:my-16 md:my-20 lg:my-8 xl:mb-40 opacity-40"></hr>
          <div className="w-full mt-20 grid gap-4  place-items-center container mx-auto grid-cols-1">
            <Link
              role="button"
              className="xs:w-4/5 md:w-2/3 lg:w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300 text-center flex justify-center items-center xs:h-24 md:h-44 lg:h-20 xl:h-30 text-yellow-50 rounded-md transform transition md:text-3xl lg:text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
              href={`/game`}
              onClick={() => {
                settings.setLevel("easy");
                if (!settings.muted) audio().play();
              }}
            >
              <button>{t("easy")}</button>
            </Link>
            <Link
              role="button"
              className="xs:w-4/5 md:w-2/3 lg:w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300  text-center flex justify-center items-center xs:h-24 md:h-44 lg:h-20 xl:h-30 text-yellow-50 rounded-md transform transition md:text-3xl lg:text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
              href={`/game`}
              onClick={() => {
                settings.setLevel("medium");
                if (!settings.muted) audio().play();
              }}
            >
              <button>{t("medium")}</button>
            </Link>
            <Link
              role="button"
              className="xs:w-4/5 md:w-2/3 lg:w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300  text-center flex justify-center items-center xs:h-24 md:h-44 lg:h-20 xl:h-30 text-yellow-50 rounded-md transform transition md:text-3xl lg:text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
              href={`/game`}
              onClick={() => {
                settings.setLevel("hard");
                if (!settings.muted) audio().play();
              }}
            >
              <button>{t("hard")}</button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
