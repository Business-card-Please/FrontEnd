import {
  ChatLobbyBox,
  LobbyBoxBottomSet,
  LobbyBoxTopSet,
  NewMessageBox
} from "styles/ChatStyle";
import { CommonText } from "styles/CommonStyle";

export default function LobbyRoomPreviewScreen(props: any) {
  const { data } = props;
  return (
    <ChatLobbyBox>
      <LobbyBoxTopSet>
        <CommonText
          $fontSize="19px"
          $fontWeight="600"
          $color="#123"
          $lineHeight="19px"
          $margin="0 10px 0 0"
        >
          요청인 : 히히 타이틀 발사
        </CommonText>
        <CommonText
          $fontSize="19px"
          $fontWeight="600"
          $color="#123"
          $lineHeight="19px"
          $margin="0 10px 0 0"
        >
          차용인 : 히히 타이틀 발사
        </CommonText>
        <CommonText
          $fontSize="19px"
          $fontWeight="600"
          $color="#123"
          $lineHeight="19px"
          $margin="0 10px 0 0"
        >
          상태 : 히히 타이틀 발사
        </CommonText>
      </LobbyBoxTopSet>
      <LobbyBoxBottomSet $alignItems="flex-start" $margin="10px 0 0 0">
        <CommonText
          $fontSize="18px"
          $fontWeight="500"
          $color="#000111"
          $lineHeight="18px"
        >
          히히 타이틀 발사
        </CommonText>
      </LobbyBoxBottomSet>
      <LobbyBoxBottomSet $alignItems="flex-end">
        <NewMessageBox>
          <CommonText
            $fontSize="21px"
            $fontWeight="600"
            $color="#fff"
            $lineHeight="21px"
          >
            10
          </CommonText>
        </NewMessageBox>
      </LobbyBoxBottomSet>
    </ChatLobbyBox>
  );
}
