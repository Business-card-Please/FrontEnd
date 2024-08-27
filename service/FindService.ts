import { AxiosMain } from "./AxiosConfig";

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
