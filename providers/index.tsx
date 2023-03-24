import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const animalCards: { srcb: string; srcf: string; name: string }[] = [
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/lion.jpeg",
    name: "lion",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/giraffe.jpeg",
    name: "giraffe",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/parrot.jpeg",
    name: "parrot",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/squirrel.jpeg",
    name: "squirrel",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/squirrel.jpeg",
    name: "squirrel",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/horse.jpeg",
    name: "horse",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/leopard.jpeg",
    name: "leopard",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/fox.jpeg",
    name: "fox",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/fox.jpeg",
    name: "fox",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/panda.jpeg",
    name: "panda",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/panda.jpeg",
    name: "panda",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/horse.jpeg",
    name: "horse",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/leopard.jpeg",
    name: "leopard",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/parrot.jpeg",
    name: "parrot",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/giraffe.jpeg",
    name: "giraffe",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/animals/lion.jpeg",
    name: "lion",
  },
];

const natureCards: { srcb: string; srcf: string; name: string }[] = [
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/park.jpeg",
    name: "park",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/leopard-in-afrika.jpeg",
    name: "leopard-in-afrika",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/leopard-in-afrika.jpeg",
    name: "leopard-in-afrika",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/leaves.jpeg",
    name: "leaves",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/leaves.jpeg",
    name: "leaves",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/galaxy.jpeg",
    name: "galaxy",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/galaxy.jpeg",
    name: "galaxy",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/plants-and-butterfly.webp",
    name: "plants-and-butterfly",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/plants-and-butterfly.webp",
    name: "plants-and-butterfly",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/sky.jpeg",
    name: "sky",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/sky.jpeg",
    name: "sky",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/jellyfish.webp",
    name: "jellyfish",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/jellyfish.webp",
    name: "jellyfish",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/volcano.webp",
    name: "volcano",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/volcano.webp",
    name: "volcano",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/nature/park.jpeg",
    name: "park",
  },
];

const landScapeCards: { srcb: string; srcf: string; name: string }[] = [
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/lake-and-mountains.jpeg",
    name: "lake-and-mountains",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/lake-and-mountains.jpeg",
    name: "lake-and-mountains",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/lakehouse.jpeg",
    name: "lakehouse",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/lakehouse.jpeg",
    name: "lakehouse",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/mountains-with-stars.jpeg",
    name: "mountains-with-stars",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/mountains-with-stars.jpeg",
    name: "mountains-with-stars",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/matchu-pitchu.jpeg",
    name: "matchu-pitchu",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/matchu-pitchu.jpeg",
    name: "matchu-pitchu",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/lake-and-mountains2.jpeg",
    name: "lake-and-mountains2",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/lake-and-mountains2.jpeg",
    name: "lake-and-mountains2",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/cowboy-in-nature.jpeg",
    name: "cowboy-in-nature",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/cowboy-in-nature.jpeg",
    name: "cowboy-in-nature",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/volcano-eruption.jpeg",
    name: "volcano-eruption",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/volcano-eruption.jpeg",
    name: "volcano-eruption",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/sea-darksky-mountains.jpeg",
    name: "sea-darksky-mountains",
  },
  {
    srcb: "/images/game/pattern-card.jpg",
    srcf: "/images/game/landscape/sea-darksky-mountains.jpeg",
    name: "sea-darksky-mountains",
  },
];

type Card = {
  srcb: string;
  srcf: string;
  name: string;
};
type FlipCard = {
  idx: number;
  srcf: string;
  name: string;
};
const defaultCard = { srcb: "", srcf: "", name: "" };
const defaultFlipCard = { idx: -1, srcf: "", name: "" };

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
  setFlipCard1: (flipCard1: {
    idx: number;
    srcf: string;
    name: string;
  }) => void;
  setFlipCard2: (flipCard2: {
    idx: number;
    srcf: string;
    name: string;
  }) => void;
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
  setFlipCard1: (flipCard1: { idx: number; srcf: string; name: string }) => {},
  setFlipCard2: (flipCard2: { idx: number; srcf: string; name: string }) => {},
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

  function setFlipCard1(flipCard1: {
    idx: number;
    srcf: string;
    name: string;
  }) {
    setState({ ...state, ...clearCards, flipCard1, flips: state.flips + 1 });
  }

  const router = useRouter();

  // passes the flipcard 2 to the card's state and increases the flips

  function setFlipCard2(flipCard2: {
    idx: number;
    srcf: string;
    name: string;
  }) {
    if (state.flipCard1.name === flipCard2.name) {
      setState({
        ...state,
        flips: state.flips + 1,
        match: [...state.match, flipCard2.name],
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
