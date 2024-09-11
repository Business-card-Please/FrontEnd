import styled from "styled-components";
import { DivScreenProps } from "./StyleInterfacer";

export const CommunityContainer = styled.div`
  width: 100%;
  max-width: 768px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommunityContentBox = styled.div`
  width: 100%;
  height: 640px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #000;

  margin-bottom: 10px;
`;

export const CommunityContentTitleBox = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommunityContentTitleHorizontalBox = styled.div<DivScreenProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$justifyContent};
  align-items: center;
`;

export const CommunityContentPostBox = styled.div`
  width: 100%;
  height: 400px;

  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  word-break: break-all;
`;

export const CommunityContentTailBox = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
