import { BottomTabBarContainer, PublicImageBox } from "styles/CommonStyle";
import talk from "@pic/talkicon.png";
import home from "@pic/homeicon.png";
import my from "@pic/profileicon.png";
import board from "@pic/boardicon.png";
import { MainBottomBox } from "styles/MainStyle";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import PageStateSelector from "recoil/selector/PageStateSelector";
import { useEffect, useState } from "react";

export default function MainBottomScreen() {
  const getPageTypeState = useRecoilValue(PageStateSelector);
  const [pageColor, setPageColor] = useState(-1);
  useEffect(() => {
    console.log("getPageTypeState :>> ", getPageTypeState);
    setPageColor(getPageTypeState.value);
    return () => {};
  }, [getPageTypeState]);

  return (
    <BottomTabBarContainer>
      <MainBottomBox
        $backGround={getPageTypeState.value === 0 ? "#fff" : "none"}
      >
        <PublicImageBox $width="50px" $height="50px">
          <Image src={home} fill={true} alt="" />
        </PublicImageBox>
      </MainBottomBox>
      <MainBottomBox
        $backGround={getPageTypeState.value === 1 ? "#fff" : "none"}
      >
        <PublicImageBox $width="50px" $height="50px">
          <Image src={board} fill={true} alt="" />
        </PublicImageBox>
      </MainBottomBox>
      <MainBottomBox
        $backGround={getPageTypeState.value === 2 ? "#fff" : "none"}
      >
        <PublicImageBox $width="50px" $height="50px">
          <Image src={talk} fill={true} alt="" />
        </PublicImageBox>
      </MainBottomBox>
      <MainBottomBox
        $backGround={getPageTypeState.value === 3 ? "#fff" : "none"}
      >
        <PublicImageBox $width="50px" $height="50px">
          <Image src={my} fill={true} alt="" />
        </PublicImageBox>
      </MainBottomBox>
    </BottomTabBarContainer>
  );
}
