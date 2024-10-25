import { ChatLobbyBox, ChatLobbyContainer } from "styles/ChatStyle";
import LobbyRoomPreviewScreen from "./chatLobbyRoomPreview";

export default function ChatLobbyScreen() {
  const mockdata = [
    {
      unRead: 0,
      contract: null,
      lastMessage: "text",
      id: "1_test1_test2"
    },
    {
      unRead: 0,
      contract: null,
      lastMessage: "첫 대화",
      id: "5_test1_test2"
    }
  ];
  return (
    <ChatLobbyContainer>
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
      <LobbyRoomPreviewScreen />
    </ChatLobbyContainer>
  );
}
