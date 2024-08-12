import styled from "styled-components";
import { DivScreenProps } from "./StyleInterfacer";

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fff;
`;

export const SignUpBox = styled.div`
  width: calc(100% - 40px);
  max-width: 1280px;
  min-width: 350px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 20px;
`;

export const SignUpSet = styled.div<DivScreenProps>`
  width: ${(props) => props.width};
  height: fit-content;

  max-width: 1280px;
  min-width: 350px;

  margin: ${(props) => props.margin};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SignUpInput = styled.input`
  width: 100%;
  height: 48px;

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

  padding-left: 16px;
  margin-top: 10px;

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
