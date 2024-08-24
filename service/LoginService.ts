import { LoginInterface } from "@type/LoginType";
import { AxiosMain } from "./AxiosConfig";

export const loginWithData = async (data: LoginInterface) => {
  try {
    const result = await AxiosMain.post("/account/login", {
      email: data.email,
      password: data.password
    });
    return result.status;
  } catch (error: any) {
    return error.response.status;
  }
};
