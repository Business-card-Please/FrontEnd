import { useEffect } from "react";
import LoginBox from "../components/login/loginBox";
import { LoginContainer } from "../styles/LoginStyle";
import { Cookies } from "react-cookie";

function LoginPage() {
  const cookie = new Cookies();
  useEffect(() => {
    console.log("cookie :>> ", cookie.get("access_token"));
    return () => {};
  }, []);
  return (
    <LoginContainer>
      <LoginBox />
    </LoginContainer>
  );
}

export default LoginPage;
