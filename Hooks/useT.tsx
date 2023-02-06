import { useRouter } from "next/router";
type Locale = "en" | "el";

type Key = "startGame";

const translations: Record<Locale, Record<Key, string>> = {
  en: {
    startGame: "Start Game",
  },
  el: {
    startGame: "Ξεκίνα το παιχνίδι",
  },
};

export function useT() {
  const router = useRouter();
  const locale = router.locale as "el" | "en";
  const t = (key: Key) =>
    translations[locale][key] === ""
      ? `to be translated: ${key}`
      : translations[locale][key];
  return t;
}
