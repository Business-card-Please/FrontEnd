import MainBottomScreen from "components/main/mainBottom";
import MainIndexScreen from "components/main/mainIndex";
import MainTopScreen from "components/main/mainTop";
import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { websocketState } from "recoil/atom/WebsocketAtom";
import CommunityContentSelector from "recoil/selector/CommunityContentSelector";
import PageStateSelector from "recoil/selector/PageStateSelector";
import LoginUserInfoSelector from "recoil/selector/UserValueSelector";
import { MainContainer } from "styles/MainStyle";

export default function MainPage() {
  const setPageState = useSetRecoilState(PageStateSelector);
  const setContentValue = useResetRecoilState(CommunityContentSelector);

  useEffect(() => {
    setPageState(0);
    setContentValue();
    return () => {};
  }, []);

  return (
    <MainContainer>
      <MainTopScreen />
      <MainIndexScreen />
      <MainBottomScreen />
    </MainContainer>
  );
}
