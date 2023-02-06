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
        className="cursor-pointer bg-teal-400  absolute z-50 top-0 left-0   text-center text-2xl appearance-none block px-3 py-4 w-fit   text-black font-bold   border-b border-opacity-25 border-white outline-none"
      >
        <option
          className=" text-yellow-500 uppercase  bg-black text-2xl "
          value="en"
        >
          🇬🇧 &nbsp; {(locale === "el" ? "ΑΓΓΛΙΚΑ" : `English`).toUpperCase()}
        </option>
        <option
          className="text-yellow-500 uppercase  bg-black text-2xl "
          value="el"
        >
          🇬🇷 &nbsp;{(locale === "el" ? "ΕΛΛΗΝΙΚΑ" : `Greek`).toUpperCase()}
        </option>
      </select>
      <Component {...pageProps} />
    </SettingsProvider>
  );
}
