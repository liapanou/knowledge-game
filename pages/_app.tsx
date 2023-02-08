import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SettingsProvider } from "../providers";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const { locale } = useRouter();
  const getLang = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lang") || undefined;
    } else return locale;
  };

  const setLang = (e: string) => {
    if (typeof window !== "undefined") localStorage.setItem("lang", e);
  };

  return (
    <SettingsProvider>
      <select
        value={getLang()}
        onChange={(evt) => {
          const locale = evt.currentTarget.value;
          router.replace(router.asPath, router.asPath, { locale });
          setLang(locale);
        }}
        className="absolute top-0  left-0 z-50 block w-fit  cursor-pointer appearance-none border-white bg-transparent py-4 text-center font-bold text-black outline-none xs:px-1   xs:text-lg md:px-3   md:text-2xl lg:text-lg"
      >
        <option
          className=" bg-black  text-yellow-500 xs:text-lg md:text-2xl lg:text-lg  "
          value="en"
        >
          🇬🇧
        </option>
        <option
          className="bg-black  text-yellow-500 xs:text-lg md:text-2xl lg:text-lg  "
          value="el"
        >
          🇬🇷
        </option>
      </select>
      <Component {...pageProps} />
    </SettingsProvider>
  );
}
