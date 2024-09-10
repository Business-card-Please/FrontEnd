import styled from "styled-components";
import { DivScreenProps } from "./StyleInterfacer";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  background-color: white;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MainContainerBox = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  flex-wrap: nowrap;

  overflow: auto;
`;

export const MainBoardBox = styled.div<DivScreenProps>`
  width: 100%;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  border: 1px solid #fff;
  box-sizing: border-box;

  margin: ${(props) => props.$margin};

  background-color: purple;
`;

export const MainBoardTitleBox = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MainContentBox = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
`;

export const MainContentTitleBox = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 15px;

  background-color: #1f0;
`;

export const MainContentTitleSet = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MainContentDataBox = styled.div`
  width: 100%;
  height: 154px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #1a2;
`;
