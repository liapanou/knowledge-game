import { SettingsProvider, useSettings } from "@/providers";
import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Win() {
  const router = useRouter();
  const { flips, score, time } = router.query;
  const settings = useSettings();

  return (
    <div className=" w-screen h-screen overflow-hidden ">
      <Head>
        <title>Memory Game</title>
      </Head>
      <div>
        <div>
          <div className=" flex justify-center items-center py-80 bg-win-pattern">
            <div className="">
              <h1 className="text-9xl  uppercase text-yellow-500 font-extrabold mb-16 text-center blink">
                You Win 🏆
              </h1>

              <div className="text-5xl text-yellow-500 font-extrabold text-center   ">
                <h2 className="mb-4"> Score : {score} </h2>
                <h2 className="mb-4"> Flips : {flips}</h2>
                <h2>Time : {time}</h2>
              </div>
              <div className="flex justify-center items-center mt-6">
                <Link
                  role="button"
                  href={settings.level === "hard" ? "/" : `/game`}
                  onClick={() => {
                    if (settings.level === "easy") settings.setLevel("medium");
                    if (settings.level === "medium") settings.setLevel("hard");
                  }}
                  className="bg-yellow-500 w-60 h-14 rounded-xl text-center py-4 font-extrabold  text-slate-50 hover:text-black "
                >
                  {settings.level === "hard" ? "Home" : "Next Level"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
