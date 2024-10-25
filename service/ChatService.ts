import { AxiosMain } from "./AxiosConfig";

export const getChattingRoomList = async (nickname: string) => {
  try {
    const result = await AxiosMain.get("/chat/room/list", {
      params: { nickname: nickname }
    });
    return result;
  } catch (error: any) {
    console.log("err :>> ", error);

    throw error;
  }
};
