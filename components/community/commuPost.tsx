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
import { useEffect, useState } from "react";

export default function CommunityPreviewPostBox(props: any) {
  const { data } = props;
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
    return () => {};
  }, []);

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
  );
}
