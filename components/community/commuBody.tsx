import {
  CommunityButtonHorizontalBox,
  CommunityContentArea,
  CommunityContentTitleHorizontalBox
} from "styles/PostStyle";
import CommunityPreviewPostBox from "./commuPost";
import { CommonButton, CommonText } from "styles/CommonStyle";
import { MainContentList } from "@type/CommunityType";

export default function CommunityBodyScreen(props: any) {
  const { data } = props;
  return (
    <CommunityContentArea>
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
      {data &&
        data.map((value: MainContentList, key: number) => {
          return <CommunityPreviewPostBox data={value} key={key.toString()} />;
        })}
    </CommunityContentArea>
  );
}
