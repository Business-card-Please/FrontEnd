import { styled } from "styled-components";
import { DivScreenProps } from "./StyleInterfacer";
import { keyframes } from "styled-components";

export const OnboardContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #99e2b4;
`;

export const OnboardBox = styled.div`
  width: calc(100% - 40px);
  max-width: 1280px;
  min-width: 350px;
  height: calc(100% - 80px);

  /* position: relative; */

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background: #fff;

  border-radius: 12px;
`;

export const OnboardContentBox = styled.div<DivScreenProps>`
  width: 100%;
  height: ${(props) => props.$height};

  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  justify-content: space-around;
  align-items: center;

  $padding: ${(props) => props.$padding};
`;

const wave = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
export const HeaderText = styled.span`
  font-family: "NotoSansKR";
  font-size: 2.9em;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  background: linear-gradient(90deg, #99e2b4, #56ab91, #248277);
  background-size: 200% 200%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${wave} 2s ease-in-out infinite;
  position: relative;
`;
