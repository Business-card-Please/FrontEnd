import { MainContentList } from "@type/CommunityType";
import CommunityBodyScreen from "components/community/commuBody";
import CommunityHeaderScreen from "components/community/commuHeader";
import MainBottomScreen from "components/main/mainBottom";
import { useEffect, useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import LoginUserInfoSelector from "recoil/selector/UserValueSelector";
import { getMainBoardData } from "service/MainService";
import { CommunityContainer } from "styles/PostStyle";

export default function CommunityPage() {
  const getUserInfo = useRecoilValue(LoginUserInfoSelector);

  const [time, setTime] = useState("");
  const [dataList, setDataList] = useState<MainContentList[]>([]);
  const [lastCdatetime, setLastCdatetime] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // ref 추가
  const contentAreaRef = useRef<HTMLDivElement>(null);

  async function initDate() {
    const offset = new Date().getTimezoneOffset() * 60000;
    const localTime = new Date(Date.now() - offset);
    const yearData = localTime.toISOString().split("T")[0];
    const timeData = localTime.toISOString().split("T")[1].split(".")[0];
    setTime(yearData + "T" + timeData);
  }

  useEffect(() => {
    initDate();
  }, []);

  const fetchMainBoardData = async (datetime: string) => {
    if (loading || !hasMore) return; // 이미 로딩 중이거나 더 이상 데이터가 없음
    setLoading(true);

    try {
      const res = await getMainBoardData(
        datetime,
        10,
        "default",
        "-",
        getUserInfo.department1,
        getUserInfo.department2
      );
      const newData = res.data.data;

      if (newData.length > 0) {
        setDataList((prev) => [...prev, ...newData]);
        setLastCdatetime(newData[newData.length - 1].cdatetime); // 마지막 게시글의 cdatetime 업데이트
      } else {
        setHasMore(false); // 더 이상 데이터가 없으면 hasMore false로 설정
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      alert("로그아웃 되었습니다 :D");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (time.length > 9) {
      fetchMainBoardData(time); // 초기 데이터 로딩
    }
  }, [time]);

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      if (contentAreaRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          contentAreaRef.current;

        // 스크롤이 바닥에 도달했는지 확인
        if (
          scrollTop + clientHeight >= scrollHeight - 100 &&
          !loading &&
          hasMore
        ) {
          fetchMainBoardData(lastCdatetime); // 마지막 게시글의 cdatetime으로 추가 데이터 요청
        }
      }
    };

    const contentArea = contentAreaRef.current;

    if (contentArea) {
      contentArea.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (contentArea) {
        contentArea.removeEventListener("scroll", handleScroll);
      }
    };
  }, [lastCdatetime, loading, hasMore]);

  return (
    <CommunityContainer>
      <CommunityHeaderScreen />
      <CommunityBodyScreen
        dataList={dataList}
        contentAreaRef={contentAreaRef}
      />
      <MainBottomScreen />
    </CommunityContainer>
  );
}
