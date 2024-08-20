import Image from "next/image";
import { CommonText, PublicImageBox } from "styles/CommonStyle";
import i404 from "@pic/images.jpg";

export default function NotFound() {
  return (
    <div className="customError">
      <PublicImageBox $width="300px" $height="300px">
        <Image src={i404} fill={true} alt="" />
      </PublicImageBox>
      <CommonText
        $margin="30px 0 0 0"
        $fontSize="32px"
        $fontWeight="700"
        $color="#fff"
        $lineHeight="32px"
      >
        404
      </CommonText>
      <CommonText
        $margin="10px 0"
        $fontSize="40px"
        $fontWeight="700"
        $color="#fff"
        $lineHeight="42px"
      >
        해당 페이지는 현재 공사중입니다. (프론트가 일을 안하는 중입니다.)
      </CommonText>
      <CommonText
        $margin="10px 0"
        $fontSize="40px"
        $fontWeight="700"
        $color="#fff"
        $lineHeight="42px"
      >
        안전을 위해 돌아가 주세요. (갈구고 오겠습니다.)
      </CommonText>
    </div>
  );
}
