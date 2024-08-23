import { useEffect, useState } from "react";
import { LoginFastRouteInterFace } from "../../interface/LoginType";
import { CommonButton, CommonText } from "../../styles/CommonStyle";

export default function RouteBox(props: LoginFastRouteInterFace) {
  const [rightLine, setRightLine] = useState("none");

  useEffect(() => {
    if (props.isLined === true) setRightLine("1px solid #6c757d");
    return () => {};
  }, []);

  return (
    <CommonButton
      $width="49%"
      $height="14px"
      $borderRight={rightLine}
      onClick={() => {
        console.log(props.text + "클릭");
      }}
    >
      <CommonText
        $fontSize="14px"
        $fontWeight="300"
        $color="#6c757d"
        $lineHeight="14px"
      >
        {props.text}
      </CommonText>
    </CommonButton>
  );
}
