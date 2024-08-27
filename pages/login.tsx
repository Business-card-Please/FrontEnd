import { useEffect } from "react";
import LoginBox from "../components/login/loginBox";
import { LoginContainer } from "../styles/LoginStyle";
import { useCookies } from "react-cookie";

function LoginPage() {
  const [cookie, setCookie] = useCookies(["accessKey"]);
  useEffect(() => {
    console.log("cookie :>> ", cookie.accessKey);
    return () => {};
  }, []);
  return (
    <LoginContainer>
      <LoginBox />
    </LoginContainer>
  );
}

export default LoginPage;
