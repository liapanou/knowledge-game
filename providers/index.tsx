import { createContext, ReactNode, useContext, useState } from "react";

type Lvl = "easy" | "medium" | "hard";
type ContextType = {
  muted: boolean;
  level: Lvl;
  time?: number;
  flips: number;
  scores: number;
  setMute: (muted: boolean) => void;
  setLevel: (level: Lvl) => void;
};

const defaultValue: ContextType = {
  muted: true,
  level: "easy",
  time: undefined,
  flips: 0,
  scores: 0,
  setMute: (muted: boolean) => {},
  setLevel: (level: Lvl) => {},
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

  function setLevel(level: Lvl) {
    let time = 600;
    let flips = 40;
    let scores = 6;
    if (level === "easy") (time = 100), (flips = 50), (scores = 3);
    if (level === "medium") (time = 60), (flips = 40), (scores = 5);
    if (level === "hard") (time = 40), (flips = 30), (scores = 6);
    setState({ ...state, level, time, flips, scores });
  }

  return (
    <Context.Provider
      value={{
        ...state,
        setMute,
        setLevel,
      }}
    >
      {/* otan einai muted true dn paizei otan einai muted false paizei */}
      {!state.muted && <audio autoPlay src="/audio/music.mp3" />}

      {props.children}
    </Context.Provider>
  );
}
