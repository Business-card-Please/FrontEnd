import WebSocketConnector from "components/moduls/webSocketConnector";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <WebSocketConnector />
    </RecoilRoot>
  );
}
