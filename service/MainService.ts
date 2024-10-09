import { AxiosMain } from "./AxiosConfig";

/**
 * 게시글 조회 api
 * @param
 * @returns
 */
export const getMainBoardData = async (
  dateTime: string,
  size: number,
  type: string,
  data: string,
  department1: string,
  department2: string
) => {
  try {
    console.log("repuset :>>", dateTime, size, department1, department2);
    const result = await AxiosMain.post("/rentalboard/select", {
      datetime: dateTime,
      size: Number(size),
      type: type,
      data: data,
      department1: department1,
      department2: department2
    });
    console.log("result :>> ", result);
    return result;
  } catch (error: any) {
    console.log("err :>> ", error);

    return error;
  }
};
