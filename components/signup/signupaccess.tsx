import { SchoolNames } from "@type/UniversityType";
import AutoCompleteInput from "components/moduls/autocomplete";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CommonButton, CommonText } from "styles/CommonStyle";

import {
  SignUpBox,
  SignUpContainer,
  SignUpInput,
  SignUpSet
} from "styles/SignUpStyle";

export default function SignupProcessScreen(props: any) {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [uniName, setUniName] = useState("");
  const [code, setCode] = useState("");
  const [pw, setPw] = useState("");

  /**
   * 패스워드 확인 용도
   */
  const [check, setCheck] = useState("");

  const [isCorrectEmailForm, setIsCorrectEmailForm] = useState(false);
  const [isCorrectPwForm, setIsCorrectPwForm] = useState(false);

  /**
   * 본인인증 코드 확인 버튼 이벤트 해금용도
   */
  const [isSendCode, setIsSendCode] = useState(true);

  /**
   * 이메일 정규식
   * [영문자+숫자]@[영문자].ac.kr
   */
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.ac\.kr$/;

  /**
   * 비밀번호 정규식
   * 알파벳 대문자,소문자,숫자,특수문자 중 3가지 이상 초함
   * 최소 8자리 이상
   * 공백 X
   */
  const pwRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.{8,})(?!.*\s).*$/;

  /**
   *
   * @param setValue state 설정 함수
   * @param value 입력 값
   * @param type 0 mail, 1 pw, 2 code
   */
  const handleValueChange = (
    setValue: Function,
    value: number | string | any | undefined,
    type?: number
  ) => {
    if (type === 0) {
      setValue(value);
    } else if (type === 1) {
      setValue(value);
    } else if (type === 2) {
      const inputValue = value.replace(/[^0-9]/g, "");
      setValue(inputValue);
    } else {
      setValue(value);
    }
  };

  useEffect(() => {
    console.log("uni : ", uniName);
    return () => {};
  }, [uniName]);

  useEffect(() => {
    setIsCorrectEmailForm(emailRegex.test(email));
    console.log("email : ", email);
    return () => {};
  }, [email]);

  useEffect(() => {
    setIsCorrectPwForm(pwRegex.test(pw));
    console.log("pw : ", pw);
    return () => {};
  }, [pw]);

  useEffect(() => {
    console.log("emailForm : ", isCorrectEmailForm);
    return () => {};
  }, [isCorrectEmailForm]);

  useEffect(() => {
    console.log("pwForm : ", isCorrectPwForm);
    return () => {};
  }, [isCorrectPwForm]);

  return (
    <SignUpContainer>
      <SignUpBox>
        <CommonText
          fontSize="18px"
          fontWeight="700"
          color="#000"
          lineHeight="18px"
        >
          대학교 입력
        </CommonText>
        <AutoCompleteInput
          value={uniName}
          setValue={setUniName}
          choiceData={SchoolNames}
          placeHolder="대학교명을 입력해주세요."
        />
      </SignUpBox>
      <SignUpBox>
        <CommonText
          fontSize="18px"
          fontWeight="700"
          color="#000"
          lineHeight="18px"
        >
          이메일 입력
        </CommonText>
        <SignUpSet width="100%">
          <SignUpInput
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={(event) =>
              handleValueChange(setEmail, event.target.value, 0)
            }
          />
          <CommonButton
            width="150px"
            height="100%"
            backGround={isCorrectEmailForm ? "#accdf3" : "#fff"}
            border="1px solid #000"
            margin="0 0 0 30px"
          >
            <CommonText
              fontSize="18px"
              fontWeight="700"
              color="#000"
              lineHeight="18px"
            >
              코드 발사!
            </CommonText>
          </CommonButton>
        </SignUpSet>
      </SignUpBox>
      <SignUpBox>
        <CommonText
          fontSize="18px"
          fontWeight="700"
          color="#000"
          lineHeight="18px"
        >
          본인인증 코드 확인
        </CommonText>
        <SignUpSet width="100%">
          <SignUpInput
            placeholder="코드를 입력해주세요."
            value={code}
            maxLength={6}
            onChange={(event) => {
              handleValueChange(setCode, event.target.value, 2);
            }}
          />
          <CommonButton
            width="150px"
            height="100%"
            border="1px solid #000"
            backGround={isSendCode ? "#accdf3" : "#fff"}
            margin="0 0 0 30px"
          >
            <CommonText
              fontSize="18px"
              fontWeight="700"
              color="#000"
              lineHeight="18px"
            >
              코드 확인!
            </CommonText>
          </CommonButton>
        </SignUpSet>
      </SignUpBox>
      <SignUpBox>
        <CommonText
          fontSize="18px"
          fontWeight="700"
          color="#000"
          lineHeight="18px"
        >
          비밀번호 입력
        </CommonText>
        <SignUpInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={pw}
          onChange={(event) => handleValueChange(setPw, event.target.value, 1)}
        />
      </SignUpBox>
      <SignUpBox>
        <CommonText
          fontSize="18px"
          fontWeight="700"
          color="#000"
          lineHeight="18px"
        >
          비밀번호 확인
        </CommonText>
        <SignUpInput
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
          value={check}
          onChange={(event) => handleValueChange(setCheck, event.target.value)}
        />
      </SignUpBox>
      <SignUpSet width="calc(100% - 40px)" margin="50px 0 0 0">
        <CommonButton
          width="49%"
          height="48px"
          border="1px solid #000"
          onClick={() => {
            route.back();
          }}
        >
          <CommonText
            fontSize="18px"
            fontWeight="700"
            color="#000"
            lineHeight="18px"
          >
            이전으로 !
          </CommonText>
        </CommonButton>
        <CommonButton
          width="49%"
          height="48px"
          border="1px solid #000"
          onClick={() => {
            props.setStep(1);
          }}
        >
          <CommonText
            fontSize="18px"
            fontWeight="700"
            color="#000"
            lineHeight="18px"
          >
            다음단계 !
          </CommonText>
        </CommonButton>
      </SignUpSet>
    </SignUpContainer>
  );
}
