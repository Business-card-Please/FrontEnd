import { MainContentList } from "@type/CommunityType";
import CommunityBodyScreen from "components/community/commuBody";
import CommunityHeaderScreen from "components/community/commuHeader";
import MainBottomScreen from "components/main/mainBottom";
import { useEffect, useState, useRef, useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import PageStateSelector from "recoil/selector/PageStateSelector";
import LoginUserInfoSelector from "recoil/selector/UserValueSelector";
import { getMainBoardData } from "service/MainService";
import { CommunityContainer } from "styles/PostStyle";

export default function CommunityPage() {
  const getUserInfo = useRecoilValue(LoginUserInfoSelector);

  const [time, setTime] = useState("");
  const [dataList, setDataList] = useState<MainContentList[]>([]);
  const [lastCdatetime, setLastCdatetime] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // 더 이상 불러올 데이터가 없으면 false로 변경
  const [isNext, setIsNext] = useState(true); // 서버에서 isNext 여부 확인
  const setPageState = useSetRecoilState(PageStateSelector);

  const contentAreaRef = useRef<HTMLDivElement>(null);

  async function initDate() {
    const offset = new Date().getTimezoneOffset() * 60000;
    const localTime = new Date(Date.now() - offset);
    const yearData = localTime.toISOString().split("T")[0];
    const timeData = localTime.toISOString().split("T")[1].split(".")[0];
    setTime(yearData + "T" + timeData);
  }

  useEffect(() => {
    setPageState(1);
    initDate();
  }, []);

  const fetchMainBoardData = async (datetime: string) => {
    if (loading || !hasMore || !isNext) return; // 로딩 중이거나 더 이상 데이터가 없으면 요청 중지
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
      const newData = res.data.data.current;
      const isNextData = res.data.data.isNext; // 서버에서 isNext 값 가져오기

      if (newData.length > 0) {
        setDataList((prev) => [...prev, ...newData]);
        setLastCdatetime(newData[newData.length - 1].cdatetime);
        setIsNext(isNextData); // isNext 값 업데이트
      } else {
        setHasMore(false); // 더 이상 데이터가 없으면 hasMore를 false로 설정
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

  useEffect(() => {
    console.log("dataList :>> ", dataList);
  }, [dataList]);

  // 디바운스를 위한 타이머 변수
  let debounceTimer: NodeJS.Timeout | null = null;

  const handleScroll = useCallback(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      if (contentAreaRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          contentAreaRef.current;

        // 스크롤이 바닥에 도달했는지 확인
        if (
          scrollTop + clientHeight >= scrollHeight - 100 &&
          !loading &&
          hasMore &&
          isNext
        ) {
          fetchMainBoardData(lastCdatetime); // 마지막 게시글의 cdatetime으로 추가 데이터 요청
        }
      }
    }, 200); // 200ms 디바운스 시간 설정
  }, [lastCdatetime, loading, hasMore, isNext]);

  useEffect(() => {
    const contentArea = contentAreaRef.current;

    if (contentArea) {
      contentArea.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (contentArea) {
        contentArea.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

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
