import { MainContentList } from "@type/CommunityType";
import { useEffect, useState } from "react";
import { NewSignBox, CommonText } from "styles/CommonStyle";
import {
  MainContentBox,
  MainContentTitleBox,
  MainContentTitleSet,
  MainContentDataBox,
  MainContentDataSet,
  MainContentTextSet
} from "styles/MainStyle";

export default function MainContentComponent(props: any) {
  const { data } = props;
  const [time, setTime] = useState("");

  function setup() {
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
  }, [data]);

  return (
    <MainContentBox>
      <MainContentTitleBox>
        <MainContentTitleSet>
          <NewSignBox>
            <CommonText
              $fontSize="16px"
              $fontWeight="600"
              $color="#fff"
              $lineHeight="16px"
            >
              N
            </CommonText>
          </NewSignBox>
          <CommonText
            $fontSize="18px"
            $fontWeight="600"
            $color="#000"
            $lineHeight="18px"
            $margin="0 0 0 10px"
          >
            {data.title}
          </CommonText>
        </MainContentTitleSet>
        <MainContentTitleSet>
          <CommonText
            $fontSize="16px"
            $fontWeight="600"
            $color="#000"
            $lineHeight="16px"
            $margin="0 0 0 10px"
          >
            {data.nickname}
          </CommonText>
          <CommonText
            $fontSize="14px"
            $fontWeight="500"
            $color="#000"
            $lineHeight="14px"
            $margin="4px 0 0 10px"
          >
            {time}
          </CommonText>
        </MainContentTitleSet>
      </MainContentTitleBox>
      <MainContentDataBox>
        <MainContentDataSet>
          <CommonText
            $fontSize="14px"
            $fontWeight="500"
            $color="#000"
            $lineHeight="14px"
            $margin="0 15px 0 0"
          >
            {data.department}
          </CommonText>
          <CommonText
            $fontSize="14px"
            $fontWeight="500"
            $color="#000"
            $lineHeight="14px"
          >
            {data.lecture}
          </CommonText>
        </MainContentDataSet>
        <MainContentTextSet>{data.content}</MainContentTextSet>
      </MainContentDataBox>
    </MainContentBox>
  );
}
