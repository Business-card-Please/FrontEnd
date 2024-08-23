import { LoginInterface } from "@type/LoginType";
import { AxiosMain } from "./AxiosConfig";

export const loginWithData = async (data: LoginInterface) => {
  try {
    await AxiosMain.post("/account/login", {
      email: data.email,
      password: data.password
    });
  } catch (err) {
    console.log("err :>> ", err);
  }
};
