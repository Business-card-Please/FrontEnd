import CommunityBodyScreen from "components/community/commuBody";
import CommunityHeaderScreen from "components/community/commuHeader";
import MainBottomScreen from "components/main/mainBottom";
import { CommunityContainer } from "styles/PostStyle";

export default function CommunityPage() {

  return (
    <CommunityContainer>
      <CommunityHeaderScreen></CommunityHeaderScreen>
      <CommunityBodyScreen></CommunityBodyScreen>
      <MainBottomScreen></MainBottomScreen>
    </CommunityContainer>
  );
}
