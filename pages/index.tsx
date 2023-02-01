import { useSettings } from "@/providers";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCountdown } from "usehooks-ts";

export default function Home() {
  const router = useRouter();
  const level = router.query.level as string;
  const settings = useSettings();
  const mute = settings.muted;
  return (
    <div className=" w-screen h-screen overflow-hidden">
      <Head>
        <title>Memory Game</title>
      </Head>
      <div className="bg-gradient-to-r bg-teal-400 w-screen min-h-screen h-full">
        {level === "" ? (
          <main className="p-8">
            <h1 className="text-5xl text-shadow text-yellow-300 font-extrabold text-center">
              Select Level
            </h1>
            <hr className="my-8 opacity-40"></hr>
            <div className="w-full mt-20 grid gap-4  place-items-center container mx-auto grid-cols-1">
              <Link
                role="button"
                className="w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300 text-center flex justify-center items-center h-20 text-yellow-50 rounded-md transform transition text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
                href={`/game?level=easy`}
                onClick={() => settings.setLevel("easy")}
              >
                <button>Easy</button>
              </Link>
              <Link
                role="button"
                className="w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300  text-center flex justify-center items-center h-20 text-yellow-50 rounded-md transform transition text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
                href={`/game?level=medium`}
                onClick={() => settings.setLevel("medium")}
              >
                <button>Medium</button>
              </Link>
              <Link
                role="button"
                className="w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300  text-center flex justify-center items-center h-20 text-yellow-50 rounded-md transform transition text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
                href={`/game?level=hard`}
                onClick={() => settings.setLevel("hard")}
              >
                <button>Hard</button>
              </Link>
            </div>
          </main>
        ) : (
          <main className="p-8">
            <h1 className="text-5xl text-shadow text-yellow-300 font-extrabold text-center">
              Memory Game 🧠
            </h1>
            <hr className="my-8 opacity-40"></hr>
            <div className="w-full mt-20 grid gap-4  place-items-center container mx-auto grid-cols-1">
              <Link
                role="button"
                className="w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300 text-center flex justify-center items-center h-20 text-yellow-50 rounded-md transform transition text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
                href="/?level"
              >
                <>
                  <div className="mr-4">▶️</div>
                  <div>Start Game</div>
                </>
              </Link>
              <button
                onClick={() => {
                  settings.setMute(!settings.muted);
                }}
                className="w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300  text-center flex justify-center items-center h-20 text-yellow-50 rounded-md transform transition text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
              >
                <div className="mr-4">🎵</div>
                <div>{mute ? "Audio on" : "Audio off"}</div>
              </button>
              <Link
                role="button"
                className="w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300 text-center flex justify-center items-center h-20 text-yellow-50 rounded-md transform transition text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
                href="#"
              >
                <div className="mr-4">ℹ️</div> <div>Instructions</div>
              </Link>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
