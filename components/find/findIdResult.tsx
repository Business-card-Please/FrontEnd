import { PublicImageBox, CommonText, CommonButton } from "styles/CommonStyle";
import {
  SignUpContainer,
  SignUpBox,
  SignUpSet,
  SignUpSuccessBox
} from "styles/SignUpStyle";
import test from "@pic/images.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function FindIDResultScreen() {
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
              📢 학우님께서 가입한 이메일로 메일을 전송했습니다.
            </CommonText>
            <CommonText
              $fontSize="24px"
              $fontWeight="700"
              $color="#000"
              $lineHeight="24px"
              $margin="30px 0 0 0"
            >
              😃 학교 메일 시스템에 따라 시간차가 존재하니 양해부탁드립니다.
            </CommonText>
          </SignUpSuccessBox>
        </SignUpSet>
      </SignUpBox>
      <SignUpSet $width="calc(100% - 40px)" $margin="50px 0 0 0">
        <CommonButton
          $width="49%"
          $height="48px"
          $border="1px solid #000"
          $backGround="#000"
          onClick={() => {
            route.replace("resetpw");
          }}
        >
          <CommonText
            $fontSize="18px"
            $fontWeight="700"
            $color="#fff"
            $lineHeight="18px"
          >
            비밀번호 재설정 하기
          </CommonText>
        </CommonButton>
        <CommonButton
          $width="49%"
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
