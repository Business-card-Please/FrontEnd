import { MainContentList } from "@type/CommunityType";
import CommunityBodyScreen from "components/community/commuBody";
import CommunityHeaderScreen from "components/community/commuHeader";
import MainBottomScreen from "components/main/mainBottom";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import LoginUserInfoSelector from "recoil/selector/UserValueSelector";
import { getMainBoardData } from "service/MainService";
import { CommunityContainer } from "styles/PostStyle";

export default function CommunityPage() {
  const getUserInfo = useRecoilValue(LoginUserInfoSelector);

  const [time, setTime] = useState("");
  const [dataList, setDataList] = useState<MainContentList[]>([
    {
      idx: 0,
      nickname: "",
      department: "",
      title: "",
      lecture: "",
      content: "",
      cdatetime: "",
      udatetime: "",
      viewcount: 0
    }
  ]);
  /**
   * 현재 시간 측정 및 세팅
   */
  async function initDate() {
    const offset = new Date().getTimezoneOffset() * 60000;
    const localTime = new Date(Date.now() - offset);
    const yearData = localTime.toISOString().split("T")[0];
    const timeData = localTime.toISOString().split("T")[1].split(".")[0];
    setTime(yearData + "T" + timeData);
  }

  useEffect(() => {
    initDate();
    return () => {};
  }, []);

  useEffect(() => {
    if (time.length > 9) {
      getMainBoardData(
        time,
        10,
        "default",
        "-",
        getUserInfo.department1,
        getUserInfo.department2
      )
        .then((res) => {
          setDataList(res.data.data);
        })
        .catch((err) => {
          console.log("err.stause :>> ", err.status);
          alert("로그아웃 되었습니다 :D");
        });
    }
    return () => {};
  }, [time]);

  useEffect(() => {
    if (dataList.length > 1) console.log("dataKist :>> ", dataList);
    return () => {};
  }, [dataList]);

  return (
    <CommunityContainer>
      <CommunityHeaderScreen />
      <CommunityBodyScreen props={dataList} />
      <MainBottomScreen />
    </CommunityContainer>
  );
}
