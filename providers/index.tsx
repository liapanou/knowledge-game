import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const animalCards: { srcb: string; srcf: string }[] = [
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/lion.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/giraffe.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/parrot.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/squirrel.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/squirrel.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/horse.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/leopard.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/fox.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/fox.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/panda.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/panda.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/horse.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/leopard.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/parrot.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/giraffe.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/lion.jpeg",
  },
];

const natureCards: { srcb: string; srcf: string }[] = [
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/park.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/leopard-in-afrika.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/leopard-in-afrika.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/leaves.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/leaves.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/galaxy.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/galaxy.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/plants-and-butterfly.webp",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/plants-and-butterfly.webp",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/sky.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/sky.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/jellyfish.webp",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/jellyfish.webp",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/volcano.webp",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/volcano.webp",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/park.jpeg",
  },
];

const landScapeCards: { srcb: string; srcf: string }[] = [
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/lake-and-mountains.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/lake-and-mountains.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/lakehouse.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/lakehouse.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/mountains-with-stars.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/mountains-with-stars.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/matchu-pitchu.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/matchu-pitchu.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/lake-and-mountains2.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/lake-and-mountains2.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/cowboy-in-nature.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/cowboy-in-nature.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/volcano-eruption.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/volcano-eruption.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/sea-darksky-mountains.jpeg",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/sea-darksky-mountains.jpeg",
  },
];

type Card = {
  srcb: string;
  srcf: string;
};
type FlipCard = {
  idx: number;
  srcf: string;
};
const defaultCard = { srcb: "", srcf: "" };
const defaultFlipCard = { idx: -1, srcf: "" };

type Lvl = "easy" | "medium" | "hard";
type ContextType = {
  muted: boolean;
  level: Lvl;
  time?: number;
  startingTime?: number;
  flips: number;
  matchesToWin: number;
  maxFlips: number;
  flipCard1: FlipCard;
  flipCard2: FlipCard;
  match: string[];
  animalCards: Card[];
  natureCards: Card[];
  landScapeCards: Card[];
  levelCards: Card[];

  setMute: (muted: boolean) => void;
  setLevel: (level: Lvl) => void;
  setFlipCard1: (flipCard1: { idx: number; srcf: string }) => void;
  setFlipCard2: (flipCard2: { idx: number; srcf: string }) => void;
  setTime: (time: number) => void;
};

const defaultValue: ContextType = {
  muted: true,
  level: "easy",
  time: undefined,
  startingTime: undefined,
  flips: 0,
  maxFlips: 60,
  matchesToWin: 3,
  flipCard1: defaultFlipCard,
  flipCard2: defaultFlipCard,
  match: [],
  animalCards: animalCards,
  natureCards: natureCards,
  landScapeCards: landScapeCards,
  levelCards: animalCards,

  setMute: (muted: boolean) => {},
  setLevel: (level: Lvl) => {},
  setTime: (time: number) => {},
  setFlipCard1: (flipCard1: { idx: number; srcf: string }) => {},
  setFlipCard2: (flipCard2: { idx: number; srcf: string }) => {},
};

const Context = createContext<ContextType>(defaultValue);

export function useSettings() {
  return useContext(Context);
}

export function SettingsProvider(props: { children: ReactNode }) {
  const [state, setState] = useState<ContextType>(defaultValue);

  function setMute(muted: boolean) {
    setState({ ...state, muted });
  }

  const clearCards = {
    flipCard1: defaultFlipCard,
    flipCard2: defaultFlipCard,
  };

  // sets the settings for every level

  function setLevel(level: Lvl) {
    const tmpState = { ...defaultValue };
    if (level === "easy") {
      tmpState.startingTime = 100;
      tmpState.maxFlips = 60;
      tmpState.matchesToWin = 3;
      tmpState.levelCards = animalCards;
    }

    if (level === "medium") {
      tmpState.startingTime = 60;
      tmpState.maxFlips = 50;
      tmpState.matchesToWin = 5;
      tmpState.levelCards = natureCards;
    }

    if (level === "hard") {
      tmpState.startingTime = 40;
      tmpState.maxFlips = 40;
      tmpState.matchesToWin = 6;
      tmpState.levelCards = landScapeCards;
    }

    setState({
      ...tmpState,
      level,
    });
  }
  // clears the card's state , passes the  flipcard 1 to the card's state and increases the flips

  function setFlipCard1(flipCard1: { idx: number; srcf: string }) {
    setState({ ...state, ...clearCards, flipCard1, flips: state.flips + 1 });
  }

  const router = useRouter();

  // passes the flipcard 2 to the card's state and increases the flips

  function setFlipCard2(flipCard2: { idx: number; srcf: string }) {
    if (state.flipCard1.srcf === flipCard2.srcf) {
      setState({
        ...state,
        flips: state.flips + 1,
        match: [...state.match, flipCard2.srcf],
      });
    } else setState({ ...state, flipCard2, flips: state.flips + 1 });
  }

  function setTime(time: number) {
    setState({ ...state, time });
  }

  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.volume = 0.1;
  }, [state.muted]);

  return (
    <Context.Provider
      value={{
        ...state,
        setMute,
        setLevel,
        setTime,
        setFlipCard1,
        setFlipCard2,
      }}
    >
      {/* when is muted true the music isn't playing , but when muted is false the music is playing */}
      {!state.muted && <audio ref={ref} autoPlay src="/audio/music.mp3" />}

      {props.children}
    </Context.Provider>
  );
}
