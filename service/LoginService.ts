import { LoginInterface } from "@type/LoginType";
import { AxiosMain } from "./AxiosConfig";

export const loginWithData = async (data: LoginInterface) => {
  try {
    const result = await AxiosMain.post("/account/login", {
      nickname: data.nickname,
      password: data.password
    });
    return result;
  } catch (error: any) {
    return error.response.status;
  }
};
