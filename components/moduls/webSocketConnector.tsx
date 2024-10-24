// components/WebSocketConnector.tsx
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { websocketState } from "recoil/atom/WebsocketAtom";
import LoginUserInfoSelector from "recoil/selector/UserValueSelector";

export default function WebSocketConnector() {
  const getUserInfo = useRecoilValue(LoginUserInfoSelector);
  const setSocket = useSetRecoilState(websocketState); // Setter를 가져옵니다.

  useEffect(() => {
    if (!getUserInfo.nickname) return;

    const wsUrl = `wss://wholly-musical-donkey.ngrok-free.app/wss?nickname=${getUserInfo.nickname}`;
    const newSocket = new WebSocket(wsUrl);

    setSocket(newSocket); // 여기서 WebSocket 객체를 직접 상태로 설정합니다.

    newSocket.onopen = function () {
      console.log("WebSocket 연결 성공");
    };

    newSocket.onclose = function (event) {
      console.log("WebSocket 연결 종료");
      if (event.wasClean) {
        console.log(
          `정상적으로 종료됨 (code=${event.code}, reason=${event.reason})`
        );
      } else {
        console.log(`비정상적으로 종료됨 (code=${event.code})`);
      }
    };

    newSocket.onerror = function (error) {
      console.error("WebSocket 에러 발생: ", error);
    };

    // 컴포넌트 언마운트 시 WebSocket 연결 종료
    return () => {
      if (newSocket.readyState === WebSocket.OPEN) {
        newSocket.close();
      }
      setSocket(null); // 소켓을 null로 초기화합니다.
      console.log("WebSocket 연결 해제");
    };
  }, [getUserInfo.nickname, setSocket]);

  return null;
}
