import { AxiosMain } from "./AxiosConfig";

/**
 *
 * @param
 * @returns
 */
export const getBoardData = async (
  dateTime: string,
  size: number,
  type: string,
  data: string
) => {
  try {
    const result = await AxiosMain.post("/rentalboard/select", {
      dateTime: dateTime,
      size: size,
      type: "default",
      data: "-"
    });
    return result;
  } catch (error: any) {
    console.log("err :>> ", error);

    return error.response.status;
  }
};
