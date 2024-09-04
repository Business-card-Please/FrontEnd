import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  background-color: aqua;
`;

export const MainContentBox = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex-wrap: nowrap;

  overflow: auto;

  background-color: red;
`;

export const MainBoardBox = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid #000121;

  background-color: purple;
`;

export const MainContentTitleBox = styled.div`
  width: 100%;
  height: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: purple;
`;

export const MainContentDataBox = styled.div`
  width: 100%;
  height: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: purple;
`;
