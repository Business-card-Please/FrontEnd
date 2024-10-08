import { SchoolNames } from "@type/UniversityType";
import AutoCompleteInput from "components/moduls/autoComplete";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import {
  checkMailCode,
  getEmailList,
  sendMailCode
} from "service/SignupService";
import {
  CommonButton,
  CommonText,
  NoticeText,
  TimerBox,
  WaringText
} from "styles/CommonStyle";

import {
  SignUpBox,
  SignUpContainer,
  SignUpInput,
  SignUpSet
} from "styles/SignUpStyle";

import mockData from "../../interface/dev/mockUserData.json";

export default function SignupProcessScreen(props: any) {
  const route = useRouter();
  /**
   * 패스워드 확인 용도
   */
  const [check, setCheck] = useState("");

  const [code, setCode] = useState("");

  const [isCorrectEmailForm, setIsCorrectEmailForm] = useState(false);
  const [isCorrectPwForm, setIsCorrectPwForm] = useState(false);
  const [isCorrectPwCheck, setIsCorrectPwCheck] = useState(false);
  const [isCorrectCode, setIsCorrectCode] = useState(false);
  /**
   * 본인인증 코드 확인 버튼 이벤트 해금용도
   * 버튼을 누르면 true로 변경
   */
  const [isSendCode, setIsSendCode] = useState(false);

  /**
   * 본인인증 코드 검증
   * @returns
   */
  const checkCode = () => {
    if (code === mockCode) {
      setIsCorrectCode(true);
      return;
    }
    // checkMailCode(props.data.email, code).then((res: any) => {
    //   console.log("res :>> ", res);
    //   if (res === "correct") {
    //     setIsCorrectCode(true);
    //     return;
    //   } else {
    //     setIsCorrectCode(false);
    //     return;
    //   }
    // });
  };

  // 5분
  const initialTime = 300;
  // 남은 시간을 상태로 관리함.
  const [remainingTime, setRemainingTime] = useState(initialTime);
  useEffect(() => {
    // useEffect를 사용하여 컴포넌트가 마운트될 때 타이머 시작.
    const timer = setInterval(() => {
      // 남은 시간이 0보다 크면 1초씩 감소시킴.
      if (isCorrectCode) {
        console.log("stop");
        clearInterval(timer);
        return;
      }
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        // 남은 시간이 0이 되면 타이머 정지.
        clearInterval(timer);
        return;
      }
    }, 1000);

    // 컴포넌트가 언마운트되면 타이머 정지
    return () => clearInterval(timer);
  }, [remainingTime]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // 재전송 버튼을 클릭했을 때 호출되는 함수 정의.
  const handleResendClick = () => {
    // 남은 시간을 초기값으로 설정하여 타이머 재설정.
    setRemainingTime(initialTime);
  };

  const checkDataForNextStep = () => {
    if (props.data.uniName.length === 0) {
      alert("학교명을 선택해주세요.");
      return;
    } else if (!isCorrectEmailForm) {
      alert("올바른 이메일을 입력해주세요.");
      return;
    } else if (!isCorrectCode) {
      alert("이메일 인증을 진행해주세요.");
      return;
    } else if (!isCorrectPwForm) {
      alert("올바른 비밀번호를 입력해주세요.");
      return;
    } else if (!isCorrectPwCheck) {
      alert("비밀번호 확인을 다시 입력해주세요.");
      return;
    }
    props.setStep(1);
  };

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
   * 이메일 코드 발사 핸들링 함수
   * @email 입력한 이메일
   * @returns
   */
  function handleEmailCode(email: string) {
    if (isCorrectEmailForm) {
      setIsSendCode(true);
      setIsCorrectCode(false);
      handleResendClick();

      // const result = mockData.data.find(
      //   (key) => key.email === props.data.email
      // )?.email;
      // if (result === undefined) {
      //   // 이메일 확인
      //   getEmailList()
      //     .then((res) => {
      //       console.log("res :>> ", res);
      //       setIsSendCode(true);
      //       setIsCorrectCode(false);
      //       handleResendClick();
      //     })
      //     .catch((err) => {
      //       console.log("err :>> ", err);
      //     });

      //   sendMailCode(email).then(() => {
      //     setIsSendCode(true);
      //     setIsCorrectCode(false);
      //     handleResendClick();
      //   });
      // } else {
      //   alert("이미 가입하신 이메일 입니다.");
      // }
    } else {
      return;
    }
  }

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

  const onChangePwConfirm = useCallback(
    (value: string, type: number) => {
      if (type === 0) {
        if (props.data.pw === value) setIsCorrectPwCheck(true);
        else setIsCorrectPwCheck(false);
      } else {
        if (check === value) setIsCorrectPwCheck(true);
        else setIsCorrectPwCheck(false);
      }
    },
    [check]
  );

  useEffect(() => {
    setIsCorrectEmailForm(emailRegex.test(props.data.email));
    console.log("email : ", props.data.email);
    return () => {};
  }, [props.data.email]);

  useEffect(() => {
    setIsCorrectPwForm(pwRegex.test(props.data.pw));
    console.log("pw : ", props.data.pw);
    return () => {};
  }, [props.data.pw]);

  /**
   * clo zone
   * you `must` delete before building this code
   */

  useEffect(() => {
    console.log("uni : ", props.data.uniName);
    return () => {};
  }, [props.data.uniName]);

  useEffect(() => {
    // setIsCorrectPwCheck(pw === check ? true : false);
    console.log("pwCheck : ", isCorrectPwCheck);
    return () => {};
  }, [isCorrectPwCheck]);

  useEffect(() => {
    console.log("emailForm : ", isCorrectEmailForm);
    return () => {};
  }, [isCorrectEmailForm]);

  useEffect(() => {
    console.log("pwForm : ", isCorrectPwForm);
    return () => {};
  }, [isCorrectPwForm]);

  useEffect(() => {
    console.log("isCorrectCode : ", isCorrectCode);
    return () => {};
  }, [isCorrectCode]);

  /**
   * mock data
   */
  const mockCode = "111111";

  return (
    <SignUpContainer>
      <SignUpBox>
        <CommonText
          $fontSize="18px"
          $fontWeight="700"
          $color="#000"
          $lineHeight="18px"
        >
          대학교 입력
        </CommonText>
        <AutoCompleteInput
          value={props.data.uniName}
          setValue={props.setData}
          choiceData={SchoolNames}
          placeHolder="대학교명을 입력해주세요."
          type={1}
        />
        <NoticeText $margin="10px 0 0 0">
          💡 재학 중인 학교명을 입력 후 선택해주세요.
        </NoticeText>
      </SignUpBox>
      <SignUpBox>
        <CommonText
          $fontSize="18px"
          $fontWeight="700"
          $color="#000"
          $lineHeight="18px"
        >
          이메일 입력
        </CommonText>
        <SignUpSet $width="100%">
          <SignUpInput
            placeholder="이메일을 입력해주세요."
            value={props.data.email}
            onChange={(event) => {
              setIsCorrectCode(false);
              handleValueChange(props.setData, event.target.value, "email", 1);
            }}
          />
          <CommonButton
            $width="150px"
            $height="100%"
            $backGround={isCorrectEmailForm ? "#accdf3" : "#fff"}
            $border="1px solid #000"
            $margin="0 0 0 30px"
            onClick={() => {
              handleEmailCode(props.data.email);
            }}
          >
            <CommonText
              $fontSize="18px"
              $fontWeight="700"
              $color="#000"
              $lineHeight="18px"
            >
              {isSendCode ? "재발송!" : "코드 발사!"}
            </CommonText>
          </CommonButton>
        </SignUpSet>
        <NoticeText $margin="10px 0 0 0">
          💡 재학 중인 학교 이메일로 작성해주세요. (얘시 : 000@000.ac.kr)
        </NoticeText>
        {props.data.email.length != 0 && !isCorrectEmailForm && (
          <WaringText $margin="10px 0 0 0">
            - 이메일 형식이 정확하지 않습니다.
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
          본인인증 코드 확인
        </CommonText>
        <SignUpSet $width="100%">
          <SignUpInput
            placeholder="코드를 입력해주세요."
            value={code}
            maxLength={6}
            onChange={(event) => {
              handleValueChange(setCode, event.target.value, code);
            }}
          />
          <TimerBox>
            <WaringText>{isSendCode && formatTime(remainingTime)}</WaringText>
          </TimerBox>
          <CommonButton
            $width="150px"
            $height="100%"
            $border="1px solid #000"
            $backGround={isSendCode ? "#accdf3" : "#fff"}
            onClick={checkCode}
            $margin="0 0 0 30px"
          >
            <CommonText
              $fontSize="18px"
              $fontWeight="700"
              $color="#000"
              $lineHeight="18px"
            >
              코드 확인!
            </CommonText>
          </CommonButton>
        </SignUpSet>
      </SignUpBox>
      <SignUpBox>
        <CommonText
          $fontSize="18px"
          $fontWeight="700"
          $color="#000"
          $lineHeight="18px"
        >
          비밀번호 입력
        </CommonText>
        <SignUpInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={props.data.pw}
          onChange={(event) => {
            onChangePwConfirm(event.target.value, 1);
            handleValueChange(props.setData, event.target.value, "pw", 1);
          }}
        />
        <NoticeText $margin="10px 0 0 0">
          💡 영대소문자와 숫자 그리고 특수문자를 포함하여 8자리 이상
          입력해주세요.
        </NoticeText>
        {props.data.pw.length != 0 && !isCorrectPwForm && (
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
          비밀번호 확인
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
            route.back();
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
