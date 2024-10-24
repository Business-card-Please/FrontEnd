import { atom, useRecoilState } from "recoil";

export const websocketState = atom<WebSocket | null>({
  key: "websocketState",
  default: null
});
