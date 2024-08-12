import { useRouter } from "next/router";
import { CommonButton, CommonText } from "styles/CommonStyle";
import { SignUpContainer, SignUpSet } from "styles/SignUpStyle";

export default function SignupSuccessScreen(props: any) {
  const route = useRouter();
  return (
    <SignUpContainer>
      <p>발사ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ</p>
      <SignUpSet width="calc(100% - 40px)" margin="50px 0 0 0">
        <CommonButton
          width="49%"
          height="48px"
          border="1px solid #000"
          onClick={() => {
            route.replace("login");
          }}
        >
          <CommonText
            fontSize="18px"
            fontWeight="700"
            color="#000"
            lineHeight="18px"
          >
            로그인 하러 가기
          </CommonText>
        </CommonButton>
      </SignUpSet>
    </SignUpContainer>
  );
}
