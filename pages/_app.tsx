import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SettingsProvider, useSettings } from "../providers";

export default function App({ Component, pageProps }: AppProps) {
  const settings = useSettings();

  return (
    <SettingsProvider>
      <Component {...pageProps} />
    </SettingsProvider>
  );
}
