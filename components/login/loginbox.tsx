import Image from "next/image";
import {
  CommonButton,
  CommonText,
  PublicImageBox
} from "../../styles/CommonStyle";
import {
  LoginBox,
  LoginInputBox,
  LoginInput,
  LoginFastRouteSet
} from "../../styles/LoginStyle";
import RouteBox from "./routeBox";
import d from "@pic/술먹.jpg";

function LoginArea() {
  return (
    <LoginBox>
      <PublicImageBox width="50%" height="120px">
        <Image src={d} fill={true} alt="" />
      </PublicImageBox>
      <CommonText
        fontSize="16px"
        fontWeight="500"
        color="#036666"
        lineHeight="16px"
      >
        히히 타이틀 발사
      </CommonText>
      <LoginInputBox>
        <CommonText
          fontSize="16px"
          fontWeight="500"
          color="#036666"
          lineHeight="16px"
        >
          아이디 입력
        </CommonText>
        <LoginInput placeholder="이메일을 입력하세요." />
      </LoginInputBox>
      <LoginInputBox>
        <CommonText
          fontSize="16px"
          fontWeight="500"
          color="#036666"
          lineHeight="16px"
        >
          비밀번호 입력
        </CommonText>
        <LoginInput placeholder="비밀번호를 입력하세요." />
      </LoginInputBox>
      <LoginFastRouteSet>
        <RouteBox text="아이디 찾기" isLined={true} />
        <RouteBox text="비밀번호 재설정" isLined={false} />
      </LoginFastRouteSet>
      <CommonButton
        width="calc(100% - 40px)"
        height="48px"
        borderRadius="12px"
        backGround="#56ab91"
        margin="40px 0 0 0"
      >
        <CommonText
          fontSize="16px"
          fontWeight="500"
          color="#fff"
          lineHeight="16px"
        >
          로그인
        </CommonText>
      </CommonButton>
    </LoginBox>
  );
}

export default LoginArea;
