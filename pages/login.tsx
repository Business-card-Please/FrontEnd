import { useEffect } from "react";
import LoginBox from "../components/login/loginBox";
import { LoginContainer } from "../styles/LoginStyle";

function LoginPage() {
  return (
    <LoginContainer>
      <LoginBox />
    </LoginContainer>
  );
}

export default LoginPage;
