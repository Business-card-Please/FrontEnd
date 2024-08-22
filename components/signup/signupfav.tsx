import { useEffect, useState } from "react";
import { doSignUp, getEmailList } from "service/SignupService";
import { CommonButton, CommonText, NoticeText } from "styles/CommonStyle";
import {
  Checkbox,
  CheckBoxContainer,
  CheckBoxSet,
  CheckedLabel,
  SignUpBox,
  SignUpContainer,
  SignUpInput,
  SignUpSet
} from "styles/SignUpStyle";

export default function SignupFavScreen(props: any) {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [keyword, setKeyword] = useState("");

  /**
   * 키워드 공백 기준으로 array 저장
   */
  function filteringKeywords() {
    const stringDump = keyword;
    props.setData("keywords", stringDump.split(" "));
  }

  /**
   *
   */
  function getSignup() {
    filteringKeywords();
    doSignUp(props.data).then((res) => {
      console.log("res :>> ", res);
      props.setStep(3);
      return;
    });
  }

  useEffect(() => {
    console.log("keyword :>> ", keyword);
    return () => {};
  }, [keyword]);

  return (
    <SignUpContainer>
      <SignUpBox>
        <CommonText
          $fontSize="18px"
          $fontWeight="700"
          $color="#000"
          $lineHeight="18px"
        >
          선호하는 종류
        </CommonText>
        <CheckBoxContainer>
          <CheckBoxSet onClick={() => setIsChecked(!isChecked)}>
            <Checkbox id="check1" />
            <CheckedLabel htmlFor="check1" isChecked={isChecked} />
            <CommonText
              $fontSize="16px"
              $fontWeight="500"
              $color="#000"
              $lineHeight="16px"
            >
              교양 과목
            </CommonText>
          </CheckBoxSet>
          <CheckBoxSet onClick={() => setIsChecked1(!isChecked1)}>
            <Checkbox id="check2" />
            <CheckedLabel htmlFor="check2" isChecked={isChecked1} />
            <CommonText
              $fontSize="16px"
              $fontWeight="500"
              $color="#000"
              $lineHeight="16px"
            >
              전공 과목
            </CommonText>
          </CheckBoxSet>
        </CheckBoxContainer>
      </SignUpBox>
      <SignUpBox>
        <CommonText
          $fontSize="18px"
          $fontWeight="700"
          $color="#000"
          $lineHeight="18px"
        >
          관심 키워드
        </CommonText>
        <SignUpSet $width="100%">
          <SignUpInput
            placeholder="키워드를 입력해주세요."
            value={keyword}
            onChange={(event) => {
              setKeyword(event.target.value);
            }}
          />
        </SignUpSet>
        <NoticeText $margin="10px 0 0 0">
          💡 키워드는 공백(스페이스바)를 이용해서 구분해주세요.
        </NoticeText>
      </SignUpBox>
      <SignUpSet $width="calc(100% - 40px)" $margin="50px 0 0 0">
        <CommonButton
          $width="49%"
          $height="48px"
          $border="1px solid #000"
          onClick={() => {
            props.setStep(1);
          }}
        >
          <CommonText
            $fontSize="18px"
            $fontWeight="700"
            $color="#000"
            $lineHeight="18px"
          >
            이전으로 !
          </CommonText>
        </CommonButton>
        <CommonButton
          $width="49%"
          $height="48px"
          $border="1px solid #000"
          onClick={() => {
            getSignup();
          }}
        >
          <CommonText
            $fontSize="18px"
            $fontWeight="700"
            $color="#000"
            $lineHeight="18px"
          >
            회원 가입 완료 !
          </CommonText>
        </CommonButton>
      </SignUpSet>
    </SignUpContainer>
  );
}
