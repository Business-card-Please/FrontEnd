import axios from "axios";

/**
 *  DEV_MAIN_API -> IP를 이용한 통신
 *  LOCAL_MAIN_API -> localhost 통신
 */
const baseURL = `${process.env.NEXT_PUBLIC_DEV_MAIN_API}/api`;

export const AxiosMain = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});
