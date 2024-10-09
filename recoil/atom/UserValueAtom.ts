import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

//수동적재 우측을 위한 값
const LoginUserInfoAtom = atom<any>({
  key: "LoginUserInfoAtom",
  default: { department1: "", department2: "" },
  effects_UNSTABLE: [persistAtom]
});

export default LoginUserInfoAtom;
