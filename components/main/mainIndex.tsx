import { CommonButton, CommonText, NewSignBox } from "styles/CommonStyle";
import {
  MainContentBox,
  MainContainerBox,
  MainContentDataBox,
  MainContentTitleBox,
  MainBoardBox,
  MainBoardTitleBox,
  MainContentTitleSet
} from "styles/MainStyle";

export default function MainIndexScreen() {
  return (
    <MainContainerBox>
      <MainBoardTitleBox>
        <CommonText
          $fontSize="30px"
          $fontWeight="600"
          $color="#000"
          $lineHeight="30px"
          $margin="10px 5px"
        >
          📚 대여 게시판
        </CommonText>
        <CommonButton $width="10%" $height="100%">
          <CommonText
            $fontSize="16px"
            $fontWeight="600"
            $color="#FA4C46"
            $lineHeight="16px"
            $margin="10px 0"
          >
            더 보기 {">"}
          </CommonText>
        </CommonButton>
      </MainBoardTitleBox>
      <MainBoardBox $margin="0 0 5px 0">
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
                글 제목
              </CommonText>
            </MainContentTitleSet>
            <MainContentTitleSet>
              <CommonText
                $fontSize="18px"
                $fontWeight="600"
                $color="#000"
                $lineHeight="18px"
                $margin="0 0 0 10px"
              >
                글 제목
              </CommonText>
            </MainContentTitleSet>
          </MainContentTitleBox>
          <MainContentDataBox></MainContentDataBox>
        </MainContentBox>
        <MainContentBox>
          <MainContentTitleBox></MainContentTitleBox>
          <MainContentDataBox></MainContentDataBox>
        </MainContentBox>
        <MainContentBox>
          <MainContentTitleBox></MainContentTitleBox>
          <MainContentDataBox></MainContentDataBox>
        </MainContentBox>
      </MainBoardBox>
      <MainBoardTitleBox>
        <CommonText
          $fontSize="30px"
          $fontWeight="600"
          $color="#000"
          $lineHeight="30px"
          $margin="10px 5px"
        >
          📣 사람 찾아요
        </CommonText>
        <CommonButton $width="10%" $height="100%">
          <CommonText
            $fontSize="16px"
            $fontWeight="600"
            $color="#FA4C46"
            $lineHeight="16px"
            $margin="10px 0"
          >
            더 보기 {">"}
          </CommonText>
        </CommonButton>
      </MainBoardTitleBox>
      <MainBoardBox $margin="0 0 5px 0">
        <MainContentBox>
          <MainContentTitleBox></MainContentTitleBox>
          <MainContentDataBox></MainContentDataBox>
        </MainContentBox>
        <MainContentBox>
          <MainContentTitleBox></MainContentTitleBox>
          <MainContentDataBox></MainContentDataBox>
        </MainContentBox>
        <MainContentBox>
          <MainContentTitleBox></MainContentTitleBox>
          <MainContentDataBox></MainContentDataBox>
        </MainContentBox>
      </MainBoardBox>
      <MainBoardTitleBox>
        <CommonText
          $fontSize="30px"
          $fontWeight="600"
          $color="#000"
          $lineHeight="30px"
          $margin="10px 5px"
        >
          🎁 전공 지식 장터
        </CommonText>
        <CommonButton $width="10%" $height="100%">
          <CommonText
            $fontSize="16px"
            $fontWeight="600"
            $color="#FA4C46"
            $lineHeight="16px"
            $margin="10px 0"
          >
            더 보기 {">"}
          </CommonText>
        </CommonButton>
      </MainBoardTitleBox>
      <MainBoardBox>
        <MainContentBox>
          <MainContentTitleBox></MainContentTitleBox>
          <MainContentDataBox></MainContentDataBox>
        </MainContentBox>
        <MainContentBox>
          <MainContentTitleBox></MainContentTitleBox>
          <MainContentDataBox></MainContentDataBox>
        </MainContentBox>
        <MainContentBox>
          <MainContentTitleBox></MainContentTitleBox>
          <MainContentDataBox></MainContentDataBox>
        </MainContentBox>
      </MainBoardBox>
    </MainContainerBox>
  );
}
