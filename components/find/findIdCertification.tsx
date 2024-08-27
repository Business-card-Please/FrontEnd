import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { sendNicknameToEmail } from "service/FindService";
import { checkMailCode, sendMailCode } from "service/SignupService";
import {
  CommonText,
  TimerBox,
  WaringText,
  CommonButton,
  NoticeText
} from "styles/CommonStyle";
import {
  SignUpContainer,
  SignUpBox,
  SignUpSet,
  SignUpInput
} from "styles/SignUpStyle";

export default function FindIdCertificationScreen(props: any) {
  const route = useRouter();

  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");

  const [isCorrectEmailForm, setIsCorrectEmailForm] = useState(false);
  const [isCorrectCode, setIsCorrectCode] = useState(false);

  /**
   * 본인인증 코드 확인 버튼 이벤트 해금용도
   * 버튼을 누르면 true로 변경
   */
  const [isSendCode, setIsSendCode] = useState(false);
  const mockCode = "111111";

  /**
   * 다음 단계 실행전 필수값 확인
   * @returns
   */
  function checkDataForNextStep() {
    if (!isCorrectEmailForm) {
      alert("올바른 이메일을 입력해주세요.");

      return;
    } else if (!isCorrectCode) {
      alert("이메일 인증을 진행해주세요.");
      return;
    }
    sendNicknameToEmail(email);
    props.setStep(1);
  }

  /**
   * 본인인증 코드 검증
   * @returns
   */
  const checkCode = () => {
    // if (code === mockCode) {
    //   setIsCorrectCode(true);
    //   return;
    // }
    checkMailCode(email, code).then((res: any) => {
      console.log("res :>> ", res);
      if (res === "correct") {
        setIsCorrectCode(true);
        return;
      } else {
        setIsCorrectCode(false);
        return;
      }
    });
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

  useEffect(() => {
    setIsCorrectEmailForm(emailRegex.test(email));
    return () => {};
  }, [email]);

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

  /**
   * 이메일 정규식
   * [영문자+숫자]@[영문자].ac.kr
   */
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.ac\.kr$/;

  /**
   * 이메일 코드 발사 핸들링 함수
   * @email 입력한 이메일
   * @returns
   */
  function handleEmailCode(email: string) {
    if (isCorrectEmailForm) {
      sendMailCode(email).then(() => {
        setIsSendCode(true);
        setIsCorrectCode(false);
        handleResendClick();
      });
    } else {
      return;
    }
  }

  return (
    <SignUpContainer>
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
            value={email}
            onChange={(event) => {
              setIsCorrectCode(false);
              setEmail(event.target.value);
            }}
          />
          <CommonButton
            $width="150px"
            $height="100%"
            $backGround={isCorrectEmailForm ? "#accdf3" : "#fff"}
            $border="1px solid #000"
            $margin="0 0 0 30px"
            onClick={() => {
              handleEmailCode(email);
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
        <NoticeText $margin="10px 0 0 0">
          📢 학교 메일 서버에 따라 전송시간이 지연될 수 있습니다. (30초 ~ 1분)
        </NoticeText>
        {email.length != 0 && !isCorrectEmailForm && (
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
              setCode(event.target.value);
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
