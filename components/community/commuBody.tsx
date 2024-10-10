import {
  CommunityButtonHorizontalBox,
  CommunityContentArea
} from "styles/PostStyle";
import CommunityPreviewPostBox from "./commuPost";
import { CommonButton, CommonText } from "styles/CommonStyle";
import { useEffect, useState } from "react";
import { MainContentList } from "@type/CommunityType";

interface CommunityBodyScreenProps {
  dataList: MainContentList[]; // 상위에서 전달되는 데이터 타입을 명시
  contentAreaRef: React.RefObject<HTMLDivElement>; // ref 추가
}

export default function CommunityBodyScreen({
  dataList,
  contentAreaRef // ref props 추가
}: CommunityBodyScreenProps) {
  const [localDataList, setLocalDataList] = useState<MainContentList[]>([]);

  useEffect(() => {
    if (dataList) {
      setLocalDataList(dataList);
    }
  }, [dataList]);

  return (
    <CommunityContentArea ref={contentAreaRef}>
      {" "}
      {/* ref 설정 */}
      <CommunityButtonHorizontalBox
        $width="100%"
        $height="52px"
        $margin="10px 0"
      >
        <CommonButton
          $width="160px"
          $height="52px"
          $border="1px solid #000"
          $backGround="#fff"
          $margin="0 0 0 5px"
        >
          <CommonText
            $fontSize="18px"
            $fontWeight="700"
            $color="#000"
            $lineHeight="18px"
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
            $fontSize="18px"
            $fontWeight="700"
            $color="#000"
            $lineHeight="18px"
          >
            🏷️ 책갈피
          </CommonText>
        </CommonButton>
      </CommunityButtonHorizontalBox>
      {localDataList.map((value: MainContentList, key: number) => {
        return <CommunityPreviewPostBox data={value} key={key.toString()} />;
      })}
    </CommunityContentArea>
  );
}
