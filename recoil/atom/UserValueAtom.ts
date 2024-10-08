import { atom } from "recoil";

//수동적재 우측을 위한 값
const LoginUserInfoAtom = atom<any>({
  key: "LoginUserInfoAtom",
  default: { department1: "", department2: "" }
});

export default LoginUserInfoAtom;
