import { AxiosMain } from "./AxiosConfig";

/**
 * 새 게시글 작성
 * @param title 제목
 * @param lecture  강의명
 * @param department 전공
 * @param content 내용
 * @returns 
 */
export const postContent = async (
  title: string,
  lecture: string,
  department: string,
  content: string
) => {
  try {
    const result = await AxiosMain.post("/rentalboard/create", {
      title: title,
      lecture: lecture,
      department: department,
      content: content
    });
    console.log("result :>> ", result);
    return result;
  } catch (error: any) {
    console.log("err :>> ", error);

    throw error;
  }
};

export const modifyContent = async () => {};
