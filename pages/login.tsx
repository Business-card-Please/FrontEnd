import { useEffect } from "react";
import LoginBox from "../components/login/loginBox";
import { LoginContainer } from "../styles/LoginStyle";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import PageStateSelector from "recoil/selector/PageStateSelector";
import LoginUserInfoSelector from "recoil/selector/UserValueSelector";

function LoginPage() {
  const setPageState = useSetRecoilState(PageStateSelector);
  const resetLoginInfo = useResetRecoilState(LoginUserInfoSelector);

  useEffect(() => {
    setPageState(-1);
    resetLoginInfo();
    return () => {};
  }, []);

  return (
    <LoginContainer>
      <LoginBox />
    </LoginContainer>
  );
}

export default LoginPage;
