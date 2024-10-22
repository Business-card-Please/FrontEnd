import Image from "next/image";
import {
  CommonText,
  PublicImageBox,
  TopContainer,
  TopContainerIndexBox
} from "styles/CommonStyle";
import back from "@pic/backspace.png";
import { useRouter } from "next/router";

export default function CommunityTopBarScreen() {
  const route = useRouter();
  return (
    <TopContainer>
      <TopContainerIndexBox
        $width="fit-content"
        onClick={() => {
          route.back();
        }}
      >
        <PublicImageBox $width="60px" $height="60px">
          <Image src={back} fill={true} alt="" />
        </PublicImageBox>
      </TopContainerIndexBox>
      <TopContainerIndexBox />
    </TopContainer>
  );
}
