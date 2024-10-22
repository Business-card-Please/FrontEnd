import Image from "next/image";
import { CommonButton, CommonText, PublicImageBox } from "styles/CommonStyle";
import {
  CommunityButtonHorizontalBox,
  CommunityContentBox,
  CommunityContentButtonHorizontalBox,
  CommunityContentPostBox,
  CommunityContentTailBox,
  CommunityContentTitleBox,
  CommunityContentTitleHorizontalBox,
  CommunityContentTitleVerticalBox
} from "styles/PostStyle";
import profile from "@pic/hine.jpg";
import { useEffect, useState } from "react";
import CommunityContentSelector from "recoil/selector/CommunityContentSelector";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/router";

export default function CommunityFullContentPostBox(props: any) {
  const { data, userInfo } = props;
  const [id, setId] = useState(-1);
  const [time, setTime] = useState("");

  function setup() {
    setId(data.idx);
    if (data && data.cdatetime) {
      const origin = data.cdatetime.split(".")[0];
      const yearData = origin.split("T")[0];
      const timeData = origin.split("T")[1];

      setTime(yearData + " " + timeData);
    }
  }

  useEffect(() => {
    setup();
    console.log("isNickName :>> ", data.nickname, userInfo.nickname);
    return () => {};
  }, []);

  return (
    // 2000자 제한 필요
    <>
      <CommunityContentBox $height="100%" $borderBottom="1px solid #000">
        <CommunityContentTitleBox>
          <CommunityContentTitleHorizontalBox $width="100%" $height="90%">
            <PublicImageBox $width="70px" $height="100%">
              <Image src={profile} fill={true} alt="" />
            </PublicImageBox>
            <CommunityContentTitleVerticalBox>
              {/* nickname */}
              <CommunityContentTitleHorizontalBox
                $width="100%"
                $height="50%"
                $justifyContent="space-between"
                $padding="0 10px"
              >
                <CommonText
                  $fontSize="18px"
                  $fontWeight="500"
                  $color="#000"
                  $lineHeight="18px"
                >
                  {data.nickname}
                </CommonText>
              </CommunityContentTitleHorizontalBox>
              {/* major and classname */}
              <CommunityContentTitleHorizontalBox
                $width="100%"
                $height="50%"
                $justifyContent="flex-start"
                $padding="0 10px"
              >
                <CommonText
                  $fontSize="18px"
                  $fontWeight="500"
                  $color="#000"
                  $lineHeight="18px"
                >
                  {data.department}
                </CommonText>
                <CommonText
                  $fontSize="18px"
                  $fontWeight="500"
                  $color="#000"
                  $lineHeight="18px"
                  $padding="0 10px"
                >
                  |
                </CommonText>
                <CommonText
                  $fontSize="18px"
                  $fontWeight="500"
                  $color="#000"
                  $lineHeight="18px"
                >
                  {data.lecture}
                </CommonText>
              </CommunityContentTitleHorizontalBox>
            </CommunityContentTitleVerticalBox>
          </CommunityContentTitleHorizontalBox>
        </CommunityContentTitleBox>
        <CommunityContentTitleHorizontalBox
          $width="100%"
          $height="33px"
          $justifyContent="space-between"
          $padding="0 10px"
        >
          {/* main title and date */}
          <CommonText
            $fontSize="18px"
            $fontWeight="500"
            $color="#000"
            $lineHeight="18px"
          >
            {data.title}
          </CommonText>
          <CommonText
            $fontSize="16px"
            $fontWeight="400"
            $color="#000"
            $lineHeight="16px"
          >
            {time}
          </CommonText>
        </CommunityContentTitleHorizontalBox>
        <CommunityContentPostBox $height="80%" $padding="0 10px">
          {/* content */}
          <CommonText
            $fontSize="15px"
            $fontWeight="400"
            $color="#000"
            $lineHeight="15px"
            $overflow="hidden"
            $textOverflow="ellipsis"
          >
            {data.content}
          </CommonText>
        </CommunityContentPostBox>
        <CommunityContentTailBox>
          {/* views */}
          <CommonText
            $fontSize="16px"
            $fontWeight="400"
            $color="#000"
            $lineHeight="16px"
          >
            {data.viewcount} 회
          </CommonText>
        </CommunityContentTailBox>
      </CommunityContentBox>
      <CommunityButtonHorizontalBox
        $width="100%"
        $height="52px"
        $margin="10px 0 "
        $justifyContent={
          data.nickname === userInfo.nickname ? "space-between" : "flex-end"
        }
      >
        <CommunityContentButtonHorizontalBox
          $width="50%"
          $height="52px"
          $disPlay={data.nickname === userInfo.nickname ? "flex" : "none"}
        >
          <CommonButton
            $width="160px"
            $height="52px"
            $border="1px solid #000"
            $backGround="#fff"
          >
            <CommonText
              $fontSize="1rem"
              $fontWeight="700"
              $color="#000"
              $lineHeight="1rem"
            >
              ✂️ 수정
            </CommonText>
          </CommonButton>
          <CommonButton
            $width="160px"
            $height="100%"
            $border="1px solid #000"
            $backGround="#fff"
            $margin="0 0 0 5px"
          >
            <CommonText
              $fontSize="1rem"
              $fontWeight="700"
              $color="#000"
              $lineHeight="1rem"
            >
              ❌ 삭제
            </CommonText>
          </CommonButton>
        </CommunityContentButtonHorizontalBox>
        <CommunityButtonHorizontalBox
          $width="50%"
          $height="52px"
          $justifyContent="flex-end"
        >
          <CommonButton
            $width="120px"
            $height="100%"
            $border="1px solid #000"
            $backGround="#fff"
          >
            <CommonText
              $fontSize="1rem"
              $fontWeight="700"
              $color="#000"
              $lineHeight="1rem"
            >
              📞 1:1 채팅
            </CommonText>
          </CommonButton>
        </CommunityButtonHorizontalBox>
      </CommunityButtonHorizontalBox>
    </>
  );
}
