import { useCallback, useEffect, useState } from "react";
import { setNewPasswordWithNickName } from "service/FindService";
import {
  CommonButton,
  CommonText,
  NoticeText,
  WaringText
} from "styles/CommonStyle";
import {
  SignUpBox,
  SignUpContainer,
  SignUpInput,
  SignUpSet
} from "styles/SignUpStyle";

export default function ResetPwMakeScreen(props: any) {
  /**
   * 비밀번호 정규식
   * 알파벳 대문자,소문자,숫자,특수문자 중 3가지 이상 초함
   * 최소 8자리 이상
   * 공백 X
   */
  const pwRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.{8,})(?!.*\s).*$/;

  const [isCorrectPwForm, setIsCorrectPwForm] = useState(false);
  const [isCorrectPwCheck, setIsCorrectPwCheck] = useState(false);
  const [newPw, setNewPw] = useState("");
  const [check, setCheck] = useState("");

  const onChangePwConfirm = useCallback(
    (value: string, type: number) => {
      if (type === 0) {
        if (newPw === value) setIsCorrectPwCheck(true);
        else setIsCorrectPwCheck(false);
      } else {
        if (check === value) setIsCorrectPwCheck(true);
        else setIsCorrectPwCheck(false);
      }
    },
    [check]
  );

  const checkDataForNextStep = () => {
    if (!isCorrectPwForm) {
      alert("올바른 비밀번호를 입력해주세요.");
      return;
    } else if (!isCorrectPwCheck) {
      alert("비밀번호 확인을 다시 입력해주세요.");
      return;
    }
    setNewPasswordWithNickName(props.nickname, newPw);
    props.setStep(2);
  };

  useEffect(() => {
    setIsCorrectPwForm(pwRegex.test(newPw));
    console.log("pw : ", newPw);
    return () => {};
  }, [newPw]);

  return (
    <SignUpContainer>
      <SignUpBox>
        <CommonText
          $fontSize="18px"
          $fontWeight="700"
          $color="#000"
          $lineHeight="18px"
        >
          새로운 비밀번호 입력
        </CommonText>
        <SignUpInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={newPw}
          onChange={(event) => {
            onChangePwConfirm(event.target.value, 1);
            setNewPw(event.target.value);
          }}
        />
        <NoticeText $margin="10px 0 0 0">
          💡 영대소문자와 숫자 그리고 특수문자를 포함하여 8자리 이상
          입력해주세요.
        </NoticeText>
        {newPw.length != 0 && !isCorrectPwForm && (
          <WaringText $margin="10px 0 0 0">
            - 비밀번호는 소문자,대문자,숫자,특수문자를 포함한 8자리 이상입니다.
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
          새로운 비밀번호 확인
        </CommonText>
        <SignUpInput
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
          value={check}
          onChange={(event) => {
            onChangePwConfirm(event.target.value, 0);
            setCheck(event.target.value);
          }}
        />
        {check.length != 0 && !isCorrectPwCheck && (
          <WaringText $margin="10px 0 0 0">
            - 비밀번호와 일치하지 않습니다.
          </WaringText>
        )}
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
