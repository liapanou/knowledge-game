import { useRouter } from "next/router";
type Locale = "en" | "el";

type Key =
  | "startGame"
  | "audioOn"
  | "audioOff"
  | "instructions"
  | "category"
  | "selectCategory"
  | "culturalΗeritage"
  | "ruleOfEasy"
  | "adviceToWin"
  | "existingCategories"
  | "libraryContent"
  | "time"
  | "score"
  | "clicks"
  | "youWin"
  | "home"
  | "nextCategory"
  | "gameOver"
  | "tryAgain";

const translations: Record<Locale, Record<Key, string>> = {
  en: {
    startGame: "Start Game",
    audioOn: "Audio on",
    audioOff: "Audio off",
    instructions: "Instructions",
    category: "Category",
    selectCategory: "Select Category",
    culturalΗeritage: "🏺 Cultural Ηeritage",
    ruleOfEasy:
      "You win if you find at least 4 pairs of images without exceeding the 60 clicks and the 90 seconds",
    adviceToWin:
      "The are two knowledge categories which you can choose from. You should pich those whose you are good at !",
    existingCategories: "The existing categories for selection are :",
    libraryContent: "📙 Library Content",
    time: "Time",
    score: "Score",
    clicks: "Clicks",
    youWin: "You Win",
    home: "Home",
    nextCategory: "Next Category",
    gameOver: "Game Over",
    tryAgain: "Try Again",
  },
  el: {
    startGame: "Ξεκίνα το παιχνίδι",
    audioOn: "Άνοιξε τον ήχο",
    audioOff: "Κλείσε τον ήχο",
    instructions: "Οδηγίες",
    category: "Κατηγορία",
    selectCategory: "Επίλεξε Κατηγορία",
    culturalΗeritage: "🏺 Πολιτιστική Κληρονομιά",
    ruleOfEasy:
      "Κερδίζεις αν βρεις τουλάχιστον 4 ζεύγη εικόνων χωρίς να υπερβείς τα 60 πατήματα και τα 90 δευτερόλεπτα",
    adviceToWin:
      "Υπάρχουν 2 κατηγορίες γνώσεων από τις οποίες μπορείς να διαλέξεις. Καλύτερα να επιλέξεις εκείνες τις οποίες γνωρίζεις καλύτερα!",
    existingCategories: "Οι υπάρχουσες κατηγορίες για επιλογή είναι :",
    libraryContent: "📙 Περιεχόμενο Βιβλιοθήκης",
    time: "Χρόνος",
    score: "Σκορ",
    clicks: "Πατήματα",
    youWin: "Κερδισες",
    home: "Ξεκίνα από την αρχή",
    nextCategory: "Επόμενο Κατηγορία",
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
