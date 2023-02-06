import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const animalCards: { srcb: string; srcf: string }[] = [
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/67552/giraffe-tall-mammal-africa-67552.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/67552/giraffe-tall-mammal-africa-67552.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const natureCards: { srcb: string; srcf: string }[] = [
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/10714624/pexels-photo-10714624.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/10714624/pexels-photo-10714624.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/797793/pexels-photo-797793.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/797793/pexels-photo-797793.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1131406/pexels-photo-1131406.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1131406/pexels-photo-1131406.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1894350/pexels-photo-1894350.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1894350/pexels-photo-1894350.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const landScapeCards: { srcb: string; srcf: string }[] = [
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/2365465/pexels-photo-2365465.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/2365465/pexels-photo-2365465.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/10344525/pexels-photo-10344525.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/10344525/pexels-photo-10344525.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/9899960/pexels-photo-9899960.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/9899960/pexels-photo-9899960.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/12273277/pexels-photo-12273277.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/12273277/pexels-photo-12273277.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
    srcf: "https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

type Lvl = "easy" | "medium" | "hard";
type ContextType = {
  muted: boolean;
  level: Lvl;
  time?: number;
  flips: number;
  scores: number;
  animalCards: { srcb: string; srcf: string }[];
  natureCards: { srcb: string; srcf: string }[];
  landScapeCards: { srcb: string; srcf: string }[];
  levelCards: { srcb: string; srcf: string }[];
  setMute: (muted: boolean) => void;
  setLevel: (level: Lvl) => void;
};

const defaultValue: ContextType = {
  muted: true,
  level: "easy",
  time: undefined,
  flips: 0,
  scores: 0,
  animalCards: [{ srcb: "", srcf: "" }],
  natureCards: [{ srcb: "", srcf: "" }],
  landScapeCards: [{ srcb: "", srcf: "" }],
  levelCards: [{ srcb: "", srcf: "" }],
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
    let levelCards = [{ srcb: "", srcf: "" }];
    if (level === "easy")
      (time = 100), (flips = 60), (scores = 3), (levelCards = animalCards);
    if (level === "medium")
      (time = 60), (flips = 50), (scores = 5), (levelCards = natureCards);
    if (level === "hard")
      (time = 40), (flips = 40), (scores = 6), (levelCards = landScapeCards);
    setState({
      ...state,
      level,
      time,
      flips,
      scores,
      levelCards,
    });
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
      }}
    >
      {/* otan einai muted true dn paizei otan einai muted false paizei */}
      {!state.muted && <audio ref={ref} autoPlay src="/audio/music.mp3" />}

      {props.children}
    </Context.Provider>
  );
}
