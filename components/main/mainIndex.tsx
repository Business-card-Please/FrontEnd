import { MainContentList } from "@type/CommunityType";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import LoginUserInfoSelector from "recoil/selector/UserValueSelector";
import { getMainBoardData } from "service/MainService";
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
import MainContentComponent from "./mainContentIndex";

export default function MainIndexScreen() {
  const router = useRouter();
  const getUserInfo = useRecoilValue(LoginUserInfoSelector);

  const sampleText =
    "지금당장떠나면아무도다치지않는다그러지않으면너희는모두죽어탐정놀이도이젠끝이다오지말아야할곳에발을들였군현실로돌아가면잊지말고전해라스텔라론헌터가너희들의마지막을배웅했다는것을기어투점화소각기폭소탕시작액션원집행섬멸시작액션투집행목표고정즉시처단프로토콜통과초토화작전집행깨어났군한참이나기다렸다우린전에만난적이있지스텔라론헌터샘이다일찍이네앞에나타나진실을전하고싶었어하지만예상보다방해물이많더군열한차례시도했지만전부실패로끝났지그러는사이에나도모르게이세계와긴밀히연결되어각본의구속에서벗어날수없게됐다엘리오의말대로우리는이꿈의땅에서잊을수없는수확을얻게될테지나에겐그와카프카처럼사람의마음을꿰뚫어보는통찰력도은랑이나블레이드처럼특출난능력도없다내가잘하는것들대부분은불쌍히여길필요없는악당에게만적용되지그러니내가사용할수있는수단도단하나뿐이다네게보여주기위한거야내전부를";
  const [time, setTime] = useState("");
  const [dataList, setDataList] = useState<MainContentList[]>([
    {
      idx: 0,
      nickname: "",
      department: "",
      title: "",
      lecture: "",
      content: "",
      cdatetime: "",
      udatetime: "",
      viewcount: 0
    }
  ]);
  /**
   * 현재 시간 측정 및 세팅
   */
  async function initDate() {
    const offset = new Date().getTimezoneOffset() * 60000;
    const localTime = new Date(Date.now() - offset);
    const yearData = localTime.toISOString().split("T")[0];
    const timeData = localTime.toISOString().split("T")[1].split(".")[0];
    setTime(yearData + "T" + timeData);
  }

  /**
   * lee 엽이 내 백엔드 훔쳐가서...
   * mock 데이터 용도
   */
  const mockData = [
    {
      idx: 16,
      nickname: "seophohoho",
      title: "운영체제 연습문제 사진",
      lecture: "운영체제",
      department: "컴퓨터소프트웨어학부",
      content: "사진 찍어줘",
      cdatetime: "2024-09-08T21:11:24.244502",
      udatetime: "2024-09-08T21:11:24.24469",
      viewcount: 0
    },
    {
      idx: 15,
      nickname: "seophohoho",
      title: "운영체제 연습문제 사진",
      lecture: "운영체제",
      department: "컴퓨터소프트웨어학부",
      content: "사진 찍어줘",
      cdatetime: "2024-09-08T21:11:09.567619",
      udatetime: "2024-09-08T21:11:09.567706",
      viewcount: 0
    },
    {
      idx: 14,
      nickname: "seophohoho",
      title: "운영체제 연습문제 사진",
      lecture: "운영체제",
      department: "컴퓨터소프트웨어학부",
      content: "사진 찍어줘",
      cdatetime: "2024-09-08T21:11:08.79293",
      udatetime: "2024-09-08T21:11:08.792986",
      viewcount: 0
    }
  ];

  /**
   * 접속 시 게시글 데이터 불러오기 및 저장
   */
  async function initData() {
    setDataList(mockData);
  }

  useEffect(() => {
    initDate();
    return () => {};
  }, []);

  /**
   *  데이터 셋업
   */
  useEffect(() => {
    initData();
    // if (time.length > 9) {
    //   getMainBoardData(
    //     time,
    //     3,
    //     "default",
    //     "-",
    //     getUserInfo.department1,
    //     getUserInfo.department2
    //   )
    //     .then((res) => {
    //       console.log("res :>> ", res.data.data);
    //     })
    //     .catch((err) => {
    //       console.log("err.stause :>> ", err.status);
    //       alert("로그아웃 되었습니다 :D");
    //     });
    // }
    // return () => {};
  }, [time]);

  useEffect(() => {
    console.log("dataList :>> ", dataList);

    return () => {};
  }, [dataList]);

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
            onClick={() => {
              router.push("community");
            }}
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
        {dataList.map((value: MainContentList, index: number) => {
          return <MainContentComponent key={index.toString()} data={value} />;
        })}
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
        {dataList.map((value: MainContentList, index: number) => {
          return <MainContentComponent key={index.toString()} data={value} />;
        })}
      </MainBoardBox>
    </MainContainerBox>
  );
}
