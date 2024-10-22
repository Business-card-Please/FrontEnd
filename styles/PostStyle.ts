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

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 768px;
  height: 100vh !important;

  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  align-items: center;

  background: #fff;
`;

export const CommunitySearchBox = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* border-bottom: 1px solid #000; */
  background: #fff;

  padding: 5px 10px 0 10px;
  padding-bottom: 1px;
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

export const CommunityContentBox = styled.div<DivScreenProps>`
  width: 100%;
  height: ${(props) => props.$height};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: ${(props) => props.$border};
  border-top: ${(props) => props.$borderTop};
  border-bottom: ${(props) => props.$borderBottom};

  cursor: pointer;

  margin-bottom: ${(props) => props.$margin};
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

export const CommunityContentButtonHorizontalBox = styled.div<DivScreenProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  display: ${(props) => props.$disPlay};
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
  height: ${(props) => props.$height};
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

export const PostEditContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #fff;

  padding: 0 10px;
`;

export const PostEditInput = styled.input<DivScreenProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  background: #fff;
  border: 1px solid #fff;
  border-bottom: 2px solid #343a40 !important;

  font-family: "NotoSansKR";
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;

  padding-left: 8px;
  /* margin-top: 10px; */

  &:focus,
  &:active {
    outline: none;
  }

  ::placeholder {
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    color: #999;
  }
`;

export const PostEditContentInput = styled.textarea<DivScreenProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  background: #fff;
  border: 2px solid #343a40 !important;
  /* border-bottom: 2px solid #343a40 !important; */

  font-family: "NotoSansKR";
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;

  padding: 8px;
  resize: none;
  overflow: auto;

  margin-top: 5px;

  &:focus,
  &:active {
    outline: none;
  }

  ::placeholder {
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    color: #999;
  }
`;

export const PostEditHorizonSet = styled.div<DivScreenProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: ${(props) => props.$margin};
`;

export const PostEditButtonHorizonSet = styled.div<DivScreenProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  margin: 10px 0 0 0;
`;
