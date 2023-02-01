import { createContext, ReactNode, useContext, useState } from "react";

type Lvl = "easy" | "medium" | "hard";
type ContextType = {
  muted: boolean;
  level: Lvl;
  time?: number;
  setMute: (muted: boolean) => void;
  setLevel: (level: Lvl) => void;
};

const defaultValue: ContextType = {
  muted: true,
  level: "easy",
  time: undefined,
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
    if (level === "easy") time = 100;
    if (level === "medium") time = 60;
    if (level === "hard") time = 50;
    setState({ ...state, level, time });
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
