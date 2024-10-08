import Image from "next/image";
import { CommonText, PublicImageBox } from "styles/CommonStyle";
import {
  CommunityContentBox,
  CommunityContentPostBox,
  CommunityContentTailBox,
  CommunityContentTitleBox,
  CommunityContentTitleHorizontalBox,
  CommunityContentTitleVerticalBox
} from "styles/PostStyle";
import profile from "@pic/hine.jpg";

export default function CommunityPreviewPostBox() {
  return (
    <CommunityContentBox>
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
                닉네임이겠죠
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
                학과겠죠
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
                강의명이겠죠
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
          제목이겠죠??
        </CommonText>
        <CommonText
          $fontSize="16px"
          $fontWeight="400"
          $color="#000"
          $lineHeight="16px"
        >
          2000.00.00 00:00:00
        </CommonText>
      </CommunityContentTitleHorizontalBox>
      <CommunityContentPostBox $padding="0 10px">
        {/* content */}
        <CommonText
          $fontSize="15px"
          $fontWeight="400"
          $color="#000"
          $lineHeight="15px"
          $overflow="hidden"
          $textOverflow="ellipsis"
        >
          내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??
          내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??
          내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??
          내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??
          내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??
          내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??
          내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??내용이겠죠??
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
          조회수겠죠 ^^
        </CommonText>
      </CommunityContentTailBox>
    </CommunityContentBox>
  );
}
