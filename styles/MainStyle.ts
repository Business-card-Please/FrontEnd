import styled from "styled-components";
import { DivScreenProps } from "./StyleInterfacer";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 0;

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

  padding: 0 10px;
`;

export const MainBoardBox = styled.div<DivScreenProps>`
  width: 100%;
  height: 750px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  border: 1px solid #fff;
  box-sizing: border-box;

  margin: ${(props) => props.$margin};
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

  border: 1px solid #001232;
  margin-bottom: 10px;
`;

export const MainContentTitleBox = styled.div`
  width: 100%;
  height: 35px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 15px;

  border-bottom: 1px solid #000;
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
  height: 165px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 0 15px;
`;

export const MainContentDataSet = styled.div`
  width: 100%;
  height: 20px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  box-sizing: border-box;

  margin: 15px 0 0 0;
`;

export const MainContentTextSet = styled.div`
  width: 100%;
  height: 120px;

  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-break: break-all;
`;

export const MainBottomBox = styled.div<DivScreenProps>`
  width: 25%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.$backGround};

  cursor: pointer;
`;
