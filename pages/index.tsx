import { useT } from "@/Hooks/useT";
import { useSettings } from "@/providers";

import Link from "next/link";

import { useRef } from "react";

export default function Home() {
  const settings = useSettings();
  const mute = settings.muted;
  const audio = () => new Audio("/audio/click.mp3");
  const ref = useRef<HTMLInputElement>(null);
  const t = useT();

  return (
    <div className=" w-screen h-screen overflow-hidden ">
      <div className="bg-gradient-to-r bg-teal-400 w-screen min-h-screen h-full">
        <main
          onClick={(evt) => {
            if (!ref.current || ref.current?.checked === false) return;
            if (ref.current?.checked === true) ref.current.checked = false;
          }}
          className="xs:p-16 md:p-16 lg:p-8 "
        >
          <h1 className="xs:text-2xl md:text-5xl text-shadow text-yellow-300 font-extrabold text-center">
            Memory Game 🧠
          </h1>
          <hr className="xs:my-16 md:my-20 lg:my-8 xl:mb-40 opacity-40"></hr>
          <div className="w-full mt-20 grid gap-4  place-items-center container mx-auto grid-cols-1">
            <Link
              role="button"
              className="xs:w-4/5 md:w-2/3 lg:w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300 text-center flex justify-center items-center xs:h-24 md:h-44 lg:h-20 xl:h-30 text-yellow-50 rounded-md transform transition md:text-3xl lg:text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
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
              className="xs:w-4/5 md:w-2/3 lg:w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300  text-center flex justify-center items-center xs:h-24 md:h-44 lg:h-20 xl:h-30 text-yellow-50 rounded-md transform transition md:text-3xl lg:text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
            >
              <div className="mr-4">🎵</div>
              <div>{mute ? t("audioOn") : t("audioOff")}</div>
            </button>

            <button
              onClick={(evt) => {
                evt.stopPropagation(); // stamataei na pernaei ta dedomena tou patera sto paidi
                if (!settings.muted) audio().play();
                if (!ref.current || ref.current?.checked === true) return;
                if (ref.current?.checked === false) ref.current.checked = true;
              }}
              className="xs:w-4/5 md:w-2/3 lg:w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300 text-center flex justify-center items-center xs:h-24 md:h-44 lg:h-20 xl:h-30 text-yellow-50 rounded-md transform transition md:text-3xl lg:text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
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
              <div className="modal-box  overflow-hidden md:w-full md:h-fit lg:relative bg-teal-900 ">
                <h3 className="xs:text-xl md:text-3xl lg:text-2xl font-extrabold text-yellow-300 text-center">
                  Memory Game - {t("instructions")}
                </h3>
                <div className="py-4 text-yellow-50 ">
                  <h2 className="text-yellow-200 font-bold xs:lg md:text-2xl lg:text-xl">
                    {t("level")}: {t("easy")}
                  </h2>
                  <h2 className="xs:text-base md:text-xl lg:text-lg">
                    {t("ruleOfEasy")}
                  </h2>
                </div>
                <div className="py-4 text-yellow-50 ">
                  <h2 className="text-yellow-200 font-bold xs:text-lg md:text-2xl lg:text-xl">
                    {t("level")}: {t("medium")}
                  </h2>
                  <h2 className="xs:text-base md:text-xl lg:text-lg">
                    {t("ruleOfMedium")}
                  </h2>
                </div>
                <div className="py-4 text-yellow-50 ">
                  <h2 className="text-yellow-200 font-bold xs:text-lg md:text-2xl lg:text-xl">
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
