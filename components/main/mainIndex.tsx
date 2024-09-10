import { useEffect, useState } from "react";
import { CommonButton, CommonText, NewSignBox } from "styles/CommonStyle";
import {
  MainContentBox,
  MainContainerBox,
  MainContentDataBox,
  MainContentTitleBox,
  MainBoardBox,
  MainBoardTitleBox,
  MainContentTitleSet,
  MainContentDataSet,
  MainContentTextSet
} from "styles/MainStyle";

export default function MainIndexScreen() {
  const sampleText =
    "지금당장떠나면아무도다치지않는다그러지않으면너희는모두죽어탐정놀이도이젠끝이다오지말아야할곳에발을들였군현실로돌아가면잊지말고전해라스텔라론헌터가너희들의마지막을배웅했다는것을기어투점화소각기폭소탕시작액션원집행섬멸시작액션투집행목표고정즉시처단프로토콜통과초토화작전집행깨어났군한참이나기다렸다우린전에만난적이있지스텔라론헌터샘이다일찍이네앞에나타나진실을전하고싶었어하지만예상보다방해물이많더군열한차례시도했지만전부실패로끝났지그러는사이에나도모르게이세계와긴밀히연결되어각본의구속에서벗어날수없게됐다엘리오의말대로우리는이꿈의땅에서잊을수없는수확을얻게될테지나에겐그와카프카처럼사람의마음을꿰뚫어보는통찰력도은랑이나블레이드처럼특출난능력도없다내가잘하는것들대부분은불쌍히여길필요없는악당에게만적용되지그러니내가사용할수있는수단도단하나뿐이다네게보여주기위한거야내전부를";
  const [time, setTime] = useState("");
  useEffect(() => {
    const offset = new Date().getTimezoneOffset() * 60000;
    const time = new Date(Date.now() - offset);
    const yearData = time.toISOString().split("T")[0];
    const timeData = time.toISOString().split("T")[1].split(".")[0];

    setTime(yearData + " " + timeData);
    return () => {};
  }, []);

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
                $fontSize="16px"
                $fontWeight="600"
                $color="#000"
                $lineHeight="16px"
                $margin="0 0 0 10px"
              >
                그저빛이되어버린용궁의자랑이자잊혀진18거북이
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
                컴퓨터공학전공
              </CommonText>
              <CommonText
                $fontSize="14px"
                $fontWeight="500"
                $color="#000"
                $lineHeight="14px"
              >
                린공지능
              </CommonText>
            </MainContentDataSet>
            <MainContentTextSet>{sampleText}</MainContentTextSet>
          </MainContentDataBox>
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
