import MainBottomScreen from "components/main/mainBottom";
import MainIndexScreen from "components/main/mainIndex";
import MainTopScreen from "components/main/mainTop";
import { useEffect } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import CommunityContentSelector from "recoil/selector/CommunityContentSelector";
import PageStateSelector from "recoil/selector/PageStateSelector";
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
