import ChatLobbyScreen from "components/chat/chatLobby";
import MainBottomScreen from "components/main/mainBottom";
import { CommunityContainer } from "styles/PostStyle";

export default function ChatPage() {
  return (
    <CommunityContainer>
      <ChatLobbyScreen />
      <MainBottomScreen />
    </CommunityContainer>
  );
}
