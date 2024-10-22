import Image from "next/image";
import {
  CommonText,
  PublicImageBox,
  TopContainer,
  TopContainerIndexBox
} from "styles/CommonStyle";
import logo from "@pic/hine.jpg";

export default function MainTopScreen() {
  return (
    <TopContainer>
      <TopContainerIndexBox>
        <PublicImageBox $width="50px" $height="50px">
          <Image src={logo} fill={true} alt="" />
        </PublicImageBox>
        <CommonText
          $fontSize="24px"
          $fontWeight="700"
          $color="#000"
          $lineHeight="24px"
          $margin="0 0 0 20px"
        >
          프로젝트 이름
        </CommonText>
      </TopContainerIndexBox>
      <TopContainerIndexBox />
    </TopContainer>
  );
}
