import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
// 페이지 현재 상태

/**
 * -1 not login
 * 0 main
 * 1 board
 * 2 chat
 * 3 my profile
 */
const PageStateAtom = atom<any>({
  key: "PageStateAtom",
  default: -1,
  effects_UNSTABLE: [persistAtom]
});

export default PageStateAtom;
