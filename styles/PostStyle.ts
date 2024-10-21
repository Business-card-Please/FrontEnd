import styled from "styled-components";
import { DivScreenProps } from "./StyleInterfacer";

export const CommunityContainer = styled.div`
  width: 100%;
  max-width: 768px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CommunitySearchBox = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #000;
  background: #fff;
`;

export const CommunitySearchInput = styled.input`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  background: #fff;
  border: 1px solid #343a40;

  font-family: "NotoSansKR";
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;

  padding-left: 16px;

  &::placeholder {
    font-weight: 400;
  }
`;

export const CommunityContentArea = styled.div`
  width: 100%;
  height: calc(100% - 48px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow-y: auto;
  flex-wrap: nowrap;

  background: #fff;

  padding: 0 10px;

  /* border: 1px solid #000; */

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const CommunityContentBox = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #000;

  cursor: pointer;

  margin-bottom: 10px;
`;

export const CommunityContentTitleBox = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommunityContentTitleVerticalBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CommunityContentTitleHorizontalBox = styled.div<DivScreenProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$justifyContent};
  align-items: center;

  padding: ${(props) => props.$padding};
  margin: ${(props) => props.$margin};
`;

export const CommunityButtonHorizontalBox = styled.div<DivScreenProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$justifyContent};
  align-items: center;

  padding: ${(props) => props.$padding};
  margin: ${(props) => props.$margin};
`;

export const CommunityContentPostBox = styled.div<DivScreenProps>`
  width: 100%;
  height: 300px;
  position: relative;

  overflow: hidden;
  word-break: break-all;

  padding: ${(props) => props.$padding};

  &::after {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
    padding-right: 5px;
  }
`;

export const CommunityContentTailBox = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  padding-right: 10px;
`;
