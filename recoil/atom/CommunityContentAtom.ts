import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

// 게시판글 내용 완료
const CommunityContentAtom = atom<any>({
  key: "CommunityContentAtom",
  default: {
    idx: 0,
    nickname: "",
    title: "",
    lecture: "",
    department: "",
    content: "",
    cdatetime: "",
    udatetime: "",
    viewcount: ""
  },
  effects_UNSTABLE: [persistAtom]
});

export default CommunityContentAtom;
