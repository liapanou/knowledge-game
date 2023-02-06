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
  setScore: () => void;
}) {
  const [flipCard1, setFlipCard1] = useState<{
    idx: number;
    srcf: string;
  }>({ idx: -1, srcf: "" });
  const [flipCard2, setFlipCard2] = useState<{
    idx: number;
    srcf: string;
  }>({ idx: -1, srcf: "" });

  const router = useRouter();
  const [match, setMatch] = useState<{ srcf: string }[]>([{ srcf: "" }]);
  const [play, setPlay] = useState<boolean>(false);

  const settings = useSettings();
  const suffledLevelCards = useMemo(
    () => settings.levelCards.sort((a, b) => -1 + Math.random() * 3),
    [settings.levelCards]
  );

  return (
    <div className="grid grid-cols-4 xs:gap-3 md:gap-2 ">
      {suffledLevelCards.map((c, idx) => (
        <div
          className={clsx({
            "pointer-events-none":
              idx === flipCard1.idx ||
              idx === flipCard2.idx ||
              match.find((s) => s.srcf === c.srcf),
          })}
          key={idx}
          onClick={function () {
            props.setFlips();
            if (props.flips % 2 !== 0) {
              setFlipCard1({ idx: idx, srcf: c.srcf });
              setFlipCard2({ idx: -1, srcf: "" });
            } else {
              setFlipCard2({ idx: idx, srcf: c.srcf });

              setFlipCard1(flipCard1);
            }
            if (
              flipCard1.idx !== -1 &&
              flipCard2.idx !== -1 &&
              flipCard1.srcf === flipCard2.srcf
            ) {
              props.setScore();
              setMatch([...match, { srcf: flipCard1.srcf }]);
            } else {
              return "";
            }
          }}
        >
          <div
            className="border xs:w-20 xs:h-24 md:w-28 md:h-40 lg:w-20 lg:h-24 xl:w-28 xl:h-36 2xl:w-36  2xl:h-40 border-black rounded-lg  "
            onClick={() => {
              setPlay(true);
              setTimeout(() => {
                setPlay(false);
              }, 500);
            }}
          >
            <picture>
              <img
                className="w-full object-fill h-full "
                src={
                  idx === flipCard1.idx ||
                  idx === flipCard2.idx ||
                  match.find((s) => s.srcf === c.srcf)
                    ? c.srcf
                    : c.srcb
                }
                alt="picture"
              />
            </picture>
            {play === true && !settings.muted ? (
              <audio autoPlay src="/audio/click.mp3" />
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
