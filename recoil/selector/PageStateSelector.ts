import { selector } from "recoil";
import PageStateAtom from "recoil/atom/PageStateAtom";
import LoginUserInfoAtom from "recoil/atom/UserValueAtom";

/**
 *  v페이지 구분 selector
 *
 */
const PageStateSelector = selector({
  key: "PageStateSelector",
  get: ({ get }) => {
    const newState = get(PageStateAtom);
    return newState;
  },
  set: ({ get, set }: any, value: any) => {
    set(PageStateAtom, {
      value
    });
  }
});

export default PageStateSelector;
