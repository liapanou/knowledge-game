import { useRouter } from "next/router";
type Locale = "en" | "el";

type Key =
  | "startGame"
  | "audioOn"
  | "audioOff"
  | "instructions"
  | "level"
  | "selectLevel"
  | "easy"
  | "ruleOfEasy"
  | "medium"
  | "ruleOfMedium"
  | "hard"
  | "ruleOfHard"
  | "time"
  | "score"
  | "flips"
  | "youWin"
  | "home"
  | "nextLevel"
  | "gameOver"
  | "tryAgain";

const translations: Record<Locale, Record<Key, string>> = {
  en: {
    startGame: "Start Game",
    audioOn: "Audio on",
    audioOff: "Audio off",
    instructions: "Instructions",
    level: "Level",
    selectLevel: "Select Level",
    easy: "👶 Easy",
    ruleOfEasy:
      "You win if you find at least 3 pairs of images without exceeding the 60 flips and the 100 seconds",
    medium: "👦 Medium",
    ruleOfMedium:
      "You win if you find at least 5 pairs of images without exceeding the 50 flips and the 60 seconds",
    hard: "👨‍🦳 Hard",
    ruleOfHard:
      "You win if you find at least 6 pairs of images without exceeding the 40 flips and the 40 seconds",
    time: "Time",
    score: "Score",
    flips: "Flips",
    youWin: "You Win",
    home: "Home",
    nextLevel: "Next Level",
    gameOver: "Game Over",
    tryAgain: "Try Again",
  },
  el: {
    startGame: "Ξεκίνα το παιχνίδι",
    audioOn: "Άνοιξε τον ήχο ",
    audioOff: "Κλείσε τον ήχο",
    instructions: "Οδηγίες",
    level: "Επίπεδο",
    selectLevel: "Επίλεξε Επίπεδο",
    easy: "👶 Εύκολο",
    ruleOfEasy:
      "Κερδίζεις αν βρεις τουλάχιστον 3 ζεύγη εικόνων χωρίς να υπερβείς τα 60 γυρίσματα και τα 100 δευτερόλεπτα",
    medium: "👦 Μέτριο",
    ruleOfMedium:
      "Κερδίζεις αν βρεις τουλάχιστον 5 ζεύγη εικόνων χωρίς να υπερβείς τα 50 γυρίσματα και τα 60 δευτερόλεπτα",
    hard: "👨‍🦳 Δύσκολο",
    ruleOfHard:
      "Κερδίζεις αν βρεις τουλάχιστον 6 ζεύγη εικόνων χωρίς να υπερβείς τα 40 γυρίσματα και τα 40 δευτερόλεπτα",
    time: "Χρόνος",
    score: "Σκορ",
    flips: "Γυρίσματα",
    youWin: "Κερδισες",
    home: "Ξεκίνα από την αρχή",
    nextLevel: "Επόμενο Επίπεδο",
    gameOver: "Εχασες",
    tryAgain: "Προσπάθησε ξανά",
  },
};

export function useT() {
  const router = useRouter();
  const locale = router.locale as "en" | "el";
  const t = (key: Key) =>
    translations[locale][key] === ""
      ? `to be translated: ${key}`
      : translations[locale][key];
  return t;
}
