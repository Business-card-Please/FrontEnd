import { atom } from "recoil";

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
  }
});

export default CommunityContentAtom;
