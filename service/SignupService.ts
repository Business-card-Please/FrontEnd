import { SignUpInterface } from "@type/SignupTypes";
import { AxiosMain } from "./AxiosConfig";
/**
 * DEV API
 * DB 회원 이메일 조회
 */
export const getEmailList = async () => {
  await AxiosMain.post("/dev/select-accounts")
    .then((res) => {
      console.log("res :>> ", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("err :>> ", err);
      return;
    });
};

/**
 * 회원 가입에서 입력한 이메일로 코드 전송
 * @param email 이메일
 * @returns
 */
export const sendMailCode = async (email: string) => {
  try {
    const result = await AxiosMain.post("/account/generate-authcode", {
      email: email
    });
    console.log("result :>> ", result.data);
    return;
  } catch (err) {
    console.log("err :>> ", err);
    return;
  }
};

/**
 * 회원 가입에서 전달받은 코드 확인
 * @param email 이메일
 * @param authCode 전달 받은 코드
 * @returns
 */
export const checkMailCode = async (email: string, authCode: string) => {
  try {
    const result = await AxiosMain.post("/account/authcode", {
      email: email,
      authCode: authCode
    }).then((res) => {
      console.log("res :>> ", res.status, res.data);
      return res.data;
    });
    return result.data;
  } catch (err) {
    console.log("err :>> ", err);
    return;
  }
};

/**
 * 회원 가입 요청
 * @param data 회원 가입 페이지에 존재하는 state
 */
export const doSignUp = async (data: SignUpInterface) => {
  try {
    const result = await AxiosMain.post("/account/registration", {
      email: data.email,
      collegeName: data.uniName,
      password: data.pw,
      name: data.name,
      nickname: data.nickName,
      grade: Number(data.grade),
      department1: data.grade,
      department2: null,
      keywords: data.keywords
    });
    return result.data;
  } catch (err) {
    console.log("err :>> ", err);
  }
};
