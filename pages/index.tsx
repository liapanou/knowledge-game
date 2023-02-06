import { useSettings } from "@/providers";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const level = router.query.level as string;
  const settings = useSettings();
  const mute = settings.muted;
  const audio = () => new Audio("/audio/click.mp3");
  return (
    <div className=" w-screen h-screen overflow-hidden">
      <Head>
        <title>Memory Game</title>
      </Head>
      <div className="bg-gradient-to-r bg-teal-400 w-screen min-h-screen h-full">
        <main className="xs:p-16 md:p-16 lg:p-8">
          <h1 className="xs:text-2xl md:text-5xl text-shadow text-yellow-300 font-extrabold text-center">
            Memory Game 🧠
          </h1>
          <hr className="xs:my-16 md:my-20 lg:my-8 xl:mb-40 opacity-40"></hr>
          <div className="w-full mt-20 grid gap-4  place-items-center container mx-auto grid-cols-1">
            <Link
              role="button"
              className="xs:w-4/5 md:w-2/3 lg:w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300 text-center flex justify-center items-center xs:h-24 md:h-44 lg:h-20 xl:h-30 text-yellow-50 rounded-md transform transition md:text-3xl lg:text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
              href="/level"
              onClick={() => {
                if (!settings.muted) audio().play();
              }}
            >
              <>
                <div className="mr-4">▶️</div>
                <div>Start Game</div>
              </>
            </Link>
            <button
              onClick={() => {
                settings.setMute(!settings.muted);
                if (!settings.muted) audio().play();
              }}
              className="xs:w-4/5 md:w-2/3 lg:w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300  text-center flex justify-center items-center xs:h-24 md:h-44 lg:h-20 xl:h-30 text-yellow-50 rounded-md transform transition md:text-3xl lg:text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
            >
              <div className="mr-4">🎵</div>
              <div>{mute ? "Audio on" : "Audio off"}</div>
            </button>

            {/* The button to open modal */}
            <label
              onClick={() => {
                if (!settings.muted) audio().play();
              }}
              htmlFor="my-modal-4"
              className="xs:w-4/5 md:w-2/3 lg:w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300 text-center flex justify-center items-center xs:h-24 md:h-44 lg:h-20 xl:h-30 text-yellow-50 rounded-md transform transition md:text-3xl lg:text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
            >
              <div className="mr-4">ℹ️</div> <div>Instructions</div>
            </label>
            {/* The modal */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label
                className="modal-box md:w-full md:h-fit lg:relative bg-teal-900 "
                htmlFor=""
              >
                <h3 className="xs:text-xl md:text-3xl lg:text-2xl font-extrabold text-yellow-300 text-center">
                  Memory Game - Instructions
                </h3>
                <p className="py-4 text-yellow-50 ">
                  <div className="text-yellow-200 font-bold xs:lg md:text-2xl lg:text-xl">
                    Level: Easy
                  </div>
                  <div className="xs:text-base md:text-xl lg:text-lg">
                    You win if you find at least 3 pairs of images without
                    exceeding the 60 flips and the 100 seconds
                  </div>
                </p>
                <p className="py-4 text-yellow-50 ">
                  <div className="text-yellow-200 font-bold xs:text-lg md:text-2xl lg:text-xl">
                    Level: Medium
                  </div>
                  <div className="xs:text-base md:text-xl lg:text-lg">
                    You win if you find at least 5 pairs of images without
                    exceeding the 50 flips and the 60 seconds
                  </div>
                </p>
                <p className="py-4 text-yellow-50 ">
                  <div className="text-yellow-200 font-bold xs:text-lg md:text-2xl lg:text-xl">
                    Level: Hard
                  </div>
                  <div className="xs:text-base md:text-xl lg:text-lg">
                    You win if you find at least 6 pairs of images without
                    exceeding the 40 flips and the 40 seconds
                  </div>
                </p>
              </label>
            </label>
          </div>
        </main>
      </div>
    </div>
  );
}
