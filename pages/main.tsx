import MainBottomScreen from "components/main/mainBottom";
import MainIndexScreen from "components/main/mainIndex";
import MainTopScreen from "components/main/mainTop";
import { MainContainer } from "styles/MainStyle";

export default function MainPage() {
  return (
    <MainContainer>
      <MainTopScreen />
      <MainIndexScreen />
      <MainBottomScreen />
    </MainContainer>
  );
}
