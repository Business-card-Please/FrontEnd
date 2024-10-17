import MainBottomScreen from "components/main/mainBottom";
import MainIndexScreen from "components/main/mainIndex";
import MainTopScreen from "components/main/mainTop";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import PageStateSelector from "recoil/selector/PageStateSelector";
import { MainContainer } from "styles/MainStyle";

export default function MainPage() {
  const setPageState = useSetRecoilState(PageStateSelector);

  useEffect(() => {
    setPageState(0);
  }, []);

  return (
    <MainContainer>
      <MainTopScreen />
      <MainIndexScreen />
      <MainBottomScreen />
    </MainContainer>
  );
}
