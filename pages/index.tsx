import { useT } from "@/Hooks/useT";
import { useSettings } from "@/providers";

import Link from "next/link";

import { useRef } from "react";

export default function Home() {
  const settings = useSettings();
  const mute = settings.muted;
  const audio = () => new Audio("/audio/click.mp3");
  const ref = useRef<HTMLInputElement>(null);
  const t = useT(); // passes to the component the translation function

  return (
    <div className=" h-screen w-screen overflow-hidden ">
      <div className="h-full min-h-screen w-screen bg-teal-400 bg-gradient-to-r">
        <main
          onClick={(evt) => {
            if (!ref.current || ref.current?.checked === false) return;
            if (ref.current?.checked === true) ref.current.checked = false;
          }}
          className="xs:p-16 md:p-16 lg:p-8 "
        >
          <h1 className="text-shadow text-center font-extrabold text-yellow-300 xs:text-2xl md:text-5xl">
            Memory Game 🧠
          </h1>
          <hr className="opacity-40 xs:my-16 md:my-20 lg:my-8 xl:mb-40"></hr>
          <div className="container mx-auto mt-20 grid  w-full grid-cols-1 place-items-center gap-4">
            <Link
              role="button"
              className="text-shadow xl:h-30 flex transform  items-center justify-center rounded-md bg-teal-300 bg-gradient-to-tl text-center font-bold text-yellow-50 shadow-lg transition duration-100 hover:text-yellow-300 xs:h-24 xs:w-4/5 md:h-44 md:w-2/3 md:text-3xl lg:h-20 lg:w-1/2 lg:text-lg"
              href="/level"
              onClick={(evt) => {
                if (!settings.muted) audio().play();
              }}
            >
              <>
                <div className="mr-4">▶️</div>
                <div>{t("startGame")}</div>
              </>
            </Link>
            <button
              onClick={(evt) => {
                settings.setMute(!settings.muted);
                if (!settings.muted) audio().play();
              }}
              className="text-shadow xl:h-30 flex transform  items-center justify-center  rounded-md bg-teal-300 bg-gradient-to-tl text-center font-bold text-yellow-50 shadow-lg transition duration-100 hover:text-yellow-300 xs:h-24 xs:w-4/5 md:h-44 md:w-2/3 md:text-3xl lg:h-20 lg:w-1/2 lg:text-lg"
            >
              <div className="mr-4">🎵</div>
              <div>{mute ? t("audioOn") : t("audioOff")}</div>
            </button>

            <button
              onClick={(evt) => {
                evt.stopPropagation(); // stops passing the data from the father to the kid
                if (!settings.muted) audio().play();
                if (!ref.current || ref.current?.checked === true) return;
                if (ref.current?.checked === false) ref.current.checked = true;
              }}
              className="text-shadow xl:h-30 flex transform  items-center justify-center rounded-md bg-teal-300 bg-gradient-to-tl text-center font-bold text-yellow-50 shadow-lg transition duration-100 hover:text-yellow-300 xs:h-24 xs:w-4/5 md:h-44 md:w-2/3 md:text-3xl lg:h-20 lg:w-1/2 lg:text-lg"
            >
              <div className="mr-4">ℹ️</div> <div>{t("instructions")}</div>
            </button>

            <input
              ref={ref}
              checked={ref?.current?.checked}
              type="checkbox"
              id="my-modal"
              className="modal-toggle"
            />

            <div className="modal ">
              <div className="modal-box  overflow-hidden bg-teal-900 md:h-fit md:w-full lg:relative ">
                <h3 className="text-center font-extrabold text-yellow-300 xs:text-xl md:text-3xl lg:text-2xl">
                  Memory Game - {t("instructions")}
                </h3>
                <div className="py-4 text-yellow-50 ">
                  <h2 className="xs:lg font-bold text-yellow-200 md:text-2xl lg:text-xl">
                    {t("level")}: {t("easy")}
                  </h2>
                  <h2 className="xs:text-base md:text-xl lg:text-lg">
                    {t("ruleOfEasy")}
                  </h2>
                </div>
                <div className="py-4 text-yellow-50 ">
                  <h2 className="font-bold text-yellow-200 xs:text-lg md:text-2xl lg:text-xl">
                    {t("level")}: {t("medium")}
                  </h2>
                  <h2 className="xs:text-base md:text-xl lg:text-lg">
                    {t("ruleOfMedium")}
                  </h2>
                </div>
                <div className="py-4 text-yellow-50 ">
                  <h2 className="font-bold text-yellow-200 xs:text-lg md:text-2xl lg:text-xl">
                    {t("level")}: {t("hard")}
                  </h2>
                  <h2 className="xs:text-base md:text-xl lg:text-lg">
                    {t("ruleOfHard")}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
