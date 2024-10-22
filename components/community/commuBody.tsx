import {
  CommunityButtonHorizontalBox,
  CommunityContentArea
} from "styles/PostStyle";
import CommunityPreviewPostBox from "./commuPost";
import { CommonButton, CommonText } from "styles/CommonStyle";
import { useEffect, useState } from "react";
import { MainContentList } from "@type/CommunityType";
import { useRecoilValue } from "recoil";
import CommunityContentSelector from "recoil/selector/CommunityContentSelector";
import { useRouter } from "next/router";

interface CommunityBodyScreenProps {
  dataList: MainContentList[]; // 상위에서 전달되는 데이터 타입을 명시
  contentAreaRef: React.RefObject<HTMLDivElement>; // ref 추가
}

export default function CommunityBodyScreen({
  dataList,
  contentAreaRef // ref props 추가
}: CommunityBodyScreenProps) {
  const [localDataList, setLocalDataList] = useState<MainContentList[]>([]);
  const getContentValue = useRecoilValue(CommunityContentSelector);
  const route = useRouter();

  useEffect(() => {
    if (dataList) {
      setLocalDataList(dataList);
    }
  }, [dataList]);

  useEffect(() => {
    console.log("getContentValue :>> ", getContentValue);
    return () => {};
  }, [getContentValue]);

  return (
    <CommunityContentArea ref={contentAreaRef}>
      {/* ref 설정 */}
      <CommunityButtonHorizontalBox
        $width="100%"
        $height="52px"
        $margin="10px 0 "
      >
        <CommunityButtonHorizontalBox $width="50%" $height="52px">
          <CommonButton
            $width="160px"
            $height="52px"
            $border="1px solid #000"
            $backGround="#fff"
          >
            <CommonText
              $fontSize="1rem"
              $fontWeight="700"
              $color="#000"
              $lineHeight="1rem"
            >
              🔥 뜨거운 단어들
            </CommonText>
          </CommonButton>
          <CommonButton
            $width="160px"
            $height="100%"
            $border="1px solid #000"
            $backGround="#fff"
            $margin="0 0 0 5px"
          >
            <CommonText
              $fontSize="1rem"
              $fontWeight="700"
              $color="#000"
              $lineHeight="1rem"
            >
              🏷️ 책갈피
            </CommonText>
          </CommonButton>
        </CommunityButtonHorizontalBox>
        <CommunityButtonHorizontalBox
          $width="50%"
          $height="52px"
          $justifyContent="flex-end"
        >
          <CommonButton
            $width="120px"
            $height="100%"
            $border="1px solid #000"
            $backGround="#fff"
            onClick={() => route.push("/edit")}
          >
            <CommonText
              $fontSize="1rem"
              $fontWeight="700"
              $color="#000"
              $lineHeight="1rem"
            >
              ✏️ 글쓰기
            </CommonText>
          </CommonButton>
        </CommunityButtonHorizontalBox>
      </CommunityButtonHorizontalBox>
      {localDataList.map((value: MainContentList, key: number) => {
        return <CommunityPreviewPostBox data={value} key={key.toString()} />;
      })}
    </CommunityContentArea>
  );
}
