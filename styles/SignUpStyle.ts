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
  width: ${(props) => props.$width};
  height: fit-content;

  max-width: 1280px;
  min-width: 350px;

  margin: ${(props) => props.$margin};

  position: relative;

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

export const SignUpSuccessBox = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #000;
`;

export const CheckBoxContainer = styled.div`
  width: calc(100% - 40px);
  max-width: 1280px;
  min-width: 350px;
  height: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;

  margin-top: 20px;
`;

export const CheckBoxSet = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 10px;

  cursor: pointer;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  border: 3px solid #707070;
  position: relative;

  margin-right: 10px;

  cursor: pointer;
`;

export const CheckedLabel = styled(CheckboxLabel).withConfig({
  shouldForwardProp: (prop) => prop !== "isChecked"
})<{ isChecked: boolean }>`
  &::after {
    content: ${({ isChecked }) => (isChecked ? '"✔"' : '""')};
    font-size: 25px;
    width: 30px;
    height: 30px;
    text-align: center;
    position: absolute;
    margin-bottom: 5px;
  }
`;
