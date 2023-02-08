import { useSettings } from "@/providers";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useMemo } from "react";

export function CardGame() {
  const settings = useSettings();
  const router = useRouter();

  const suffledLevelCards = useMemo(
    () => settings.levelCards.sort((a, b) => -1 + Math.random() * 3),
    [settings.levelCards]
  );

  const audio = () => new Audio("/audio/click.mp3");
  return (
    <div className="grid select-none grid-cols-4  gap-3">
      {suffledLevelCards.map((c, idx) => {
        return (
          <div
            className={clsx({
              "pointer-events-none":
                idx === settings.flipCard1.idx ||
                idx === settings.flipCard2.idx ||
                settings.match?.includes(c.srcf),
            })}
            key={idx}
            onClick={function () {
              // an einai monos
              if (settings.flips % 2 === 0)
                settings.setFlipCard1({ idx: idx, srcf: c.srcf });
              else settings.setFlipCard2({ idx: idx, srcf: c.srcf });
            }}
          >
            <div
              className="rounded-2xl xs:h-24 xs:w-20 md:h-40 md:w-32 lg:h-20 lg:w-16 xl:h-32 xl:w-28  2xl:h-36 2xl:w-36 "
              onClick={() => {
                if (!settings.muted) audio().play();
              }}
            >
              <picture>
                <img
                  className="h-full w-full select-none  object-fill "
                  draggable={false}
                  src={
                    idx === settings.flipCard1.idx ||
                    idx === settings.flipCard2.idx ||
                    settings.match.includes(c.srcf)
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
