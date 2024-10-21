import MainBottomScreen from "components/main/mainBottom";
import { CommunityContainer, CommunityContentArea } from "styles/PostStyle";

export default function BoardListPage() {
  return (
    <CommunityContainer>
      <CommunityContentArea>
        <p>채팅 안만드냐 프론트야? 미침?</p>
      </CommunityContentArea>
      <MainBottomScreen />
    </CommunityContainer>
  );
}
