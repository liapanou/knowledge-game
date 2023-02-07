import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SettingsProvider, useSettings } from "../providers";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const { locale } = useRouter();
  const setLang = (e: string) => {
    if (typeof window !== "undefined") localStorage.setItem("lang", e);
  };

  return (
    <SettingsProvider>
      <select
        value={locale}
        onChange={(evt) => {
          const locale = evt.currentTarget.value;
          router.replace(router.asPath, router.asPath, { locale });
          setLang(locale);
        }}
        className="cursor-pointer bg-transparent  absolute z-50 top-0 left-0  text-center xs:text-lg md:text-2xl lg:text-lg appearance-none block xs:px-1 md:px-3 py-4 w-fit   text-black font-bold   border-white outline-none"
      >
        <option
          className=" text-yellow-500  bg-black xs:text-lg md:text-2xl lg:text-lg  "
          value="en"
        >
          🇬🇧
        </option>
        <option
          className="text-yellow-500  bg-black xs:text-lg md:text-2xl lg:text-lg  "
          value="el"
        >
          🇬🇷
        </option>
      </select>
      <Component {...pageProps} />
    </SettingsProvider>
  );
}
