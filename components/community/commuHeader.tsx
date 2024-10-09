import { CommonButton, CommonText } from "styles/CommonStyle";
import { CommunitySearchBox, CommunitySearchInput } from "styles/PostStyle";

export default function CommunityHeaderScreen() {
  return (
    <CommunitySearchBox>
      <CommunitySearchInput placeholder="궁금한것이 있다면 검색해보세요!" />
      <CommonButton
        $width="20%"
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
          자 드가자
        </CommonText>
      </CommonButton>
    </CommunitySearchBox>
  );
}
