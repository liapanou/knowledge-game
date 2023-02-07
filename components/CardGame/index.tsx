import { SettingsProvider, useSettings } from "@/providers";
import { match } from "assert";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { setSourceMapRange } from "typescript";

export function CardGame(props: {
  flips: number;
  setFlips: () => void;
  score: number;
}) {
  const router = useRouter();
  const settings = useSettings();
  let flipCard1 = settings.flipCard1;
  let flipCard2 = settings.flipCard2;
  let match = settings.match;
  let match1 = settings.match1;

  const suffledLevelCards = useMemo(
    () => settings.levelCards.sort((a, b) => -1 + Math.random() * 3),
    [settings.levelCards]
  );
  const audio = () => new Audio("/audio/click.mp3");

  return (
    <div className="grid grid-cols-4 gap-3 ">
      {suffledLevelCards.map((c, idx) => {
        return (
          <div
            className={clsx({
              "pointer-events-none":
                idx === flipCard1.idx ||
                idx === flipCard2.idx ||
                match1?.find((s) => s.srcf === c.srcf),
            })}
            key={idx}
            onClick={function () {
              props.setFlips();

              // an einai monos
              if (props.flips % 2 !== 0)
                settings.setFlipCard1({ idx: idx, srcf: c.srcf });
              else settings.setFlipCard2({ idx: idx, srcf: c.srcf });
            }}
          >
            <div
              className="xs:w-20 xs:h-24 md:w-32 md:h-40 lg:w-28 lg:h-24 xl:w-28 xl:h-36 2xl:w-36  2xl:h-40 rounded-2xl "
              onClick={() => {
                if (!settings.muted) audio().play();
              }}
            >
              <picture>
                <img
                  className="w-full object-fill h-full "
                  src={
                    idx === flipCard1.idx ||
                    idx === flipCard2.idx ||
                    match1?.find((s) => s.srcf === c.srcf)
                      ? c.srcf
                      : c.srcb
                  }
                  alt="picture"
                />
              </picture>
            </div>
          </div>
        );
      })}
    </div>
  );
}
