import AutoCompleteInput from "components/moduls/autoComplete";
import { useEffect, useState } from "react";
import { CommonButton, CommonText, WaringText } from "styles/CommonStyle";
import {
  SignUpBox,
  SignUpContainer,
  SignUpInput,
  SignUpSet
} from "styles/SignUpStyle";

export default function SignupInfoScreen(props: any) {
  const majorOriginData = require("../../interface/MajorData.json");
  const [majorArray, setMajorArray] = useState<string[]>([]);
  const gradeArray: string[] = ["1", "2", "3", "4", "5", "6"];

  const checkDataForNextStep = () => {
    if (props.data.major.length === 0) {
      alert("전공을 선택해주세요.");
      return;
    } else if (props.data.name.length === 0) {
      alert("이름을 입력해주세요.");
      return;
    } else if (props.data.nickName.length === 0) {
      alert("닉네임을 입력해주세요.");
      return;
    } else if (props.data.grade.length === 0) {
      alert("학년을 선택해주세요.");
      return;
    }
    props.setStep(2);
  };

  useEffect(() => {
    const major = majorOriginData.find(
      (index: any) => index.name === props.data.uniName
    );
    const dump = major.major;
    setMajorArray(dump);

    return () => {};
  }, []);

  /**
   *
   * @param setValue state 설정 함수
   * @param value 입력 값
   * @param type 0 pw 1 props.data.00
   */
  const handleValueChange = (
    setValue: Function,
    value: number | string | any | undefined,
    name?: string,
    type?: number
  ) => {
    if (type === 0) {
      const inputValue = value.replace(/[^0-9]/g, "");
      setValue(name, inputValue);
    } else if (type === 1) setValue(name, value);
    else setValue(value);
  };

  return (
    <SignUpContainer>
      <SignUpBox>
        <CommonText
          $fontSize="18px"
          $fontWeight="700"
          $color="#000"
          $lineHeight="18px"
        >
          전공 입력
        </CommonText>
        <AutoCompleteInput
          value={props.data.major}
          setValue={props.setData}
          choiceData={majorArray}
          placeHolder="전공 및 학부를 입력해주세요."
          type={2}
        />
      </SignUpBox>
      <SignUpBox>
        <CommonText
          $fontSize="18px"
          $fontWeight="700"
          $color="#000"
          $lineHeight="18px"
        >
          이름 입력
        </CommonText>
        <SignUpSet $width="100%">
          <SignUpInput
            placeholder="이름을 입력해주세요."
            value={props.data.name}
            onChange={(event) => {
              handleValueChange(props.setData, event.target.value, "name", 1);
            }}
          />
        </SignUpSet>
        {props.data.name.length == 0 && (
          <WaringText $margin="10px 0 0 0">
            - 이름이 입력되지 않았습니다.
          </WaringText>
        )}
      </SignUpBox>
      <SignUpBox>
        <CommonText
          $fontSize="18px"
          $fontWeight="700"
          $color="#000"
          $lineHeight="18px"
        >
          닉네임 입력
        </CommonText>
        <SignUpSet $width="100%">
          <SignUpInput
            placeholder="닉네임을 입력해주세요."
            value={props.data.nickName}
            onChange={(event) => {
              handleValueChange(
                props.setData,
                event.target.value,
                "nickName",
                1
              );
            }}
          />
        </SignUpSet>
        {props.data.nickName.length === 0 && (
          <WaringText $margin="10px 0 0 0">
            - 닉네임이 입력되지 않았습니다.
          </WaringText>
        )}
      </SignUpBox>
      <SignUpBox>
        <CommonText
          $fontSize="18px"
          $fontWeight="700"
          $color="#000"
          $lineHeight="18px"
        >
          학년 입력
        </CommonText>
        <AutoCompleteInput
          value={props.data.grade}
          setValue={props.setData}
          choiceData={gradeArray}
          placeHolder="학년을 입력해주세요."
          type={3}
        />
      </SignUpBox>
      <SignUpSet $width="calc(100% - 40px)" $margin="50px 0 0 0">
        <CommonButton
          $width="49%"
          $height="48px"
          $border="1px solid #000"
          onClick={() => {
            props.setStep(0);
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
            checkDataForNextStep();
          }}
        >
          <CommonText
            $fontSize="18px"
            $fontWeight="700"
            $color="#000"
            $lineHeight="18px"
          >
            다음단계 !
          </CommonText>
        </CommonButton>
      </SignUpSet>
    </SignUpContainer>
  );
}
