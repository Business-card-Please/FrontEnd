import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </CookiesProvider>
  );
}
