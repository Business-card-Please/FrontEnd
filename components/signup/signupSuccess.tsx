import Image from "next/image";
import { useRouter } from "next/router";
import {
  CommonButton,
  CommonText,
  PublicImageBox,
  WaringText
} from "styles/CommonStyle";
import {
  SignUpBox,
  SignUpContainer,
  SignUpSet,
  SignUpSuccessBox
} from "styles/SignUpStyle";
import test from "@pic/images.svg";

export default function SignupSuccessScreen(props: any) {
  const route = useRouter();
  return (
    <SignUpContainer>
      <SignUpBox>
        <SignUpSet $width="100%">
          <SignUpSuccessBox>
            <PublicImageBox $width="150px" $height="150px">
              <Image src={test} alt="" fill={true} />
            </PublicImageBox>
            <CommonText
              $fontSize="28px"
              $fontWeight="700"
              $color="#000"
              $lineHeight="28px"
              $margin="30px 0 0 0"
            >
              📢 학우님의 회원가입을 축하합니다!
            </CommonText>
            <CommonText
              $fontSize="18px"
              $fontWeight="700"
              $color="#000"
              $lineHeight="18px"
              $margin="20px 0 0 0"
            >
              지금 바로 로그인 하셔서 여러분의 첫 대여를 경험해보세요.
            </CommonText>
            <CommonText
              $fontSize="18px"
              $fontWeight="700"
              $color="#000"
              $lineHeight="18px"
              $margin="20px 0 0 0"
            >
              누구보다 긴급할 때 누구보다 빠르게 찾아드립니다 :D
            </CommonText>
          </SignUpSuccessBox>
        </SignUpSet>
      </SignUpBox>
      <SignUpSet $width="calc(100% - 40px)" $margin="50px 0 0 0">
        <CommonButton
          $width="100%"
          $height="48px"
          $border="1px solid #000"
          onClick={() => {
            route.replace("login");
          }}
        >
          <CommonText
            $fontSize="18px"
            $fontWeight="700"
            $color="#000"
            $lineHeight="18px"
          >
            로그인 하러 가기
          </CommonText>
        </CommonButton>
      </SignUpSet>
    </SignUpContainer>
  );
}
