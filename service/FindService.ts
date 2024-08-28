import { AxiosMain } from "./AxiosConfig";

/**
 *  이메일로 아이디(닉네임) 보내기(찾기)
 * @param email 이메일
 * @returns
 */
export const sendNicknameToEmail = async (email: string) => {
  try {
    const result = await AxiosMain.post("/account/find/nickname", {
      email: email
    });
    return result.status;
  } catch (error: any) {
    console.log("err :>> ", error);

    return error.response.status;
  }
};

/**
 *  닉네임 기반으로 비밀번호 재설정
 * @param nickname 닉네임
 * @param password 새로 정한 비번
 * @returns
 */
export const setNewPasswordWithNickName = async (
  nickname: string,
  newPassword: string
) => {
  try {
    const result = await AxiosMain.post("/account/reset/pw", {
      nickname: nickname,
      newPassword: newPassword
    });
    return result.status;
  } catch (err) {
    console.log("err :>> ", err);
  }
};
