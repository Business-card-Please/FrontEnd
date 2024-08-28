import test from "@pic/images.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { PublicImageBox, CommonText, CommonButton } from "styles/CommonStyle";
import {
  SignUpContainer,
  SignUpBox,
  SignUpSet,
  SignUpSuccessBox
} from "styles/SignUpStyle";

export default function ResetPwResultScreen() {
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
              📢 학우님께서 입력하신 비밀번호로 변경되었습니다.
            </CommonText>
            <CommonText
              $fontSize="24px"
              $fontWeight="700"
              $color="#000"
              $lineHeight="24px"
              $margin="30px 0 0 0"
            >
              전공을 위해, 학점을 위해, 장학금을 위해
            </CommonText>
            <CommonText
              $fontSize="24px"
              $fontWeight="700"
              $color="#000"
              $lineHeight="24px"
              $margin="30px 0 0 0"
            >
              😃 로그인을 하고 빠르게 물건을 빌려볼까요~
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
