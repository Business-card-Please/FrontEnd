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
import { useEffect, useState } from "react";
import { LoginInterface } from "@type/LoginType";
import { loginWithData } from "service/LoginService";

function LoginArea() {
  const [info, setInfo] = useState<LoginInterface>({
    email: "",
    password: ""
  });

  function sendLogin() {
    loginWithData(info);
  }

  function setData(name: string, value: string | number) {
    setInfo((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    console.log("info :>> ", info);
    return () => {};
  }, [info]);

  return (
    <LoginBox>
      <PublicImageBox $width="50%" $height="120px">
        <Image src={d} fill={true} alt="" />
      </PublicImageBox>
      <CommonText
        $fontSize="21px"
        $fontWeight="600"
        $color="#036666"
        $lineHeight="21px"
        $margin="10px 0 0 0"
      >
        히히 타이틀 발사
      </CommonText>
      <LoginInputBox>
        <CommonText
          $fontSize="16px"
          $fontWeight="500"
          $color="#036666"
          $lineHeight="16px"
        >
          이메일 입력
        </CommonText>
        <LoginInput
          placeholder="이메일을 입력하세요."
          value={info.email}
          onChange={(e) => setData("email", e.target.value)}
        />
      </LoginInputBox>
      <LoginInputBox>
        <CommonText
          $fontSize="16px"
          $fontWeight="500"
          $color="#036666"
          $lineHeight="16px"
        >
          비밀번호 입력
        </CommonText>
        <LoginInput
          placeholder="비밀번호를 입력하세요."
          type="password"
          value={info.password}
          onChange={(e) => setData("password", e.target.value)}
        />
      </LoginInputBox>
      <LoginFastRouteSet>
        <RouteBox text="아이디 찾기" isLined={true} />
        <RouteBox text="비밀번호 재설정" isLined={false} />
      </LoginFastRouteSet>
      <CommonButton
        $width="calc(100% - 40px)"
        $height="48px"
        $borderRadius="12px"
        $backGround="#56ab91"
        $margin="40px 0 0 0"
        onClick={sendLogin}
      >
        <CommonText
          $fontSize="16px"
          $fontWeight="500"
          $color="#fff"
          $lineHeight="16px"
        >
          로그인
        </CommonText>
      </CommonButton>
    </LoginBox>
  );
}

export default LoginArea;
