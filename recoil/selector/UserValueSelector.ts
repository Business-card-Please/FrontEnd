import { selector } from "recoil";
import LoginUserInfoAtom from "recoil/atom/UserValueAtom";

/**
 *  유저 로그인 후  selector
 *  department1 주전, 2 복전
 * 
 */
const LoginUserInfoSelector = selector({
  key: "LoadRightValueSelector",
  get: ({ get }) => {
    const newState = get(LoginUserInfoAtom);
    return newState;
  },
  set: ({ get, set }: any, value: any) => {
    set(LoginUserInfoAtom, {
      department1: value.department1,
      department2: value.department2
    });
  }
});

export default LoginUserInfoSelector;
