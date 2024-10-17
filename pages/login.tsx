import { useEffect } from "react";
import LoginBox from "../components/login/loginBox";
import { LoginContainer } from "../styles/LoginStyle";
import { useSetRecoilState } from "recoil";
import PageStateSelector from "recoil/selector/PageStateSelector";

function LoginPage() {
  const setPageState = useSetRecoilState(PageStateSelector);

  useEffect(() => {
    setPageState(-1);
    return () => {};
  }, []);

  return (
    <LoginContainer>
      <LoginBox />
    </LoginContainer>
  );
}

export default LoginPage;
