import styled from "styled-components";
import { DivScreenProps } from "./StyleInterfacer";

export const ChatLobbyContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: block;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  overflow: auto;

  background: #fff;
  padding: 20px 10px 0 10px;
`;

export const ChatLobbyBox = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: #99caaa;
  margin: 0 0 5px 0;

  padding: 0 10px;

  cursor: pointer;
`;

export const LobbyBoxTopSet = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #000;

  padding: 10px 0;
`;

export const LobbyBoxBottomSet = styled.div<DivScreenProps>`
  width: 100%;
  height: 70px;

  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$alignItems};
  justify-content: space-between;

  margin: ${(props) => props.$margin};
`;

export const NewMessageBox = styled.div`
  width: 28px;
  height: 28px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: #fa3e2d;
  border-radius: 4px;
`;
