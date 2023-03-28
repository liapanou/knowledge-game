import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const culturalΗeritageCards: { src: string; name: string }[] = [
  {
    src: "/images/game/culturalheritage/1-tzami.png",
    name: "1",
  },
  {
    src: "/images/game/culturalheritage/1-tourkokratia.png",
    name: "1",
  },
  {
    src: "/images/game/culturalheritage/2-monifaneromenis.jpg",
    name: "2",
  },
  {
    src: "/images/game/culturalheritage/2-apeleftherotikosagonas.png",
    name: "2",
  },
  {
    src: "/images/game/culturalheritage/3-gournies.png",
    name: "3",
  },
  {
    src: "/images/game/culturalheritage/3-pompiiatisminoikiskritis.png",
    name: "3",
  },
  {
    src: "/images/game/culturalheritage/4-limnimpramianon.jpg",
    name: "4",
  },
  {
    src: "/images/game/culturalheritage/4-prasinokefalipapia.png",
    name: "4",
  },
  {
    src: "/images/game/culturalheritage/5-dasakikoutsoura.jpg",
    name: "5",
  },
  {
    src: "/images/game/culturalheritage/5-faraggikokkinonpetaloudon.png",
    name: "5",
  },
  {
    src: "/images/game/culturalheritage/6-greenbg.jpg",
    name: "6",
  },
  {
    src: "/images/game/culturalheritage/6-green.jpg",
    name: "6",
  },
];

const libraryContentCards: { src: string; name: string }[] = [
  {
    src: "/images/game/librarycontent/14-taxidistokendrotisgis.png",
    name: "14",
  },
  {
    src: "/images/game/librarycontent/14-ivern.png",
    name: "14",
  },
  {
    src: "/images/game/librarycontent/10-stamistikatouvaltou.png",
    name: "10",
  },
  {
    src: "/images/game/librarycontent/10-pinelopidelta.png",
    name: "10",
  },
  {
    src: "/images/game/librarycontent/11-okoutsoflevaros.png",
    name: "11",
  },
  {
    src: "/images/game/librarycontent/11-andreaskarkavitsas.png",
    name: "11",
  },
  {
    src: "/images/game/librarycontent/12-olagoskaiixelona.png",
    name: "12",
  },
  {
    src: "/images/game/librarycontent/12-aisopos.png",
    name: "12",
  },
  {
    src: "/images/game/librarycontent/13-itosodoula.png",
    name: "13",
  },
  {
    src: "/images/game/librarycontent/13-hanscristianantersen.png",
    name: "13",
  },
  {
    src: "/images/game/librarycontent/15-redbg.jpg",
    name: "15",
  },
  {
    src: "/images/game/librarycontent/15-red.jpg",
    name: "15",
  },
];

type Card = {
  src: string;
  name: string;
};
type FlipCard = {
  idx: number;
  src: string;
  name: string;
};
const defaultCard = { src: "", name: "" };
const defaultFlipCard = { idx: -1, src: "", name: "" };

type Ctg = "culturalΗeritage" | "libraryContent";
type ContextType = {
  muted: boolean;
  category: Ctg;
  time: number;
  startingTime: number;
  clicks: number;
  matchesToWin: number;
  maxClicks: number;
  flipCard1: FlipCard;
  flipCard2: FlipCard;
  match: string[];
  culturalΗeritageCards: Card[];
  libraryContentCards: Card[];
  categoryCards: Card[];

  setMute: (muted: boolean) => void;
  setCategory: (category: Ctg) => void;
  setFlipCard1: (flipCard1: { idx: number; src: string; name: string }) => void;
  setFlipCard2: (flipCard2: { idx: number; src: string; name: string }) => void;
  setTime: (time: number) => void;
};

const defaultValue: ContextType = {
  muted: true,
  category: "culturalΗeritage",
  time: 90,
  startingTime: 90,
  clicks: 0,
  maxClicks: 60,
  matchesToWin: 4,
  flipCard1: defaultFlipCard,
  flipCard2: defaultFlipCard,
  match: [],
  culturalΗeritageCards: culturalΗeritageCards,
  libraryContentCards: libraryContentCards,
  categoryCards: culturalΗeritageCards,

  setMute: (muted: boolean) => {},
  setCategory: (category: Ctg) => {},
  setTime: (time: number) => {},
  setFlipCard1: (flipCard1: { idx: number; src: string; name: string }) => {},
  setFlipCard2: (flipCard2: { idx: number; src: string; name: string }) => {},
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

  // sets the settings for easy level & every category
  function setCategory(category: Ctg) {
    const tmpState = { ...defaultValue };

    if (category === "culturalΗeritage") {
      tmpState.categoryCards = culturalΗeritageCards;
    }
    if (category === "libraryContent") {
      tmpState.categoryCards = libraryContentCards;
    }

    setState({
      ...tmpState,
      category,
    });
  }

  // clears the card's state , passes the  flipcard 1 to the card's state and increases the clicks

  function setFlipCard1(flipCard1: { idx: number; src: string; name: string }) {
    setState({ ...state, ...clearCards, flipCard1, clicks: state.clicks + 1 });
  }

  const router = useRouter();

  // passes the flipcard 2 to the card's state and increases the clicks

  function setFlipCard2(flipCard2: { idx: number; src: string; name: string }) {
    if (state.flipCard1.name === flipCard2.name) {
      setState({
        ...state,
        clicks: state.clicks + 1,
        match: [...state.match, flipCard2.name],
      });
    } else setState({ ...state, flipCard2, clicks: state.clicks + 1 });
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
        setCategory,
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
