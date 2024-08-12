import { CommonButton, CommonText } from "styles/CommonStyle";
import { SignUpContainer, SignUpSet } from "styles/SignUpStyle";

export default function SignupFavScreen(props: any) {
  return (
    <SignUpContainer>
      <p>히히 발사!!!!</p>
      <SignUpSet width="calc(100% - 40px)" margin="50px 0 0 0">
        <CommonButton
          width="49%"
          height="48px"
          border="1px solid #000"
          onClick={() => {
            props.setStep(1);
          }}
        >
          <CommonText
            fontSize="18px"
            fontWeight="700"
            color="#000"
            lineHeight="18px"
          >
            이전으로 !
          </CommonText>
        </CommonButton>
        <CommonButton
          width="49%"
          height="48px"
          border="1px solid #000"
          onClick={() => {
            props.setStep(3);
          }}
        >
          <CommonText
            fontSize="18px"
            fontWeight="700"
            color="#000"
            lineHeight="18px"
          >
            회원 가입 완료 !
          </CommonText>
        </CommonButton>
      </SignUpSet>
    </SignUpContainer>
  );
}
