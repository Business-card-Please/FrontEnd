import { selector } from "recoil";
import CommunityContentAtom from "recoil/atom/CommunityContentAtom";

/**
 *  게시글 내용 저장, 상세보기 전용
 *
 */
const CommunityContentSelector = selector({
  key: "LoadRightValueSelector",
  get: ({ get }) => {
    const newState = get(CommunityContentAtom);
    return newState;
  },
  set: ({ get, set }: any, value: any) => {
    set(CommunityContentAtom, {
      idx: value.idx,
      nickname: value.nickname,
      title: value.title,
      lecture: value.lecture,
      department: value.department,
      content: value.content,
      cdatetime: value.cdatetime,
      udatetime: value.udatetime,
      viewcount: value.viewcount
    });
  }
});

export default CommunityContentSelector;
