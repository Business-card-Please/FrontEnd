import ChatLobbyScreen from "components/chat/chatLobby";
import MainBottomScreen from "components/main/mainBottom";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import LoginUserInfoSelector from "recoil/selector/UserValueSelector";
import { getChattingRoomList } from "service/ChatService";
import { CommunityContainer } from "styles/PostStyle";

export default function ChatPage() {
  const getUserinfo = useRecoilValue(LoginUserInfoSelector);
  useEffect(() => {
    getChattingRoomList(getUserinfo.nickname)
      .then((res) => {
        console.log("res :>> ", res);
      })
      .catch((e) => {
        console.log("e :>> ", e);
      });
    return () => {};
  }, []);
  return (
    <CommunityContainer>
      <ChatLobbyScreen />
      <MainBottomScreen />
    </CommunityContainer>
  );
}
