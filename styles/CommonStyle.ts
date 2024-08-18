import styled from "styled-components";
import { DivScreenProps, TextScreenProps } from "./StyleInterfacer";

export const CommonText = styled.span<TextScreenProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};

  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  overflow: ${(props) => props.overflow};
  white-space: nowrap;
  text-overflow: ${(props) => props.textOverflow};

  font-family: "NotoSansKR";

  box-sizing: content-box;

  text-decoration: ${(props) => props.textDecorationLine};
  z-index: ${(props) => props.zIndex};
  @media screen and (min-width: 1920px) {
    font-size: ${(props) => props.maxFontSize};
    line-height: ${(props) => props.maxLineHeight};
    padding: ${(props) => props.maxPadding};
  }
`;

export const PublicImageBox = styled.div<DivScreenProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;

  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  cursor: pointer;
`;

export const CommonButton = styled.div<DivScreenProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};

  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.backGround};

  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;

  cursor: pointer;
`;

export const AutoInputBox = styled.div<DivScreenProps>`
  width: ${(props) => props.width};
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const AutoInputHiddenBox = styled.ul`
  width: 100%;
  height: 101px;

  position: absolute;

  border: 1px solid #343a40;
  background: #fff;

  top: 57px;

  z-index: 3;

  list-style-type: none;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const AutoInputContent = styled.li`
  width: 100%;
  height: 25px;

  list-style-type: none;

  cursor: pointer;
  font-family: "NotoSansKR";
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;

  justify-content: flex-start;
  align-items: center;

  text-align: left;
  padding-top: 4px;
  padding-left: 16px;

  box-sizing: border-box;
  border-bottom: 1px solid #343a40;
`;

export const TimerBox = styled.div`
  width: fit-content;
  height: 100%;

  position: absolute;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  right: 170px;
`;

export const WaringText = styled.span<DivScreenProps>`
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;

  color: #ff0000;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  font-family: "NotoSansKR";

  box-sizing: content-box;
`;
